import { SkillType } from './skill';
import { EffectTag } from './tag.effect';
import { StatusEffect } from './status.effect';
import { Attribute } from './attribute';

export enum Modifier {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export enum StatusEffectModifier {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export enum SkillffectModifier {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export interface AttributeAddEffectRecord {
  add: Attribute;
  quantity: string;
  chance?: number;
  tags?: Array<EffectTag>;
}

export interface AttributeRemoveEffectRecord {
  remove: Attribute;
  quantity: string;
  chance?: number;
  tags?: Array<EffectTag>;
}

export interface SkillEffectRecord {
  skill: SkillType;
  modifer: SkillffectModifier;
  tags?: Array<EffectTag>;
}

export interface StatusEffectAddRecord {
  add: StatusEffect;
  chance?: number;
  tags?: Array<EffectTag>;
}

export interface StatusEffectRemoveRecord {
  remove: StatusEffect;
  chance: number;
  tags?: Array<EffectTag>;
}

// EffectRecords do not specify a target
export type EffectRecord =
  | SkillEffectRecord
  | StatusEffectAddRecord
  | StatusEffectRemoveRecord
  | AttributeAddEffectRecord
  | AttributeRemoveEffectRecord;

/**
 * EffectTable
 * A representation of the effect of an action
 */
export type EffectTable = EffectRecord[];
