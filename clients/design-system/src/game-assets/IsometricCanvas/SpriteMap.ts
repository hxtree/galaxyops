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

  // TODO: determine columns, tileWidth, and tileHeight from the imageSrc name
  parseFilename(filename: string): {
    columns: number;
    tileWidth: number;
    tileHeight: number;
  } {
    const [columns, tileWidth, tileHeight] = filename
      .split('_')[1]
      .split('x')
      .map(value => parseInt(value, 10));

    return {
      columns,
      tileWidth,
      tileHeight,
    };
  }

  load({
    imageSrc,
    columns,
    tileWidth,
    tileHeight,
  }: {
    imageSrc: string;
    columns: number;
    tileWidth: number;
    tileHeight: number;
  }): Promise<HTMLImageElement> {
    this.columns = columns;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.imageSrc = imageSrc;

    return new Promise((resolve, reject) => {
      this.image = new Image();
      this.image.onload = () => {
        // this.columns = this.image.width / this.tileWidth;
        resolve(this.image);
      };

      this.image.onerror = () => {
        reject(new Error('Image failed to load'));
      };
      this.image.src = this.imageSrc;
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
