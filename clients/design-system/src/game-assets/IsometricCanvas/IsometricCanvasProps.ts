import { IsometricCanvasVariant } from './IsometricCanvasVariant';
import { SpriteMapRegistry } from './SpriteMapRegistry';
import { Dialogue } from './Dialogue.type';

export type IsometricCanvasProps = {
  grid: string[][][];
  spriteMapRegistry: SpriteMapRegistry;
  cameraPosition: { x: number; y: number; z: number };
  variant?: IsometricCanvasVariant;
  dialogues?: Dialogue[];
};
