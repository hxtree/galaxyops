import { Coordinate2D, Coordinate3D } from './Coordinates.type';
import { TILE_WIDTH } from './TileDimensions';
import { invertMatrix } from './IsometricTransformer';
import SpriteMap from './SpriteMap';
import { SPRITE_DEPTH } from './SpriteDimensions';

interface Axis {
  x: {
    x: number;
    y: number;
  };
  y: {
    x: number;
    y: number;
  };
}

export class IsometricRender {
  private tilesRendered: number = 0;
  private axis: Axis = {
    x: { x: 1, y: 0.5 },
    y: { x: -1, y: 0.5 },
  };

  get tileHeight(): number {
    return TILE_WIDTH * 0.5;
  }

  cameraPosition: Coordinate3D;
  _grid: number[][][];
  _spriteMap: SpriteMap;

  _width: number;
  _height: number;

  drawCoordinates: boolean = false;

  constructor(options: Partial<IsometricGrid> = {}) {
    Object.assign(this, {}, options);
  }

  set spriteMap(spriteMap: SpriteMap) {
    this._spriteMap = spriteMap;
  }

  set grid(grid: number[][][]) {
    this._grid = grid;
  }

  set width(width: number) {
    this._width = Math.floor(width);
  }

  set height(height: number) {
    this._height = Math.floor(height);
  }

  render(ctx: CanvasRenderingContext2D) {
    this.renderGrid(ctx);
  }

  screenToGridCoordinate(screen: { x: number; y: number }): Coordinate2D {
    const a = this.axis.x.x * 0.5 * TILE_WIDTH;
    const b = this.axis.y.x * 0.5 * TILE_WIDTH;
    const c = this.axis.x.y * 1 * this.tileHeight;
    const d = this.axis.y.y * 1 * this.tileHeight;
    const inv = invertMatrix(a, b, c, d);

    const offset = this.cameraPosition;

    return {
      x: Math.floor(
        (screen.x - this._width / 2) * inv.a +
          (screen.y - this._height / 2) * inv.b +
          offset.x,
      ),
      y: Math.floor(
        (screen.x - this._width / 2) * inv.c +
          (screen.y - this._height / 2) * inv.d +
          offset.y,
      ),
    };
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

  private gridToScreenCoordinate(gridCoordinate: Coordinate3D) {
    const w = TILE_WIDTH;
    const h = this.tileHeight;
    const d = SPRITE_DEPTH;
    const center = {
      x: this._width / 2,
      y: this._height / 3,
    };

    const offset = {
      x: center.x + this.cameraPosition.x,
      y: center.y + this.cameraPosition.y,
    };

    const screenCoordinate2D = {
      x:
        gridCoordinate.x * this.axis.x.x * 0.5 * w +
        gridCoordinate.y * this.axis.y.x * 0.5 * w +
        offset.x,
      y:
        gridCoordinate.x * this.axis.x.y * 1 * h +
        gridCoordinate.y * this.axis.y.y * 1 * h +
        offset.y -
        d * (gridCoordinate.z - 1),
    };

    return {
      top: { x: screenCoordinate2D.x, y: screenCoordinate2D.y },
      right: {
        x: screenCoordinate2D.x + w / 2,
        y: screenCoordinate2D.y + h / 2,
      },
      bottom: { x: screenCoordinate2D.x, y: screenCoordinate2D.y + h },
      left: {
        x: screenCoordinate2D.x - w / 2,
        y: screenCoordinate2D.y + h / 2,
      },
    };
  }

  private renderTile(
    ctx: CanvasRenderingContext2D,
    spriteId: number,
    grid: { x: number; y: number; z: number },
  ) {
    const vectors = this.gridToScreenCoordinate({
      x: grid.x,
      y: grid.y,
      z: grid.z,
    });

    this._spriteMap.drawTile(ctx, {
      position: { x: vectors.left.x, y: vectors.left.y },
      spriteId: spriteId,
    });

    if (this.drawCoordinates) {
      ctx.font = '8px Courier';
      ctx.textAlign = 'center';
      ctx.fillText(
        `${grid.x},${grid.y}`,
        vectors.left.x + (vectors.right.x - vectors.left.x) / 2,
        vectors.left.y + (vectors.bottom.y - vectors.top.y) / 2,
        vectors.right.x - vectors.left.x,
      );
    }

    this.tilesRendered++;
  }
}
