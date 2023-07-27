import { Archetype, ArchetypeId } from './archetype';

describe('NPCList', () => {
  test('able to get character', () => {
    const archetypeId: ArchetypeId = 'MISCHIEVOUS_PIEBALD';
    const archetype = Archetype[archetypeId];
    expect(archetype.name).toBe('Mischievous');
  });
});
