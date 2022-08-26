import {EffectTag} from '../character/EffectTag';
import {StatusEffect} from '../character/StatusEffect';
import {Attribute} from '../character/Attribute';

// Some tags can be automatically added, like LIFE_DECREASE IF attack decreases life.

export interface ActionEffect {
  add?: Attribute | StatusEffect;
  remove?: Attribute | StatusEffect;
  quanity?: string;
  chance?: number;
  tags?: Array<EffectTag>;
}

/**
 * Actions are decoupled from the actor and target.
 * Actions are moves that can be used by a character.
 * They are motor programs that a character learns to preform.
 * Actions progression is often determined by determined by class.
 */
export interface Action {
  name: string;
  description: string;
  effect: Array<ActionEffect>;
}

// fuel?
// Whether when performing move if character can hold action to put more effort into action
//
export enum Focusable {
  STAMINA = 'Stamina',
  TRUE = 'True',
  FALSE = 'False',
}

export class Barrier implements Action {
  name: 'Barrier';
  description: '';
  effect: [];
}

export class Boast implements Action {
  name: 'Boast';
  description: 'increase party’s moral';
  effect: [];
}

export class Disguise implements Action {
  name: 'Disguise';
  description: 'Changes appearance and disables command menu until canceled.';
  effect: [];
  // stamina
}

export class Focus implements Action {
  name: 'Focus';
  description: 'raise attack and attack percent for following move.';
  effect: [];
}

export class Grapple implements Action {
  name: 'Grapple';
  description: 'Lowers character and opponents life.';
  effect: [];
}

export class Hide implements Action {
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

// omni

// Disabled – disable a set trap.

// "65","Cheer","Targets Spirit increases by 10% for a duration","64",,"64"
// "66","Support",,"65",,"65"
// "67","Hope","The most powerful status bonus","66",,"66"

// "68","Inspire","Increases target Drive gauge","67",,"67"
