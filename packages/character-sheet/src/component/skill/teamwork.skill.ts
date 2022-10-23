/**
 * Teamwork Skill
 * Actions that involve multiple Player characters interacting to perform an action.
 */
export enum Teamwork {
  COMMAND = 'Command',
  FORMATIONS = 'Formations',
  ORDER = 'Order',
}

// category: SkillCategory.PARTY;

export namespace Teamwork {
  export type TeamworkType = {
    name: string;
    description: string;
  };

  export const Command: TeamworkType = {
    name: Teamwork.COMMAND,
    description: 'tell other party members what actions to use.',
  };

  export const Formations: TeamworkType = {
    name: Teamwork.FORMATIONS,
    description: 'get part to move to certain areas.',
  };

  export const Order: TeamworkType = {
    name: Teamwork.ORDER,
    description: 'Tell any what to do.',
  };
}
