import { Injectable } from '@nestjs/common';
import { CharacterSheetRepository } from './character-sheet.repository';

@Injectable()
export class CharacterSheetService {
  constructor(private _characterSheetRepository: CharacterSheetRepository) {}

  async findOne(id: string): Promise<any> {
    return this._characterSheetRepository.findOne({ id });
  }
}
