/*
 * Attributes are the primary way to describe a character's **last known state**.
 * Gauge attributes such as Life, Spirit, and Drive have a current value and a maximum value.
 * The maximum value may be exceeded, but the current value cannot be negative.
 * The current value is variable, and may be modified by actions.
 * The maximum value is fixed, and cannot be modified by actions. Instead it is computed from the
 * character's discipline, the character's level, and the character's equipment.
 * https://en.wikipedia.org/wiki/Attribute_(role-playing_games)
 */

export enum Attribute {
  EXPERIENCE = 'Experience',
  LIFE = 'Life',
  SPIRIT = 'Spirit',
  DRIVE = 'Drive',
  POWER = 'Power',
  SPEED = 'Speed',
  WISDOM = 'Wisdom',
  INTELLIGENCE = 'Intelligence',
  DEFENSE = 'Defense',
  ACCURACY = 'Accuracy',
  EVASION = 'Evasion',
  LUCK = 'Luck',
}

// stat bonus are computed at runtime
export class Life {
  current: number;
  max: number;
}

// stat bonus are computed at runtime
export class Drive {
  current: number;
  max: number;
}

// stat bonus are computed at runtime
export class Spirit {
  current: number;
  max: number;
}

export class Stats {
  // The ability to apply force to ones movements
  power: number;

  // The ability to move quickly
  speed: number;

  // The quality of having experience, knowledge, and good judgment.
  wisdom: number;

  // The ability to think and reason logically.
  intelligence: number;

  // The ability to protect and defend oneself.
  defense: number;

  // The ability to hit and injure others.
  accuracy: number;

  // The ability to avoid and evade attacks.
  evasion: number;

  // The ability to have a favorable outcome.
  luck: number;
}
