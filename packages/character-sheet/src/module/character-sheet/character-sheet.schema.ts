import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsUuidV4,
  IsString,
  IsUUID,
  IsEnum,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';
import { ArchetypeType } from '../../data/archetype';
import { Archetype } from '../../data/archetype/archetype';

@Schema()
export class CharacterSheet {
  @IsUuidV4() // TODO add suport to fakerfactory
  @IsUUID()
  @Prop()
  public id!: string;

  @IsString()
  @Prop()
  public firstName!: string;

  @IsString()
  @Prop()
  public lastName!: string;

  @IsString()
  @Prop()
  public archetypeId!: string;

  constructor(createCharacterSheetDto: CreateCharacterSheetDto) {
    this.id = createCharacterSheetDto?.id ? createCharacterSheetDto.id : v4();
    this.archetypeId = createCharacterSheetDto?.archetypeId;
  }
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema =
  SchemaFactory.createForClass(CharacterSheet);
