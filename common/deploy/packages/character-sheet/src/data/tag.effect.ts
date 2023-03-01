/**
 * Tags are used in determining effectiveness of an effect
 * with regards to weaknesses and resistances
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
  METAL = 'Metal',

  // flying
  AERIAL = 'Aerial', // happening in the sky, effective against flying
  GROUND_LEVEL = 'Ground-Level', // happens on the ground, ineffective against flying

  // side effect
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
  SHIELD_SWORD = 'Shield Sword',
  TOME = 'Tome',
  WAND = 'Wand',
  UNARMED = 'Unarmed',
  UNKNOWN = 'Unknown',

  // attribute
  LIFE_DECREASE = 'Life Decrease',
  LIFE_INCREASE = 'Life Increase',
  SPIRIT_DECREASE = 'Spirit Decrease',
  SPIRIT_INCREASE = 'Spirit Increase',
  DRIVE_DECREASE = 'Drive Decrease',
  DRIVE_INCREASE = 'Drive Increase',
  POWER_DECREASE = 'Power Decrease',
  POWER_INCREASE = 'Power Increase',
  SPEED_DECREASE = 'Speed Decrease',
  SPEED_INCREASE = 'Speed Increase',
  WISDOM_DECREASE = 'Wisdom Decrease',
  WISDOM_INCREASE = 'Wisdom Increase',
  INTELLIGENCE_DECREASE = 'Intelligence Decrease',
  INTELLIGENCE_INCREASE = 'Intelligence Increase',
  DEFENSE_DECREASE = 'Defense Decrease',
  DEFENSE_INCREASE = 'Defense Increase',
  ACCURACY_DECREASE = 'Accuracy Decrease',
  ACCURACY_INCREASE = 'Accuracy Increase',
  EVASION_DECREASE = 'Evasion Decrease',
  EVASION_INCREASE = 'Evasion Increase',
  LUCK_DECREASE = 'Luck Decrease',
  LUCK_INCREASE = 'Luck Increase',

  EXPERIENCE = 'Experience',
}
