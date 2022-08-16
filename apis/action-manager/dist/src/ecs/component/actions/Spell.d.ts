import { Action } from './Action';
import { Attribute } from '../character/Attribute';
import { EffectTag } from '../character/EffectTag';
import { StatusEffect } from '../character/StatusEffect';
export interface Spell extends Action {
}
export declare class Gravity implements Spell {
    name: 'Gravity';
    description: 'Coalesce gravity around target. Causes flying targets to hit ground';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.PHYSICAL, EffectTag.AERIAL];
        }
    ];
}
export declare class Shock implements Spell {
    name: 'Shock';
    description: 'Electrocutes target';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.ELECTRIC];
        },
        {
            add: StatusEffect.STUNNED;
            chance: 0.2;
            tags: [EffectTag.ELECTRIC];
        }
    ];
}
export declare class Quake implements Spell {
    name: 'Quake';
    description: 'Shakes earth surrounding target';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.EARTH];
        },
        {
            add: StatusEffect.DOWN;
            chance: 0.2;
            tags: [EffectTag.EARTH, EffectTag.GROUNDLEVEL];
        }
    ];
}
export declare class Landslide implements Spell {
    name: 'Landslide';
    description: 'Creates a landslide';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.EARTH];
        },
        {
            add: StatusEffect.DOWN;
            chance: 0.2;
            tags: [EffectTag.EARTH];
        },
        {
            add: StatusEffect.EXILED;
            chance: 0.3;
            tags: [EffectTag.EARTH];
        }
    ];
}
export declare class Blizzard implements Spell {
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
        }
    ];
}
export declare class Inferno implements Spell {
    name: 'Inferno';
    description: 'Creates a Inferno';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.FIRE];
        },
        {
            add: StatusEffect.BURNED;
            chance: 0.2;
            tags: [EffectTag.FIRE];
        }
    ];
}
export declare class Twister implements Spell {
    name: 'Twister';
    description: 'Creates a Twister';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.AIR];
        },
        {
            add: StatusEffect.BURNED;
            chance: 0.2;
            tags: [EffectTag.AIR, EffectTag.AERIAL];
        }
    ];
}
export declare class Gust implements Spell {
    name: 'Gust';
    description: 'Creates a Gust';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.AIR];
        },
        {
            add: StatusEffect.EXILED;
            chance: 0.2;
            tags: [EffectTag.AIR, EffectTag.AERIAL];
        }
    ];
}
export declare class Gale implements Spell {
    name: 'Gale';
    description: 'Creates Gale';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.AIR];
        },
        {
            add: StatusEffect.EXILED;
            chance: 0.2;
            tags: [EffectTag.AIR, EffectTag.AERIAL];
        }
    ];
}
export declare class Cyclone implements Spell {
    name: 'Cyclone';
    description: 'Creates Cyclone';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.AIR];
        },
        {
            add: StatusEffect.EXILED;
            chance: 0.2;
            tags: [EffectTag.AIR, EffectTag.AERIAL];
        }
    ];
}
export declare class Tsunami implements Spell {
    name: 'Tsunami';
    description: 'Creates Tsunami';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.WATER];
        },
        {
            add: StatusEffect.EXILED;
            chance: 0.2;
            tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL];
        }
    ];
}
export declare class Aqua implements Spell {
    name: 'Aqua';
    description: 'Creates Aqua';
    targets: 1;
    effect: [
        {
            remove: Attribute.LIFE;
            quanity: '1d6+2';
            tags: [EffectTag.WATER];
        },
        {
            add: StatusEffect.EXILED;
            chance: 0.2;
            tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL];
        }
    ];
}
export declare class Heal implements Spell {
    name: 'Heal';
    description: 'Heal target';
    targets: 1;
    effect: [{
        add: Attribute.LIFE;
        quanity: '1d6+2';
        tags: [EffectTag.WATER];
    }];
}
export declare class Revive implements Spell {
    name: 'Revive';
    description: 'Restore life to target';
    targets: 1;
    effect: [{
        remove: StatusEffect.LIFELESS;
        chance: 0.9;
        tags: [];
    }];
}
export declare class Cure implements Spell {
    name: 'Cure';
    description: 'Cures StatusEffects';
    targets: 1;
    effect: [
        {
            remove: StatusEffect.COLD;
            chance: 1;
        },
        {
            remove: StatusEffect.DOOMED;
            chance: 1;
        },
        {
            remove: StatusEffect.INFECTION;
            chance: 1;
        },
        {
            remove: StatusEffect.SILENCE;
            chance: 1;
        }
    ];
}
export declare class Barrier implements Spell {
    name: 'Barrier';
    description: 'Barrier StatusEffects';
    targets: 1;
    effect: [{
        add: StatusEffect.BARRIER;
        chance: 1;
        tags: [EffectTag.AIR];
    }];
}
export declare class Boom implements Spell {
    name: 'Boom';
    description: 'Cast Boom on target';
    targets: 1;
    effect: [
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.FIRE];
        }
    ];
}
export declare class Reflect implements Spell {
    name: 'Reflect';
    description: 'Cast Reflect on target';
    targets: 1;
    effect: [{
        add: StatusEffect.REFLECT;
        chance: 1;
    }];
}
export declare class Flare implements Spell {
    name: 'Flare';
    description: 'Cast Flare on target';
    targets: 1;
    effect: [
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.FIRE];
        },
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.LIGHT];
        }
    ];
}
export declare class Meteor implements Spell {
    name: 'Meteor';
    description: 'Cast Meteor on target';
    targets: 1;
    effect: [
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.FIRE];
        },
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.EARTH];
        }
    ];
}
export declare class Telepathy implements Spell {
    name: 'Telepathy';
    description: 'Cast Telepathy on target';
    targets: 1;
    effect: [
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.PSYCHIC];
        }
    ];
}
export declare class Light implements Spell {
    name: 'Light';
    description: 'Cast light on target';
    targets: 1;
    effect: [
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.LIGHT];
        }
    ];
}
export declare class Darkness implements Spell {
    name: 'Darkness';
    description: 'Cast darkness on target';
    targets: 1;
    effect: [
        {
            remove: StatusEffect.LIFELESS;
            quanity: '1d6+4';
            tags: [EffectTag.DARKNESS];
        }
    ];
}
