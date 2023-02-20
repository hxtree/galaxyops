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
import { EquipmentEmbeddable } from './equipment-embeddable.schema';

@Schema()
export class CharacterSheet {
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
  public surname?: string;

  @IsInstance(StatsEmbeddable)
  @Prop()
  public stats: StatsEmbeddable;

  @IsOptional()
  @IsEnum(DisciplineEmbeddable)
  @Prop()
  public disciplines: DisciplineEmbeddable[];

  @IsOptional()
  @IsEnum(EquipmentEmbeddable)
  @Prop()
  public equipment: EquipmentEmbeddable[];

  constructor(createCharacterSheetDto: CreateCharacterSheetDto) {
    this.id = createCharacterSheetDto?.id ? createCharacterSheetDto.id : v4();
    this.archetypeId = createCharacterSheetDto?.archetypeId;
    this.name = createCharacterSheetDto?.name;
    this.surname = createCharacterSheetDto?.surname;
  }
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema = SchemaFactory.createForClass(
  CharacterSheet,
).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

CharacterSheetSchema.virtual('fullname').get(function () {
  return `${this.name} ${this.surname}`;
});

CharacterSheetSchema.index({
  id: 1,
});
