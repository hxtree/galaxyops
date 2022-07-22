// Is this more of a system then a component?
export enum ActionCategory {
    MOVEMENT = 'Movement', // changes position
    MENU = 'Menu', // activated via menu
    COMBO = 'Combo', // activated via combo
    INTERACTION = 'Interaction',
    WEAPON = 'Weapon',
    CLASS = 'Class',
    DRIVE = 'Drive',
    PARTY = 'Party',
    GEAR = 'Gear', // are related to the use of gear
    NATURAL = 'Natural', //  actions that do not need to be called to be used
}

/**
 * EffectTag are used to determine weakness and resistance
 * A collection of modifiers types that are permittable to assign to a action, trait, or effect.
 * For example, if a weapon deals fire damage but the target is immune to fire, the weapon will deal no damage.
 */
export enum EffectTag {
    // Element
    ELECTRIC = "Electric", // this is the damage type modifier for lightning. 
    AIR = "Air", // this is the damage type modifier for wind.
    EARTH = "Earth", // this is the damage type modifier for earth.
    FIRE = "Fire", // this is the damage type modifier for fire.
    WATER = "Water", // this is the damage type modifier for water.
    NATURE = "Nature", // this is the damage type modifier for nature. 
    PHYSICAL = "Physical", // this is the damage type modifier for physical.
    PSYCHIC = "Psychic", // this is the damage type modifier for psychic.
    DARKNESS = "Darkness", // this is the damage type modifier for darkness.
    LIGHT = "Light", // this is the damage type modifier for light.

    // flying
    AERIAL = 'Aerial', // happening in the sky, effective against flying
    GROUNDLEVEL = 'Ground-Level', // happens on the ground, ineffective against flying 

    // Weapon
    ARROW = 'Arrow',
    BOW = 'Bow',
    BLADE = 'Blade',
    BLUNT = 'Blunt',
    CLAW = 'Claw',
    CROSSBOW = 'Crossbow',
    DAGGER = 'Dagger',
    DART = 'Dart',
    FLAIL = 'Flail',
    HAMMER = 'Hammer',
    HAND_AXE = 'Hand Axe',
    HAND_SWORD = 'Hand Sword',
    HATCHET = 'Hatchet',
    KNIFE = 'Knife',
    MACE = 'Mace',
    POLEARM = 'Polearm',
    SHIELD = 'Shield',
    STAFF = 'Staff',
    SWORD = 'Sword',
    SHEILD_SWORD = 'Shield Sword',
    TOME = 'Tome',
    WAND = 'Wand',
    UNARMED = 'Unarmed',
    UNKNOWN = 'Unknown'
}


/**
 * Stat Modifer categorize the impact on target and during action processing
 */
export enum StatModifier {
    LIFE_DECREASE = "Life Decrease",
    LIFE_INCREASE = "Life Increase",
    SPIRIT_DECREASE = "Spirit Decrease",
    SPIRIT_INCREASE = "Spirit Increase",
    DRIVE_DECREASE = "Drive Decrease",
    DRIVE_INCREASE = "Drive Increase",
    POWER_DECREASE = "Power Decrease",
    POWER_INCREASE = "Power Increase",
    SPEED_DECREASE = "Speed Decrease",
    SPEED_INCREASE = "Speed Increase",
    WISDOM_DECREASE = "Wisdom Decrease",
    WISDOM_INCREASE = "Wisdom Increase",
    INTELLIGENCE_DECREASE = "Intelligence Decrease",
    INTELLIGENCE_INCREASE = "Intelligence Increase",
    DEFENSE_DECREASE = "Defense Decrease",
    DEFENSE_INCREASE = "Defense Increase",
    ACCURACY_DECREASE = "Accuracy Decrease",
    ACCURACY_INCREASE = "Accuracy Increase",
    EVASION_DECREASE = "Evasion Decrease",
    EVASION_INCREASE = "Evasion Increase",
    LUCK_DECREASE = "Luck Decrease",
    LUCK_INCREASE = "Luck Increase",

}

/**
 * Status effects are abnormal states that may have positive or negative effects
 * they can be gained from actions or items and can be healed by resting, certain
 * abilities, or after some time.
 */
export enum StatusEffect {
    BERSERK = "Berserk", // character can only attack. Power increased by Drive.
    LIFELESS = "Lifeless", // Afflicted when Life is less than 0
    KNOCKED_OUT = "Knocked Out", // character is unable to move. Set when Stamina is less than 0.
    CONFUSED = "Confused",
    DRUNK = "Drunk", //  character accuracy decreases.
    DOOMED = "Doomed", // heal before timer runs out or character KOs
    MORTALLY_WOUNDED = "Mortally Wounded",
    FROZEN = "Frozen",
    COLD = "Cold", //  Speed reduced
    BURNED = "Burned", 
    BOUND = "Bound", // Cannot do anything but Break Free or use Tool  (interaction)
    SLEEPY = "Sleepy",
    STUNNED = "Stunned",
    DOWN = "Down", // character is disabled and has fallen down
    DISARMED = "Disarmed", // character must get weapon and arm self again in order to attack.
    BLITZ = "Blitz", // Strength and are speed modified for only duration of battle (-5x through +5x) 
    EXILED = "Exiled", // Kick out of battle cannot return until battle is over 
    INFECTION = "Infection", // Damage is received each turn until infliction is healed. 
    METAMORPHIC = "Metamorphic", // You are inflicted with random status affect each turn. 
    OMNI = "Omni", // character enters a berserk like mode and attacks uncontrollable.
    FEAR = "Fear", // character cannot move.
    IGNORANT = "Ignorant", // character unable to use Learn
    ZIPPED = "Zipped", // character cannot use Gear.
    SILENCE = "Silence", // character cannot use Spells.
    FATHOM = "Fathom", // character cannot use Drive.
    DROWNED = "Drowned",
    BARRIER = "Barrier", // damage taken decreases
} 

