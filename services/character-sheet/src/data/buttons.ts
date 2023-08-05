export enum Button {
  // use button combination to invoke hard values rather than depending on system to support pressure sensitivity
  UP = 'UP',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  DOWN = 'DOWN',

  SQUARE = 'SQUARE',
  CIRCLE = 'CIRCLE',
  TRIANGLE = 'TRIANGLE',
  CROSS = 'CROSS',
}

/**
 * skills can either be activated by button combination or menu selection.
 */
export type ButtonCombo = BUTTON[];

/**
 * Because there may be more than one way to activate a combo
 */
export type ButtonCombos = BUTTON[][];
