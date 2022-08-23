/**
 * Menu Actions
 * actions that can only be used through the menu screen
 */

export interface MenuAction {
  name: string;
}

export class Appraise implements MenuAction {
  name: 'Appraise';
  description: 'Determine the market value of an item';
}

export class Boast implements MenuAction {
  name: 'Boast';
  description: 'increase party’s moral';
}

export class Combine implements MenuAction {
  name: 'Combine';
  description: 'Turn two or more items into one item if combatiable';
}

export class Bluff implements MenuAction {
  name: 'Bluff';
  description: 'Tell a lie without being caught';
}

export class SenseBluff implements MenuAction {
  name: 'SenseBluff';
  description: 'A little icon on the screen will tell if someone is trying to bluff party (if character beats bluff check).';
}

export class Throw implements MenuAction {
  name: 'Throw';
  description: 'Toss an item from stock away or to injure enemy.';
}
