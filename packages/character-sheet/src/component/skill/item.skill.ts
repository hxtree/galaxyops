export enum Item {
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
export namespace ItemSkill {
  export type ItemType = {
    name: Item;
    description: string;
  };

  export const Appraise: ItemType = {
    name: Item.APPRIASE,
    description: 'Determine the market value of an item',
  };

  export const Combine: ItemType = {
    name: Item.COMBINE,
    description: 'Turn two or more items into one item if combatiable',
  };

  export const Throw: ItemType = {
    name: Item.THROW,
    description: 'Toss an item from stock away or to injure enemy.',
  };

  export const PrepareFood: ItemType = {
    name: Item.PREPARE_FOOD,
    description: 'Make a meal',
  };

  // "42","Craft","Combined multiple items into one.","39",,"39"
  // Item - use an item from stock.
  // Item – use one item from stock
  // Item (x2) – Use two Items from stock at once
  // Item (x3) – Use three Items from stock at once
}
