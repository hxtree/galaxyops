import { WeaponCategory } from '../equipment/Weapon';
/**
 * ElementModifierTags are a type of tag used to determine weakness and resistance
 * For example, if a weapon deals fire damage but the target is immune to fire, the weapon will deal no damage.
 */
export declare enum ElementModifierTag {
    ELECTRIC = "Electric",
    AIR = "Air",
    EARTH = "Earth",
    FIRE = "Fire",
    WATER = "Water",
    NATURE = "Nature",
    PHYSICAL = "Physical",
    PSYCHIC = "Psychic",
    DARKNESS = "Darkness",
    LIGHT = "Light",
    TIME = "Time"
}
/**
 * StatisticModifierTag are used to determine weakness and resistances to character statisitcs
 * chabges that could be the result of a trait, action, or effect and are used for computation purposes.
 * Sometimes statistic modification is the sole purpose of an attack.
 */
export declare enum TargetModifier {
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
    LUCK_INCREASE = "Luck Increase"
}
/**
 * ModifierTag is a type of tag used to determine weakness and resistance
 * A collection of modifiers types that are permittable to assign to a action, trait, or effect.
 */
export declare const ModifierTag: {
    ARROW: WeaponCategory.ARROW;
    BOW: WeaponCategory.BOW;
    BLADE: WeaponCategory.BLADE;
    BOOMERANG: WeaponCategory.BOOMERANG;
    BROAD_SWORD: WeaponCategory.BROAD_SWORD;
    BLUNT: WeaponCategory.BLUNT;
    CLAW: WeaponCategory.CLAW;
    CROSSBOW: WeaponCategory.CROSSBOW;
    DAGGER: WeaponCategory.DAGGER;
    DART: WeaponCategory.DART;
    FLAIL: WeaponCategory.FLAIL;
    HAMMER: WeaponCategory.HAMMER;
    HAND_AXE: WeaponCategory.HAND_AXE;
    HAND_SWORD: WeaponCategory.HAND_SWORD;
    HATCHET: WeaponCategory.HATCHET;
    KNIFE: WeaponCategory.KNIFE;
    MACE: WeaponCategory.MACE;
    POLEARM: WeaponCategory.POLEARM;
    SHIELD: WeaponCategory.SHIELD;
    STAFF: WeaponCategory.STAFF;
    SWORD: WeaponCategory.SWORD;
    SHIELD_SWORD: WeaponCategory.SHIELD_SWORD;
    RAPIER: WeaponCategory.RAPIER;
    TOME: WeaponCategory.TOME;
    TWO_HANDED_AXE: WeaponCategory.TWO_HANDED_AXE;
    WAND: WeaponCategory.WAND;
    UNARMED: WeaponCategory.UNARMED;
    UNKNOWN: WeaponCategory.UNKNOWN;
    PENDANT: WeaponCategory.PENDANT;
    DUAL_KYOKETSU_SHOGE: WeaponCategory.DUAL_KYOKETSU_SHOGE;
    ELECTRIC: ElementModifierTag.ELECTRIC;
    AIR: ElementModifierTag.AIR;
    EARTH: ElementModifierTag.EARTH;
    FIRE: ElementModifierTag.FIRE;
    WATER: ElementModifierTag.WATER;
    NATURE: ElementModifierTag.NATURE;
    PHYSICAL: ElementModifierTag.PHYSICAL;
    PSYCHIC: ElementModifierTag.PSYCHIC;
    DARKNESS: ElementModifierTag.DARKNESS;
    LIGHT: ElementModifierTag.LIGHT;
    TIME: ElementModifierTag.TIME;
};
export declare type ModifierTag = typeof ModifierTag;
