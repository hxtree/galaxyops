import {MenuSlot} from '../character/MenuSlot';
import {BaseSkill, SkillCategory} from './BaseSkill';

export enum TrapSkillList {
  'Poison Trap',
  'Explosive Trap',
  'Time Bomb Trap',
  'Caltrops Trap',
  'Disable Trap',
}

/**
 * Trap Action
 * set a trap that will go off when the tile is stood on.
 */
export abstract class TrapSkill implements BaseSkill {
  abstract name: string;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
  category: SkillCategory.CLASS;
}

export class PoisonTrap extends TrapSkill {
  name: 'Poison Trap';
  description: 'Set a poison trap';
}

export class ExplosiveTrap extends TrapSkill {
  name: 'Explosive Trap';
  description: 'Set a explosive trap';
}

export class TimeBombTrap extends TrapSkill {
  name: 'Time Bomb Trap';
  description: 'Set a time bomb trap';
}

export class CaltropsTrap extends TrapSkill {
  name: 'Caltrops Trap';
  description: 'Throw spiked caltrops to form a trap';
}

export class DisableTrap extends TrapSkill {
  name: 'Disable Trap';
  description: 'Disable a set trap';
}
