import {EffectTag} from './EffectTag';
import {StatusEffect} from './StatusEffect';
import {Attribute} from '../character/Attribute';

export enum Modifier {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export enum StatusEffectModifier {
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
  name: string; // todo enum WeaponActionList |
  thing: string; // todo
  amount: number;
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
