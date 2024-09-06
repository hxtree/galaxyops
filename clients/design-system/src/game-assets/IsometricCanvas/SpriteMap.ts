interface Position {
  x: number;
  y: number;
}

interface Tile {
  spriteId: number;
  position: Position;
}

class SpriteMap {
  private filename: string;
  private columns: number;
  private tileWidth: number;
  private tileHeight: number;
  private image: HTMLImageElement;

  // Parse the filename to get tile dimensions
  private parseFilename(filename: string): {
    tileWidth: number;
    tileHeight: number;
  } {
    // Extract the base filename from the path
    const baseFilename = filename.split('/').pop() || '';

    // Regex to parse the tile dimensions
    const regex =
      /^(?<name>[a-zA-Z0-9_+-]+)-(?<tileWidth>\d+)x(?<tileHeight>\d+)\.png$/;
    const match = baseFilename.match(regex);

    if (match && match.groups) {
      const { tileWidth, tileHeight } = match.groups;
      return {
        tileWidth: parseInt(tileWidth, 10),
        tileHeight: parseInt(tileHeight, 10),
      };
    }

    throw new Error('Invalid filename format');
  }

  load(filename: string): Promise<HTMLImageElement> {
    const { tileWidth, tileHeight } = this.parseFilename(filename);
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.filename = filename;

    return new Promise((resolve, reject) => {
      this.image = new Image();
      this.image.onload = () => {
        // Infer the number of columns based on the image size
        this.columns = Math.floor(this.image.width / this.tileWidth);

        resolve(this.image);
      };

      this.image.onerror = () => {
        reject(new Error('Image failed to load'));
      };
      this.image.src = this.filename;
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
