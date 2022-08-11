import {Dice} from '../Dice';

describe('Dice', () => {
  const testFaces = [
    [2, 2],
    [4, 4],
    [6, 6],
    [8, 8],
    [10, 10],
    [50, 50],
    [100, 100],
  ];

  test.each(testFaces)(
    'Numerical faces set by constructor %s',
    (input, output) => {
      const dice = new Dice(input);
      expect(dice.faces).toBe(output);
    },
  );

  test.each(testFaces)('Roll within expected range for %s', (input, output) => {
    const dice = new Dice(input);
    const outcome = dice.roll();

    expect(outcome).toBeGreaterThanOrEqual(1);
    expect(outcome).toBeLessThanOrEqual(output);
  });

  test('Total computes correct from value and bonus', () => {
    const dice = new Dice(2);

    dice.value = 2;
    dice.bonus = 2;

    expect(dice.total).toEqual(dice.value + dice.bonus);
  });

  test('Total should not be 100% every time', () => {
    // 1 out of a million chance of failing
    const dice = new Dice(1000000);
    expect(dice.roll()).toBeLessThan(1000000);
  });
});
