import { TileMapVariant } from './TileMapVariant';

export type TileMapProps = {
  map: (number | null)[][][];
  tileset: string;
  columns: number;
  cameraPosition: { x: number; y: number; z: number };
  variant: TileMapVariant;
};
