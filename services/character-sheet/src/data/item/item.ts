export enum ItemCapacity {
  UNIQUE = 1,
  LOW = 10,
  MEDIUM = 25,
  HIGH = 50,
  VERY_HIGH = 75,
  MAXIMUM = 99,
  GC = 9999,
}

/**
 * Items might include non-equipable objects like crafting materials,
 * consumables, and more within the game world that can be collected by a
 * player or non-player character.
 * An item is not an instance of a individual item.
 * {@link https://en.wikipedia.org/wiki/Item_(game_terminology)}
 */
export namespace Item {
  export type BaseType = {
    name: string;
    description: string;
    capacity: ItemCapacity;
    craftingMaterials?: RecipeIngredient[];
  };

  export const COMPASS: BaseType = {
    name: 'Compass',
    description: 'Shows direction',
    capacity: ItemCapacity.UNIQUE,
    // enables player map
  };

  /**
   * GC is the currency used in all of the game.
   * It can be found or gained by defeating an opponent.
   * It is used to buy/sell items.
   */
  export const GC: BaseType = {
    name: 'GC',
    description: 'Currency',
    capacity: ItemCapacity.GC,
  };

  export const FLOUR: BaseType = {
    name: 'Flour',
    description: 'Powder made from crushed grains',
    capacity: ItemCapacity.MEDIUM,
  };

  export const CHICKEN_EGG: BaseType = {
    name: 'Chicken Egg',
    description: 'Egg from a chicken',
    capacity: ItemCapacity.LOW,
  };

  export const WATER: BaseType = {
    name: 'Water',
    description: 'Water',
    capacity: ItemCapacity.MEDIUM,
  };

  export const RICE: BaseType = {
    name: 'Rice',
    description: 'Rice grains',
    capacity: ItemCapacity.VERY_HIGH,
  };

  export const PORK: BaseType = {
    name: 'Pork',
    description: 'Meat form a pig',
    capacity: ItemCapacity.LOW,
  };

  export const RICE_BALL: BaseType = {
    name: 'Rice Ball',
    description: 'Made of condensed rice',
    capacity: 99,
    craftingMaterials: [
      { item: 'RICE', quantity: 1 },
      { item: 'WATER', quantity: 2 },
    ],
    // heals
  };

  export const DANGO: BaseType = {
    name: 'Dango',
    description: 'Mochi-like sweet made from crushed rice ',
    capacity: ItemCapacity.MEDIUM,
    // heals
  };

  export const RAMEN: BaseType = {
    name: 'Ramen',
    description: 'Noodles, tare, broth, topping and aroma oil',
    capacity: ItemCapacity.LOW,
    craftingMaterials: [
      { item: 'FLOUR', quantity: 1 },
      { item: 'CHICKEN_EGG', quantity: 2 },
      { item: 'PORK', quantity: 1 },
      { item: 'WATER', quantity: 1 },
    ],
    // heals
  };

  export const PELMENI: BaseType = {
    name: 'Pelmeni',
    description: 'Dumplings in broth',
    capacity: ItemCapacity.MEDIUM,
    craftingMaterials: [
      { item: 'FLOUR', quantity: 1 },
      { item: 'CHICKEN_EGG', quantity: 2 },
      { item: 'PORK', quantity: 1 },
      { item: 'WATER', quantity: 1 },
    ],
  };
}

export type ItemId = keyof typeof Item;

export const ItemIds = <ItemId[]>Object.keys(Item);

export type ItemType = Item.BaseType & { id: ItemId };

export type RecipeIngredient = {
  item: ItemId;
  quantity: number;
};
