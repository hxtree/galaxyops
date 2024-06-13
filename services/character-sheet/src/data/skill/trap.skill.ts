import { MenuSlot } from '../menu-slot';

/**
 * Trap Skill
 * Allows the setting of traps that trigger when stepped on.
 */
export namespace Trap {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlot;
  };

  export const POISON_TRAP: Type = {
    name: 'Poison Trap',
    description: 'Sets a poison trap.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const EXPLOSIVE_TRAP: Type = {
    name: 'Explosive Trap',
    description: 'Sets an explosive trap.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const TIME_BOMB_TRAP: Type = {
    name: 'Time Bomb Trap',
    description: 'Sets a time-based trap.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const CALTROPS_TRAP: Type = {
    name: 'Caltrops Trap',
    description: 'Sets a trap of spiked caltrops.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const DISABLE_TRAP: Type = {
    name: 'Disable Trap',
    description: 'Disables a set trap.',
    menuSlot: MenuSlot.FOURTH,
  };
}
