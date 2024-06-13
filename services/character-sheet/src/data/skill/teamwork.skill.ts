import { MenuSlot } from '../menu-slot';

/**
 * Teamwork Skill
 * Actions that involve multiple Player characters working together to achieve a common goal.
 */
export namespace Teamwork {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlot;
    // category: SkillCategory.PARTY;
  };

  export const LAST_STAND: Type = {
    name: 'Last Stand',
    description:
      'All party members quickly assume defensive positions to withstand a sudden onslaught of attacks.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const BLITZ_STRIKE: Type = {
    name: 'Blitz Strike',
    description: 'Launch a coordinated attack on a single target.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const FLANK: Type = {
    name: 'Flank',
    description: 'Execute a pincer movement to surround and attack the enemy.',
    menuSlot: MenuSlot.FOURTH,
  };
}
