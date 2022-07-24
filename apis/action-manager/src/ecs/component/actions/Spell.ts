import { IAction } from "./IAction";
import { Attribute } from "../Attribute";
import { EffectTag } from "./EffectTag";
import { StatusEffect } from "./StatusEffect";

// If spell 
// 0 – 3		Normal Spell		
// 3 – 6		Mega Spell
// 6 – 9		Giga Spell
// 9 – 12		Tera Spell
// 12 – 15	Omega Spell
// This is just the name used for the attack depending on skill level

export class Gravity implements IAction {
    name: "Gravity";
    description: "Coalesce gravity around target. Causes flying targets to hit ground";
    targets: 1;
    effect: [
        { remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.PHYSICAL, EffectTag.AERIAL]}
    ];
}

export class Shock implements IAction {
    name: "Shock";
    description: "Electrocutes target";
    targets: 1;
    effect: [
        { remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.ELECTRIC]},
        { add: StatusEffect.STUNNED, chance: 0.2, tags: [EffectTag.ELECTRIC]}
    ];
}

export class Quake implements IAction {
    name: "Quake";
    description: "Shakes earth surrounding target";
    targets: 1; // AOE?
    effect: [
        { remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.EARTH] },
        { add: StatusEffect.DOWN, chance: 0.2, tags: [EffectTag.EARTH, EffectTag.GROUNDLEVEL] }
    ];
}

export class Landslide implements IAction {
    name: "Landslide";
    description: "Creates a landslide";
    targets: 1;
    effect: [
        {remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.EARTH]  },
        {add: StatusEffect.DOWN, chance: 0.2, tags: [EffectTag.EARTH]},
        {add: StatusEffect.EXILED,chance: 0.3, tags: [EffectTag.EARTH]}        
    ];
}

export class Blizzard implements IAction {
    name: "Blizzard";
    description: "Creates a Blizzard";
    targets: 1;
    effect: [
        { remove: Attribute.LIFE, quanity: "1d6+2",tags: [EffectTag.WATER, EffectTag.AIR] },
        {add: StatusEffect.COLD, chance: 0.2,  tags: [EffectTag.WATER, EffectTag.AIR] },
        { add: StatusEffect.EXILED, chance: 0.3, tags: [EffectTag.WATER, EffectTag.AIR]}        
    ];
}

export class Inferno implements IAction {
    name: "Inferno";
    description: "Creates a Inferno";
    targets: 1;
    effect: [
        {remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.FIRE] },
        {add: StatusEffect.BURNED,chance: 0.2, tags: [EffectTag.FIRE]}
    ];
}

export class Twister implements IAction {
    name: "Twister";
    description: "Creates a Twister";
    targets: 1;
    effect: [
        {remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.AIR] },
        { add: StatusEffect.BURNED, chance: 0.2, tags: [EffectTag.AIR, EffectTag.AERIAL] }
    ];
}

export class Gust implements IAction {
    name: "Gust";
    description: "Creates a Gust";
    targets: 1;
    effect: [
        { remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.AIR]},
        { add: StatusEffect.EXILED, chance: 0.2, tags: [EffectTag.AIR, EffectTag.AERIAL]}
    ];
}

export class Gale implements IAction {
    name: "Gale";
    description: "Creates Gale";
    targets: 1;
    effect: [
        { remove: Attribute.LIFE, quanity: "1d6+2",tags: [EffectTag.AIR]},
        { add: StatusEffect.EXILED,chance: 0.2,tags: [EffectTag.AIR, EffectTag.AERIAL]}
    ];
}

export class Cyclone implements IAction {
    name: "Cyclone";
    description: "Creates Cyclone";
    targets: 1;
    effect: [
        { remove: Attribute.LIFE; quanity: "1d6+2", tags: [EffectTag.AIR]},
        {add: StatusEffect.EXILED, chance: 0.2, tags: [EffectTag.AIR, EffectTag.AERIAL]}
    ];
}

export class Tsunami implements IAction {
    name: "Tsunami";
    description: "Creates Tsunami";
    targets: 1;
    effect: [
        {remove: Attribute.LIFE, quanity: "1d6+2", tags: [EffectTag.WATER]},
        { add: StatusEffect.EXILED,chance: 0.2,tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL]}
    ];
}


export class Aqua implements IAction {
    name: "Aqua";
    description: "Creates Aqua";
    targets: 1;
    effect: [
        { remove: Attribute.LIFE, quanity: "1d6+2",tags: [EffectTag.WATER]},
        {add: StatusEffect.EXILED,chance: 0.2,tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL]}
    ];
}

export class Heal implements IAction {
    name: "Heal";
    description: "Heal target";
    targets: 1;
    effect: [
        { add: Attribute.LIFE, quanity: "1d6+2",tags: [EffectTag.WATER]}
    ];
}

export class Revive implements IAction {
    name: "Revive";
    description: "Restore life to target";
    targets: 1;
    effect: [
        {remove: StatusEffect.LIFELESS, chance: 0.9,tags: [] }
    ];
}

export class Cure implements IAction {
    name: "Cure";
    description: "Cures StatusEffects";
    targets: 1;
    effect: [
        { remove: StatusEffect.COLD,  chance: 1,},
        {remove: StatusEffect.DOOMED, chance: 1,},
        { remove: StatusEffect.INFECTION, chance: 1,},
        {remove: StatusEffect.SILENCE, chance: 1,}
    ];
}

export class Barrier implements IAction {
    name: "Barrier";
    description: "Barrier StatusEffects";
    targets: 1;
    effect: [
        { add: StatusEffect.BARRIER, chance: 1, tags: [EffectTag.AIR]},
    ];
}

export class Boom implements IAction {
    name: "Boom";
    description: "Cast Boom on target";
    targets: 1;
    effect: [
        { remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.FIRE] },
    ];
}

export class Reflect implements IAction {
    name: "Reflect";
    description: "Cast Reflect on target";
    targets: 1;
    effect: [
        { add: StatusEffect.REFLECT, chance: 1},
    ];
}

export class Flare implements IAction {
    name: "Flare";
    description: "Cast Flare on target";
    targets: 1;
    effect: [
        { remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.FIRE] },
        { remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.LIGHT] }
    ];
}

export class Meteor implements IAction {
    name: "Meteor";
    description: "Cast Meteor on target";
    targets: 1;
    effect: [
        {remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.FIRE] },
        {remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.EARTH] }
    ];
}

export class Telepathy implements IAction {
    name: "Telepathy";
    description: "Cast Telepathy on target";
    targets: 1;
    effect: [
        {remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.PSYCHIC] }
    ];
}

export class Light implements IAction {
    name: "Light";
    description: "Cast light on target";
    targets: 1;
    effect: [
        {remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.LIGHT] }
    ];
}

export class Darkness implements IAction {
    name: "Darkness";
    description: "Cast darkness on target";
    targets: 1;
    effect: [
        { remove: StatusEffect.LIFELESS, quanity: "1d6+4", tags: [EffectTag.DARKNESS] }
    ];
}