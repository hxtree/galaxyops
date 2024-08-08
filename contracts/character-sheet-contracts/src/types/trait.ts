import { EffectTag } from './tag.effect';
import { Skill } from './skill';

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

export type AbilityPointProgressionTrait = {
  level: number;
  abilityPoints: number;
};

export type SkillProgressionTrait = {
  level: number;
  skill: Skill;
};

/**
 * A trait is a characteristic or effect that modifies a character's attributes,
 * abilities, or interactions within the game. Traits can be inherent
 * (e.g., natural resistances or weaknesses) and are not acquired through
 * association with a discipline. They influence how characters perform,
 * react to different situations, and evolve over time.
 */
export type Trait =
  | WeaknessTrait
  | ResistanceTrait
  | BonusTrait
  | AbsorbTrait
  | ImmuneTrait
  | HealTrait
  | AbilityPointProgressionTrait
  | SkillProgressionTrait;
