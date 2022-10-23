import { EffectRecord } from '../table.effect';
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
export declare enum Spell {
    GRAVITY = "Gravity",
    SHOCK = "Shock",
    QUAKE = "Quake",
    LANDSLIDE = "Landslide",
    BLIZZARD = "Blizzard",
    DARKNESS = "Darkness",
    STOP = "Stop",
    SLOW = "Slow",
    HASTE = "Haste",
    CHILL = "Chill",
    CHARM = "Charm",
    FROST = "Frost",
    LEECH = "Leech",
    DRAIN = "Drain",
    FIREBALL = "Fireball",
    INFERNO = "Inferno",
    TWISTER = "Twister",
    GUST = "Gust",
    GALE = "Gale",
    CYCLONE = "Cyclone",
    TSUMANI = "Tsunami",
    AQUA = "Aqua",
    HEAL = "Heal",
    REVIVE = "Revive",
    CURE = "Cure",
    BARRIR = "Barrier",
    BOOM = "Boom",
    REFLECT = "Reflect",
    FLARE = "Flare",
    MERTEOR = "Meteor",
    TELEPATHY = "Telepathy",
    LIGHT = "Light",
    DESOLATE = "Desolate"
}
export declare namespace SpellSkill {
    type SpellType = {
        name: string;
        description: string;
        targets?: number;
        effect?: EffectRecord[];
    };
    const Gravity: SpellType;
    const Shock: SpellType;
    const Quake: SpellType;
    const Landslide: SpellType;
    const Blizzard: SpellType;
    const Fireball: SpellType;
    const Inferno: SpellType;
    const Twister: SpellType;
    const Gust: SpellType;
    const Gale: SpellType;
    const Cyclone: SpellType;
    const Tsunami: SpellType;
    const Aqua: SpellType;
    const Heal: SpellType;
    const Revive: SpellType;
    const Cure: SpellType;
    const Barrier: SpellType;
    const Boom: SpellType;
    const Reflect: SpellType;
    const Flare: SpellType;
    const Meteor: SpellType;
    const Telepathy: SpellType;
    const Light: SpellType;
    const Desolate: SpellType;
    const Darkness: SpellType;
    const Stop: SpellType;
    const Slow: SpellType;
    const Haste: SpellType;
    const Chill: SpellType;
    const Charm: SpellType;
    const Frost: SpellType;
    const Absorb: SpellType;
    const Leech: SpellType;
    const Drain: SpellType;
}
