/**
 * Weapon is a tag applied to a weapon class and is used to determine the damage type of the weapon.
 * It is used to determine equability, weakness and resistance.
 * For example, a character may be immune to unarmed attacks therefore boxing gloves would deal no damage.
 */
 export enum WeaponCategory {
    ARROW = 'Arrow',
    BOW = 'Bow',
    BLADE = 'Blade',
    BOOMERANG = 'Boomerange',
    BROAD_SWORD = 'Broadsword',
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
    SHIELD_SWORD = 'Shield Sword',
    TOME = 'Tome',
    TWO_HANDED_AXE = 'Two-handed Axe', // todo should this be based on weight and dependent on character
    WAND = 'Wand',
    UNARMED = 'Unarmed',
    UNKNOWN = 'Unknown'
}

export interface Weapon {
    // the name of the weapon, used to identify the weapon.
    name: string;
    // the category of the weapon, used to determine equability, weakness and resistance.
    category: WeaponCategory;
    // the immediately evident appearance of the weapon
    description?: string;
    // the history of the weapon, can be revealed by a special ability.
    history?: string | null;
}

/**
 * Axes
 */
class AsminsAze implements Weapon {
    name: 'Asmin\'s Axe';
    category: WeaponCategory.TWO_HANDED_AXE;
}

class GreatWail implements Weapon {
    name: 'Great Wail';
    category: WeaponCategory.TWO_HANDED_AXE;
}

class Justice implements Weapon {
    name: 'Justice';
    category: WeaponCategory.TWO_HANDED_AXE;
}

class Keystone implements Weapon {
    name: 'Keystone';
    category: WeaponCategory.TWO_HANDED_AXE;
}

/**
 * Boomerangs
 */
class Assaulter implements Weapon {
    name: 'Assaulter';
    category: WeaponCategory.BOOMERANG;
}
class Striker implements Weapon {
    name: 'Striker';
    category: WeaponCategory.BOOMERANG;
}

/**
 * Shieldsword
 * They can also be used as a shield (Guard).
 *
 * Gear Slots – Right Hand AND Left Hand
 */
 class EnergyBreaker implements Weapon {
    name: 'Energy Breaker';
    category: WeaponCategory.SHIELD_SWORD;
    description: string = 'An extremely large and heavy weapon that absorbs and releases energy.';

    // SPEED_DECREASE 1d5
    // FIRE 2d5
}

class StoneBreaker implements Weapon {
    name: 'Stone Breaker';
    category: WeaponCategory.SHIELD_SWORD;
    description: 'An extremely large and heavy weapon with a special guilloche handle for grip.';
    history: 'It was reportedly used by Galax to bring peace.';

    // Increases wait time
    // Increases recovery time
    // Increases damage
    // Increases experience earned.
}

class TheManSlayer implements Weapon {
    name: 'The Man Slayer';
    category: WeaponCategory.SHIELD_SWORD;
    description: 'A giant ancient hellish looking blade. Its handle bares a dogtooth design.';
    history: 'It was reportedly used by Galax to bring peace.';
}

/**
 * Broadsword
 * Broad swords are swords with a wide blade that are heavy
 * They require two hands to wield, and difficult to maneuver yet have a strong attack.
 *
 * Gear Slots – Right Hand AND Left Hand
 */
class HerosBlade implements Weapon {
    name: 'Hero\'s Blade';
    category: WeaponCategory.BROAD_SWORD;
    description: 'A mystical blade that is destine to fall into the hands of the next true hero.';
}

class SwordOfLawzon implements Weapon {
    name: 'Sword of Lawzon';
    category: WeaponCategory.BROAD_SWORD;
    description: string = 'A dirty simple solid blade forged of harden steel.';
}

