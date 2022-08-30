import {ActionCategory} from './Action';
import {MenuSlot} from '../character/MenuSlot';

/**
 * Teamwork Actions
 * Actions that involve multiple Player characters interacting to perform an action.
 */

export abstract class TeamworkAction {
  abstract name: string;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
  category: ActionCategory.PARTY;
}

export class Command extends TeamworkAction {
  name: 'Command';
  description: 'tell other party members what actions to use.';
}

export class Formations extends TeamworkAction {
  name: 'Formations';
  description: 'get part to move to certain areas.';
}
