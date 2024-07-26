import {
  StatusEffectCategory,
  StatusEffect,
  SkillLevel,
  Attribute,
} from '@galaxyops/character-sheet-contracts';
import { Duration } from 'luxon';

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
    duration: Duration.fromObject({ minutes: 45 }),
    level: SkillLevel.MAX,
    name: 'Lifeless',
  };

  // TODO automatically set when Stamina is less than 0.
  export const KNOCKED_OUT_MAX: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'is unable to move.',
    duration: Duration.fromObject({ minutes: 45 }),
    level: SkillLevel.MAX,
    name: 'Knocked Out',
  };

  export const CONFUSED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Confused',
  };

  export const DRUNK_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'accuracy decreases',
    duration: Duration.fromObject({ minutes: 5 }),
    level: SkillLevel.LV1,
    name: 'Drunk',
  };

  export const DRUNK_LV2: StatusEffect = {
    ...DRUNK_LV1,
    duration: Duration.fromObject({ minutes: 10 }),
    level: SkillLevel.LV3,
  };

  export const DRUNK_LV3: StatusEffect = {
    ...DRUNK_LV1,
    duration: Duration.fromObject({ minutes: 30 }),
    level: SkillLevel.LV3,
  };

  export const DOOMED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'remove status before timer runs out or KOs',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Doomed',
  };

  export const MORTALLY_WOUNDED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Mortally Wounded',
  };

  export const FROZEN_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Frozen',
  };

  export const COLD_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Speed reduced',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Cold',
  };

  export const BURNED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Burned',
  };

  export const BOUND_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Cannot do anything but Break Free or use Tool  (interaction)',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Bound',
  };

  export const SLEEPY_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Sleepy',
  };

  export const STUNNED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Stunned',
  };

  export const DOWN_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'is disabled and has fallen down',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Down',
  };

  export const DISARMED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'must get weapon and arm self again in order to attack.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Disarmed',
  };

  export const EXILED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Kick out of battle cannot return until battle is over',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Exiled',
  };

  export const INFECTION_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'Damage is received each turn until infliction is healed.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Infection',
  };

  export const METAMORPHIC_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'You are inflicted with random status affect each turn.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Metamorphic',
  };

  export const IGNORANT_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'unable to use Learn',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Ignorant',
  };

  export const ZIPPED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Gear.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Zipped',
  };

  export const SILENCE_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Spells.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Silence',
  };

  export const FATHOM_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot use Drive.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Fathom',
  };

  export const DROWNED_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: '',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Drowned',
  };

  export const FEAR_LV1: StatusEffect = {
    // could have a
    // 1/3 chance of fighting back,
    // 1/3 chance of running away,
    // 1/3 chance of standing still
    category: StatusEffectCategory.AFFLICTION,
    description: 'cannot move.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Fear',
  };

  export const STOP_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'frozen in time.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Stop',
  };

  export const SLOW_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'speed reduced.',
    duration: Duration.fromObject({ seconds: 30 }),
    effects: [
      {
        quantity: '2d6',
        remove: Attribute.SPEED,
      },
    ],
    level: SkillLevel.LV1,
    name: 'Slow',
  };

  export const SLOW_LV2: StatusEffect = {
    ...SLOW_LV1,
    duration: Duration.fromObject({ seconds: 60 }),
    effects: [
      {
        quantity: '6d6',
        remove: Attribute.SPEED,
      },
    ],
    level: SkillLevel.LV2,
  };

  export const BERSERK_LV1: StatusEffect = {
    category: StatusEffectCategory.AFFLICTION,
    description: 'can only attack. Power increased by Drive.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Berserk',
  };

  export const BLITZ_LV1: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description:
      'Strength and are speed modified for only duration of battle (-5x through +5x)',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Blitz',
  };

  export const OMNI_LV1: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'enters a berserk like mode and attacks uncontrollable.',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Omni',
  };

  export const BARRIER_LV1: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'damage taken decreases',
    duration: Duration.fromObject({ seconds: 30 }),
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '2d6',
      },
    ],
    level: SkillLevel.LV1,
    name: 'Barrier',
  };

  export const BARRIER_LV2: StatusEffect = {
    ...BARRIER_LV1,
    duration: Duration.fromObject({ seconds: 60 }),
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '6d6',
      },
    ],
    level: SkillLevel.LV2,
  };

  export const REFLECT_LV1: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'damage is reflected back',
    duration: Duration.fromObject({ seconds: 30 }),
    level: SkillLevel.LV1,
    name: 'Reflect',
  };

  export const HASTE_LV1: StatusEffect = {
    category: StatusEffectCategory.BUFF,
    description: 'Speed increased',
    duration: Duration.fromObject({ seconds: 30 }),
    effects: [
      {
        add: Attribute.SPEED,
        quantity: '2d6',
      },
    ],
    level: SkillLevel.LV1,
    name: 'Haste',
  };
}

export const StatusEffectIds = Object.keys(StatusEffects);

// export type StatusEffectId = keyof typeof StatusEffects;
