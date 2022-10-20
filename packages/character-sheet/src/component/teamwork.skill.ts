import {BaseSkill, SkillCategory} from './base.skill';
import {MenuSlot} from './menu-slot';

/**
 * Teamwork Skill
 * Actions that involve multiple Player characters interacting to perform an action.
 */
export enum TeamworkSkillList {
  COMMAND = 'Command',
  FORMATIONS = 'Formations',
  ORDER = 'Order',
}

export abstract class TeamworkSkill implements BaseSkill {
  abstract name: string;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
  category: SkillCategory.PARTY;
}

export class Command extends TeamworkSkill {
  name: TeamworkSkillList.COMMAND;
  description: 'tell other party members what actions to use.';
}

export class Formations extends TeamworkSkill {
  name: TeamworkSkillList.FORMATIONS;
  description: 'get part to move to certain areas.';
}

export class Order extends TeamworkSkill {
  name: TeamworkSkillList.ORDER;
  description: 'Tell any what to do.';
}
