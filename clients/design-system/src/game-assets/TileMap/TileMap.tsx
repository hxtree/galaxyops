import { TileMapProps } from './TileMapProps';
import { Tile } from '../Tile/Tile';

export const TileMap = (props: TileMapProps) => {
  return (
    <>
      {props.map.map((layerArray: number[][], layerIndex: number) =>
        layerArray.map((columnArray: number[], columnIndex: number) =>
          columnArray.map((spriteId: number, rowIndex: number) => (
            <Tile
              tileset={props.tileset}
              columns={props.columns}
              key={`${layerIndex}-${columnIndex}-${rowIndex}`}
              spriteId={spriteId}
              position={{ x: rowIndex + 1, y: columnIndex + 1, z: layerIndex }}
            />
          )),
        ),
      )}
    </>
  );
};

export default TileMap;
