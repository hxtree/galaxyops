import { Gear } from './index';

describe('Gear', () => {
  test('able to get Accessory', () => {
    const gear = Gear.GOLD_BRACELETS;

    expect(gear.name).toBe('Gold Bracelets');
  });
});
