import {
  NotFoundException,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CharacterSheetRepository } from './character-sheet.repository';
import { CharacterSheetService } from './character-sheet.service';

@Controller('/character-sheets')
export class CharacterSheetController {
  constructor(
    private _characterSheetService: CharacterSheetService,
    private _characterSheetRepository: CharacterSheetRepository,
  ) {}

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
    const result = await this._characterSheetRepository.findOne({
      id,
    });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
    return this._characterSheetRepository.delete({
      id,
    });
  }
}
