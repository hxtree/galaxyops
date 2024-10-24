import { drawDiamond } from './DrawDiamond';
import { TILE_WIDTH } from './TileDimensions';

// TODO take into account the height of the sprite being drawn
export function drawCoordinates(
  ctx: CanvasRenderingContext2D,
  vectors: {
    top: {
      x: number;
      y: number;
    };
    right: {
      x: number;
      y: number;
    };
    bottom: {
      x: number;
      y: number;
    };
    left: {
      x: number;
      y: number;
    };
  },
  spriteHeight: number,
  fillText: string,
  active: boolean,
) {
  drawDiamond(
    ctx,
    vectors.top.x,
    vectors.top.y - spriteHeight + TILE_WIDTH * 0.5,
    -TILE_WIDTH,
    -(TILE_WIDTH * 0.5),
    active ? 'pink' : 'transparent',
    active ? 'black' : 'black',
  );

  ctx.font = '8px Courier';
  ctx.textAlign = 'center';
  ctx.fillStyle = active ? 'purple' : 'black';
  ctx.fillText(
    fillText,
    vectors.left.x,
    vectors.top.y +
      (vectors.top.y - vectors.bottom.y) / 2 -
      spriteHeight +
      TILE_WIDTH * 0.5,
    vectors.right.x - vectors.left.x,
  );
}
