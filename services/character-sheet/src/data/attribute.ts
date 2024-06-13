/*
 * Attributes are the primary way to describe a character's **last known state**.
 */
export enum Attribute {
  /** Character Attributes */
  EXPERIENCE = 'Experience',

  /*
   * Gauge attributes
   * Gauges have a current value and a maximum value.
   * The maximum value may be exceeded, but the current value cannot be negative.
   * The current value is variable, and may be modified by actions.
   * The maximum value is fixed, and cannot be modified by actions. Instead it is computed from the
   * character's discipline, the character's level, and the character's equipment.
   * https://en.wikipedia.org/wiki/Attribute_(role-playing_games)
   */
  LIFE = 'Life',
  SPIRIT = 'Spirit',
  DRIVE = 'Drive',

  /** Base Attributes */
  POWER = 'Power',
  SPEED = 'Speed',
  WISDOM = 'Wisdom',
  INTELLIGENCE = 'Intelligence',
  DEFENSE = 'Defense',
  ACCURACY = 'Accuracy',
  EVASION = 'Evasion',
  LUCK = 'Luck',
}
