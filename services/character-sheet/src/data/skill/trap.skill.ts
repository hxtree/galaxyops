import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType } from '.';
import { ActionTarget } from '../action-target';

/**
 * Trap Skill
 * Allows the setting of traps that trigger when stepped on.
 */
export namespace Trap {
  export const POISON_TRAP_LV1: SkillType = {
    description: 'Sets a poison trap.',
    menuSlot: MenuSlot.TRAPS,
    name: 'Poison Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const EXPLOSIVE_TRAP_LV1: SkillType = {
    description: 'Sets an explosive trap.',
    menuSlot: MenuSlot.TRAPS,
    name: 'Explosive Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const TIME_BOMB_TRAP_LV1: SkillType = {
    description: 'Sets a time-based trap.',
    menuSlot: MenuSlot.TRAPS,
    name: 'Time Bomb Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const CALTROPS_TRAP_LV1: SkillType = {
    description: 'Sets a trap of spiked caltrops.',
    menuSlot: MenuSlot.TRAPS,
    name: 'Caltrops Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const DISABLE_TRAP_LV1: SkillType = {
    description: 'Disables a set trap.',
    menuSlot: MenuSlot.TRAPS,
    name: 'Disable Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };
}
