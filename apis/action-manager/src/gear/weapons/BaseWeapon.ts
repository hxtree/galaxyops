/**
 * Weapon is a tag applied to a weapon class and is used to determine the damage type of the weapon.
 * It is used to determine equability, weakness and resistance.
 * For example, a character may be immune to unarmed attacks therefore boxing gloves would deal no damage.
 */
 export enum WeaponCategory {
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
    SHEILD_SWOARD = 'Shield Sword',
    TOME = 'Tome',
    WAND = 'Wand',
    UNARMED = 'Unarmed',
    UNKNOWN = 'Unknown'
}

export abstract class BaseWeapon {
    protected name: string;
    protected description: string;
}