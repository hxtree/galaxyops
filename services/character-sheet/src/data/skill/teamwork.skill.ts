/**
 * Teamwork Skill
 * Actions that involve multiple Player characters interacting to perform an action.
 */

import { MenuSlot } from '../menu-slot';

// category: SkillCategory.PARTY;
export namespace Teamwork {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlot;
  };

  export const COMMAND: Type = {
    name: 'Command',
    description: 'Tell other party members what actions to use.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const FORMATIONS: Type = {
    name: 'Formations',
    description: 'Get part to move to certain areas.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const ORDER: Type = {
    name: 'Order',
    description: 'Tell any what to do.',
    menuSlot: MenuSlot.FOURTH,
  };
}
