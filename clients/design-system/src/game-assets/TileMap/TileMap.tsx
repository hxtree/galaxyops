import { TileMapProps } from './TileMapProps';
import { Tile } from '../Tile/Tile';

export const TileMap = (props: TileMapProps) => {
  return (
    <>
      {props.map.map((layerArray: (number | null)[][], layerIndex: number) =>
        layerArray.map((columnArray: (number | null)[], columnIndex: number) =>
          columnArray.map((spriteId: number | null, rowIndex: number) => {
            if (spriteId === null) return null;
            return (
              <Tile
                tileset={props.tileset}
                columns={props.columns}
                key={`${layerIndex}-${columnIndex}-${rowIndex}`}
                spriteId={spriteId}
                position={{
                  x: rowIndex + 1,
                  y: columnIndex + 1,
                  z: layerIndex,
                }}
              />
            );
          }),
        ),
      )}
    </>
  );
};

export default TileMap;
