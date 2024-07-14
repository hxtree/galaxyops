import { Attribute } from './attribute';
import { EffectTable } from './table.effect';

export enum StatusEffectCategory {
  /**
   * Buff are positive temporary boast a character can receive
   */
  BUFF = 'Buff',

  /**
   * afflictions
   * there are multiple ways in which an affliction can occur.
   * for example a character could be exiled by being picked up by a dragon
   * or transported into a void space. a character could be immobilized from being frozen
   */
  AFFLICTION = 'Affliction',
}

/**
 * Status effects are abnormal states that may have positive or negative effects
 * they can be gained from actions or items and can be healed by resting, certain
 * abilities, or after some time.
 *
 * Status Effects are visible to the player
 */
export type StatusEffect = {
  name: string;
  description: string;
  category: StatusEffectCategory;
  effects?: EffectTable;
};

export type StatusEffectId = string;
