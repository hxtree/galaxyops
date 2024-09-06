import SpriteMap from './SpriteMap'; // Adjust the import path as necessary

describe('SpriteMap', () => {
  let spriteMap: SpriteMap;

  beforeEach(() => {
    spriteMap = new SpriteMap();
  });

  it('should parse tile dimensions from filename correctly', () => {
    const filename = 'path/to/tileset-46x36.png';
    const { tileWidth, tileHeight } = spriteMap['parseFilename'](filename);

    expect(tileWidth).toBe(46);
    expect(tileHeight).toBe(36);
  });

  it('should reject if the image fails to load', async () => {
    const mockImage = new Image();
    // Simulate image error event
    mockImage.onerror = jest.fn();

    jest
      .spyOn(globalThis, 'Image')
      .mockImplementation(() => mockImage as unknown as HTMLImageElement);

    const filename = 'path/to/tileset-46x36.png';
    const loadPromise = spriteMap.load(filename);

    mockImage.onerror?.(new Event('error')); // Trigger error event
    await expect(loadPromise).rejects.toThrow('Image failed to load');
  });
});
