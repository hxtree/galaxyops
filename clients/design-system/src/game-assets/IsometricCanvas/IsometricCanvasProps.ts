import { IsometricCanvasVariant } from './IsometricCanvasVariant';

export type IsometricCanvasProps = {
  grid: number[][][];
  spriteMapSrc: string;
  spriteMapColumns: number;
  cameraPosition: { x: number; y: number; z: number };
  variant: IsometricCanvasVariant;
};
