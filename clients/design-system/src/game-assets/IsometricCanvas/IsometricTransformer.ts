import { Coordinate3D, Coordinate2D } from './types/Coordinates.type';
import { SPRITE_WIDTH, SPRITE_HEIGHT, SPRITE_DEPTH } from './SpriteDimensions';
import { TILE_WIDTH } from './TileDimensions';

// Transformation matrix components for isometric projection
const ISO_VECTOR_I_X = 1;
const ISO_VECTOR_I_Y = 0.5;
const ISO_VECTOR_J_X = -1;
const ISO_VECTOR_J_Y = 0.5;

/**
 * Converts tile coordinates to screen coordinates using isometric projection.
 */
export function gridToCanvasCoordinate(
  coordinate: Coordinate3D,
  cameraOffset: Coordinate2D,
) {
  const w = TILE_WIDTH;
  const h = TILE_WIDTH * 0.5;
  const d = SPRITE_DEPTH;

  const screenCoordinate2D = {
    x:
      (coordinate.x + 0) * ISO_VECTOR_I_X * 0.5 * SPRITE_WIDTH +
      (coordinate.y + 0) * ISO_VECTOR_J_X * 0.5 * SPRITE_WIDTH +
      cameraOffset.x,
    y:
      (coordinate.x + 0) * ISO_VECTOR_I_Y * 0.5 * SPRITE_HEIGHT +
      (coordinate.y + 0) * ISO_VECTOR_J_Y * 0.5 * SPRITE_HEIGHT -
      d * (coordinate.z - 1) +
      cameraOffset.y,
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

/**
 * Inverts a 2D transformation matrix.
 */
export function invertMatrix(
  a: number,
  b: number,
  c: number,
  d: number,
): { a: number; b: number; c: number; d: number } {
  const determinant = 1 / (a * d - b * c);

  return {
    a: determinant * d,
    b: determinant * -b,
    c: determinant * -c,
    d: determinant * a,
  };
}

/**
 * Converts screen coordinates back to grid coordinates using the inverse of the isometric transformation.
 */
export function canvasToGridCoordinate(
  screen: Coordinate2D,
  cameraOffset: Coordinate2D,
): Coordinate2D {
  const matrixA = ISO_VECTOR_I_X * 0.5 * SPRITE_WIDTH;
  const matrixB = ISO_VECTOR_J_X * 0.5 * SPRITE_WIDTH;
  const matrixC = ISO_VECTOR_I_Y * 0.5 * SPRITE_HEIGHT;
  const matrixD = ISO_VECTOR_J_Y * 0.5 * SPRITE_HEIGHT;

  const inverseMatrix = invertMatrix(matrixA, matrixB, matrixC, matrixD);

  const screenX = screen.x - cameraOffset.x;
  const screenY = screen.y - cameraOffset.y;

  // TODO cameraOffset properly implemented
  return {
    x: screenX * inverseMatrix.a + screenY * inverseMatrix.b + 4,
    y: screenX * inverseMatrix.c + screenY * inverseMatrix.d + 3,
  };
}
