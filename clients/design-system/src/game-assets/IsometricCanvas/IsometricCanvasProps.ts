import { IsometricCanvasVariant } from './IsometricCanvasVariant';

export type IsometricCanvasProps = {
  grid: number[][][];
  spriteMapSrc: string;
  cameraPosition: { x: number; y: number; z: number };
  variant: IsometricCanvasVariant;
};
