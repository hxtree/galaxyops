import {
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

/**
 * Trap Skill
 * Allows the setting of traps that trigger when stepped on.
 */
export namespace Trap {
  export const POISON_TRAP_LV1: Skill = {
    description: 'Sets a poison trap.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TRAPS,
    name: 'Poison Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const EXPLOSIVE_TRAP_LV1: Skill = {
    description: 'Sets an explosive trap.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TRAPS,
    name: 'Explosive Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const TIME_BOMB_TRAP_LV1: Skill = {
    description: 'Sets a time-based trap.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TRAPS,
    name: 'Time Bomb Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const CALTROPS_TRAP_LV1: Skill = {
    description: 'Sets a trap of spiked caltrops.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TRAPS,
    name: 'Caltrops Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const DISABLE_TRAP_LV1: Skill = {
    description: 'Disables a set trap.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TRAPS,
    name: 'Disable Trap',
    target: ActionTarget.INTERACTION_OBJECT,
  };
}
