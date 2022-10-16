import {BaseSkill, SkillCategory} from './base.skill';
import {Attribute} from './attribute';
import {EffectTag} from './tag.effect';
import {StatusEffect} from './status.effect';
import {MenuSlot} from './menu-slot';

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

export enum SpellSkillList {
  'Gravity',
  'Shock',
  'Quake',
  'Landslide',
  'Blizzard',
  // todo add all
}

export abstract class SpellSkill implements BaseSkill {
  abstract name: string;
  abstract description: string;
  menuSlot: MenuSlot.First;
  category: SkillCategory.CLASS;
}

export class Gravity extends SpellSkill {
  name: 'Gravity';
  description: 'Coalesce gravity around target. Causes flying targets to hit ground';
  targets: 1;
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL, EffectTag.AERIAL];
    },
  ];
}

export class Shock extends SpellSkill {
  name: 'Shock';
  description: 'Electrocutes target';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.ELECTRIC]},
    {add: StatusEffect.STUNNED; chance: 0.2; tags: [EffectTag.ELECTRIC]},
  ];
}

export class Quake extends SpellSkill {
  name: 'Quake';
  description: 'Shakes earth surrounding target';
  targets: 1; // AOE?
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.EARTH]},
    {
      add: StatusEffect.DOWN;
      chance: 0.2;
      tags: [EffectTag.EARTH, EffectTag.GROUNDLEVEL];
    },
  ];
}

export class Landslide extends SpellSkill {
  name: 'Landslide';
  description: 'Creates a landslide';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.EARTH]},
    {add: StatusEffect.DOWN; chance: 0.2; tags: [EffectTag.EARTH]},
    {add: StatusEffect.EXILED; chance: 0.3; tags: [EffectTag.EARTH]},
  ];
}

export class Blizzard extends SpellSkill {
  name: 'Blizzard';
  description: 'Creates a Blizzard';
  targets: 1;
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.WATER, EffectTag.AIR];
    },
    {
      add: StatusEffect.COLD;
      chance: 0.2;
      tags: [EffectTag.WATER, EffectTag.AIR];
    },
    {
      add: StatusEffect.EXILED;
      chance: 0.3;
      tags: [EffectTag.WATER, EffectTag.AIR];
    },
  ];
}

export class Fireball extends SpellSkill {
  name: 'Fireball';
  description: 'Shoot a fireball at target';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.FIRE]},
    {add: StatusEffect.BURNED; chance: 0.2; tags: [EffectTag.FIRE]},
  ];
}

export class Inferno extends SpellSkill {
  name: 'Inferno';
  description: 'Creates a Inferno';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.FIRE]},
    {add: StatusEffect.BURNED; chance: 0.2; tags: [EffectTag.FIRE]},
  ];
}

export class Twister extends SpellSkill {
  name: 'Twister';
  description: 'Creates a Twister';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.AIR]},
    {
      add: StatusEffect.BURNED;
      chance: 0.2;
      tags: [EffectTag.AIR, EffectTag.AERIAL];
    },
  ];
}

export class Gust extends SpellSkill {
  name: 'Gust';
  description: 'Creates a Gust';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.AIR]},
    {
      add: StatusEffect.EXILED;
      chance: 0.2;
      tags: [EffectTag.AIR, EffectTag.AERIAL];
    },
  ];
}

export class Gale extends SpellSkill {
  name: 'Gale';
  description: 'Creates Gale';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.AIR]},
    {
      add: StatusEffect.EXILED;
      chance: 0.2;
      tags: [EffectTag.AIR, EffectTag.AERIAL];
    },
  ];
}

export class Cyclone extends SpellSkill {
  name: 'Cyclone';
  description: 'Creates Cyclone';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.AIR]},
    {
      add: StatusEffect.EXILED;
      chance: 0.2;
      tags: [EffectTag.AIR, EffectTag.AERIAL];
    },
  ];
}

export class Tsunami extends SpellSkill {
  name: 'Tsunami';
  description: 'A water-based attack that creates Tsunami';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.WATER]},
    {
      add: StatusEffect.EXILED;
      chance: 0.2;
      tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL];
    },
  ];
}

