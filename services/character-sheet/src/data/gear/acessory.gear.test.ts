import { Accessories } from './accessory.gear';

describe('Accessory', () => {
  test('able to get Accessory', () => {
    type AccessoryKey = typeof Accessories;
    type AccessoryType = keyof AccessoryKey;

    const equipmentId: AccessoryType = 'GOLD_BRACELETS' as AccessoryType;
    const equipment = Accessories[equipmentId];

    expect(equipment.name).toBe('Gold Bracelets');
  });
});
