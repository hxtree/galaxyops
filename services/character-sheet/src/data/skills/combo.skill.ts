import {
  MenuSlot,
  SkillLevel,
  Attribute,
  GameContext,
  ActionTarget,
  Button,
  ButtonCombo,
  Skill,
} from '@galaxyops/character-sheet-contracts';

/**
 * Combo Skills can only be used when a character action history matches exactly
 * prerequisite of prior skills
 * Once prerequisite is matched the combination activation button (Square by default)
 * can be pressed to activate the action
 *
 * If prerequisites is undefined, a player may customize a characters to set a custom
 * combo in order for quicker action selection.
 */
export namespace Combo {
  export const BLITZ_LV1: Skill = {
    buttonCombos: [
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.ATTACK, Button.ATTACK, Button.ACTION],
        timingWindowMs: 300,
      },
    ],
    description: 'A quick and coordinated attack on a single target.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TOOLS,
    name: 'Blitz',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6',
          remove: Attribute.LIFE,
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
