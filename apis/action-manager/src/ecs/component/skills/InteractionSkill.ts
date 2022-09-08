/**
 * InteractionSkills are actions that can only be used when a compatable object is present
 */

import {BaseSkill} from './BaseSkill';

export enum InteractionSkillList {
  'Grab',
  'Push',
  'Pull',
  'Lift',
  'Throw',
}

export interface InteractionSkill extends BaseSkill {}

export enum ObjectCategory {
  MOVEABLE = 'Moveable',
  IMPENDING = 'Impending',
}

export class Grab implements InteractionSkill {
  name: 'Grab';
  description: 'Grab object';
  target: ObjectCategory.MOVEABLE;
}

export class Push implements InteractionSkill {
  name: 'Push';
  description: 'Push object';
  target: ObjectCategory.MOVEABLE;
}

export class Pull implements InteractionSkill {
  name: 'Pull';
  description: 'Pull object';
  target: ObjectCategory.MOVEABLE;
}

export class Lift implements InteractionSkill {
  name: 'Lift';
  description: 'Lift object';
  target: ObjectCategory.MOVEABLE;
}

export class Throw implements InteractionSkill {
  name: 'Throw';
  description: 'Thow object';
  target: ObjectCategory.MOVEABLE;
}

// InteractionSkill Actions
// InteractionSkill Actions are a type of Command Menu actions, which essentially means that they take up a slot on the players Command Menu. InteractionSkill Actions take up the InteractionSkill Slot on the Commnd Menu. What distinguishes InteractionSkill Actions from the rest is that all interaction actions relate to interacting with other objects.
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
