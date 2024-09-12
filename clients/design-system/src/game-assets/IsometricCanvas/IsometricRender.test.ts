import { IsometricRender } from './IsometricRender';

describe('IsometricRender', () => {
  let isometricRender: IsometricRender;

  beforeEach(() => {
    isometricRender = new IsometricRender({
      drawCoordinates: true,
    });
    isometricRender.grid = [
      [
        ['b0', 'b1', 'b2'],
        ['b3', 'b4', 'b5'],
        ['b6', 'b7', 'b8'],
      ],
      [
        ['t0', 't1', 't2'],
        ['t3', 't4', 't5'],
        ['t6', 't7', 't8'],
      ],
      [
        ['tr0', 'tr1', 'tr2'],
        ['tr3', 'tr4', 'tr5'],
        ['tr6', 'tr7', 'tr8'],
      ],
    ];
  });

  describe('splitSpriteId', () => {
    it.each([
      ['b0', { spriteMapId: 'b', spriteId: 0 }],
      ['t2', { spriteMapId: 't', spriteId: 2 }],
      ['tr213', { spriteMapId: 'tr', spriteId: 213 }],
      ['abc', null], // Test case with no numbers
      ['tr@213', null], // Test case with special characters
      ['123abc', null], // Test case with numbers at the start
      ['', null], // Test case with empty string
    ])('should correctly split "%s"', (input, expected) => {
      expect(isometricRender.splitSpriteId(input)).toEqual(expected);
    });
  });
});
