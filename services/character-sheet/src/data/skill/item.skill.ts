import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType } from '.';

/**
 * Item
 * Are quite simply actions that are related to the use of an item.
 * Are only accessible by a Player through the Menu screen
 */
export namespace Item {
  export const APPRAISE: SkillType = {
    name: 'Appraise',
    description: 'Determine the market value of an item',
    menuSlot: MenuSlot.ITEM,
  };

  export const COMBINE: SkillType = {
    name: 'Combine',
    description: 'Turn two or more items into one item if compatible',
    menuSlot: MenuSlot.ITEM,
  };

  export const THROW: SkillType = {
    name: 'Throw',
    description: 'Toss an item from stock away or to injure enemy.',
    menuSlot: MenuSlot.ITEM,
  };

  export const PREPARE_FOOD: SkillType = {
    name: 'Prepare Food',
    description: 'Make a meal',
    menuSlot: MenuSlot.ITEM,
  };

  // "42","Craft","Combined multiple items into one.","39",,"39"
  // Item - use an item from stock.
  // Item – use one item from stock
  // Item (x2) – Use two Items from stock at once
  // Item (x3) – Use three Items from stock at once
}
