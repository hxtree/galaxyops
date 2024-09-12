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

  // TODO draw off canvas and then replace the canvas to reduce flickering

  private renderGrid(ctx: CanvasRenderingContext2D) {
    this.tilesRendered = 0;

    for (let z = 0; z < this._grid.length; z++) {
      for (let y = 0; y < this._grid[z].length; y++) {
        for (let x = 0; x < this._grid[z][y].length; x++) {
          const spriteId = this._grid[z][y][x];
          if (!spriteId) continue;
          this.renderTile(ctx, spriteId, { x: x, y: y, z: z });
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
    value: string,
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

    const result = this.splitSpriteId(value);

    if (!result || !result.spriteMapId || !result.spriteId) {
      console.error('Invalid sprite id', value);
      return;
    }

    // TODO find correct spriteMap using spriteMap legend
    this._spriteMaps[result.spriteMapId].drawTile(ctx, {
      position: { x: vectors.left.x, y: vectors.top.y },
      spriteId: result.spriteId,
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
