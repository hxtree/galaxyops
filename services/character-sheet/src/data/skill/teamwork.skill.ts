import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType } from '.';
import { ActionTarget } from '../action-target';

/**
 * Teamwork Skill
 * Actions that involve multiple Player characters working together to achieve a common goal.
 */
export namespace Teamwork {
  export const LAST_STAND: SkillType = {
    name: 'Last Stand',
    target: ActionTarget.ALLY,
    description:
      'All party members quickly assume defensive positions to withstand a sudden onslaught of attacks.',
    menuSlot: MenuSlot.TEAMWORK,
  };

  export const BLITZ_STRIKE: SkillType = {
    name: 'Blitz Strike',
    target: ActionTarget.ALLY,
    description: 'Launch a coordinated attack on a single target.',
    menuSlot: MenuSlot.TEAMWORK,
  };

  export const FLANK: SkillType = {
    name: 'Flank',
    target: ActionTarget.ALLY,
    description: 'Execute a pincer movement to surround and attack the enemy.',
    menuSlot: MenuSlot.TEAMWORK,
  };
}
