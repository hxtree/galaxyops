import { Duration } from 'luxon';
import { Attribute } from '../attribute';
import { EffectTag } from '../tag.effect';
import { EffectRecord } from '../table.effect';
import { MenuSlot } from '../menu-slot';
import { SkillLevel, SkillType } from './skill.type';
import { ActionTarget } from '../action-target';
import { AreaOfEffect } from '../area-of-effect';

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
  export const GRAVITY_LV1: SkillType = {
    areaOfEffect: AreaOfEffect.CONE_15FT,
    coolDownTime: Duration.fromObject({ seconds: 60 }),
    description:
      'Coalesce gravity around target. Causes flying targets to hit ground',
    effect: [
      {
        quantity: '1d6+2',
        remove: Attribute.LIFE,
        tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
      },
    ],
    executionTime: Duration.fromObject({ seconds: 1 }),
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Gravity',
    prepareTime: Duration.fromObject({ seconds: 3 }),
    recoveryTime: Duration.fromObject({ seconds: 3 }),
    target: ActionTarget.OPPONENT,
  };

  export const GRAVITY_LV2: SkillType = {
    ...GRAVITY_LV1,
    areaOfEffect: AreaOfEffect.CONE_20FT,
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    effect: [
      {
        quantity: '2d6+10',
        remove: Attribute.LIFE,
        tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
      },
    ],
    executionTime: Duration.fromObject({ seconds: 1 }),
    level: SkillLevel.LV2,
    prepareTime: Duration.fromObject({ seconds: 2 }),
    recoveryTime: Duration.fromObject({ seconds: 2 }),
  };

  export const SHOCK_LV1: SkillType = {
    description: 'Electrocutes target',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.ELECTRIC] },
      { add: 'STUNNED', chance: 0.2, tags: [EffectTag.ELECTRIC] },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Shock',
    target: ActionTarget.OPPONENT,
  };

  export const QUAKE_LV1: SkillType = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Shakes earth surrounding target',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.EARTH] },
      {
        add: 'DOWN',
        chance: 0.2,
        tags: [EffectTag.EARTH, EffectTag.GROUND_LEVEL],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Quake',
    target: ActionTarget.OPPONENT,
  };

  export const LANDSLIDE_LV1: SkillType = {
    description: 'Creates a landslide',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.EARTH] },
      { add: 'DOWN', chance: 0.2, tags: [EffectTag.EARTH] },
      { add: 'EXILED', chance: 0.3, tags: [EffectTag.EARTH] },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Landslide',
    target: ActionTarget.OPPONENT,
  };

  export const BLIZZARD_LV1: SkillType = {
    description: 'Creates a Blizzard',
    effect: [
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
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Blizzard',
    target: ActionTarget.OPPONENT,
  };

  export const FIREBALL_LV1: SkillType = {
    description: 'Shoot a fireball at target',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.FIRE] },
      { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Fireball',
    target: ActionTarget.OPPONENT,
  };

  export const INFERNO_LV1: SkillType = {
    description: 'Creates a Inferno',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.FIRE] },
      { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Inferno',
    target: ActionTarget.OPPONENT,
  };

  export const TWISTER_LV1: SkillType = {
    description: 'Creates a Twister',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
      {
        add: 'BURNED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Twister',
    target: ActionTarget.OPPONENT,
  };

  export const GUST_LV1: SkillType = {
    description: 'Creates a strong current of air',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.05,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Gust',
    target: ActionTarget.OPPONENT,
  };

  export const GUST_LV2: SkillType = {
    ...GUST_LV1,
    effect: [
      { quantity: '2d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.3,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    level: SkillLevel.LV2,
    name: 'Gale',
  };

  export const CYCLONE_LV1: SkillType = {
    description: 'Creates Cyclone',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Cyclone',
    target: ActionTarget.OPPONENT,
  };

  export const TSUNAMI_LV1: SkillType = {
    description: 'A water-based attack that creates Tsunami',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.WATER] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
    name: 'Tsunami',
    target: ActionTarget.OPPONENT,
  };

  export const AQUA_LV1: SkillType = {
    description: 'Creates Aqua',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.WATER] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Aqua',
    target: ActionTarget.OPPONENT,
  };

  export const HEAL_LV1: SkillType = {
    description: 'Heal target',
    effect: [
      { add: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Heal',
    target: ActionTarget.ALLY,
  };

  export const REVIVE_LV1: SkillType = {
    description: 'Restore life to target',
    effect: [{ chance: 0.9, remove: 'LIFELESS', tags: [] }],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Revive',
    target: ActionTarget.ALLY,
  };

  export const CURE_LV1: SkillType = {
    description: 'Cures status effects',
    effect: [
      { chance: 1, remove: 'COLD' },
      { chance: 1, remove: 'DOOMED' },
      { chance: 1, remove: 'INFECTION' },
      { chance: 1, remove: 'SILENCE' },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Cure',
    target: ActionTarget.ALLY,
  };

  export const BARRIER_LV1: SkillType = {
    description: 'Barrier StatusEffects',
    effect: [{ add: 'BARRIER', chance: 1, tags: [EffectTag.AIR] }],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Barrier',
    target: ActionTarget.ALLY,
  };

  export const BOOM_LV1: SkillType = {
    description: 'Cast Boom on target',
    effect: [
      {
        quantity: '1d6+4',
        remove: Attribute.LIFE,
        tags: [EffectTag.FIRE],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Boom',
    target: ActionTarget.OPPONENT,
  };

  export const REFLECT_LV1: SkillType = {
    description: 'Cast Reflect on target',
    effect: [{ add: 'REFLECT', chance: 1 }],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Reflect',
    target: ActionTarget.OPPONENT,
  };

  export const FLARE_LV1: SkillType = {
    description: 'Cast Flare on target',
    effect: [
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
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Flare',
    target: ActionTarget.OPPONENT,
  };

  export const METEOR_LV1: SkillType = {
    description: 'Cast Meteor on target',
    effect: [
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
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Meteor',
    target: ActionTarget.OPPONENT,
  };

  export const TELEPATHY_LV1: SkillType = {
    description: 'Cast Telepathy on target',
    effect: [
      {
        quantity: '1d6+4',
        remove: Attribute.LIFE,
        tags: [EffectTag.PSYCHIC],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Telepathy',
    target: ActionTarget.OPPONENT,
  };

  export const LIGHT_LV1: SkillType = {
    description: 'Cast light on target',
    effect: [
      {
        quantity: '1d6+4',
        remove: Attribute.LIFE,
        tags: [EffectTag.LIGHT],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Light',
    target: ActionTarget.OPPONENT,
  };

  export const DESOLATE_LV1: SkillType = {
    description: 'To make an area empty or bare.',
    effect: [
      { quantity: '1d6+4', remove: Attribute.LIFE, tags: [EffectTag.DARKNESS] },
      {
        quantity: '1d6+4',
        remove: Attribute.LIFE,
        tags: [EffectTag.DARKNESS],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Desolate',
    target: ActionTarget.OPPONENT,
  };

  export const DARKNESS_LV1: SkillType = {
    description: 'Decrease the area that your opponent can see',
    effect: [
      {
        quantity: '1d6+4',
        remove: Attribute.LIFE,
        tags: [EffectTag.DARKNESS],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Darkness',
    target: ActionTarget.OPPONENT,
  };

  export const STOP_LV1: SkillType = {
    description: 'Freezes a character in time',
    effect: [
      {
        add: 'STOP',
        duration: Duration.fromObject({ seconds: 10 }),
        tags: [EffectTag.TIME],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Stop',
    target: ActionTarget.OPPONENT,
  };

  export const SLOW_LV1: SkillType = {
    description: 'Slow down an opponent',
    effect: [
      {
        add: 'SLOW',
        duration: Duration.fromObject({ seconds: 20 }),
        tags: [EffectTag.TIME],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Slow',
    target: ActionTarget.OPPONENT,
  };

  export const HASTE_LV1: SkillType = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Speed up a character',
    effect: [
      {
        add: 'HASTE',
        tags: [EffectTag.TIME],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Haste',
    target: ActionTarget.ALLY,
  };

  export const CHILL_LV1: SkillType = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Chill',
    target: ActionTarget.OPPONENT,
  };

  export const CHARM_LV1: SkillType = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Charm',
    target: ActionTarget.OPPONENT,
  };

  export const FROST_LV1: SkillType = {
    description: '',
    effect: [
      {
        quantity: '1d6+2',
        remove: Attribute.LIFE,
        tags: [EffectTag.COLD],
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Frost',
    target: ActionTarget.OPPONENT,
  };

  export const ABSORB_LV1: SkillType = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Absorb',
    target: ActionTarget.OPPONENT,
  };

  export const LEECH_LV1: SkillType = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Leech',
    target: ActionTarget.OPPONENT,
  };

  export const DRAIN_LV1: SkillType = {
    description: '',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Drain',
    target: ActionTarget.OPPONENT,
  };
}
