import { ActionEffects } from '../table.effect';
import { MenuSlot, MenuSlotType } from '../menu-slot';

/**
 * Interaction skills are actions that can only be used when a compatible object is present.
 * They are a type of Command Menu action.
 */
export namespace Interaction {
  export type Type = {
    name: string;
    description: string;
    target: ObjectCategory;
    menuSlot: MenuSlotType;
    actionEffects?: ActionEffects;
  };

  export enum ObjectCategory {
    MOVEABLE = 'Moveable',
    IMPENDING = 'Impending',
    LOCKED = 'Locked',
  }

  export const GRAB: Type = {
    name: 'Grab',
    description: 'Grab an object.',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
    actionEffects: {
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this
          chance: 1.0,
          tags: [],
        },
      ],
    },
  };

  export const PUSH: Type = {
    name: 'Push',
    description: 'Push an object.',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const PULL: Type = {
    name: 'Pull',
    description: 'Pull an object.',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const LIFT: Type = {
    name: 'Lift',
    description: 'Lift an object.',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const THROW: Type = {
    name: 'Throw',
    description: 'Throw an object.',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const PICK_LOCK: Type = {
    name: 'Pick Lock',
    description: 'Attempt to pick a lock.',
    target: ObjectCategory.LOCKED,
    menuSlot: MenuSlot.INTERACTION,
    actionEffects: {
      INVENTORY: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
    },
  };

  export const UNLOCK: Type = {
    name: 'Unlock',
    description: 'Open a lock using a key.',
    target: ObjectCategory.LOCKED,
    menuSlot: MenuSlot.INTERACTION,
    actionEffects: {
      INVENTORY: [
        {
          remove: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
    },
  };
  // which essentially means that they take up a slot on the players Command
  // Menu. InteractionSkill Actions take up the InteractionSkill Slot on the
  //  Command Menu. What distinguishes InteractionSkill Actions from the rest
  // is that all interaction actions relate to interacting with other objects.
  // Counter – make a maneuver in reaction to an enemy’s.
  // Disobey – do not follow orders given.
  // Parry – use your weapon to block / deflect the enemies attack.
  // Standard Object – Take no action points
  // Pick Up / Take
  // Open
  // Open Lock
  // Pull – (Example “Pull Lever”)

  // Impending Object
  // Catch – Catch an item or weapon that has been thrown in your path of travel.
  // Reflect
  // Throw
  // Ward – (spirit) a action that keeps enemies away
  // Guard – (stamina) protect from oncoming attacks.
  // Charge – Hold attack button down. This uses up Stamina and raise Power of attack.
  // Charge – Hold attack button down. This uses up Spirit and raise Power of attack.
  // Class Actions (Slot 2)
  // Learn
}
