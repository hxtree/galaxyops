import { Outfit } from '../data/gear/outfit.gear';

describe('Outfit', () => {
  test('able to get outfit', () => {
    type OutfitKey = typeof Outfit;
    type OutfitType = keyof OutfitKey;

    const archetypeId: OutfitType = 'TSHIRT_AND_JEANS' as OutfitType;
    const archetype = Outfit[archetypeId];
    expect(archetype.name).toBe('T-Shirt and Jeans');
  });
});
