import {v4 as uuidv4} from 'uuid';
import {CharacterSheet, ICharacterSheet} from './model/character-sheet.model';

export class CharacterSheetController {
  /**
   * Get a character's sheet
   */
  get(id: uuidv4): ICharacterSheet {
    const result = new CharacterSheet();
    return result;
  }
}
