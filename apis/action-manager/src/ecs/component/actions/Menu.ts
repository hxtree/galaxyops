/**
 * Menu Actions
 * actions that are only accessible by a Player through the Menu screen
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

export class Throw implements MenuAction {
  name: 'Throw';
  description: 'Toss an item from stock away or to injure enemy.';
}

export class PrepareFood implements MenuAction {
  name: 'Prepare Food';
  description: 'Make a meal';
}
