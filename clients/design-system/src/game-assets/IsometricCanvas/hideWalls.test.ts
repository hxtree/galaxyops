import { hideWalls } from './hideWalls';
import { Direction } from './types/Direction.type';

// TODO flesh out the test cases
describe('hideWalls', () => {
  it('should hide walls correctly', () => {
    const sut = hideWalls([[['0']]], 0, 0, Direction.NORTHWEST);

    expect(sut).toEqual([[['0']]]);
  });
});
