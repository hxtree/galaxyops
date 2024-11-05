import { Coordinate2D, Coordinate3D } from '../types/Coordinates.type';
import { GRID_WIDTH } from './GridDimensions';
import { gridToCanvasCoordinate } from './IsometricTransformer';
import SpriteMap from '../draw/SpriteMap';
import { drawDiamond } from '../draw/DrawDiamond';
import { SpriteMapRegistry } from '../types/SpriteMapRegistry.type';
import { drawDialogue } from '../draw/DrawDialogue';
import { Dialogue } from '../types/Dialogue.type';
import { drawCoordinates } from '../draw/DrawCoordinates';
import { Actor } from '../types/Actor.type';
import { kebabCase } from 'lodash';

export class IsometricRender {
  private tilesRendered: number = 0;

  cameraPosition: Coordinate3D;

  private _grid: string[][][];
  private _actors: Actor[];
  private _spriteMaps: { [key: string]: SpriteMap } = {};
  private _dialogues: Dialogue[] = [];

  private _width: number;
  private _height: number;
  private _cursorCoordinate: Coordinate2D;
  private _cameraCoordinates: Coordinate3D;

  private _drawCoordinates: boolean = false;

  constructor(options: Partial<IsometricRender> = {}) {
    Object.assign(this, {}, options);

    // load global sprite maps
    const spriteMapRegistry: SpriteMapRegistry = {};
    spriteMapRegistry['shadow'] = './game-assets/sprites/shadow-1x1.png';
    this.loadSpriteMaps(spriteMapRegistry);
  }

  async loadSpriteMaps(spriteMapRegistry: SpriteMapRegistry) {
    const loadPromises: Promise<HTMLImageElement>[] = [];

    for (const key in spriteMapRegistry) {
      const filename = spriteMapRegistry[key];

      this._spriteMaps[key] = new SpriteMap();
      const load = this._spriteMaps[key].load(filename);
      loadPromises.push(load);
    }

    await Promise.all(loadPromises);
  }

  set drawCoordinates(drawCoordinates: boolean) {
    this._drawCoordinates = drawCoordinates;
  }

  set dialogues(dialogues: Dialogue[] | undefined) {
    this._dialogues = dialogues ?? [];
  }

  set grid(grid: string[][][]) {
    this._grid = grid;
  }

  set actors(actors: Actor[]) {
    this._actors = actors;

    // load actors sprite maps
    this._actors.forEach(actor => {
      if (!actor.spriteMapRegistry) {
        return;
      }

      const actorSpriteMapRegistry: SpriteMapRegistry = {};

      for (const key in actor.spriteMapRegistry) {
        const spriteMapRegistryId = kebabCase(`${actor.actorId}-${key}`);
        const spriteMapRegistryValue = actor.spriteMapRegistry[key];

        // check if sprite map is already loaded
        if (this._spriteMaps[spriteMapRegistryId]) {
          continue;
        }
        actorSpriteMapRegistry[spriteMapRegistryId] = spriteMapRegistryValue;
      }

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

  private renderText(ctx: CanvasRenderingContext2D) {
    // TODO inky support and options
    this._dialogues.forEach(dialogue => {
      let actorPosition = { x: 0, y: 0, z: 0 };
      let actorsHeight = 80;

      this._actors.forEach((actor: Actor) => {
        if (actor.actorId == dialogue.actorId) {
          actorPosition = actor.position;
          if (actor.height) {
            actorsHeight = actor.height;
          }
        }
      });

      const coordinates = gridToCanvasCoordinate(
        actorPosition,
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

            if (!value || value === '0') continue;

            const result = this.splitSpriteId(value);

            if (!result || !result.spriteMapId || !result.spriteId) {
              console.error('Invalid sprite id', value);
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
              this._spriteMaps[result.spriteMapId].tags.includes('wall') &&
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

            this.renderTile(ctx, result.spriteMapId, result.spriteId, {
              x,
              y,
              z,
            });

            if (this._actors) {
              this._actors.forEach((actor: Actor) => {
                if (
                  actor.position.z !== z ||
                  actor.position.y !== y ||
                  actor.position.x !== x
                ) {
                  return;
                }

                this._spriteMaps['shadow'].draw(
                  ctx,
                  1,
                  {
                    x: vectors.right.x - (vectors.right.x - vectors.left.x),
                    y: vectors.top.y - 17,
                  },
                  0.618,
                );

                const actorSpriteMapId = kebabCase(
                  `${actor.actorId}-${actor.animationState?.currentAnimation || 'idle'}`,
                );

                this._spriteMaps[actorSpriteMapId].draw(ctx, 1, {
                  x: vectors.right.x - (vectors.right.x - vectors.left.x),
                  y: vectors.top.y - 17,
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
  } | null {
    const regex = /^([a-zA-Z]+)(\d+)$/;
    const match = input.match(regex);

    if (!match) {
      return null;
    }

    return {
      spriteMapId: match[1],
      spriteId: parseInt(match[2], 10),
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
