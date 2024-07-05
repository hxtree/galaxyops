import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType } from '.';

/**
 * Trap Skill
 * Allows the setting of traps that trigger when stepped on.
 */
export namespace Trap {
  export const POISON_TRAP: SkillType = {
    name: 'Poison Trap',
    description: 'Sets a poison trap.',
    menuSlot: MenuSlot.TRAPS,
  };

  export const EXPLOSIVE_TRAP: SkillType = {
    name: 'Explosive Trap',
    description: 'Sets an explosive trap.',
    menuSlot: MenuSlot.TRAPS,
  };

  export const TIME_BOMB_TRAP: SkillType = {
    name: 'Time Bomb Trap',
    description: 'Sets a time-based trap.',
    menuSlot: MenuSlot.TRAPS,
  };

  export const CALTROPS_TRAP: SkillType = {
    name: 'Caltrops Trap',
    description: 'Sets a trap of spiked caltrops.',
    menuSlot: MenuSlot.TRAPS,
  };

  export const DISABLE_TRAP: SkillType = {
    name: 'Disable Trap',
    description: 'Disables a set trap.',
    menuSlot: MenuSlot.TRAPS,
  };
}
