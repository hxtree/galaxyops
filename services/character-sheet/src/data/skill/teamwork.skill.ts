import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType, SkillLevel } from './skill.type';
import { ActionTarget } from '../action-target';

/**
 * Teamwork Skill
 * Actions that involve multiple Player characters working together to achieve a common goal.
 */
export namespace Teamwork {
  export const LAST_STAND_LV1: SkillType = {
    description:
      'All party members quickly assume defensive positions to withstand a sudden onslaught of attacks.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TEAMWORK,
    name: 'Last Stand',
    target: ActionTarget.ALLY,
  };

  export const BLITZ_STRIKE_LV1: SkillType = {
    description: 'Launch a coordinated attack on a single target.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TEAMWORK,
    name: 'Blitz Strike',
    target: ActionTarget.ALLY,
  };

  export const FLANK_LV1: SkillType = {
    description: 'Execute a pincer movement to surround and attack the enemy.',

    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TEAMWORK,
    name: 'Flank',
    target: ActionTarget.ALLY,
  };
}
