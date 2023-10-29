import {
  NotFoundException,
  Controller,
  Delete,
  Query,
  Get,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
  VERSION_NEUTRAL,
  BadRequestException,
} from '@nestjs/common';
import { v4 } from 'uuid';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import {
  CharacterSheet,
  TCharacterSheetDocument,
} from '../../models/character-sheet.schema';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';

@Controller({ path: 'character-sheets', version: [VERSION_NEUTRAL, '1'] })
export class CharacterSheetController {
  constructor(private _characterSheetRepository: CharacterSheetRepository) {}

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

  @Get()
  async findByFilter(@Query() filterParams: any): Promise<any[]> {
    const result = await this._characterSheetRepository.find({
      filterParams,
    });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Get()
  async findAll(): Promise<any> {
    const result = await this._characterSheetRepository.findAll();

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

  @Post()
  async create(
    @Body() createCharacterSheetDto: CreateCharacterSheetDto,
  ): Promise<any> {
    const characterSheet = new CharacterSheet();
    if (createCharacterSheetDto._id !== undefined) {
      characterSheet._id = createCharacterSheetDto._id;
    }
    characterSheet.instanceId = createCharacterSheetDto.instanceId;
    characterSheet.archetypeId = createCharacterSheetDto.archetypeId;
    characterSheet.name = createCharacterSheetDto.name;
    characterSheet.surname = createCharacterSheetDto.surname;

    return this._characterSheetRepository.create(characterSheet);
  }
}
