import { MenuSlot } from '../menu-slot';

/**
 * Trap Skill
 * set a trap that will go off when the tile is stood on.
 */
export namespace Trap {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlot;
  };

  export const POISON_TRAP: Type = {
    name: 'Poison Trap',
    description: 'Set a poison trap',
    menuSlot: MenuSlot.FOURTH,
  };

  export const EXPLOSIVE_TRAP: Type = {
    name: 'Explosive Trap',
    description: 'Set a explosive trap',
    menuSlot: MenuSlot.FOURTH,
  };

  export const TIME_BOMB_TRAP: Type = {
    name: 'Time Bomb Trap',
    description: 'Set a time based trap',
    menuSlot: MenuSlot.FOURTH,
  };

  export const CALTROPS_TRAP: Type = {
    name: 'Caltrops Trap',
    description: 'Set a trap of spiked caltrops',
    menuSlot: MenuSlot.FOURTH,
  };

  export const DISABLE_TRAP: Type = {
    name: 'Disable Trap',
    description: 'Disable a set trap',
    menuSlot: MenuSlot.FOURTH,
  };
}
