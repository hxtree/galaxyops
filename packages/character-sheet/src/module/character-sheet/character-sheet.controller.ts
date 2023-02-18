import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CharacterSheetService } from './character-sheet.service';

@Controller('/character-sheets')
export class CharacterSheetController {
  constructor(private _characterSheetService: CharacterSheetService) {}

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
    return this._characterSheetService.findOne(id);
  }
}
