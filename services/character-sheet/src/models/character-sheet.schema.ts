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
  ArrayUnique,
  ArrayMinSize,
  ArrayMaxSize,
  IsArray,
} from '@cats-cradle/validation-schemas';
import { v4 as uuidv4 } from 'uuid';
import { DisciplineEmbeddable } from './discipline-embeddable.schema';
import { StatsEmbeddable } from './stats-embeddable.schema';
import { EquipmentEmbeddable } from './equipment-embeddable.schema';
import { GaugeEmbeddable } from './gauge-embeddable.schema';
import { Archetype, ArchetypeId, ArchetypeIds } from '../data/archetype';
import { Discipline, DisciplineId } from '../data/discipline';
import { Equipment, EquipmentType } from '../data/gear';

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

  @ValidateNested({ each: true })
  @Type(() => DisciplineEmbeddable)
  @ArrayUnique()
  @ArrayMinSize(0)
  @ArrayMaxSize(5)
  @Prop()
  public disciplines: DisciplineEmbeddable[];

  @ValidateNested({ each: true })
  @Type(() => EquipmentEmbeddable)
  @IsArray()
  @ArrayUnique()
  @ArrayMinSize(0)
  @ArrayMaxSize(12)
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
  let skills: any = [];

  this.disciplines.forEach((disciplineEmbeddable: DisciplineEmbeddable) => {
    const discipline: Discipline.Type =
      Discipline[disciplineEmbeddable.disciplineId];

    if (discipline.progression === undefined) {
      return;
    }

    discipline.progression.forEach(
      (progression: Discipline.ProgressionType) => {
        const disciplineLevel = Math.floor(
          Math.sqrt(disciplineEmbeddable.experience / 100),
        );

        if (
          progression.level >= disciplineLevel &&
          skills.indexOf(progression.skill) === -1
        ) {
          skills.push(progression.skill);
        }
      },
    );
  });

  this.equipment.forEach((equipmentEmbeddable: EquipmentEmbeddable) => {
    const equipment: any = Equipment[equipmentEmbeddable.equipmentId];
    if (equipment.actions === undefined) {
      return;
    }
    equipment.actions.forEach((action: any) => {
      if (skills.indexOf(action) === -1) {
        skills.push(action);
      }
    });
  });

  return skills;
});

CharacterSheetSchema.index({
  id: 1,
});
