/**
 * Teamwork Skill
 * Actions that involve multiple Player characters interacting to perform an action.
 */

// category: SkillCategory.PARTY;
export namespace Teamwork {
  export type Type = {
    name: string;
    description: string;
  };

  export const COMMAND: Type = {
    name: 'Command',
    description: 'tell other party members what actions to use.',
  };

  export const FORMATIONS: Type = {
    name: 'Formations',
    description: 'get part to move to certain areas.',
  };

  export const ORDER: Type = {
    name: 'Order',
    description: 'Tell any what to do.',
  };
}
