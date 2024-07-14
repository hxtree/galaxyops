import { ButtonCombo, PlayerInput } from '@galaxyops/character-sheet-contracts';

/**
 * use simultaneous button combination to invoke hard press values rather
 * than depending on system to support pressure sensitivity
 */
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
