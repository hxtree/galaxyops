import {CharacterSheet} from '../model/character-sheet.model';

describe('CharacterSheet', () => {
  test('must be a function', () => {
    expect(CharacterSheet).toBeInstanceOf(Function);
  });
});
