/**
 * Events that occur can change happiness.
 * Spells can also change Happiness.
 * It is possible, for a spell cast on the focal point to change the weather.
 */
export enum HappinessType {
  EXUBERANT = 'EXUBERANT',
  JOYFUL = 'JOYFUL',
  VERY_HAPPY = 'VERY HAPPY',
  HAPPY = 'HAPPY',
  SATISFIED = 'SATISFIED',
  CONTENT = 'CONTENT',
  UNHAPPY = 'UNHAPPY',
  SAD = 'SAD',
  VERY_SAD = 'VERY_SAD',
  DEPRESSED = 'DEPRESSED',
  HOPELESS = 'HOPELESS',
}
