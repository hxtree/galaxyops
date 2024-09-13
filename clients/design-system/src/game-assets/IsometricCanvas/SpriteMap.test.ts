import SpriteMap from './SpriteMap';

describe('SpriteMap', () => {
  let spriteMap: SpriteMap;

  beforeEach(() => {
    spriteMap = new SpriteMap();
  });

  describe('parseTags()', () => {
    it.each([
      { filename: 'castle-wall-4x4.png', tags: ['wall'] },
      { filename: 'cave-wall-8x4.png', tags: ['wall'] },
      { filename: 'barrel', tags: [] },
    ])('should parse %s filename and return tags %o', ({ filename, tags }) => {
      const sut = spriteMap.parseTags(filename);
      expect(sut).toEqual(tags);
    });
  });

  describe('parseFilename()', () => {
    it('should parse spritemap columns and rows from filename correctly', () => {
      const filename = 'path/to/tileset-46x36.png';
      const { columns, rows } = spriteMap.parseFilename(filename);

      expect(columns).toBe(46);
      expect(rows).toBe(36);
    });
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
