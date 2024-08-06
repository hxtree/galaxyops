import { Duration } from 'luxon';
import { Skill } from './skill';
import { EffectTag } from './tag.effect';
import { StatusEffectId } from './status-effect';
import { Attribute } from './attribute';
import { ActionTarget } from './action-target';
import { PartyMemberToken } from './party-member-token';
import { Item } from './item';

export enum Modifier {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export enum StatusEffectModifier {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export enum SkillEffectModifier {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export interface AttributeEffectAddRecord {
  add: Attribute;
  quantity: string;
  chance?: number;
  duration?: Duration;
  tags?: Array<EffectTag>;
}

export interface AttributeEffectRemoveRecord {
  remove: Attribute;
  quantity: string;
  chance?: number;
  duration?: Duration;
  tags?: Array<EffectTag>;
}

// TODO should this have an add and remove and duration?
export interface SkillEffectRecord {
  skill: Skill;
  modifier: SkillEffectModifier;
  tags?: Array<EffectTag>;
}

export interface StatusEffectAddRecord {
  add: StatusEffectId;
  chance?: number;
  duration?: Duration;
  tags?: Array<EffectTag>;
}

export interface StatusEffectRemoveRecord {
  remove: StatusEffectId;
  chance: number;
  tags?: Array<EffectTag>;
}

export interface PartyEffectAddRecord {
  archetype: string;
  token: PartyMemberToken;
}

export interface PartyEffectRemoveRecord {
  archetype: string;
}

export interface InventoryEffectAddRecord {
  item: Item;
  quantity: number;
}

export interface InventoryEffectRemoveRecord {
  item: Item;
  quantity: number;
}

// EffectRecords do not specify a target
export type EffectRecord =
  | SkillEffectRecord
  | StatusEffectAddRecord
  | StatusEffectRemoveRecord
  | AttributeEffectAddRecord
  | AttributeEffectRemoveRecord
  | PartyEffectAddRecord
  | PartyEffectRemoveRecord
  | InventoryEffectAddRecord
  | InventoryEffectRemoveRecord;

/**
 * EffectTable
 * A representation of the effect of an action
 */
export type EffectTable = EffectRecord[];

/**
 * Represents the effects of an action on different targets.
 * Each target is mapped to an array of EffectRecords capturing the effects.
 */
export type Outcome = {
  [key in ActionTarget]?: EffectRecord[];
};
