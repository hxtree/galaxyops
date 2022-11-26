import {Archetype} from '../../data/archetype/archetype';

describe('NPCList', () => {
  test('able to get character', () => {
    const archetype = (id: string) => {
      type ArchetypeKey = typeof Archetype;
      type ArchetypeType = keyof ArchetypeKey;

      const archetypeId: ArchetypeType = id as ArchetypeType;
      const archetype = Archetype[archetypeId];
      return archetype;
    };
    expect(archetype('MISCHIEVOUS_PIEBALD').name).toBe('Mischievous');
  });
});
