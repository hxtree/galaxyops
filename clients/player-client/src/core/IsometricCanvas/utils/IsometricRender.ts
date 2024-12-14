import { Coordinate2D, Coordinate3D } from '../types/Coordinates.type';
import { GRID_WIDTH } from './GridDimensions';
import { gridToCanvasCoordinate } from './IsometricTransformer';
import SpriteMap from '../draw/SpriteMap';
import { drawDiamond } from '../draw/DrawDiamond';
import { SpriteMapRecord } from '../../../dtos/SpriteMapRecord.dto';
import { drawDialogue } from '../draw/DrawDialogue';
import { drawCoordinates } from '../draw/DrawCoordinates';
import { kebabCase } from 'lodash';
import { Dialogue } from '../../../dtos/Dialogue.dto';
import { GridAnimation } from '../../../dtos/Grid/GridAnimation.dto';
import { Actor } from '../../../dtos/Actor/Actor.dto';
import { drawMeter } from '../draw/DrawMeter';
import { getPosition } from './getPosition';
import { GridField } from '../../../dtos/Grid/GridItem.dto';

export class IsometricRender {
  private tilesRendered: number = 0;

  cameraPosition: Coordinate3D;

  private _grid: GridField[][][];
  private _actors: Actor[];
  private _spriteMaps: { [key: string]: SpriteMap } = {};
  private _dialogues: Dialogue[] = [];

  private _width: number;
  private _height: number;
  private _cursorCoordinate: Coordinate2D;
  private _cameraCoordinates: Coordinate3D;

  private _drawCoordinates: boolean = false;
  private _gridAnimations: GridAnimation[];

  constructor(options: Partial<IsometricRender> = {}) {
    Object.assign(this, {}, options);

    // load global sprite maps
    const spriteMapRegistry = new SpriteMapRecord();
    spriteMapRegistry.id = 'shadow';
    spriteMapRegistry.url = './game-assets/sprites/shadow-1x1.png';
    this.loadSpriteMaps([spriteMapRegistry]);
  }

  async loadSpriteMaps(spriteMapRegistry: SpriteMapRecord[]) {
    const loadPromises: Promise<HTMLImageElement>[] = [];

    for (const spriteMapRecord of spriteMapRegistry) {
      this._spriteMaps[spriteMapRecord.id] = new SpriteMap();
      const load = this._spriteMaps[spriteMapRecord.id].load(
        spriteMapRecord.url,
      );
      loadPromises.push(load);
    }

    await Promise.all(loadPromises);
  }

  set gridAnimations(gridAnimations: GridAnimation[] | undefined) {
    this._gridAnimations = gridAnimations ?? [];
  }

  set drawCoordinates(drawCoordinates: boolean) {
    this._drawCoordinates = drawCoordinates;
  }

  set dialogues(dialogues: Dialogue[] | undefined) {
    this._dialogues = dialogues ?? [];
  }

  set grid(grid: GridField[][][]) {
    this._grid = grid;
  }

  set actors(actors: Actor[]) {
    this._actors = actors;
    this._actors.forEach(actor => {
      if (!actor.spriteMapRegistry) {
        return;
      }

      const actorSpriteMapRegistry = actor.spriteMapRegistry
        .map(spriteMapRecord => {
          const prefixedId = kebabCase(
            `${actor.actorId}-${spriteMapRecord.id}`,
          );
          if (!this._spriteMaps[prefixedId]) {
            const newRecord = new SpriteMapRecord();
            newRecord.id = prefixedId;
            newRecord.url = spriteMapRecord.url;
            return newRecord;
          }
          return null;
        })
        .filter(record => record !== null) as SpriteMapRecord[];

      this.loadSpriteMaps(actorSpriteMapRegistry);
    });
  }

  set width(width: number) {
    this._width = Math.floor(width);
  }

  set height(height: number) {
    this._height = Math.floor(height);
  }

  set cursorCoordinate(coordinate: Coordinate2D) {
    this._cursorCoordinate = coordinate;
  }

  set cameraCoordinates(coordinate: Coordinate3D) {
    this._cameraCoordinates = coordinate;
  }

  render(
    offScreenCanvas: HTMLCanvasElement,
    visibleCtx: CanvasRenderingContext2D,
  ) {
    requestAnimationFrame(() => {
      const offScreenCtx = offScreenCanvas.getContext('2d');

      if (!offScreenCtx) {
        console.error('Off-screen context not initialized');
        return;
      }

      // draws to off-screen canvas
      this.renderGrid(offScreenCtx);

      this.renderText(offScreenCtx);

      // draws off-screen canvas to main canvas
      visibleCtx.clearRect(0, 0, this._width, this._height);

      // Draw the off-screen canvas to the visible canvas
      visibleCtx.drawImage(offScreenCanvas, 0, 0);
    });
  }

  private findActorById(actorId: string): Actor | undefined {
    return this._actors.find(actor => actor.actorId === actorId);
  }

  private findActorsByPosition(position: Coordinate3D): Actor[] {
    return this._actors.filter(
      actor =>
        actor.movement.renderPosition?.x === position.x &&
        actor.movement.renderPosition?.y === position.y &&
        actor.movement.renderPosition?.z === position.z,
    );
  }

