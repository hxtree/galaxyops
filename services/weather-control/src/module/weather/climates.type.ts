export enum ClimateType {
  /**
   * an average temperature in every month of above 18C/64.4F
   * There is no winter season, and annual rainfall is large and exceeds the annual evaporation.
   */
  TROPICAL = 'TROPICAL',

  /**
   * Most arid climates receive 10 to 30 centimeters (four to 12 inches) of rain each year,
   */
  DRY = 'DRY',

  /**
   * Temperate climates of the Earth are characterized by relatively moderate mean
   * annual temperatures, with average monthly temperatures above 10C/50F in their
   * warmest months and above −3C/37.4F in their colder months
   */
  TEMPERATE = 'TEMPERATE',

  /**
   * very hot summers and very cold winters,
   */
  CONTINENTAL = 'CONTINENTAL',

  /**
   * polar climate is a place where the climate usually has a temperature below
   * freezing, icy, and covered in snow.
   * These areas do not get direct heat and sunlight from the sun.
   * Polar climates are located at the north and south pole
   */
  POLAR = 'POLAR',
}
