import { IsometricCanvasVariant } from './types/IsometricCanvasVariant.type';
import { SpriteMapRegistry } from './types/SpriteMapRegistry.type';
import { Dialogue } from './types/Dialogue.type';
import { BackgroundColor } from './types/BackgroundColor.type';

export type IsometricCanvasProps = {
  grid: string[][][];
  spriteMapRegistry: SpriteMapRegistry;
  cameraPosition: { x: number; y: number; z: number };
  variant?: IsometricCanvasVariant;
  dialogues?: Dialogue[];
  properties?: {
    backgroundColor?: BackgroundColor;
  };
};
