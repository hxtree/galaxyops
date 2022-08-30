import {EffectTable} from '../effect/EffectTable';
import {MenuSlot} from '../character/MenuSlot';

// fuel?
// Whether when performing move if character can hold action to put more effort into action
export enum Focusable {
  STAMINA = 'Stamina',
  TRUE = 'True',
  FALSE = 'False',
}

/**
 * Class Actions are motor programs that a character learns to preform.
 * Class Actions progression are often determined by determined by class.
 */
export abstract class ClassAction {
  abstract name: string;
  abstract description: string;
  abstract effect: EffectTable;
  menuSlot: MenuSlot.First;
}

export class Barrier extends ClassAction {
  name: 'Barrier';
  description: '';
  effect: [];
}

export class Boast extends ClassAction {
  name: 'Boast';
  description: 'increase party’s moral';
  effect: [];
}

export class Disguise extends ClassAction {
  name: 'Disguise';
  description: 'Changes appearance and disables command menu until canceled.';
  effect: [];
  // stamina
}

export class Focus extends ClassAction {
  name: 'Focus';
  description: 'raise attack and attack percent for following move.';
  effect: [];
}

export class Grapple extends ClassAction {
  name: 'Grapple';
  description: 'Lowers character and opponents life.';
  effect: [];
}

export class Hide extends ClassAction {
  name: 'Hide';
  description: 'Enemy cannot see you';
  effect: [];
  // [stamina]
}

// Mimic – use the same move that was used on you on the enemy.
// Mock – [stamina] make a mocking action to cause Berserk on the opponent.
// Pickpocket – [stamina] steal from enemy
// Protect – [stamina] guard party members behind you.
// Sacrifice –
// Scan – read enemies stats.
// Scout – [stamina] move ahead of party.
// Seal – hold an enemy off.
// Search – scan nearby area for goods.
// Steal - [stamina] Take item from opponent

// "65","Cheer","Targets Spirit increases by 10% for a duration","64",,"64"
// "66","Support",,"65",,"65"
// "67","Hope","The most powerful status bonus","66",,"66"

// "68","Inspire","Increases target Drive gauge","67",,"67"

// "42","Craft","Combined multiple items into one.","39",,"39"
// "45","Reflect","Send enemies moves back at them.","44",,"44"
// "46","Lullaby","Send enemies moves back at them.","45",,"45"
// "47","Light","Keep enemies from moving for a duration of time.– chance Puts enemy to sleep. Stops rage","46",,"46"
// "48","Protection"," Create a barrier around a ally","47",,"47"

// "43","Ward","Keep enemies from getting close. (Good for when party is powering up)","42",,"42"
// "44","Seal","Keep enemies from getting close. (Good for when party is powering up)","43",,"43"

// "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"
