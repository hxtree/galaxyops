export interface Settings {
  /**
   * whether optional properties are faked:
   * true for always generate
   * false for never generate
   * undefined for based on probability
   */
  optionals?: boolean | undefined;

  /**
   * whether optional properties are shown
   */
  probability?: number;
}

export const defaultSettings: Settings = {
  probability: 0.5,
};
