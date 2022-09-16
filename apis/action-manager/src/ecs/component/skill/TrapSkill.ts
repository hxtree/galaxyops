import {MenuSlot} from '../character/MenuSlot';
import {BaseSkill, SkillCategory} from './BaseSkill';

/**
 * Trap Skill
 * set a trap that will go off when the tile is stood on.
 */
export enum TrapSkillList {
  POISON_TRAP = 'Poison Trap',
  EXPLOSIVE_TRAP = 'Explosive Trap',
  TIME_BOMB_TRAP = 'Time Bomb Trap',
  CALTROPS_TRAP = 'Caltrops Trap',
  DISABLE_TRAP = 'Disable Trap',
}

export abstract class TrapSkill implements BaseSkill {
  abstract name: TrapSkillList;
  abstract description: string;
  menuSlot: MenuSlot.Fourth;
  category: SkillCategory.CLASS;
}

export class PoisonTrap extends TrapSkill {
  name: TrapSkillList.POISON_TRAP;
  description: 'Set a poison trap';
}

export class ExplosiveTrap extends TrapSkill {
  name: TrapSkillList.EXPLOSIVE_TRAP;
  description: 'Set a explosive trap';
}

export class TimeBombTrap extends TrapSkill {
  name: TrapSkillList.TIME_BOMB_TRAP;
  description: 'Set a time based trap';
}

export class CaltropsTrap extends TrapSkill {
  name: TrapSkillList.CALTROPS_TRAP;
  description: 'Set a trap of spiked caltrops';
}

export class DisableTrap extends TrapSkill {
  name: TrapSkillList.DISABLE_TRAP;
  description: 'Disable a set trap';
}
