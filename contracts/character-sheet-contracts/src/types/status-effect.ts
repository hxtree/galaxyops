import { Duration } from 'luxon';
import { SkillLevel } from './skill';
import { EffectRecord } from './table.effect';

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
 * Status effects are abnormal states that may have positive or negative effects.
 * they are set by skill or item that applies it.
 * They can be removed by resting, certain abilities, or after some time.
 *
 * Status Effects are visible to the player when applied.
 */
export type StatusEffect = {
  name: string;
  description: string;
  category: StatusEffectCategory;
  effects?: EffectRecord[];
  level: SkillLevel;

  /**
   * All status effects are temporary in nature the duration of status effect
   * often increases with the level at which it is applied.
   */
  duration: Duration;
};

export type StatusEffectId = string;
