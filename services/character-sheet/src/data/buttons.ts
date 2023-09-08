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

export function checkButtonCombos(
  currentGameContext: string,
  combos: ButtonCombo[],
  input: PlayerInput[],
): boolean {
  return combos.some((combo) => {
    if (combo.context && currentGameContext !== combo.context) {
      return false; // Combo requires a specific context that is not met
    }

    if (combo.timingWindowMs) {
      const inputTimestamps = input.map((inputButton) => inputButton.timestamp);
      const comboLength = combo.inOrder?.length || combo.simultaneous?.length || 0;

      for (let i = 0; i <= inputTimestamps.length - comboLength; i++) {
        const timeDifference = inputTimestamps[i + comboLength - 1]
          - inputTimestamps[i + comboLength - 2];
        if (timeDifference <= combo.timingWindowMs) {
          const matchingInputs = input
            .slice(i, i + comboLength)
            .map((inputButton) => inputButton.button);
          if (combo.inOrder) {
            if (
              combo.inOrder.every(
                (button, index) => button === matchingInputs[index],
              )
            ) {
              return true; // Combo matches the timing and order
            }
          } else if (
            // eslint-disable-next-line max-len
            combo.simultaneous?.every((button) => input.some((inputButton) => inputButton.button === button))
          ) {
            return true; // Combo matches the timing and simultaneous press
          }
        }
      }

      return false; // No matching timing-based combo found
    }

    if (combo.inOrder) {
      let matchingOrderCount = 0;
      let inputIndex = 0;
      for (const requiredButton of combo.inOrder) {
        while (inputIndex < input.length) {
          if (input[inputIndex].button === requiredButton) {
            matchingOrderCount++;
            inputIndex++;
            break;
          }
          inputIndex++;
        }
      }
      return matchingOrderCount === combo.inOrder.length; // Combo matches the required order
    }

    // If the combo is simultaneous, check if all the buttons are pressed together
    if (combo.simultaneous) {
      // eslint-disable-next-line max-len
      const matchingButtons = combo.simultaneous.filter((button) => input.some((inputButton) => inputButton.button === button));
      if (matchingButtons.length === combo.simultaneous.length) {
        return true; // Combo matches the simultaneous press
      }
    }

    // If the combo is neither simultaneous nor timing-based, it must be an ordered combo
    return combo.inOrder === undefined;
  });
}
