import {
  ArchetypeList,
  Archetype,
  getArchetypeList,
} from '../../archetype/archetype';

describe('NPCList', () => {
  test('able to get character', () => {
    expect(ArchetypeList['VallonOni'].name).toBe('Vallon');
  });

  test('can lookup', () => {
    expect(Archetype('VallonOni').name).toBe('Vallon');
  });

  test('can list', () => {
    expect(getArchetypeList().length).toBeGreaterThan(0);
  });
});
