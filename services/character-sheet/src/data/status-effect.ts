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
export namespace StatusEffect {
  export type BaseType = {
    name: string;
    description: string;
    category: StatusEffectCategory;
    effects?: EffectTable;
  };

  // TODO automatically apply when life is less than 0
  export const LIFELESS: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Afflicted when Life is less than 0',
    effects: [],
    name: 'Lifeless',
  };

  // TODO automatically set when Stamina is less than 0.
  export const KNOCKED_OUT: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'is unable to move.',
    name: 'Knocked Out',
  };

  export const CONFUSED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Confused',
  };

  export const DRUNK: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'accuracy decreases',
    name: 'Drunk',
  };

  export const DOOMED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'heal before timer runs out or KOs',
    name: 'Doomed',
  };

  export const MORTALLY_WOUNDED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Mortally Wounded',
  };

  export const FROZEN: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Frozen',
  };

  export const COLD: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Speed reduced',
    name: 'Cold',
  };

  export const BURNED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Burned',
  };

  export const BOUND: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Cannot do anything but Break Free or use Tool  (interaction)',
    name: 'Bound',
  };

  export const SLEEPY: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Sleepy',
  };

  export const STUNNED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Stunned',
  };

  export const DOWN: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'is disabled and has fallen down',
    name: 'Down',
  };

  export const DISARMED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'must get weapon and arm self again in order to attack.',
    name: 'Disarmed',
  };

  export const EXILED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Kick out of battle cannot return until battle is over',
    name: 'Exiled',
  };

  export const INFECTION: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Damage is received each turn until infliction is healed.',
    name: 'Infection',
  };

  export const POISON: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Damage is received each turn until healed.',
    name: 'Posion',
  };

  export const METAMORPHIC: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'You are inflicted with random status affect each turn.',
    name: 'Metamorphic',
  };

  export const IGNORANT: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'unable to use Learn',
    name: 'Ignorant',
  };

  export const ZIPPED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Gear.',
    name: 'Zipped',
  };

  export const SILENCE: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Spells.',
    name: 'Silence',
  };

  export const FATHOM: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Drive.',
    name: 'Fathom',
  };

  export const DROWNED: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Drowned',
  };

  export const FEAR: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot move.',
    name: 'Fear',
  };

  export const STOP: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'frozen in time.',
    name: 'Stop',
  };

  export const SLOW: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'speed reduced.',
    effects: [
      {
        quantity: '2d6',
        remove: Attribute.SPEED,
      },
    ],
    name: 'Slow',
  };

  export const BERSERK: BaseType = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'can only attack. Power increased by Drive.',
    name: 'Berserk',
  };

  export const BLITZ: BaseType = {
    category: StatusEffectCategory.BUFF,
    description:
      'Strength and are speed modified for only duration of battle (-5x through +5x)',
    name: 'Blitz',
  };

  export const ONI: BaseType = {
    category: StatusEffectCategory.BUFF,
    description: 'enters a berserk like mode and attacks uncontrollable.',
    name: 'Oni',
  };

  export const BARRIER: BaseType = {
    category: StatusEffectCategory.BUFF,
    description: 'damage taken decreases',
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '2d6',
      },
    ],
    name: 'Barrier',
  };

  export const REFLECT: BaseType = {
    category: StatusEffectCategory.BUFF,
    description: 'damage is reflected back',
    name: 'Reflect',
  };

  export const HASTE: BaseType = {
    category: StatusEffectCategory.BUFF,
    description: 'Speed increased',
    effects: [
      {
        add: Attribute.SPEED,
        quantity: '2d6',
      },
    ],
    name: 'Haste',
  };
}

export const StatusEffectIds = Object.keys(StatusEffect);

export type StatusEffectId = keyof typeof StatusEffect;
