import { IsometricCanvasVariant } from './IsometricCanvasVariant';
import { SpriteMapRegistry } from './SpriteMapRegistry';

export type IsometricCanvasProps = {
  grid: string[][][];
  spriteMapRegistry: SpriteMapRegistry;
  cameraPosition: { x: number; y: number; z: number };
  variant?: IsometricCanvasVariant;
};
