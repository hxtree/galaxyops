import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsUuidV4,
  IsString,
  IsUUID,
  IsEnum,
  IsOptional,
  IsInstance,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';
import { ArchetypeType } from '../../data/archetype';
import { Archetype } from '../../data/archetype/archetype';
import { DisciplineEmbeddable } from './discipline-embeddable.schema';
import { StatsEmbeddable } from './stats-embeddable.schema';

@Schema()
export class CharacterSheet {
  @IsUuidV4() // TODO add suport to fakerfactory
  @IsUUID()
  @Prop()
  public id!: string;

  @IsString()
  @Prop()
  public archetypeId!: string;

  @IsString()
  @IsOptional()
  @Prop()
  public name?: string;

  @IsString()
  @IsOptional()
  @Prop()
  public surname!: string;

  @IsInstance(StatsEmbeddable)
  @Prop()
  public stats: StatsEmbeddable;

  @IsOptional()
  @IsEnum(DisciplineEmbeddable)
  @Prop()
  public disciplines: DisciplineEmbeddable[];

  constructor(createCharacterSheetDto: CreateCharacterSheetDto) {
    this.id = createCharacterSheetDto?.id ? createCharacterSheetDto.id : v4();
    this.archetypeId = createCharacterSheetDto?.archetypeId;
  }
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema =
  SchemaFactory.createForClass(CharacterSheet);
