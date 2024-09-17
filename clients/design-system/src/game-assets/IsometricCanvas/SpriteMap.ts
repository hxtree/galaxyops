interface Position {
  x: number;
  y: number;
}

class SpriteMap {
  private filename: string;
  private columns: number;
  private rows: number;
  private spriteWidth: number;
  private spriteHeight: number;
  private _destOffsetX: number;
  private _destOffsetY: number;
  private image: HTMLImageElement;
  private _tags: string[];

  get tags(): string[] {
    return this._tags;
  }

  parseTags(filename: string): string[] {
    const tags = [];
    if (filename.includes('wall')) {
      tags.push('wall');
    }
    return tags;
  }

  // Parse the filename to get tile dimensions
  parseFilename(filename: string): {
    rows: number;
    columns: number;
    tags: string[];
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
        tags: this.parseTags(filename),
      };
    }

    throw new Error('Invalid filename format');
  }

  load(filename: string): Promise<HTMLImageElement> {
    const { rows, columns, tags } = this.parseFilename(filename);
    this.rows = rows;
    this.columns = columns;
    this._tags = tags;
    this.filename = filename;

    return new Promise((resolve, reject) => {
      this.image = new Image();
      this.image.onload = () => {
        this.spriteWidth = Math.floor(this.image.width / this.columns);
        this.spriteHeight = Math.floor(this.image.height / this.rows);
        this._destOffsetX = this.spriteWidth / 2;

        if (this._tags.includes('ground')) {
          this._destOffsetY = 36;
        } else {
          this._destOffsetY = this.spriteHeight;
        }

        resolve(this.image);
      };

      this.image.onerror = () => {
        reject(new Error('Image failed to load'));
      };
      this.image.src = this.filename;
    });
  }

  draw(
    ctx: CanvasRenderingContext2D,
    spriteId: number,
    position: Position,
    opacity: number = 1,
  ): void {
    if (spriteId === 0) return;

    ctx.save();

    // Calculate the sprite position on the sprintmap
    const spriteMapX = (spriteId - 1) % this.columns;
    const spriteMapY = Math.floor((spriteId - 1) / this.columns);

    // Calculate the source position and size
    const sourceX = this.spriteWidth * spriteMapX;
    const sourceY = this.spriteHeight * spriteMapY;
    const sourceWidth = this.spriteWidth;
    const sourceHeight = this.spriteHeight;

    // Calculate the destination position and size
    const destX = position.x - this._destOffsetX;
    const destY = position.y - this._destOffsetY;
    const destWidth = this.spriteWidth;
    const destHeight = this.spriteHeight;

    ctx.globalAlpha = opacity;

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

    ctx.restore();
  }
}

export default SpriteMap;
