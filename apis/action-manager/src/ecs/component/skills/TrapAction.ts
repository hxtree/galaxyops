import {MenuSlot} from '../character/MenuSlot';

/**
 * Trap Action
 * set a trap that will go off when the tile is stood on.
 */
export abstract class TrapAction {
  abstract name: string;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
}

export class PoisonTrap extends TrapAction {
  name: 'Poison Trap';
  description: 'Set a poison trap';
}

export class ExplosiveTrap extends TrapAction {
  name: 'Explosive Trap';
  description: 'Set a explosive trap';
}

export class TimeBombTrap extends TrapAction {
  name: 'Time Bomb Trap';
  description: 'Set a time bomb trap';
}

export class CaltropsTrap extends TrapAction {
  name: 'Caltrops Trap';
  description: 'Throw spiked caltrops to form a trap';
}

export class DisableTrap extends TrapAction {
  name: 'Disable Trap';
  description: 'Disable a set trap';
}
