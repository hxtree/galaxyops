import { Attribute } from '../attribute';
import { EffectTag } from '../tag.effect';
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
    menuName: string;
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
    menuName: 'Magic',
  };

  export const SHOCK: Type = {
    name: 'Shock',
    description: 'Electrocutes target',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.ELECTRIC] },
      { add: 'STUNNED', chance: 0.2, tags: [EffectTag.ELECTRIC] },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const QUAKE: Type = {
    name: 'Quake',
    description: 'Shakes earth surrounding target',
    targets: 1, // AOE?
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH] },
      {
        add: 'DOWN',
        chance: 0.2,
        tags: [EffectTag.EARTH, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const LANDSLIDE: Type = {
    name: 'Landslide',
    description: 'Creates a landslide',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.EARTH] },
      { add: 'DOWN', chance: 0.2, tags: [EffectTag.EARTH] },
      { add: 'EXILED', chance: 0.3, tags: [EffectTag.EARTH] },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
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
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const FIREBALL: Type = {
    name: 'Fireball',
    description: 'Shoot a fireball at target',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE] },
      { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const INFERNO: Type = {
    name: 'Inferno',
    description: 'Creates a Inferno',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.FIRE] },
      { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const TWISTER: Type = {
    name: 'Twister',
    description: 'Creates a Twister',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'BURNED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const GUST: Type = {
    name: 'Gust',
    description: 'Creates a Gust',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const GALE: Type = {
    name: 'Gale',
    description: 'Creates Gale',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const CYCLONE: Type = {
    name: 'Cyclone',
    description: 'Creates Cyclone',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.AIR] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.AIR, EffectTag.AERIAL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const TSUNAMI: Type = {
    name: 'Tsunami',
    description: 'A water-based attack that creates Tsunami',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const AQUA: Type = {
    name: 'Aqua',
    description: 'Creates Aqua',
    targets: 1,
    effect: [
      { remove: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      {
        add: 'EXILED',
        chance: 0.2,
        tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const HEAL: Type = {
    name: 'Heal',
    description: 'Heal target',
    targets: 1,
    effect: [
      { add: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const REVIVE: Type = {
    name: 'Revive',
    description: 'Restore life to target',
    targets: 1,
    effect: [{ remove: 'LIFELESS', chance: 0.9, tags: [] }],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const CURE: Type = {
    name: 'Cure',
    description: 'Cures status effects',
    targets: 1,
    effect: [
      { remove: 'COLD', chance: 1 },
      { remove: 'DOOMED', chance: 1 },
      { remove: 'INFECTION', chance: 1 },
      { remove: 'SILENCE', chance: 1 },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const BARRIER: Type = {
    name: 'Barrier',
    description: 'Barrier StatusEffects',
    targets: 1,
    effect: [{ add: 'BARRIER', chance: 1, tags: [EffectTag.AIR] }],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
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
    menuName: 'Magic',
  };

  export const REFLECT: Type = {
    name: 'Reflect',
    description: 'Cast Reflect on target',
    targets: 1,
    effect: [{ add: 'REFLECT', chance: 1 }],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
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
    menuName: 'Magic',
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
    menuName: 'Magic',
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
    menuName: 'Magic',
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
    menuName: 'Magic',
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
    menuName: 'Magic',
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
    menuName: 'Magic',
  };

  export const STOP: Type = {
    name: 'Stop',
    description: 'Freezes a character in time',
    targets: 1,
    effect: [
      {
        add: 'STOP',
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const SLOW: Type = {
    name: 'Slow',
    description: 'Slow down an opponent',
    targets: 1,
    effect: [
      {
        add: 'SLOW',
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const HASTE: Type = {
    name: 'Haste',
    description: 'Speed up a character',
    targets: 1, // self
    effect: [
      {
        add: 'HASTE',
        tags: [EffectTag.TIME],
      },
    ],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const CHILL: Type = {
    name: 'Chill',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const CHARM: Type = {
    name: 'Charm',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const FROST: Type = {
    name: 'Frost',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const ABSORB: Type = {
    name: 'Absorb',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const LEECH: Type = {
    name: 'Leech',
    description: '',
    targets: 1,
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };

  export const DRAIN: Type = {
    name: 'Drain',
    description: '',
    targets: 1,
    effect: [],
    menuSlot: MenuSlot.SECOND,
    menuName: 'Magic',
  };
}
