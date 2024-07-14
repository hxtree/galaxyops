import {
  MenuSlot,
  Skill,
  SkillLevel,
  ActionTarget,
} from '@galaxyops/character-sheet-contracts';

/**
 * Interaction skills are actions that can only be used when a compatible object is present.
 * They are a type of Command Menu action.
 */
export namespace Interaction {
  export const GRAB_LV1: Skill = {
    actionEffects: {
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this
          chance: 1.0,
          tags: [],
        },
      ],
    },
    description: 'Grab an object.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.INTERACTION,
    name: 'Grab',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const PUSH_LV1: Skill = {
    description: 'Push an object.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.INTERACTION,
    name: 'Push',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const PULL_LV1: Skill = {
    description: 'Pull an object.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.INTERACTION,
    name: 'Pull',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const LIFT_LV1: Skill = {
    description: 'Lift an object.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.INTERACTION,
    name: 'Lift',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const THROW_LV1: Skill = {
    description: 'Throw an object.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.INTERACTION,
    name: 'Throw',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const PICK_LOCK_LV1: Skill = {
    actionEffects: {
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
      INVENTORY: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
    },
    description: 'Attempt to pick a lock.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.INTERACTION,
    name: 'Pick Lock',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const UNLOCK_LV1: Skill = {
    actionEffects: {
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
      INVENTORY: [
        {
          // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          remove: 'BERSERK',
          tags: [],
        },
      ],
    },
    description: 'Open a lock using a key.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.INTERACTION,
    name: 'Unlock',
    target: ActionTarget.INTERACTION_OBJECT,
  };
}
