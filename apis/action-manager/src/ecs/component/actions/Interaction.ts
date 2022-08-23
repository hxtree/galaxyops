export interface Interaction {
  name: string;
}

export enum ObjectCategory {
  MOVEABLE = 'Moveable',
  IMPENDING = 'Impending',
}

export class Grab implements Interaction {
  name: 'Grab';
  target: ObjectCategory.MOVEABLE;
}

export class Push implements Interaction {
  name: 'Push';
  target: ObjectCategory.MOVEABLE;
}

export class Pull implements Interaction {
  name: 'Pull';
  target: ObjectCategory.MOVEABLE;
}

export class Lift implements Interaction {
  name: 'Lift';
  target: ObjectCategory.MOVEABLE;
}

export class Throw implements Interaction {
  name: 'Throw';
  target: ObjectCategory.MOVEABLE;
}

// Interaction Actions
// Interaction Actions are a type of Command Menu actions, which essentially means that they take up a slot on the players Command Menu. Interaction Actions take up the Interaction Slot on the Commnd Menu. What distinguishes Interaction Actions from the rest is that all interaction actions relate to interacting with other objects.
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
