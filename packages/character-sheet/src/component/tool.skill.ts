import {MenuSlot} from './menu-slot';

export enum ToolSkillList {
  GRAPPLING_HOOK = 'Grappling Hook',
}

/**
 * Tool Action
 * Tool actions are based on using reusable tools
 */
export abstract class ToolAction {
  abstract name: ToolSkillList;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
}

export class GrapplingHook extends ToolAction {
  name: ToolSkillList.GRAPPLING_HOOK;
  description: 'Enables party to move to higher grounds.';
}
