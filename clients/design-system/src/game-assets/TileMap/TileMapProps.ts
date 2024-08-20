import { TileMapVariant } from './TileMapVariant';

export type TileMapProps = {
  map: number[][][];
  tileset: string;
  columns: number;
  cameraPosition: { x: number; y: number; z: number };
  variant: TileMapVariant;
};
