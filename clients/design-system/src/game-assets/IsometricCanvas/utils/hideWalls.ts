import { Direction } from '../types/Direction.type';

// TODO sprites are tagged with "wall" allowing rendering engine to automatically
// determine if it is a wall that needs to be hidden, this method is loosely fleshed
// in
export function hideWalls(
  grid: string[][][],
  cameraX: number,
  cameraY: number,
  direction: Direction,
): string[][][] {
  const layers = grid.length;
  const rows = grid[0].length;
  const cols = grid[0][0].length;

  const outputGrid: string[][][] = grid;

  // Update the output grid based on the direction
  for (let z = 0; z < layers; z++) {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const isWall = grid[z][y][x] === '1'; // Check if the cell is a wall (initially all `1`s)

        if (isWall) {
          switch (direction) {
            case Direction.NORTHWEST:
              if (y < cameraY && x < cameraX) outputGrid[z][y][x] = 'H'; // Hide walls NW of the camera
              break;
            case Direction.NORTHEAST:
              if (y < cameraY && x > cameraX) outputGrid[z][y][x] = 'H'; // Hide walls NE of the camera
              break;
            case Direction.SOUTHWEST:
              if (y > cameraY && x < cameraX) outputGrid[z][y][x] = 'H'; // Hide walls SW of the camera
              break;
            case Direction.SOUTHEAST:
              if (y > cameraY && x > cameraX) outputGrid[z][y][x] = 'H'; // Hide walls SE of the camera
              break;
          }
        }
      }
    }
  }

  return outputGrid;
}
