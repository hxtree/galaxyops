import { Coordinate3D, Coordinate2D } from './Coordinates.type';
import { SPRITE_WIDTH, SPRITE_HEIGHT, SPRITE_DEPTH } from './SpriteDimensions';

// Transformation matrix components for isometric projection
const ISO_VECTOR_I_X = 1;
const ISO_VECTOR_I_Y = 0.5;
const ISO_VECTOR_J_X = -1;
const ISO_VECTOR_J_Y = 0.5;

/**
 * Converts tile coordinates to screen coordinates using isometric projection.
 */
export function toScreenCoordinate(
  cameraPosition: Coordinate3D,
  tile: Coordinate3D,
): Coordinate2D {
  const scaledX =
    tile.x * ISO_VECTOR_I_X * 0.5 * SPRITE_WIDTH +
    tile.y * ISO_VECTOR_J_X * 0.5 * SPRITE_WIDTH;
  const scaledY =
    tile.x * ISO_VECTOR_I_Y * 0.5 * SPRITE_HEIGHT +
    tile.y * ISO_VECTOR_J_Y * 0.5 * SPRITE_HEIGHT -
    SPRITE_DEPTH * (tile.z - 1)!;

  return {
    x: scaledX + cameraPosition.x, // CAMERA_OFFSET_X,
    y: scaledY + cameraPosition.y, // CAMERA_OFFSET_Y,
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
export function toGridCoordinate(screen: Coordinate2D): Coordinate2D {
  const matrixA = ISO_VECTOR_I_X * 0.5 * SPRITE_WIDTH;
  const matrixB = ISO_VECTOR_J_X * 0.5 * SPRITE_WIDTH;
  const matrixC = ISO_VECTOR_I_Y * 0.5 * SPRITE_HEIGHT;
  const matrixD = ISO_VECTOR_J_Y * 0.5 * SPRITE_HEIGHT;

  const inverseMatrix = invertMatrix(matrixA, matrixB, matrixC, matrixD);

  return {
    x: screen.x * inverseMatrix.a + screen.y * inverseMatrix.b,
    y: screen.x * inverseMatrix.c + screen.y * inverseMatrix.d,
  };
}
