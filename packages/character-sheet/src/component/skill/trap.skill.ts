export enum Trap {
  POISON_TRAP = 'Poison Trap',
  EXPLOSIVE_TRAP = 'Explosive Trap',
  TIME_BOMB_TRAP = 'Time Bomb Trap',
  CALTROPS_TRAP = 'Caltrops Trap',
  DISABLE_TRAP = 'Disable Trap',
}

// category: SkillCategory.CLASS;

/**
 * Trap Skill
 * set a trap that will go off when the tile is stood on.
 */
export namespace Trap {
  export type TrapType = {
    name: Trap;
    description: string;
  };

  export const PoisonTrap: TrapType = {
    name: Trap.POISON_TRAP,
    description: 'Set a poison trap',
  };

  export const ExplosiveTrap: TrapType = {
    name: Trap.EXPLOSIVE_TRAP,
    description: 'Set a explosive trap',
  };

  export const TimeBombTrap: TrapType = {
    name: Trap.TIME_BOMB_TRAP,
    description: 'Set a time based trap',
  };

  export const CaltropsTrap: TrapType = {
    name: Trap.CALTROPS_TRAP,
    description: 'Set a trap of spiked caltrops',
  };

  export const DisableTrap: TrapType = {
    name: Trap.DISABLE_TRAP,
    description: 'Disable a set trap',
  };
}
