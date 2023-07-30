import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Type,
  IsUuidV4,
  IsString,
  IsUUID,
  IsEnum,
  IsOptional,
  IsInstance,
  ValidateNested,
} from '@cats-cradle/validation-schemas';
import { v4 as uuidv4 } from 'uuid';
import { DisciplineEmbeddable } from './discipline-embeddable.schema';
import { StatsEmbeddable } from './stats-embeddable.schema';
import { EquipmentEmbeddable } from './equipment-embeddable.schema';
import { GaugeEmbeddable } from './gauge-embeddable.schema';
import { Archetype, ArchetypeId, ArchetypeIds } from '../data/archetype';

@Schema()
export class CharacterSheet {
  // @Transform(({ value }) => value.toString())
  // _id: ObjectId;

  @IsUUID()
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  public _id!: string;

  @IsUUID()
  @Prop()
  public instanceId!: string;

  @IsEnum(ArchetypeIds)
  @Prop()
  public archetypeId!: ArchetypeId;

  @IsString()
  @IsOptional()
  @Prop({
    set: (content: string) => {
      return content.trim();
    },
  })
  public name?: string;

  @IsString()
  @IsOptional()
  @Prop({
    set: (content: string) => {
      return content.trim();
    },
  })
  public surname?: string;

  /**
   * A measurement of ones ability to exist
   */
  @IsInstance(GaugeEmbeddable)
  @Prop()
  public life: GaugeEmbeddable;

  @IsInstance(GaugeEmbeddable)
  @Prop()
  public drive: GaugeEmbeddable;

  /**
   * TODO
   * when spirit reaches 0 Spirit addition points are taken from Life.
   * This is the only way that some characters will have enough Spirit Points to perform certain actions.
   */
  @IsInstance(GaugeEmbeddable)
  @Prop()
  public spirit: GaugeEmbeddable;

  @IsInstance(StatsEmbeddable)
  @Prop()
  public stats: StatsEmbeddable;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => DisciplineEmbeddable)
  @Prop()
  public disciplines: DisciplineEmbeddable[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => EquipmentEmbeddable)
  @Prop()
  public equipment: EquipmentEmbeddable[];
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema = SchemaFactory.createForClass(CharacterSheet)
  .set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  })
  .set('toObject', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
      ret._id = ret.id;
      delete ret.id;
    },
  });

CharacterSheetSchema.virtual('fullName').get(function () {
  return `${this.name} ${this.surname}`;
});

CharacterSheetSchema.virtual('traits').get(function () {
  const archetype: Archetype.Type = Archetype[this.archetypeId];
  return archetype.traits ?? [];
});

CharacterSheetSchema.virtual('skills').get(function () {
  // TODO compute skills from disciplines skillProgression
  // compute skills from gear / equipment / weapons
  return [];
});

CharacterSheetSchema.index({
  id: 1,
});