export interface IEffectStat {
    modify: StatModifier, 
    amount: string,
    tags?: Array<EffectTag>
}

export interface IEffectStatusEffect {
    add?: StatusEffect, 
    remove?: StatusEffect, 
    chance: number,
    tags?: Array<EffectTag>
}

/**
 * Actions are decoupled from the actor and target. 
 */
export interface IAction {
    name: string;
    description: string;
    effect: Array<IEffectStat | IEffectStatusEffect>;
}



// Combat Log
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
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.PHYSICAL, EffectTag.AERIAL]
        }
    ];
}

export class Shock implements IAction {
    name: "Shock";
    description: "Electrocutes target";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.ELECTRIC]
        },
        {
            add: StatusEffect.STUNNED,
            chance: 0.2,
            tags: [EffectTag.ELECTRIC]
        }
    ];
}


export class Quake implements IAction {
    name: "Quake";
    description: "Shakes earth surrounding target";
    targets: 1; // AOE?
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.EARTH]
        },
        {
            add: StatusEffect.DOWN,
            chance: 0.2,
            tags: [EffectTag.EARTH, EffectTag.GROUNDLEVEL]
        }
    ];
}

export class Landslide implements IAction {
    name: "Landslide";
    description: "Creates a landslide";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.EARTH]
        },
        {
            add: StatusEffect.DOWN,
            chance: 0.2,
            tags: [EffectTag.EARTH]
        },
        {
            add: StatusEffect.EXILED,
            chance: 0.3,
            tags: [EffectTag.EARTH]
        }        
    ];
}


export class Blizzard implements IAction {
    name: "Blizzard";
    description: "Creates a Blizzard";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.WATER, EffectTag.AIR]
        },
        {
            add: StatusEffect.COLD,
            chance: 0.2,
            tags: [EffectTag.WATER, EffectTag.AIR]
        },
        {
            add: StatusEffect.EXILED,
            chance: 0.3,
            tags: [EffectTag.WATER, EffectTag.AIR]
        }        
    ];
}

export class Inferno implements IAction {
    name: "Inferno";
    description: "Creates a Inferno";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.FIRE]
        },
        {
            add: StatusEffect.BURNED,
            chance: 0.2,
            tags: [EffectTag.FIRE]
        }
    ];
}


export class Twister implements IAction {
    name: "Twister";
    description: "Creates a Twister";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.AIR]
        },
        {
            add: StatusEffect.BURNED,
            chance: 0.2,
            tags: [EffectTag.AIR, EffectTag.AERIAL]
        }
    ];
}

export class Gust implements IAction {
    name: "Gust";
    description: "Creates a Gust";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.AIR]
        },
        {
            add: StatusEffect.EXILED,
            chance: 0.2,
            tags: [EffectTag.AIR, EffectTag.AERIAL]
        }
    ];
}

export class Gale implements IAction {
    name: "Gale";
    description: "Creates Gale";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.AIR]
        },
        {
            add: StatusEffect.EXILED,
            chance: 0.2,
            tags: [EffectTag.AIR, EffectTag.AERIAL]
        }
    ];
}


export class Cyclone implements IAction {
    name: "Cyclone";
    description: "Creates Cyclone";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.AIR]
        },
        {
            add: StatusEffect.EXILED,
            chance: 0.2,
            tags: [EffectTag.AIR, EffectTag.AERIAL]
        }
    ];
}


export class Tsunami implements IAction {
    name: "Tsunami";
    description: "Creates Tsunami";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.WATER]
        },
        {
            add: StatusEffect.EXILED,
            chance: 0.2,
            tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL]
        }
    ];
}


export class Aqua implements IAction {
    name: "Aqua";
    description: "Creates Aqua";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_DECREASE, 
            amount: "1d6+2",
            tags: [EffectTag.WATER]
        },
        {
            add: StatusEffect.EXILED,
            chance: 0.2,
            tags: [EffectTag.WATER, EffectTag.GROUNDLEVEL]
        }
    ];
}


export class Heal implements IAction {
    name: "Heal";
    description: "Heal target";
    targets: 1;
    effect: [
        {
            modify: StatModifier.LIFE_INCREASE, 
            amount: "1d6+2",
            tags: [EffectTag.WATER]
        }
    ];
}

export class Revive implements IAction {
    name: "Revive";
    description: "Restore life to target";
    targets: 1;
    effect: [
        {
            remove: StatusEffect.LIFELESS, 
            chance: 0.9,
            tags: []
        }
    ];
}

export class Cure implements IAction {
    name: "Cure";
    description: "Cures StatusEffects";
    targets: 1;
    effect: [
        {
            remove: StatusEffect.COLD, 
            chance: 1,
        },
        {
            remove: StatusEffect.DOOMED, 
            chance: 1,
        },
        {
            remove: StatusEffect.INFECTION, 
            chance: 1,
        },
        {
            remove: StatusEffect.SILENCE, 
            chance: 1,
        }
    ];
}


export class Barrier implements IAction {
    name: "Barrier";
    description: "Barrier StatusEffects";
    targets: 1;
    effect: [
        {
            add: StatusEffect.BARRIER, 
            chance: 1,
            tags: [EffectTag.AIR]
        },
    ];
}

// Reflect
// Boom
// Meteor
// Telepathy
// Flare
// Darkness
// Light