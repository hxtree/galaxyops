import { Accessory } from '../data/gear/accessory.gear';

describe('Accessory', () => {
  test('able to get Accessory', () => {
    type AccessoryKey = typeof Accessory;
    type AccessoryType = keyof AccessoryKey;

    const equipmentId: AccessoryType = 'GOLD_BRACELETS' as AccessoryType;
    const equipment = Accessory[equipmentId];

    expect(equipment.name).toBe('Gold Bracelets');
  });
});
