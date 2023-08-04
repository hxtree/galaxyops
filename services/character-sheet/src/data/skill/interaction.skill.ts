import { MenuSlot } from '../menu-slot';

/**
 * InteractionSkills are actions that can only be used when a compatible object is present
 * InteractionSkill Actions are a type of Command Menu actions,
 */
export namespace Interaction {
  export type Type = {
    name: string;
    description: string;
    target: ObjectCategory;
    menuSlot: MenuSlot;
  };

  export enum ObjectCategory {
    MOVEABLE = 'Moveable',
    IMPENDING = 'Impending',
    LOCKED = 'Locked',
  }

  export const GRAB: Type = {
    name: 'Grab',
    description: 'Grab object',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const PUSH: Type = {
    name: 'Push',
    description: 'Push object',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const PULL: Type = {
    name: 'Pull',
    description: 'Pull object',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const LIFT: Type = {
    name: 'Lift',
    description: 'Lift object',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const THROW: Type = {
    name: 'Throw',
    description: 'Throw object',
    target: ObjectCategory.MOVEABLE,
    menuSlot: MenuSlot.INTERACTION,
  };

  export const PICK_LOCK: Type = {
    name: 'Pick Lock',
    description: 'Pick a lock',
    target: ObjectCategory.LOCKED,
    menuSlot: MenuSlot.INTERACTION,
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
