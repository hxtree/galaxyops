import {MenuSlot} from '../character/MenuSlot';

/**
 * Tool Action
 */
export abstract class ToolAction {
  abstract name: string;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
}

export class GrapplingHook extends ToolAction {
  name: 'Grappling Hook';
  description: 'Enables party to move to higher grounds.';
}
