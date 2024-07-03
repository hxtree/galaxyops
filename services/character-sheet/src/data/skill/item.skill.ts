import { MenuSlot } from '../menu-slot';

/**
 * Item
 * Are quite simply actions that are related to the use of an item.
 * Are only accessible by a Player through the Menu screen
 */
export namespace Item {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlot;
    menuName: string;
  };

  export const APPRAISE: Type = {
    name: 'Appraise',
    description: 'Determine the market value of an item',
    menuSlot: MenuSlot.ITEM,
    menuName: 'Items',
  };

  export const COMBINE: Type = {
    name: 'Combine',
    description: 'Turn two or more items into one item if compatible',
    menuSlot: MenuSlot.ITEM,
    menuName: 'Items',
  };

  export const THROW: Type = {
    name: 'Throw',
    description: 'Toss an item from stock away or to injure enemy.',
    menuSlot: MenuSlot.ITEM,
    menuName: 'Items',
  };

  export const PREPARE_FOOD: Type = {
    name: 'Prepare Food',
    description: 'Make a meal',
    menuSlot: MenuSlot.ITEM,
    menuName: 'Items',
  };

  // "42","Craft","Combined multiple items into one.","39",,"39"
  // Item - use an item from stock.
  // Item – use one item from stock
  // Item (x2) – Use two Items from stock at once
  // Item (x3) – Use three Items from stock at once
}