export class Aqua extends SpellSkill {
  name: 'Aqua';
  description: 'Creates Aqua';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.WATER]},
    {
      add: StatusEffect.EXILED;
      chance: 0.2;
      tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL];
    },
  ];
}

export class Heal extends SpellSkill {
  name: 'Heal';
  description: 'Heal target';
  targets: 1;
  effect: [{add: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.WATER]}];
}

export class Revive extends SpellSkill {
  name: 'Revive';
  description: 'Restore life to target';
  targets: 1;
  effect: [{remove: StatusEffect.LIFELESS; chance: 0.9; tags: []}];
}

export class Cure extends SpellSkill {
  name: 'Cure';
  description: 'Cures StatusEffects';
  targets: 1;
  effect: [
    {remove: StatusEffect.COLD; chance: 1},
    {remove: StatusEffect.DOOMED; chance: 1},
    {remove: StatusEffect.INFECTION; chance: 1},
    {remove: StatusEffect.SILENCE; chance: 1},
  ];
}

export class Barrier extends SpellSkill {
  name: 'Barrier';
  description: 'Barrier StatusEffects';
  targets: 1;
  effect: [{add: StatusEffect.BARRIER; chance: 1; tags: [EffectTag.AIR]}];
}

export class Boom extends SpellSkill {
  name: 'Boom';
  description: 'Cast Boom on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.FIRE]},
  ];
}

export class Reflect extends SpellSkill {
  name: 'Reflect';
  description: 'Cast Reflect on target';
  targets: 1;
  effect: [{add: StatusEffect.REFLECT; chance: 1}];
}

export class Flare extends SpellSkill {
  name: 'Flare';
  description: 'Cast Flare on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.FIRE]},
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.LIGHT]},
  ];
}

export class Meteor extends SpellSkill {
  name: 'Meteor';
  description: 'Cast Meteor on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.FIRE]},
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.EARTH]},
  ];
}

export class Telepathy extends SpellSkill {
  name: 'Telepathy';
  description: 'Cast Telepathy on target';
  targets: 1;
  effect: [
    {
      remove: StatusEffect.LIFELESS;
      quanity: '1d6+4';
      tags: [EffectTag.PSYCHIC];
    },
  ];
}

export class Light extends SpellSkill {
  name: 'Light';
  description: 'Cast light on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.LIGHT]},
  ];
}

export class Desolate extends SpellSkill {
  name: 'Desolate';
  description: 'To make an area empty or bare.';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+4'; tags: [EffectTag.DARKNESS]},
    {
      remove: StatusEffect.LIFELESS;
      quanity: '1d6+4';
      tags: [EffectTag.DARKNESS];
    },
  ];
}

export class Darkness extends SpellSkill {
  name: 'Darkness';
  description: 'Decrease the area that your opponent can see';
  targets: 1;
  effect: [
    {
      remove: StatusEffect.LIFELESS;
      quanity: '1d6+4';
      tags: [EffectTag.DARKNESS];
    },
  ];
}

export class Stop extends SpellSkill {
  name: 'Stop';
  description: 'Freezes a chracter in time';
  targets: 1;
  effect: [
    {
      add: StatusEffect.STOP;
      tags: [EffectTag.TIME];
    },
  ];
}

export class Slow extends SpellSkill {
  name: 'Slow';
  description: 'Slow down an opponent';
  targets: 1;
  effect: [
    {
      add: StatusEffect.SLOW;
      tags: [EffectTag.TIME];
    },
  ];
}

export class Haste extends SpellSkill {
  name: 'Haste';
  description: 'Speed up a character';
  targets: 1; // self
  effect: [
    {
      add: StatusEffect.HASTE;
      tags: [EffectTag.TIME];
    },
  ];
}

export class Chill extends SpellSkill {
  name: 'Chill';
  description: '';
  targets: 1;
}

export class Charm extends SpellSkill {
  name: 'Charm';
  description: '';
  targets: 1;
}

export class Frost extends SpellSkill {
  name: 'Frost';
  description: '';
  targets: 1;
}

export class Absorb extends SpellSkill {
  name: 'Frost';
  description: '';
  targets: 1;
}

export class Leech extends SpellSkill {
  name: 'Leech';
  description: '';
  targets: 1;
}

export class Drain extends SpellSkill {
  name: 'Drain';
  description: '';
  targets: 1;
}
