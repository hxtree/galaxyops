/**
 * InteractionSkills are actions that can only be used when a compatable object is present
 */
export enum Interaction {
  GRAB = 'Grab',
  PUSH = 'Push',
  PULL = 'Pull',
  LIFT = 'Lift',
  THROW = 'Throw',
}

export namespace InteractionSkill {
  export type InteractionType = {
    name: Interaction;
    description: string;
    target: ObjectCategory;
  };

  export enum ObjectCategory {
    MOVEABLE = 'Moveable',
    IMPENDING = 'Impending',
  }

  export const Grab: InteractionType = {
    name: Interaction.GRAB,
    description: 'Grab object',
    target: ObjectCategory.MOVEABLE,
  };

  export const Push: InteractionType = {
    name: Interaction.PUSH,
    description: 'Push object',
    target: ObjectCategory.MOVEABLE,
  };

  export const Pull: InteractionType = {
    name: Interaction.PULL,
    description: 'Pull object',
    target: ObjectCategory.MOVEABLE,
  };

  export const Lift: InteractionType = {
    name: Interaction.LIFT,
    description: 'Lift object',
    target: ObjectCategory.MOVEABLE,
  };

  export const Throw: InteractionType = {
    name: Interaction.THROW,
    description: 'Throw object',
    target: ObjectCategory.MOVEABLE,
  };

  // InteractionSkill Actions
  // InteractionSkill Actions are a type of Command Menu actions,
  // which essentially means that they take up a slot on the players Command
  // Menu. InteractionSkill Actions take up the InteractionSkill Slot on the
  //  Commnd Menu. What distinguishes InteractionSkill Actions from the rest
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
