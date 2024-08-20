import { TileProps } from './TileProps';

// does it make more sense to use a canvases for rendering tiles?
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
const TILE_WIDTH = 46;
const TILE_HEIGHT = 36;
const TILE_X_OFFSET = 22;
const TILE_Y_OFFSET = 11;
const POSITION_X_OFFSET = 500;
const POSITION_Y_OFFSET = 0;

export const Tile: React.FC<TileProps> = ({ tileset, position, tileData }) => {
  // Calculate the source position based on tileIndex
  const sourceX = TILE_WIDTH * tileData.x - TILE_WIDTH;
  const sourceY = TILE_HEIGHT * tileData.y - TILE_HEIGHT;
  const positionX =
    TILE_X_OFFSET * position.x +
    POSITION_X_OFFSET -
    (TILE_X_OFFSET * position.y - 1);
  const positionY =
    TILE_Y_OFFSET * position.x +
    POSITION_Y_OFFSET +
    (TILE_Y_OFFSET * position.y - 1);

  const style: React.CSSProperties = {
    width: `${TILE_WIDTH}px`,
    height: `${TILE_HEIGHT}px`,
    backgroundImage: `url(${tileset})`,
    backgroundPosition: `-${sourceX}px -${sourceY}px`,
    position: 'absolute',
    left: `${positionX}px`,
    top: `${positionY}px`,
  };

  return <div style={style} />;
};

export default Tile;
