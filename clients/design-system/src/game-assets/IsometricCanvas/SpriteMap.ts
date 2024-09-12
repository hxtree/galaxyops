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
  private rows: number;
  // TODO: rename tile to sprite
  private tileWidth: number;
  private tileHeight: number;
  private image: HTMLImageElement;

  // Parse the filename to get tile dimensions
  private parseFilename(filename: string): {
    rows: number;
    columns: number;
  } {
    // Extract the base filename from the path
    const baseFilename = filename.split('/').pop() || '';
    // Regex to parse the tile dimensions
    const regex =
      /^(?<name>[a-zA-Z0-9_+-]+)-(?<columns>\d+)x(?<rows>\d+)\.png$/;
    const match = baseFilename.match(regex);

    if (match && match.groups) {
      const { columns, rows } = match.groups;
      return {
        columns: parseInt(columns, 10),
        rows: parseInt(rows, 10),
      };
    }

    throw new Error('Invalid filename format');
  }

  load(filename: string): Promise<HTMLImageElement> {
    const { rows, columns } = this.parseFilename(filename);
    this.rows = rows;
    this.columns = columns;
    this.filename = filename;

    return new Promise((resolve, reject) => {
      this.image = new Image();
      this.image.onload = () => {
        this.tileWidth = Math.floor(this.image.width / this.columns);
        this.tileHeight = Math.floor(this.image.height / this.rows);

        resolve(this.image);
      };

      this.image.onerror = () => {
        reject(new Error('Image failed to load'));
      };
      this.image.src = this.filename;
    });
  }

  // TODO rename draw or drawSprite
  drawTile(ctx: CanvasRenderingContext2D, tile: Tile): void {
    const { spriteId, position } = tile;

    if (spriteId === 0) return;

    // Calculate the sprite position on the sprintmap
    const spriteMapX = (spriteId - 1) % this.columns;
    const spriteMapY = Math.floor((spriteId - 1) / this.columns);

    // Calculate the source position and size
    const sourceX = this.tileWidth * spriteMapX;
    const sourceY = this.tileHeight * spriteMapY;
    const sourceWidth = this.tileWidth;
    const sourceHeight = this.tileHeight;

    // Calculate the destination position and size
    const destX = position.x;
    const destY = position.y - this.tileHeight;
    const destWidth = this.tileWidth;
    const destHeight = this.tileHeight;

    // Draw desired sprite on the canvas
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
