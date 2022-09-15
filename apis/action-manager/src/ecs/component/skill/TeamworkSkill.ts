import {BaseSkill, SkillCategory} from './BaseSkill';
import {MenuSlot} from '../character/MenuSlot';

/**
 * Teamwork Skill
 * Actions that involve multiple Player characters interacting to perform an action.
 */
export enum TeamworkSkillList {
  'Command',
  'Formations',
}

export abstract class TeamworkSkill implements BaseSkill {
  abstract name: string;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
  category: SkillCategory.PARTY;
}

export class Command extends TeamworkSkill {
  name: 'Command';
  description: 'tell other party members what actions to use.';
}

export class Formations extends TeamworkSkill {
  name: 'Formations';
  description: 'get part to move to certain areas.';
}

export class Order extends TeamworkSkill {
  name: 'Order';
  description: 'Tell any what to do.';
}
