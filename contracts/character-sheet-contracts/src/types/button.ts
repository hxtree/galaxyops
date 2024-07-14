import { GameContext } from './game-context';

/**
 * use simultaneous button combination to invoke hard press values rather
 * than depending on system to support pressure sensitivity
 */
export enum Button {
  UP = 'UP',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  DOWN = 'DOWN',
  ATTACK = 'ATTACK',
  ACTION = 'ACTION',
  JUMP = 'JUMP',
  CANCEL = 'CANCEL',
  SWAP_CHARACTER_FORWARD = 'SWAP_CHARACTER_FORWARD',
  SWAP_CHARACTER_REVERSE = 'SWAP_CHARACTER_REVERSE',
}

export enum DefaultButtonMapping {
  UP = Button.UP,
  RIGHT = Button.RIGHT,
  LEFT = Button.LEFT,
  DOWN = Button.DOWN,
  CROSS = Button.ATTACK,
  TRIANGLE = Button.ACTION,
  CIRCLE = Button.JUMP,
  SQUARE = Button.CANCEL,
  R1 = Button.SWAP_CHARACTER_FORWARD,
  L1 = Button.SWAP_CHARACTER_REVERSE,
}

export type ButtonCombo = {
  context?: GameContext;
  simultaneous?: Button[];
  inOrder?: Button[];
  // Maximum allowed time difference (in ms) between button presses for timing-based combos
  timingWindowMs?: number;
};

export type PlayerInput = {
  button: Button;
  timestamp: number;
};
