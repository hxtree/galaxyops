interface Position {
  x: number;
  y: number;
}

interface Tile {
  spriteId: number;
  position: Position;
}

class SpriteMap {
  private image: HTMLImageElement;
  private imageSrc: string;
  private columns: number;
  private tileWidth: number;
  private tileHeight: number;

  constructor({
    imageSrc,
    columns,
    tileWidth,
    tileHeight,
  }: {
    imageSrc: string;
    columns: number;
    tileWidth: number;
    tileHeight: number;
  }) {
    this.columns = columns;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.imageSrc = imageSrc;
  }

  load(): Promise<void> {
    this.image = new Image();
    this.image.src = this.imageSrc;

    return new Promise((resolve, reject) => {
      this.image.onload = () => resolve();
      this.image.onerror = () => reject(new Error('Image failed to load'));
    });
  }

  drawTile(ctx: CanvasRenderingContext2D, tile: Tile): void {
    const { spriteId, position } = tile;

    // Return if spriteId is 0
    if (spriteId === 0) return;

    // Calculate the sprite position on the tileset
    const spriteMapX = (spriteId - 1) % this.columns;
    const spriteMapY = Math.floor((spriteId - 1) / this.columns);

    // Calculate the source position and size
    const sourceX = this.tileWidth * spriteMapX;
    const sourceY = this.tileHeight * spriteMapY;
    const sourceWidth = this.tileWidth;
    const sourceHeight = this.tileHeight;

    // Calculate the destination position and size
    const destX = position.x;
    const destY = position.y;
    const destWidth = this.tileWidth;
    const destHeight = this.tileHeight;

    // Draw the image on the canvas
    ctx.drawImage(
      this.image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      destX,
      destY,
      destWidth,
      destHeight,
    );
  }
}

export default SpriteMap;
