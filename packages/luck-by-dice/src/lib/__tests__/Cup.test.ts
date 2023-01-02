import { Collection } from '../Collection';
import { Cup } from '../Cup';

describe('Cup', () => {
  test('.roll()', () => {
    const cup = new Cup();
    cup.push(new Collection(10, 6));
    cup.push(new Collection(1, 2));
    expect(cup.roll()).toBeLessThan(62);
  });

  test('get outcomePercentage() greater than equal to 0', () => {
    const cup = new Cup();
    cup.push(new Collection(10, 6));
    cup.push(new Collection(1, 2));
    cup.roll();
    expect(cup.outcomePercent).toBeGreaterThanOrEqual(0);
  });

  test('get outcomePercentage() greater than equal to 1', () => {
    const cup = new Cup();
    cup.push(new Collection(10, 6));
    cup.push(new Collection(1, 2));
    cup.roll();
    expect(cup.outcomePercent).toBeLessThanOrEqual(1);
  });
});
