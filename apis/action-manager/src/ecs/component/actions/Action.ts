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
 * They are motor programs that a character learns.
 * Actions progression is often determined by determined by class.
 */
export interface Action {
  name: string;
  description: string;
  effect: Array<ActionEffect>;
}

// Issuant

// 	Guardant
// omni
// Actions
// Barrier

// Darkness – decrease the area that your opponent can see.
// Disguise^ – [stamina] Changes appearance and disables command menu until canceled.
// Focus – raise attack and attack percent for following move.
// Grapple – Lowers character and opponents life.
// Hide^ – [stamina] enemy cannot see you
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
// Support
// Drive Actions (Slot 3)
// Berserk - Become completely focused on winning.
// Toxic Thrust -
// Aerial assault – Traez jumps into air and throws boomerang (jump attack)
// Party Actions (Slot 4)
// Party – choose to interact with party
// Command – tell other party members what actions to use.
// Formations – get part to move to certain areas.
// Gear Actions (Slot 5)
// Gear actions are quite simply actions that are related to the use of Gear.
// Item - use an item from stock.
// Item – Use one item from stock
// Item (x2) – Use two Items from stock
// Item (x3) – Use three Items from stock
// Tool – (Slot 4)
// Grappling Hook – Enables party to move to higher grounds.
// Trap – (Slot 4) set a trap that will go off when the tile is stood on.
// Set
// Poison
// Explosive
// Time Bomb
// Caltrops – spiked things you throw on the floor
// Disabled – disable a set trap.
// Natural Actions
// Natural Actions are actions that do not need to be called to be used.
// Intimidate – Causes fear in enemy
// Escape Artist – Bonus when running away from enemy
// Concentration – stay focused
