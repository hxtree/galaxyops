import { Button, ButtonCombo } from '../buttons';
import { GameContext } from '../game-context';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillLevel, SkillType } from './skill.type';
import { ActionTarget } from '../action-target';
import { Attribute } from '../attribute';

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
  export const BLITZ_LV1: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          quantity: '1d6',
          remove: Attribute.LIFE,
        },
      ],
    },
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
    target: ActionTarget.OPPONENT,
  };
}
