import { WeaponSkill } from './weapon.skill';
/**
 * Weapon is a tag applied to a weapon class and is used to determine the damage type of the weapon.
 * It is used to determine equability, weakness and resistance.
 * For example, a character may be immune to unarmed attacks therefore boxing gloves would deal no damage.
 */
export declare enum WeaponCategory {
    ARROW = "Arrow",
    BOW = "Bow",
    BLADE = "Blade",
    BOOMERANG = "Boomerange",
    BROAD_SWORD = "Broadsword",
    BLUNT = "Blunt",
    CLAW = "Claw",
    CROSSBOW = "Crossbow",
    DAGGER = "Dagger",
    DART = "Dart",
    FLAIL = "Flail",
    HAMMER = "Hammer",
    HAND_AXE = "Hand Axe",
    HAND_SWORD = "Hand Sword",
    HATCHET = "Hatchet",
    KNIFE = "Knife",
    MACE = "Mace",
    POLEARM = "Polearm",
    SHIELD = "Shield",
    STAFF = "Staff",
    SWORD = "Sword",
    SHIELD_SWORD = "Shield Sword",
    RAPIER = "Rapiers",
    TOME = "Tome",
    TWO_HANDED_AXE = "Two-handed Axe",
    WAND = "Wand",
    UNARMED = "Unarmed",
    UNKNOWN = "Unknown",
    PENDANT = "Pendant",
    DUAL_KYOKETSU_SHOGE = "Dual Kyoketsu Shoge"
}
export declare abstract class Weapon {
    abstract name: string;
    abstract category: WeaponCategory;
    abstract description?: string;
    abstract history?: string | null;
    abstract power: number;
    abstract speed: number;
    abstract area: number;
    abstract actions: Array<WeaponSkill>;
}
export declare enum Weapons {
    ASMINS_AXE = "Asmin's Axe",
    GREAT_WAIL = "Great Wail",
    JUSTICE = "Justice",
    KEYSTONE = "Keystone",
    ASSUALTER = "Assaulter",
    STRIKER = "Striker",
    ENERGY_BREAKER = "Energy Breaker",
    STONE_BREAKER = "Stone Breaker",
    THE_MAN_SLAYER = "The Man Slayer",
    HEROS_BLADE = "Hero's Blade",
    SWORD_OF_LAWZON = "Sword of Lawzon",
    TINY_TIMBER = "Tiny Timber",
    CADUCEUS = "Caduceus",
    ANTEDILUVIAN = "Antediluvian",
    ETERNAL_FOLD = "Eternal Fold",
    GOLD_RUSH = "Gold Rush",
    KINGS_BLADE = "Kings Blade",
    RUSTY_RAPIER = "Rusty Rapier",
    MYSTERIOUS_PENDANT = "Mysterious Pendant",
    PEACEKEEPER = "PeaceKeeper",
    TROUBLE_MAKER = "Trouble Maker",
    STANDARD_ISSUE = "Standard Issue",
    GREED = "Greed",
    LIBERTY = "Liberty",
    MONARCH = "Monarch",
    REGRET = "Regret",
    VICEROY = "Viceroy",
    VIOLATED = "Violated"
}
/**
 * Shields
 */
