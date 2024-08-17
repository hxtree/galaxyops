import { TileMapVariant } from './TileMapVariant';

export type TileMapProps = {
  map: number[][][];
  tileset: string;
  cameraPosition: { x: number; y: number; z: number };
  variant: TileMapVariant;
};
