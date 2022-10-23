// an item is an object within the game world that can be collected by a player or non-player character.
// an item is not an instance of a individual item.
// https://en.wikipedia.org/wiki/Item_(game_terminology)

export interface Item {
  name: string;
  description: string;
}

export class Compass implements Item {
  name: 'Compass';
  description: 'Shows direction';
  // enables player map
}

/**
 * GC is the currency used in all of the game.
 * GC can be found or gained by defeating an opponent.
 * GC is used to buy items.
 */
export type GC = number;
