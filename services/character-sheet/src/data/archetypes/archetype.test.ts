import { Archetypes, ArchetypeId } from './index';

describe('NPCList', () => {
  test('able to get character', () => {
    const archetypeId: ArchetypeId = 'MISCHIEVOUS_PIEBALD';
    const archetype = Archetypes[archetypeId];
    expect(archetype.name).toBe('Mischievous');
  });
});
