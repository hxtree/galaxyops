import { Attribute } from '../attribute';
import { EffectTag } from '../tag.effect';
import { StatusEffect } from '../status.effect';
import { EffectRecord } from '../table.effect';
import { MenuSlot } from '../menu-slot';

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
  export type Type = {
    name: string;
    description: string;
    targets?: number;
    effect?: EffectRecord[];
    menuSlot: MenuSlot;
  };

  export const GRAVITY: Type = {
    name: 'Gravity',
    description:
      'Coalesce gravity around target. Causes flying targets to hit ground',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const SHOCK: Type = {
    name: 'Shock',
    description: 'Electrocutes target',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.ELECTRIC] },
      { add: StatusEffect.STUNNED, chance: 0.2, tags: [EffectTag.ELECTRIC] },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const QUAKE: Type = {
    name: 'Quake',
    description: 'Shakes earth surrounding target',
    targets: 1, // AOE?
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH] },
      {
        add: StatusEffect.DOWN,
        chance: 0.2,
        tags: [EffectTag.EARTH, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const LANDSLIDE: Type = {
    name: 'Landslide',
    description: 'Creates a landslide',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH] },
      { add: StatusEffect.DOWN, chance: 0.2, tags: [EffectTag.EARTH] },
      { add: StatusEffect.EXILED, chance: 0.3, tags: [EffectTag.EARTH] },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const BLIZZARD: Type = {
    name: 'Blizzard',
    description: 'Creates a Blizzard',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.WATER, EffectTag.AIR],
      },
      {
        add: StatusEffect.COLD,
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.AIR],
      },
      {
        add: StatusEffect.EXILED,
        chance: 0.3,
        tags: [EffectTag.WATER, EffectTag.AIR],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const FIREBALL: Type = {
    name: 'Fireball',
    description: 'Shoot a fireball at target',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE] },
      { add: StatusEffect.BURNED, chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const INFERNO: Type = {
    name: 'Inferno',
    description: 'Creates a Inferno',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE] },
      { add: StatusEffect.BURNED, chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const TWISTER: Type = {
    name: 'Twister',
    description: 'Creates a Twister',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: StatusEffect.BURNED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const GUST: Type = {
    name: 'Gust',
    description: 'Creates a Gust',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const GALE: Type = {
    name: 'Gale',
    description: 'Creates Gale',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const CYCLONE: Type = {
    name: 'Cyclone',
    description: 'Creates Cyclone',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const TSUNAMI: Type = {
    name: 'Tsunami',
    description: 'A water-based attack that creates Tsunami',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const AQUA: Type = {
    name: 'Aqua',
    description: 'Creates Aqua',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      {
        add: StatusEffect.EXILED,
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const HEAL: Type = {
    name: 'Heal',
    description: 'Heal target',
    targets: 1,
    effect: [
      { add: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
    ],
    menuSlot: MenuSlot.SECOND,
  };
  export const REVIVE: Type = {
    name: 'Revive',
    description: 'Restore life to target',
    targets: 1,
    effect: [{ remove: StatusEffect.LIFELESS, chance: 0.9, tags: [] }],
    menuSlot: MenuSlot.SECOND,
  };

  export const CURE: Type = {
    name: 'Cure',
    description: 'Cures StatusEffects',
    targets: 1,
    effect: [
      { remove: StatusEffect.COLD, chance: 1 },
      { remove: StatusEffect.DOOMED, chance: 1 },
      { remove: StatusEffect.INFECTION, chance: 1 },
      { remove: StatusEffect.SILENCE, chance: 1 },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const BARRIER: Type = {
    name: 'Barrier',
    description: 'Barrier StatusEffects',
    targets: 1,
    effect: [{ add: StatusEffect.BARRIER, chance: 1, tags: [EffectTag.AIR] }],
    menuSlot: MenuSlot.SECOND,
  };

  export const BOOM: Type = {
    name: 'Boom',
    description: 'Cast Boom on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.FIRE],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const REFLECT: Type = {
    name: 'Reflect',
    description: 'Cast Reflect on target',
    targets: 1,
    effect: [{ add: StatusEffect.REFLECT, chance: 1 }],
    menuSlot: MenuSlot.SECOND,
  };

  export const FLARE: Type = {
    name: 'Flare',
    description: 'Cast Flare on target',
    targets: 1,
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
    menuSlot: MenuSlot.SECOND,
  };

  export const METEOR: Type = {
    name: 'Meteor',
    description: 'Cast Meteor on target',
    targets: 1,
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
    menuSlot: MenuSlot.SECOND,
  };

  export const TELEPATHY: Type = {
    name: 'Telepathy',
    description: 'Cast Telepathy on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.PSYCHIC],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const LIGHT: Type = {
    name: 'Light',
    description: 'Cast light on target',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.LIGHT],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const DESOLATE: Type = {
    name: 'Desolate',
    description: 'To make an area empty or bare.',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+4', tags: [EffectTag.DARKNESS] },
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.DARKNESS],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const DARKNESS: Type = {
    name: 'Darkness',
    description: 'Decrease the area that your opponent can see',
    targets: 1,
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+4',
        tags: [EffectTag.DARKNESS],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const STOP: Type = {
    name: 'Stop',
    description: 'Freezes a character in time',
    targets: 1,
    effect: [
      {
        add: StatusEffect.STOP,
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const SLOW: Type = {
    name: 'Slow',
    description: 'Slow down an opponent',
    targets: 1,
    effect: [
      {
        add: StatusEffect.SLOW,
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const HASTE: Type = {
    name: 'Haste',
    description: 'Speed up a character',
    targets: 1, // self
    effect: [
      {
        add: StatusEffect.HASTE,
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const CHILL: Type = {
    name: 'Chill',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
  };

  export const CHARM: Type = {
    name: 'Charm',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
  };

  export const FROST: Type = {
    name: 'Frost',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
  };

  export const ABSORB: Type = {
    name: 'Frost',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
  };

  export const LEECH: Type = {
    name: 'Leech',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
  };

  export const DRAIN: Type = {
    name: 'Drain',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
  };
}
