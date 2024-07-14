import {
  PlayerInput,
  Button,
  ButtonCombo,
  GameContext,
} from '@galaxyops/character-sheet-contracts';
import { checkButtonCombos } from './buttons';

describe('checkButtonCombos', () => {
  it('should correctly match a valid combo within the timing window and context', () => {
    const playerInput: PlayerInput[] = [
      { button: Button.ACTION, timestamp: 100 },
      { button: Button.JUMP, timestamp: 200 },
    ];
    const comboWithTiming: ButtonCombo = {
      context: GameContext.TERRAIN,
      simultaneous: [Button.ACTION, Button.JUMP],
      timingWindowMs: 300,
    };
    const currentGameContext = GameContext.TERRAIN;
    const combos: ButtonCombo[] = [comboWithTiming];

    const result = checkButtonCombos(currentGameContext, combos, playerInput);

    expect(result).toBe(true);
  });

  it('should correctly match a valid combo in a specific order', () => {
    const comboInOrder: ButtonCombo = {
      inOrder: [Button.CANCEL, Button.SWAP_CHARACTER_FORWARD], // The required order of buttons
    };

    const combos: ButtonCombo[] = [comboInOrder];

    const currentGameContext = GameContext.TERRAIN;

    // Update the playerInput array to include the required ordered combo
    const playerInput: PlayerInput[] = [
      { button: Button.CANCEL, timestamp: 100 },
      { button: Button.SWAP_CHARACTER_FORWARD, timestamp: 200 },
    ];

    const result = checkButtonCombos(currentGameContext, combos, playerInput);

    expect(result).toBe(true);
  });
});
