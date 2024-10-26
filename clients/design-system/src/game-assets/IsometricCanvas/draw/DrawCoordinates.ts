import { drawDiamond } from './DrawDiamond';
import { GRID_WIDTH, GRID_HEIGHT, GRID_DEPTH } from '../GridDimensions';

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
    vectors.top.y - spriteHeight + GRID_WIDTH * 0.5,
    -GRID_WIDTH,
    -(GRID_WIDTH * 0.5),
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
      GRID_HEIGHT * 0.5 +
      GRID_DEPTH,
    vectors.right.x - vectors.left.x,
  );
}
