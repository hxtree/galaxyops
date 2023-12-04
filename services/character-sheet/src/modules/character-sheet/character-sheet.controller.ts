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
      instanceId: createCharacterSheetDto.instanceId,
      name: createCharacterSheetDto.name,
      surname: createCharacterSheetDto.surname,
      archetypeId: createCharacterSheetDto.archetypeId,
      life: new GaugeEmbeddable({ min: 0, max: 10, current: 10 }),
      drive: new GaugeEmbeddable({ min: 0, max: 10, current: 10 }),
      spirit: new GaugeEmbeddable({ min: 0, max: 10, current: 10 }),
      disciplines: [],
      stats: {
        power: 10,
        wisdom: 10,
        accuracy: 10,
        luck: 10,
        defense: 10,
        evasion: 10,
        intelligence: 10,
        speed: 10,
      },
      equipment: [],
      affiliation: [],
    });

    const character = await this._characterSheetRepository.create(characterSheet);

    return character!.toJSON();
  }
}
