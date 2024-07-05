import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType } from '.';

/**
 * Teamwork Skill
 * Actions that involve multiple Player characters working together to achieve a common goal.
 */
export namespace Teamwork {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlotType;
    // category: SkillCategory.PARTY;
  };

  export const LAST_STAND: SkillType = {
    name: 'Last Stand',
    description:
      'All party members quickly assume defensive positions to withstand a sudden onslaught of attacks.',
    menuSlot: MenuSlot.TEAMWORK,
  };

  export const BLITZ_STRIKE: SkillType = {
    name: 'Blitz Strike',
    description: 'Launch a coordinated attack on a single target.',
    menuSlot: MenuSlot.TEAMWORK,
  };

  export const FLANK: SkillType = {
    name: 'Flank',
    description: 'Execute a pincer movement to surround and attack the enemy.',
    menuSlot: MenuSlot.TEAMWORK,
  };
}
