/**
 * Tag  are used in determining effectiveness of an effect with regards to weaknesses and resistances
 * can be to assign to a action, trait, or effect.
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

    // 
    POISON = 'Poison', 

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
