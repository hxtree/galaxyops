import {ArchetypeList, Archetype} from '../../archetype/archetype';

describe('NPCList', () => {
  test('able to get character', () => {
    expect(ArchetypeList['VallonOni'].name).toBe('Vallon Oni');
  });

  test('able to lookup character', () => {
    expect(Archetype('VallonOni').name).toBe('Vallon Oni');
  });
});
