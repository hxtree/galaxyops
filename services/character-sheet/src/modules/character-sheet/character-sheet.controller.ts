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
} from '@nestjs/common';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheet } from '../../models/character-sheet.schema';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';
import { GaugeEmbeddable } from '../../models/gauge-embeddable.schema';

@Controller({ path: 'character-sheets', version: [VERSION_NEUTRAL, '1'] })
export class CharacterSheetController {
  constructor(private _characterSheetRepository: CharacterSheetRepository) {}

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
    const result = await this._characterSheetRepository.findById(id);
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
    const characterSheet = new CharacterSheet({
      affiliation: [],
      archetypeId: createCharacterSheetDto.archetypeId,
      disciplines: [],
      drive: new GaugeEmbeddable({ current: 10, max: 10, min: 0 }),
      gear: [],
      instanceId: createCharacterSheetDto.instanceId,
      life: new GaugeEmbeddable({ current: 10, max: 10, min: 0 }),
      name: createCharacterSheetDto.name,
      spirit: new GaugeEmbeddable({ current: 10, max: 10, min: 0 }),
      stats: {
        accuracy: 10,
        defense: 10,
        evasion: 10,
        intelligence: 10,
        luck: 10,
        power: 10,
        speed: 10,
        wisdom: 10,
      },
      surname: createCharacterSheetDto.surname,
    });

    const character = await this._characterSheetRepository.create(characterSheet);

    return character!.toJSON();
  }
}
