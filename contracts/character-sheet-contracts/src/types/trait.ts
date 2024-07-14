import { EffectTag } from './tag.effect';

export enum Effect {
  WEAK = 'Weak',
  RESIST = 'Resist',
  ABSORB = 'Absorb',
  IMMUNE = 'Immune',
  HEAL = 'Heal',
  BONUS = 'Bonus',
}

export enum Operator {
  ADD = 'ADD',
  MULTIPLY = 'MULTIPLY',
  SUBTRACT = 'SUBTRACT',
  DIVIDE = 'DIVIDE',
}

/**
 * Weakness, increases damage taken by the damage type.
 *
 * e.g.
 * FIRE WEAKNESS 1.2x
 * COLD WEAKNESS 2x
 */
export type WeaknessTrait = {
  tag: EffectTag;
  modifier: Effect.WEAK;
  quantity: number;
  operator: Operator.MULTIPLY;
};

/**
 * Resistance. decreases damage taken by the damage type.
 *
 * e.g.
 * ELECTRIC RESISTANCE 0.8x
 * SWORD RESISTANCE 0.5x
 */
export type ResistanceTrait = {
  tag: EffectTag;
  modifier: Effect.RESIST;
  quantity: number;
  operator: Operator.DIVIDE;
};

/**
 * Bonuses, not applicable to LIFE gauge
 *
 * e.g.
 * EXPERIENCE BONUS 1.2x
 */
export type BonusTrait = {
  tag: EffectTag;
  modifier: Effect.BONUS;
  quantity: number;
  operator: Operator.MULTIPLY;
};

/**
 * Absorption, reduces damage type area of effect to nearby targets.
 * works on AOE
 *
 * e.g.
 * COLD ABSORB
 */
export type AbsorbTrait = {
  tag: EffectTag;
  quantity: number;
  modifier: Effect.ABSORB;
};

/**
 * Immunity, completely blocks damage taken by the damage type.
 *
 * e.g.
 * ARROW IMMUNE
 * POISON IMMUNE
 * SLEEP IMMUNE
 */
export type ImmuneTrait = {
  tag: EffectTag;
  modifier: Effect.IMMUNE;
};

/**
 * Healing, reverses damage taken into healing by the damage type.
 *
 * e.g.
 * ELECTRIC HEAL 20%
 */
export type HealTrait = {
  tag: EffectTag;
  modifier: Effect.HEAL;
  percent: number;
};

export type Trait =
  | WeaknessTrait
  | ResistanceTrait
  | BonusTrait
  | AbsorbTrait
  | ImmuneTrait
  | HealTrait;
