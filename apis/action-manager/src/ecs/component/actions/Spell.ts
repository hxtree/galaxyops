import {Action} from './Action';
import {Attribute} from '../character/Attribute';
import {EffectTag} from '../character/EffectTag';
import {StatusEffect} from '../character/StatusEffect';

export interface Spell extends Action {}

// If spell
// 0 – 3		Normal Spell
// 3 – 6		Mega Spell
// 6 – 9		Giga Spell
// 9 – 12		Tera Spell
// 12 – 15	Omega Spell
// This is just the name used for the attack depending on skill level

export class Gravity implements Spell {
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

export class Shock implements Spell {
  name: 'Shock';
  description: 'Electrocutes target';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.ELECTRIC]},
    {add: StatusEffect.STUNNED; chance: 0.2; tags: [EffectTag.ELECTRIC]},
  ];
}

export class Quake implements Spell {
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

export class Landslide implements Spell {
  name: 'Landslide';
  description: 'Creates a landslide';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.EARTH]},
    {add: StatusEffect.DOWN; chance: 0.2; tags: [EffectTag.EARTH]},
    {add: StatusEffect.EXILED; chance: 0.3; tags: [EffectTag.EARTH]},
  ];
}

export class Blizzard implements Spell {
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

export class Inferno implements Spell {
  name: 'Inferno';
  description: 'Creates a Inferno';
  targets: 1;
  effect: [
    {remove: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.FIRE]},
    {add: StatusEffect.BURNED; chance: 0.2; tags: [EffectTag.FIRE]},
  ];
}

export class Twister implements Spell {
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

export class Gust implements Spell {
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

export class Gale implements Spell {
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

export class Cyclone implements Spell {
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

export class Tsunami implements Spell {
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

export class Aqua implements Spell {
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

export class Heal implements Spell {
  name: 'Heal';
  description: 'Heal target';
  targets: 1;
  effect: [{add: Attribute.LIFE; quanity: '1d6+2'; tags: [EffectTag.WATER]}];
}

export class Revive implements Spell {
  name: 'Revive';
  description: 'Restore life to target';
  targets: 1;
  effect: [{remove: StatusEffect.LIFELESS; chance: 0.9; tags: []}];
}

export class Cure implements Spell {
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

export class Barrier implements Spell {
  name: 'Barrier';
  description: 'Barrier StatusEffects';
  targets: 1;
  effect: [{add: StatusEffect.BARRIER; chance: 1; tags: [EffectTag.AIR]}];
}

export class Boom implements Spell {
  name: 'Boom';
  description: 'Cast Boom on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.FIRE]},
  ];
}

export class Reflect implements Spell {
  name: 'Reflect';
  description: 'Cast Reflect on target';
  targets: 1;
  effect: [{add: StatusEffect.REFLECT; chance: 1}];
}

export class Flare implements Spell {
  name: 'Flare';
  description: 'Cast Flare on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.FIRE]},
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.LIGHT]},
  ];
}

export class Meteor implements Spell {
  name: 'Meteor';
  description: 'Cast Meteor on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.FIRE]},
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.EARTH]},
  ];
}

export class Telepathy implements Spell {
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

export class Light implements Spell {
  name: 'Light';
  description: 'Cast light on target';
  targets: 1;
  effect: [
    {remove: StatusEffect.LIFELESS; quanity: '1d6+4'; tags: [EffectTag.LIGHT]},
  ];
}

export class Darkness implements Spell {
  name: 'Darkness';
  description: 'Cast darkness on target';
  targets: 1;
  effect: [
    {
      remove: StatusEffect.LIFELESS;
      quanity: '1d6+4';
      tags: [EffectTag.DARKNESS];
    },
  ];
}

export class Stop implements Spell {
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

export class Slow implements Spell {
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

export class Haste implements Spell {
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
