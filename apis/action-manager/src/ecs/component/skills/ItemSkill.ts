/**
 * Item Skill
 *
 * MenuAction.Fifth
 *
 * Item actions are quite simply actions that are related to the use of an item.
 * Item actions are only accessible by a Player through the Menu screen
 */

import {BaseSkill} from './BaseSkill';

export enum ItemSkillList {
  'Appraise',
  'Combine',
  'Throw',
  'Prepare Food',
}

export interface ItemSkill extends BaseSkill {}

export class Appraise implements ItemSkill {
  name: 'Appraise';
  description: 'Determine the market value of an item';
}

export class Combine implements ItemSkill {
  name: 'Combine';
  description: 'Turn two or more items into one item if combatiable';
}

export class Throw implements ItemSkill {
  name: 'Throw';
  description: 'Toss an item from stock away or to injure enemy.';
}

export class PrepareFood implements ItemSkill {
  name: 'Prepare Food';
  description: 'Make a meal';
}

// "42","Craft","Combined multiple items into one.","39",,"39"
// Item - use an item from stock.
// Item – use one item from stock
// Item (x2) – Use two Items from stock at once
// Item (x3) – Use three Items from stock at once