  private renderText(ctx: CanvasRenderingContext2D) {
    // TODO inky support and options
    this._dialogues.forEach(dialogue => {
      let actorsHeight = 80;

      const actor = this.findActorById(dialogue.actorId);
      if (!actor) {
        return;
      }

      if (actor.height) {
        actorsHeight = actor.height;
      }

      const coordinates = gridToCanvasCoordinate(
        actor.position ?? { x: 0, y: 0, z: 0 },
        this.cameraOffset,
      );

      // TODO account for printing towards edges
      drawDialogue(
        ctx,
        coordinates.right.x - (coordinates.right.x - coordinates.left.x),
        coordinates.top.y - actorsHeight,
        dialogue.actorId,
        dialogue.text,
      );
    });
  }

  private renderGrid(ctx: CanvasRenderingContext2D) {
    this.tilesRendered = 0;

    // Find the maximum x, y, and z dimensions
    const maxZ = this._grid.length;
    const maxY = Math.max(...this._grid.map(level => level.length));
    const maxX = Math.max(...this._grid.flat().map(row => row.length));

    // Iterate over x, then y, then z
    for (let y = 0; y < maxY; y++) {
      for (let x = 0; x < maxX; x++) {
        for (let z = 0; z < maxZ; z++) {
          // Check if the current z and y level is valid for the current x
          if (
            this._grid[z] &&
            this._grid[z][y] &&
            x < this._grid[z][y].length
          ) {
            const value = this._grid[z][y][x];

            if (!value || !value.spriteMapId || !value.spriteId) {
              continue;
            }

            // TODO improve wall hiding logic
            // wall hiding logic
            const valuePrevX = x > 0 ? this._grid[z][y][x - 1] ?? 0 : 0; // const prevX
            const valuePrevY = y > 0 ? this._grid[z][y - 1][x] ?? 0 : 0; // const prevY
            const vectors = gridToCanvasCoordinate(
              {
                x: x,
                y: y,
                z: z,
              },
              this.cameraOffset,
            );

            if (
              this._spriteMaps[value.spriteMapId].tags.includes('wall') &&
              valuePrevY !== 0 &&
              valuePrevX !== 0
            ) {
              drawDiamond(
                ctx,
                vectors.right.x - GRID_WIDTH * 0.5,
                vectors.top.y,
                -GRID_WIDTH,
                -GRID_WIDTH * 0.5,
                ' rgba(160, 196, 225, 0.5)',
                ' rgba(160, 196, 225, 0.5)',
              );

              continue;
            }

            // if animated sprite, add current frame
            let currentSpriteId = value.spriteId;
            this._gridAnimations?.forEach(animation => {
              if (value.animationId === animation.id) {
                currentSpriteId += animation.currentFrame ?? 0;
              }
            });

            this.renderTile(ctx, value.spriteMapId, currentSpriteId, {
              x,
              y,
              z,
            });

            if (this._actors) {
              const actors = this.findActorsByPosition({ x, y, z });

              actors.forEach((actor: Actor) => {
                const position = getPosition(vectors);

                this._spriteMaps['shadow'].draw(ctx, 1, position, 0.618);

                const actorSpriteMapId = kebabCase(
                  `${actor.actorId}-${actor.animation?.currentAnimation || 'idle'}`,
                );

                this._spriteMaps[actorSpriteMapId].drawFrame(
                  ctx,
                  actor.animation.orientation,
                  actor.animation.currentFrame,
                  position,
                  1,
                );

                // TODO determine percent based on actor's health
                drawMeter(ctx, {
                  x: vectors.left.x,
                  y: vectors.top.y - 17 - (actor.height ?? 60),
                  percent: 50,
                });
              });
            }
          }
        }
      }
    }
  }

  get cameraOffset(): Coordinate2D {
    const center = {
      x: this._width / 2,
      y: this._height / 3,
    };

    return {
      x: center.x + (this._cameraCoordinates?.x || 0),
      y: center.y + (this._cameraCoordinates?.y || 0),
    };
  }

  splitSpriteId(input: string): {
    spriteMapId: string;
    spriteId: number;
    animationId?: string;
  } | null {
    const regex = /^([a-zA-Z-]+)(\d+)(?:_([a-zA-Z0-9-]+))?$/;
    const match = input.match(regex);

    if (!match) {
      return null;
    }

    return {
      spriteMapId: match[1],
      spriteId: parseInt(match[2], 10),
      animationId: match[3] || undefined,
    };
  }

  private renderTile(
    ctx: CanvasRenderingContext2D,
    spriteMapId: string,
    spriteId: number,
    grid: Coordinate3D,
  ) {
    const vectors = gridToCanvasCoordinate(
      {
        x: grid.x,
        y: grid.y,
        z: grid.z,
      },
      this.cameraOffset,
    );

    this._spriteMaps[spriteMapId].draw(ctx, spriteId, {
      x: vectors.left.x,
      y: vectors.top.y,
    });

    if (
      this._drawCoordinates &&
      this._spriteMaps[spriteMapId].tags.includes('debug-mark')
    ) {
      const fillText = `${grid.x},${grid.y}`;
      let active = false;
      if (
        grid.x == Math.floor(this._cursorCoordinate?.x) &&
        grid.y == Math.floor(this._cursorCoordinate?.y)
      ) {
        active = true;
      }
      drawCoordinates(
        ctx,
        vectors,
        this._spriteMaps[spriteMapId].spriteHeight,
        fillText,
        active,
      );
    }
    this.tilesRendered++;
  }
}
