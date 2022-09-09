/**
 * Tag  are used in determining effectiveness of an effect with regards to weaknesses and resistances
 * can be to assign to a action, trait, or effect.
 * Some tags can be automatically added, like LIFE_DECREASE IF attack decreases life.
 */
export enum EffectTag {
  // Element
  ELECTRIC = 'Electric',
  AIR = 'Air',
  EARTH = 'Earth',
  FIRE = 'Fire',
  WATER = 'Water',
  NATURE = 'Nature',
  PHYSICAL = 'Physical',
  PSYCHIC = 'Psychic',
  DARKNESS = 'Darkness',
  LIGHT = 'Light',
  TIME = 'Time',

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
  UNKNOWN = 'Unknown',
}
