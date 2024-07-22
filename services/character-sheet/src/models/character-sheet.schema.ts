/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Type,
  IsUuidV4,
  IsString,
  IsEnum,
  IsOptional,
  IsInstance,
  ValidateNested,
  ArrayUnique,
  ArrayMinSize,
  ArrayMaxSize,
  IsArray,
} from '@galaxyops/validation-schemas';
import { v4 as uuidv4 } from 'uuid';
import { BaseEntity, BaseEntityProps } from '@galaxyops/nestjs-modules';
import {
  MenuSlotOrder,
  Skill,
  Archetype,
  DisciplineProgression,
  Discipline,
} from '@galaxyops/character-sheet-contracts';
import { DisciplineEmbeddable } from './discipline-embeddable.schema';
import { AffiliationEmbeddable } from './affiliation-embeddable.schema';
import { StatsEmbeddable } from './stats-embeddable.schema';
import { EquipmentEmbeddable } from './equipment-embeddable.schema';
import { GaugeEmbeddable } from './gauge-embeddable.schema';
import { Archetypes, ArchetypeId, ArchetypeIds } from '../data/archetype';
import { Disciplines } from '../data/discipline';
import { Equipment, EquipmentType } from '../data/gear';

/**
 * A CharacterSheet (or Character for short) is a single instantiation of an Archetype.
 */
@Schema({ collection: 'character-sheet' })
export class CharacterSheet extends BaseEntity {
  @IsUuidV4()
  @Prop()
  public instanceId!: string;

  @IsEnum(ArchetypeIds)
  @Prop({
    enum: ArchetypeIds,
    required: true,
    type: String,
  })
  public archetypeId!: ArchetypeId;

  @IsString()
  @IsOptional()
  @Prop({
    set: (content: string) => content.trim(),
  })
  public name?: string;

  @IsString()
  @IsOptional()
  @Prop({
    set: (content: string) => content.trim(),
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
   * This is the only way that some characters will have enough
   * Spirit Points to perform certain actions.
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
  @Prop([])
  public disciplines: DisciplineEmbeddable[];

  @ValidateNested({ each: true })
  @Type(() => EquipmentEmbeddable)
  @IsArray()
  @ArrayUnique()
  @ArrayMinSize(0)
  @ArrayMaxSize(12)
  @Prop([])
  public equipment: EquipmentEmbeddable[];

  @ValidateNested({ each: true })
  @Type(() => AffiliationEmbeddable)
  @IsArray()
  @ArrayUnique()
  @Prop([])
  public affiliation: AffiliationEmbeddable[];

  constructor(partial: NonNullable<Omit<CharacterSheet, BaseEntityProps>>) {
    super();
    Object.assign(this, partial);
  }
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema = SchemaFactory.createForClass(CharacterSheet)
  .set('toJSON', {
    transform(doc, ret) {
      delete ret._id;
    },
    versionKey: false,
    virtuals: true,
  })
  .set('toObject', {
    transform(doc, ret) {
      ret._id = ret.id;
      delete ret.id;
    },
    versionKey: false,
    virtuals: true,
  });

CharacterSheetSchema.virtual('fullName').get(function () {
  return `${this.name} ${this.surname}`;
});

CharacterSheetSchema.virtual('traits').get(function () {
  const archetype: Archetype = Archetypes[this.archetypeId];
  return archetype.traits ?? [];
});

CharacterSheetSchema.virtual('menu').get(function () {
  const skills: any = [];

  this.disciplines.forEach((disciplineEmbeddable: DisciplineEmbeddable) => {
    const discipline: Discipline = Disciplines[disciplineEmbeddable.disciplineId];

    if (discipline.progression === undefined) {
      return;
    }

    discipline.progression.forEach((progression: DisciplineProgression) => {
      const disciplineLevel = Math.floor(
        Math.sqrt(disciplineEmbeddable.experience / 100),
      );

      if (
        'skill' in progression
        && progression.level >= disciplineLevel
        && skills.indexOf(progression.skill) === -1
      ) {
        skills.push(progression.skill);
      }
    });
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

  return {
    1: skills.filter(
      (skill: Skill) => skill.menuSlot.order === MenuSlotOrder.FIRST,
    ),
    2: skills.filter(
      (skill: Skill) => skill.menuSlot.order === MenuSlotOrder.SECOND,
    ),
    3: skills.filter(
      (skill: Skill) => skill.menuSlot.order === MenuSlotOrder.THIRD,
    ),
    4: skills.filter(
      (skill: Skill) => skill.menuSlot.order === MenuSlotOrder.FOURTH,
    ),
  };
});

CharacterSheetSchema.virtual('skills').get(function () {
  const skills: any = [];

  this.disciplines.forEach((disciplineEmbeddable: DisciplineEmbeddable) => {
    const discipline: Discipline = Disciplines[disciplineEmbeddable.disciplineId];

    if (discipline.progression === undefined) {
      return;
    }

    discipline.progression.forEach((progression: DisciplineProgression) => {
      const disciplineLevel = Math.floor(
        Math.sqrt(disciplineEmbeddable.experience / 100),
      );

      if (
        'skill' in progression
        && progression.level >= disciplineLevel
        && skills.indexOf(progression.skill) === -1
      ) {
        skills.push(progression.skill);
      }
    });
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
