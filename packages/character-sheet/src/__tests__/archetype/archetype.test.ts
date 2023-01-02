import { Archetype } from '../../data/archetype/archetype';

describe('NPCList', () => {
  test('able to get character', () => {
    type ArchetypeKey = typeof Archetype;
    type ArchetypeType = keyof ArchetypeKey;

    const archetypeId: ArchetypeType = 'MISCHIEVOUS_PIEBALD' as ArchetypeType;
    const archetype = Archetype[archetypeId];
    expect(archetype.name).toBe('Mischievous');
  });
});
