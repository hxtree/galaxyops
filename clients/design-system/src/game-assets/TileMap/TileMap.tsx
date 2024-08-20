import { TileMapProps } from './TileMapProps';
import { Tile } from '../Tile/Tile';

export const TileMap = (props: TileMapProps) => {
  return (
    <div>
      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 1 }}
        position={{ x: 1, y: 1, z: 0 }}
      />
      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 1 }}
        position={{ x: 2, y: 1, z: 0 }}
      />
      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 1 }}
        position={{ x: 3, y: 1, z: 0 }}
      />
      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 1 }}
        position={{ x: 4, y: 1, z: 0 }}
      />

      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 2 }}
        position={{ x: 1, y: 2, z: 0 }}
      />
      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 2 }}
        position={{ x: 2, y: 2, z: 0 }}
      />
      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 2 }}
        position={{ x: 3, y: 2, z: 0 }}
      />
      <Tile
        tileset={props.tileset}
        tileData={{ x: 1, y: 2 }}
        position={{ x: 4, y: 2, z: 0 }}
      />
    </div>
  );
};

export default TileMap;
