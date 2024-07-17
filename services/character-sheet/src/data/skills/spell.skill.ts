import { Duration } from 'luxon';
import {
  EffectTag,
  AreaOfEffect,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

/**
 * Spells are actions that are casted by magic users.
 * Spells feature a prefix that differs based on skill level.
 * This indicates to astute players the magic rankings of their adversary
 *
 * | min | max | rank   | example        |
 * | --  | --  | --     | --             |
 * |  0  |   3 | Normal | Fireball       |
 * |  3  |   6 | Mega   | Mega Fireball  |
 * |  6  |   9 | Giga   | Giga Fireball  |
 * |  9  |  12 | Tera   | Tera Fireball  |
 * | 12  |  15 | Omega  | Omega Fireball |
 */
export namespace Spell {
  export const GRAVITY_LV1: Skill = {
    areaOfEffect: AreaOfEffect.CONE_15FT,
    coolDownTime: Duration.fromObject({ seconds: 60 }),
    description:
      'Coalesce gravity around target. Causes flying targets to hit ground',
    executionTime: Duration.fromObject({ seconds: 1 }),
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Gravity',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
        },
      ],
    },
    prepareTime: Duration.fromObject({ seconds: 3 }),
    recoveryTime: Duration.fromObject({ seconds: 3 }),
    target: ActionTarget.OPPONENT,
  };

  export const GRAVITY_LV2: Skill = {
    ...GRAVITY_LV1,
    areaOfEffect: AreaOfEffect.CONE_20FT,
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    executionTime: Duration.fromObject({ seconds: 1 }),
    level: SkillLevel.LV2,
    outcome: {
      OPPONENT: [
        {
          quantity: '2d6+10',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
        },
      ],
    },
    prepareTime: Duration.fromObject({ seconds: 2 }),
    recoveryTime: Duration.fromObject({ seconds: 2 }),
  };

  export const SHOCK_LV1: Skill = {
    description: 'Electrocutes target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Shock',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.ELECTRIC],
        },
        { add: 'STUNNED', chance: 0.2, tags: [EffectTag.ELECTRIC] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const QUAKE_LV1: Skill = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Shakes earth surrounding target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Quake',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.EARTH] },
        {
          add: 'DOWN',
          chance: 0.2,
          tags: [EffectTag.EARTH, EffectTag.GROUND_LEVEL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const LANDSLIDE_LV1: Skill = {
    description: 'Creates a landslide',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Landslide',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.EARTH] },
        { add: 'DOWN', chance: 0.2, tags: [EffectTag.EARTH] },
        { add: 'EXILED', chance: 0.3, tags: [EffectTag.EARTH] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const BLIZZARD_LV1: Skill = {
    description: 'Creates a Blizzard',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Blizzard',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.WATER, EffectTag.AIR],
        },
        {
          add: 'COLD',
          chance: 0.2,
          tags: [EffectTag.WATER, EffectTag.AIR],
        },
        {
          add: 'EXILED',
          chance: 0.3,
          tags: [EffectTag.WATER, EffectTag.AIR],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const FIREBALL_LV1: Skill = {
    description: 'Shoot a fireball at target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Fireball',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.FIRE] },
        { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const INFERNO_LV1: Skill = {
    description: 'Creates a Inferno',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Inferno',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.FIRE] },
        { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const TWISTER_LV1: Skill = {
    description: 'Creates a Twister',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Twister',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'BURNED',
          chance: 0.2,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const GUST_LV1: Skill = {
    description: 'Creates a strong current of air',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Gust',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'EXILED',
          chance: 0.05,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const GUST_LV2: Skill = {
    ...GUST_LV1,
    level: SkillLevel.LV2,
    name: 'Gale',
    outcome: {
      OPPONENT: [
        { quantity: '2d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'EXILED',
          chance: 0.3,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
  };

  export const CYCLONE_LV1: Skill = {
    description: 'Creates Cyclone',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Cyclone',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'EXILED',
          chance: 0.2,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const TSUNAMI_LV1: Skill = {
    description: 'A water-based attack that creates Tsunami',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Tsunami',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.WATER] },
        {
          add: 'EXILED',
          chance: 0.2,
          tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const AQUA_LV1: Skill = {
    description: 'Creates Aqua',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Aqua',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.WATER] },
        {
          add: 'EXILED',
          chance: 0.2,
          tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const HEAL_LV1: Skill = {
    description: 'Heal target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Heal',
    outcome: {
      ALLY: [
        { add: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const REVIVE_LV1: Skill = {
    description: 'Restore life to target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Revive',
    outcome: { ALLY: [{ chance: 0.9, remove: 'LIFELESS', tags: [] }] },
    target: ActionTarget.ALLY,
  };

  export const CURE_LV1: Skill = {
    description: 'Cures status effects',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Cure',
    outcome: {
      ALLY: [
        { chance: 1, remove: 'COLD' },
        { chance: 1, remove: 'DOOMED' },
        { chance: 1, remove: 'INFECTION' },
        { chance: 1, remove: 'SILENCE' },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const BARRIER_LV1: Skill = {
    description: 'Barrier StatusEffects',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Barrier',
    outcome: {
      ALLY: [{ add: 'BARRIER', chance: 1, tags: [EffectTag.AIR] }],
    },
    target: ActionTarget.ALLY,
  };

  export const BOOM_LV1: Skill = {
    description: 'Cast Boom on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Boom',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.FIRE],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const REFLECT_LV1: Skill = {
    description: 'Cast Reflect on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Reflect',
    outcome: { OPPONENT: [{ add: 'REFLECT', chance: 1 }] },
    target: ActionTarget.OPPONENT,
  };

  export const FLARE_LV1: Skill = {
    description: 'Cast Flare on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Flare',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.FIRE],
        },
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.LIGHT],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const METEOR_LV1: Skill = {
    description: 'Cast Meteor on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Meteor',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.FIRE],
        },
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.EARTH],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const TELEPATHY_LV1: Skill = {
    description: 'Cast Telepathy on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Telepathy',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.PSYCHIC],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const LIGHT_LV1: Skill = {
    description: 'Cast light on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Light',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.LIGHT],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const DESOLATE_LV1: Skill = {
    description: 'To make an area empty or bare.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Desolate',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.DARKNESS],
        },
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.DARKNESS],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const DARKNESS_LV1: Skill = {
    description: 'Decrease the area that your opponent can see',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Darkness',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.DARKNESS],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const STOP_LV1: Skill = {
    description: 'Freezes a character in time',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Stop',
    outcome: {
      OPPONENT: [
        {
          add: 'STOP',
          duration: Duration.fromObject({ seconds: 10 }),
          tags: [EffectTag.TIME],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const SLOW_LV1: Skill = {
    description: 'Slow down an opponent',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Slow',
    outcome: {
      OPPONENT: [
        {
          add: 'SLOW',
          duration: Duration.fromObject({ seconds: 20 }),
          tags: [EffectTag.TIME],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const HASTE_LV1: Skill = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Speed up a character',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Haste',
    outcome: {
      OPPONENT: [
        {
          add: 'HASTE',
          tags: [EffectTag.TIME],
        },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const CHILL_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Chill',
    target: ActionTarget.OPPONENT,
  };

  export const CHARM_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Charm',
    target: ActionTarget.OPPONENT,
  };

  export const FROST_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Frost',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.COLD],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const ABSORB_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Absorb',
    target: ActionTarget.OPPONENT,
  };

  export const LEECH_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Leech',
    target: ActionTarget.OPPONENT,
  };

  export const DRAIN_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Drain',
    outcome: {},
    target: ActionTarget.OPPONENT,
  };
}
