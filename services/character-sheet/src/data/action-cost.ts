import { Duration } from 'luxon';
import { ItemId } from './item';
import { StatusEffectId } from './status-effect';
import { EffectTag } from './tag.effect';
import { Attribute } from './attribute';

/**
 * What must be paid ahead of time to peform the action
 */
export enum ActionCostTarget {
  // The cost of the action is paid by the performer
  PERFORMER = 'PERFORMER',

  // The cost of the action is paid by the target
  TARGET = 'TARGET',

  // The cost of the action is paid by the performer's inventory
  INVENTORY = 'INVENTORY',
}

export type ActionCostInventory = {
  remove: ItemId; // TODO what about stealable items?
  quanity: number;
};

export type ActionCostStatusEffect = {
  add: StatusEffectId;
  chance?: number;
  duration?: Duration;
  tags?: Array<EffectTag>;
};

// TODO:  By holding button longer how can additional cost can be consumed for some skills.
// e.g. min cost max cost? cost per second?

export type ActionCostAttribute = {
  remove: Attribute;
  quantity: string;
  chance?: number;
  tags?: Array<EffectTag>;
};

/**
 * Cost is the resource expenditure that must be given up by Target prior to
 * the action being able to be perform.
 */
export type ActionCost =
  | ActionCostInventory
  | ActionCostStatusEffect
  | ActionCostAttribute;
