import {ArchetypeList, Archetype} from '../../archetype/archetype';

describe('NPCList', () => {
  test('able to get character', () => {
    expect(ArchetypeList['VallonOni'].firstName).toBe('Vallon');
  });

  test('can lookup', () => {
    expect(Archetype('VallonOni').firstName).toBe('Vallon');
  });

  test('can list', () => {
    expect(Archetype('VallonOni').firstName).toBe('Vallon');
  });
});
