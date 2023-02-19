import { Injectable } from '@nestjs/common';
import { CharacterSheetRepository } from './character-sheet.repository';

@Injectable()
export class CharacterSheetService {
  constructor(private _characterSheetRepository: CharacterSheetRepository) {
    //  public addEquipment(equipment: Equipment) {
    //    this.equipment.push(equipment);
    //  }
    //  public removeEquipment(equipment: Equipment) {
    //    this.equipment.splice(this.equipment.indexOf(equipment), 1);
    //  }
  }
}
