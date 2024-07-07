import { Duration } from 'luxon';
import { Attribute } from '../attribute';
import { EffectTag } from '../tag.effect';
import { EffectRecord } from '../table.effect';
import { MenuSlot } from '../menu-slot';
import { SkillLevel, SkillType } from '.';
import { ActionTarget } from '../action-target';

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

// menuSlot: MenuSlot.First,
// category: SkillCategory.CLASS,

export namespace Spell {
  export const GRAVITY_LV1: SkillType = {
    name: 'Gravity',
    description:
      'Coalesce gravity around target. Causes flying targets to hit ground',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
      },
    ],
    prepareTime: Duration.fromObject({ seconds: 3 }),
    executionTime: Duration.fromObject({ seconds: 1 }),
    recoveryTime: Duration.fromObject({ seconds: 3 }),
    coolDownTime: Duration.fromObject({ seconds: 60 }),
    menuSlot: MenuSlot.MAGIC,
    level: SkillLevel.LV1,
  };

  export const GRAVITY_LV2: SkillType = {
    ...GRAVITY_LV1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '2d6+10',
        tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
      },
    ],
    prepareTime: Duration.fromObject({ seconds: 2 }),
    executionTime: Duration.fromObject({ seconds: 1 }),
    recoveryTime: Duration.fromObject({ seconds: 2 }),
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    level: SkillLevel.LV2,
  };

  export const SHOCK: SkillType = {
    name: 'Shock',
    description: 'Electrocutes target',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.ELECTRIC] },
      { add: 'STUNNED', chance: 0.2, tags: [EffectTag.ELECTRIC] },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const QUAKE: SkillType = {
    name: 'Quake',
    description: 'Shakes earth surrounding target',
    target: ActionTarget.OPPONENT, // AOE?
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH] },
      {
        add: 'DOWN',
        chance: 0.2,
        tags: [EffectTag.EARTH, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const LANDSLIDE: SkillType = {
    name: 'Landslide',
    description: 'Creates a landslide',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH] },
      { add: 'DOWN', chance: 0.2, tags: [EffectTag.EARTH] },
      { add: 'EXILED', chance: 0.3, tags: [EffectTag.EARTH] },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const BLIZZARD: SkillType = {
    name: 'Blizzard',
    description: 'Creates a Blizzard',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
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
    menuSlot: MenuSlot.MAGIC,
  };

  export const FIREBALL: SkillType = {
    name: 'Fireball',
    description: 'Shoot a fireball at target',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE] },
      { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const INFERNO: SkillType = {
    name: 'Inferno',
    description: 'Creates a Inferno',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE] },
      { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const TWISTER: SkillType = {
    name: 'Twister',
    description: 'Creates a Twister',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'BURNED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const GUST: SkillType = {
    name: 'Gust',
    description: 'Creates a Gust',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const GALE: SkillType = {
    name: 'Gale',
    description: 'Creates Gale',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const CYCLONE: SkillType = {
    name: 'Cyclone',
    description: 'Creates Cyclone',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const TSUNAMI: SkillType = {
    name: 'Tsunami',
    description: 'A water-based attack that creates Tsunami',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const AQUA: SkillType = {
    name: 'Aqua',
    description: 'Creates Aqua',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const HEAL: SkillType = {
    name: 'Heal',
    description: 'Heal target',
    target: ActionTarget.ALLY,
    effect: [
      { add: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const REVIVE: SkillType = {
    name: 'Revive',
    description: 'Restore life to target',
    target: ActionTarget.ALLY,
    effect: [{ remove: 'LIFELESS', chance: 0.9, tags: [] }],
    menuSlot: MenuSlot.MAGIC,
  };

  export const CURE: SkillType = {
    name: 'Cure',
    description: 'Cures status effects',
    target: ActionTarget.ALLY,
    effect: [
      { remove: 'COLD', chance: 1 },
      { remove: 'DOOMED', chance: 1 },
      { remove: 'INFECTION', chance: 1 },
      { remove: 'SILENCE', chance: 1 },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const BARRIER: SkillType = {
    name: 'Barrier',
    description: 'Barrier StatusEffects',
    target: ActionTarget.ALLY,
    effect: [{ add: 'BARRIER', chance: 1, tags: [EffectTag.AIR] }],
    menuSlot: MenuSlot.MAGIC,
  };

  export const BOOM: SkillType = {
    name: 'Boom',
    description: 'Cast Boom on target',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.FIRE],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const REFLECT: SkillType = {
    name: 'Reflect',
    description: 'Cast Reflect on target',
    target: ActionTarget.OPPONENT,
    effect: [{ add: 'REFLECT', chance: 1 }],
    menuSlot: MenuSlot.MAGIC,
  };

  export const FLARE: SkillType = {
    name: 'Flare',
    description: 'Cast Flare on target',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.FIRE],
      },
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.LIGHT],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const METEOR: SkillType = {
    name: 'Meteor',
    description: 'Cast Meteor on target',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.FIRE],
      },
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.EARTH],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const TELEPATHY: SkillType = {
    name: 'Telepathy',
    description: 'Cast Telepathy on target',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.PSYCHIC],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const LIGHT: SkillType = {
    name: 'Light',
    description: 'Cast light on target',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.LIGHT],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const DESOLATE: SkillType = {
    name: 'Desolate',
    description: 'To make an area empty or bare.',
    target: ActionTarget.OPPONENT,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+4', tags: [EffectTag.DARKNESS] },
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.DARKNESS],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const DARKNESS: SkillType = {
    name: 'Darkness',
    description: 'Decrease the area that your opponent can see',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.DARKNESS],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const STOP: SkillType = {
    name: 'Stop',
    description: 'Freezes a character in time',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        add: 'STOP',
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const SLOW: SkillType = {
    name: 'Slow',
    description: 'Slow down an opponent',
    target: ActionTarget.OPPONENT,
    effect: [
      {
        add: 'SLOW',
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const HASTE: SkillType = {
    name: 'Haste',
    description: 'Speed up a character',
    target: ActionTarget.OPPONENT, // self
    effect: [
      {
        add: 'HASTE',
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.MAGIC,
  };

  export const CHILL: SkillType = {
    name: 'Chill',
    description: '',
    target: ActionTarget.OPPONENT,
    menuSlot: MenuSlot.MAGIC,
  };

  export const CHARM: SkillType = {
    name: 'Charm',
    description: '',
    target: ActionTarget.OPPONENT,
    menuSlot: MenuSlot.MAGIC,
  };

  export const FROST: SkillType = {
    name: 'Frost',
    description: '',
    target: ActionTarget.OPPONENT,
    menuSlot: MenuSlot.MAGIC,
  };

  export const ABSORB: SkillType = {
    name: 'Absorb',
    description: '',
    target: ActionTarget.OPPONENT,
    menuSlot: MenuSlot.MAGIC,
  };

  export const LEECH: SkillType = {
    name: 'Leech',
    description: '',
    target: ActionTarget.OPPONENT,
    menuSlot: MenuSlot.MAGIC,
  };

  export const DRAIN: SkillType = {
    name: 'Drain',
    description: '',
    target: ActionTarget.OPPONENT,
    effect: [],
    menuSlot: MenuSlot.MAGIC,
  };
}
