import {CharacterSheet, ICharacterSheet} from './model/character-sheet.model';

export class CharacterSheetController {
  /**
   * Get a character's sheet
   */
  get(id: string): ICharacterSheet {
    const result = new CharacterSheet();
    return result;
  }
}
