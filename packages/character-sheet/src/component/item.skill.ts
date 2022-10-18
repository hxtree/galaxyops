import {BaseSkill} from './base.skill';
import {MenuSlot} from './menu-slot';

export enum ItemSkillList {
  APPRIASE = 'Appraise',
  COMBINE = 'Combine',
  THROW = 'Throw',
  PREPARE_FOOD = 'Prepare Food',
}

/**
 * Item Skill
 * Are quite simply actions that are related to the use of an item.
 * Are only accessible by a Player through the Menu screen
 */
export class ItemSkill implements BaseSkill {
  name: ItemSkillList;
  description: string;
  menuSlot: MenuSlot.Fifth;
}

export class Appraise extends ItemSkill {
  name: ItemSkillList.APPRIASE;
  description: 'Determine the market value of an item';
}

export class Combine extends ItemSkill {
  name: ItemSkillList.COMBINE;
  description: 'Turn two or more items into one item if combatiable';
}

export class Throw extends ItemSkill {
  name: ItemSkillList.THROW;
  description: 'Toss an item from stock away or to injure enemy.';
}

export class PrepareFood extends ItemSkill {
  name: ItemSkillList.PREPARE_FOOD;
  description: 'Make a meal';
}

// "42","Craft","Combined multiple items into one.","39",,"39"
// Item - use an item from stock.
// Item – use one item from stock
// Item (x2) – Use two Items from stock at once
// Item (x3) – Use three Items from stock at once
