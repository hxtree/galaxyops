export interface Settings {
  /**
   * whether optional properties are faked:
   * true for always generate
   * false for never generate
   * undefined for based on probability
   */
  optionals?: boolean | undefined;

  /**
   * whether to return a plain old javascript object
   * which is helpful when comparing rest request
   */
  pojo?: boolean | undefined;

  /**
   * whether optional properties are shown
   */
  probability?: number;

  additionalItem?: boolean | undefined;

  additionalProperties?: boolean | undefined;

  ignoreProperties?: boolean | undefined;
}

export const defaultSettings: Settings = {
  probability: 0.5,
  additionalItem: false,
  additionalProperties: false,
  ignoreProperties: true,
};
