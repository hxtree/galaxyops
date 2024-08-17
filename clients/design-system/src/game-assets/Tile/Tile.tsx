import { TileProps } from './TileProps';

// does it make more sense to use a canvases for rendering tiles?
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
const TILE_WIDTH = 46;
const TILE_HEIGHT = 36;

export const Tile: React.FC<TileProps> = ({ tileset, position, tileData }) => {
  // Calculate the source position based on tileIndex
  const sourceX = TILE_WIDTH * tileData.x - TILE_WIDTH;
  const sourceY = TILE_HEIGHT * tileData.y - TILE_HEIGHT;
  const positionX = TILE_WIDTH * position.x;
  const positionY = TILE_HEIGHT * position.y;

  const style: React.CSSProperties = {
    width: `${TILE_WIDTH}px`,
    height: `${TILE_HEIGHT}px`,
    backgroundImage: `url(${tileset})`,
    border: '1px solid black',
    backgroundPosition: `-${sourceX}px -${sourceY}px`,
    position: 'absolute',
    left: `${positionY}px`,
    top: `${positionX}px`,
  };

  return <div style={style} />;
};

export default Tile;
