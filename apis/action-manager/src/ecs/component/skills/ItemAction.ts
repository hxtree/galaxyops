/**
 * Item Actions (Slot 5)
 * Item actions are quite simply actions that are related to the use of an item.
 * Item actions are only accessible by a Player through the Menu screen
 */

export interface ItemAction {
  name: string;
}

export class Appraise implements ItemAction {
  name: 'Appraise';
  description: 'Determine the market value of an item';
}

export class Combine implements ItemAction {
  name: 'Combine';
  description: 'Turn two or more items into one item if combatiable';
}

export class Throw implements ItemAction {
  name: 'Throw';
  description: 'Toss an item from stock away or to injure enemy.';
}

export class PrepareFood implements ItemAction {
  name: 'Prepare Food';
  description: 'Make a meal';
}

// Item - use an item from stock.
// Item – use one item from stock
// Item (x2) – Use two Items from stock at once
// Item (x3) – Use three Items from stock at once

// Tool – (Slot 4)
// Grappling Hook – Enables party to move to higher grounds.
// Trap – (Slot 4) set a trap that will go off when the tile is stood on.
// Set
// Poison
// Explosive
// Time Bomb
// Caltrops – spiked things you throw on the floor
