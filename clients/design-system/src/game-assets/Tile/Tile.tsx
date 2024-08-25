import { TileProps } from './TileProps';
import { TILE_WIDTH, TILE_HEIGHT } from './TileDimensions';

export const Tile: React.FC<TileProps> = ({
  tileset,
  position,
  columns,
  spriteId,
}) => {
  if (spriteId === 0) {
    return null;
  }

  // Calculate the sprite position on the tileset
  const spriteMapX = ((spriteId - 1) % columns) + 1;
  const spriteMapY = Math.floor((spriteId - 1) / columns) + 1;

  // Calculate the source position based on tileIndex
  const sourceX = TILE_WIDTH * spriteMapX - TILE_WIDTH;
  const sourceY = TILE_HEIGHT * spriteMapY - TILE_HEIGHT;

  const style: React.CSSProperties = {
    width: `${TILE_WIDTH}px`,
    height: `${TILE_HEIGHT}px`,
    backgroundImage: `url(${tileset})`,
    backgroundPosition: `-${sourceX}px -${sourceY}px`,
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return <div style={style} />;
};

export default Tile;
