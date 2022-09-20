import {EffectTag} from './EffectTag';
import {StatusEffect} from './StatusEffect';
import {Attribute} from '../character/Attribute';
import {BaseSkill} from '../skill/BaseSkill';

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

export interface AttributeEffectRecord {
  name: Attribute;
  modifier: Modifier;
  quantity: string;
  chance?: number;
  tags?: Array<EffectTag>;
}

export interface SkillEffectRecord {
  skill: BaseSkill;
  modifer: SkillffectModifier;
  tags?: Array<EffectTag>;
}

export interface StatusEffectRecord {
  name: StatusEffect;
  modifier: StatusEffectModifier;
  chance: number;
  tags?: Array<EffectTag>;
}

// EffectRecords do not specify a target
export type EffectRecord =
  | SkillEffectRecord
  | StatusEffectRecord
  | AttributeEffectRecord;

/**
 * EffectTable
 * A representation of the effect of an action
 */
export type EffectTable = Array<EffectRecord>;
