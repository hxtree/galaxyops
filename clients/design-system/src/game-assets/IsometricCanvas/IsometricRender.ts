import { Coordinate2D, Coordinate3D } from './Coordinates.type';
import { TILE_WIDTH } from './TileDimensions';
import { gridToCanvasCoordinate } from './IsometricTransformer';
import SpriteMap from './SpriteMap';
import { drawDiamond } from './DrawDiamond';
import { SpriteMapRegistry } from './SpriteMapRegistry';

export class IsometricRender {
  private tilesRendered: number = 0;

  cameraPosition: Coordinate3D;

  private _grid: string[][][];
  private _spriteMaps: { [key: string]: SpriteMap } = {};

  private _width: number;
  private _height: number;
  private _cursorCoordinate: Coordinate2D;
  private _cameraCoordinates: Coordinate3D;

  private _drawCoordinates: boolean = false;

  constructor(options: Partial<IsometricRender> = {}) {
    Object.assign(this, {}, options);
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

  set grid(grid: string[][][]) {
    this._grid = grid;
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

      // draws off-screen canvas to main canvas
      visibleCtx.clearRect(0, 0, this._width, this._height);

      // Draw the off-screen canvas to the visible canvas
      visibleCtx.drawImage(offScreenCanvas, 0, 0);
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
                vectors.right.x - TILE_WIDTH * 0.5,
                vectors.top.y,
                -TILE_WIDTH,
                -TILE_WIDTH * 0.5,
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
      x: center.x + this._cameraCoordinates.x,
      y: center.y + this._cameraCoordinates.y,
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

    if (this._drawCoordinates) {
      drawDiamond(
        ctx,
        vectors.left.x,
        vectors.top.y,
        TILE_WIDTH,
        TILE_WIDTH * 0.5,
      );

      let fillText = `${grid.x},${grid.y}`;
      if (
        grid.x == this._cursorCoordinate?.x &&
        grid.y == this._cursorCoordinate?.y
      ) {
        fillText = 'active';
      }

      ctx.font = '8px Courier';
      ctx.textAlign = 'center';
      ctx.fillText(
        fillText,
        vectors.left.x + (vectors.right.x - vectors.left.x) / 2,
        vectors.top.y + (vectors.bottom.y - vectors.top.y) / 2,
        vectors.right.x - vectors.left.x,
      );
    }

    this.tilesRendered++;
  }
}
