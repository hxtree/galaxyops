import { TileMapProps } from './TileMapProps';
import { Tile } from '../Tile/Tile';
import { toScreenCoordinate } from './isometric-tranformer';

export const TileMap = (props: TileMapProps) => {
  return (
    <>
      {props.map.map((layerArray: number[][], layerIndex: number) =>
        layerArray.map((columnArray: number[], columnIndex: number) =>
          columnArray.map((spriteId: number, rowIndex: number) => {
            if (spriteId === 0) return null;

            const { x, y } = toScreenCoordinate({
              x: rowIndex,
              y: columnIndex,
              z: layerIndex,
            });

            return (
              <Tile
                tileset={props.tileset}
                columns={props.columns}
                key={`${layerIndex}-${columnIndex}-${rowIndex}`}
                spriteId={spriteId}
                position={{
                  x: x,
                  y: y,
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
