import { Outfits } from './outfit.gear';

describe('Outfits', () => {
  test('able to get outfit', () => {
    type OutfitKey = typeof Outfits;
    type OutfitType = keyof OutfitKey;

    const archetypeId: OutfitType = 'TSHIRT_AND_JEANS' as OutfitType;
    const archetype = Outfits[archetypeId];
    expect(archetype.name).toBe('T-Shirt and Jeans');
  });
});
