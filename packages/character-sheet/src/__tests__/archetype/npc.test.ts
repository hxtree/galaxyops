import {NPCList, npc} from '../../archetype/npc';

describe('NPCList', () => {
  test('able to get character', () => {
    expect(NPCList['VallonOni'].name).toBe('Vallon Oni');
  });

  test('able to lookup character', () => {
    expect(npc('VallonOni').name).toBe('Vallon Oni');
  });
});
