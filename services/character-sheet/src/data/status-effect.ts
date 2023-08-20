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
export namespace StatusEffect {
  export type BaseType = {
    name: string;
    description: string;
    category: StatusEffectCategory;
    effects?: EffectTable;
  };

  // TODO automatically apply when life is less than 0
  export const LIFELESS: BaseType = {
    name: 'Lifeless',
    description: 'Afflicted when Life is less than 0',
    category: StatusEffectCategory.AFFLICTION,
    effects: [],
  };

  // TODO automatically set when Stamina is less than 0.
  export const KNOCKED_OUT: BaseType = {
    name: 'Knocked Out',
    description: 'is unable to move.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const CONFUSED: BaseType = {
    name: 'Confused',
    description: '',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const DRUNK: BaseType = {
    name: 'Drunk',
    description: 'accuracy decreases',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const DOOMED: BaseType = {
    name: 'Doomed',
    description: 'heal before timer runs out or KOs',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const MORTALLY_WOUNDED: BaseType = {
    name: 'Mortally Wounded',
    description: '',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const FROZEN: BaseType = {
    name: 'Frozen',
    description: '',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const COLD: BaseType = {
    name: 'Cold',
    description: 'Speed reduced',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const BURNED: BaseType = {
    name: 'Burned',
    description: '',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const BOUND: BaseType = {
    name: 'Bound',
    description: 'Cannot do anything but Break Free or use Tool  (interaction)',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const SLEEPY: BaseType = {
    name: 'Sleepy',
    description: '',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const STUNNED: BaseType = {
    name: 'Stunned',
    description: '',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const DOWN: BaseType = {
    name: 'Down',
    description: 'is disabled and has fallen down',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const DISARMED: BaseType = {
    name: 'Disarmed',
    description: 'must get weapon and arm self again in order to attack.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const EXILED: BaseType = {
    name: 'Exiled',
    description: 'Kick out of battle cannot return until battle is over',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const INFECTION: BaseType = {
    name: 'Infection',
    description: 'Damage is received each turn until infliction is healed.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const METAMORPHIC: BaseType = {
    name: 'Metamorphic',
    description: 'You are inflicted with random status affect each turn.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const IGNORANT: BaseType = {
    name: 'Ignorant',
    description: 'unable to use Learn',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const ZIPPED: BaseType = {
    name: 'Zipped',
    description: 'cannot use Gear.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const SILENCE: BaseType = {
    name: 'Silence',
    description: 'cannot use Spells.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const FATHOM: BaseType = {
    name: 'Fathom',
    description: 'cannot use Drive.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const DROWNED: BaseType = {
    name: 'Drowned',
    description: '',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const FEAR: BaseType = {
    name: 'Fear',
    description: 'cannot move.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const STOP: BaseType = {
    name: 'Stop',
    description: 'frozen in time.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const SLOW: BaseType = {
    name: 'Slow',
    description: 'speed reduced.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const BERSERK: BaseType = {
    name: 'Berserk',
    description: 'can only attack. Power increased by Drive.',
    category: StatusEffectCategory.AFFLICTION,
  };

  export const BLITZ: BaseType = {
    name: 'Blitz',
    description:
      'Strength and are speed modified for only duration of battle (-5x through +5x)',
    category: StatusEffectCategory.BUFF,
  };

  export const OMNI: BaseType = {
    name: 'Omni',
    description: 'enters a berserk like mode and attacks uncontrollable.',
    category: StatusEffectCategory.BUFF,
  };

  export const BARRIER: BaseType = {
    name: 'Barrier',
    description: 'damage taken decreases',
    category: StatusEffectCategory.BUFF,
  };

  export const REFLECT: BaseType = {
    name: 'Reflect',
    description: 'damage is reflected back',
    category: StatusEffectCategory.BUFF,
  };

  export const HASTE: BaseType = {
    name: 'Haste',
    description: 'Speed increased',
    category: StatusEffectCategory.BUFF,
  };
}

export const StatusEffectIds = Object.keys(StatusEffect);

export type StatusEffectId = keyof typeof StatusEffect;
