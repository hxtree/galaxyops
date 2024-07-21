import {
  Attribute,
  StatusEffectCategory,
  StatusEffect,
} from '@galaxyops/character-sheet-contracts';

/**
 * Status effects are abnormal states that may have positive or negative effects
 * they can be gained from actions or items and can be healed by resting, certain
 * abilities, or after some time.
 *
 * Status Effects are visible to the player
 */
export namespace StatusEffects {
  // TODO automatically apply when life is less than 0
  export const LIFELESS_MAX: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Afflicted when Life is less than 0',
    name: 'Lifeless',
  };

  // TODO automatically set when Stamina is less than 0.
  export const KNOCKED_OUT: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'is unable to move.',
    name: 'Knocked Out',
  };

  export const CONFUSED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Confused',
  };

  export const DRUNK: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'accuracy decreases',
    name: 'Drunk',
  };

  export const DOOMED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'heal before timer runs out or KOs',
    name: 'Doomed',
  };

  export const MORTALLY_WOUNDED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Mortally Wounded',
  };

  export const FROZEN: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Frozen',
  };

  export const COLD: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Speed reduced',
    name: 'Cold',
  };

  export const BURNED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Burned',
  };

  export const BOUND: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Cannot do anything but Break Free or use Tool  (interaction)',
    name: 'Bound',
  };

  export const SLEEPY: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Sleepy',
  };

  export const STUNNED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Stunned',
  };

  export const DOWN: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'is disabled and has fallen down',
    name: 'Down',
  };

  export const DISARMED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'must get weapon and arm self again in order to attack.',
    name: 'Disarmed',
  };

  export const EXILED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Kick out of battle cannot return until battle is over',
    name: 'Exiled',
  };

  export const INFECTION: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Damage is received each turn until infliction is healed.',
    name: 'Infection',
  };

  export const METAMORPHIC: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'You are inflicted with random status affect each turn.',
    name: 'Metamorphic',
  };

  export const IGNORANT: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'unable to use Learn',
    name: 'Ignorant',
  };

  export const ZIPPED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Gear.',
    name: 'Zipped',
  };

  export const SILENCE: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Spells.',
    name: 'Silence',
  };

  export const FATHOM: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Drive.',
    name: 'Fathom',
  };

  export const DROWNED: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    name: 'Drowned',
  };

  export const FEAR: StatusEffect = {
    // could have a
    // 1/3 chance of fighting back,
    // 1/3 chance of running away,
    // 1/3 chance of standing still
    category: StatusEffectCategory.AFFLICTION,

    description: 'cannot move.',

    name: 'Fear',
  };

  export const STOP: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'frozen in time.',
    name: 'Stop',
  };

  export const SLOW: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'speed reduced.',
    name: 'Slow',
    // effects: [
    //   {
    //     remove: Attribute.SPEED,
    //     quantity: '2d6',
    //   },
    // ],
  };

  export const BERSERK: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'can only attack. Power increased by Drive.',
    name: 'Berserk',
  };

  export const BLITZ: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description:
      'Strength and are speed modified for only duration of battle (-5x through +5x)',
    name: 'Blitz',
  };

  export const OMNI: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'enters a berserk like mode and attacks uncontrollable.',
    name: 'Omni',
  };

  export const BARRIER: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'damage taken decreases',
    name: 'Barrier',
    // effects: [
    //   {
    //     add: Attribute.DEFENSE,
    //     quantity: '2d6',
    //   },
    // ],
  };

  export const REFLECT: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'damage is reflected back',
    name: 'Reflect',
  };

  export const HASTE: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'Speed increased',
    name: 'Haste',
    // effects: [
    //   {
    //     add: Attribute.SPEED,
    //     quantity: '2d6',
    //   },
    // ],
  };
}

export const StatusEffectIds = Object.keys(StatusEffects);

// export type StatusEffectId = keyof typeof StatusEffects;
