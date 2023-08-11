// an item is an object within the game world that can be collected by a
// player or non-player character.
// an item is not an instance of a individual item.
// https://en.wikipedia.org/wiki/Item_(game_terminology)

export namespace Item {
  export type Type = {
    name: string;
    description: string;
    maxQuantity: number;
    ingredients?: Ingredient[];
  };

  export const COMPASS: Type = {
    name: 'Compass',
    description: 'Shows direction',
    maxQuantity: 1,
    // enables player map
  };

  /**
   * GC is the currency used in all of the game.
   * It can be found or gained by defeating an opponent.
   * It is used to buy/sell items.
   */
  export const GC: Type = {
    name: 'GC',
    description: 'Currency',
    maxQuantity: 9999,
  };

  export const FLOUR: Type = {
    name: 'Flour',
    description: 'Powder made from crushed grains',
    maxQuantity: 99,
  };

  export const CHICKEN_EGG: Type = {
    name: 'Chicken Egg',
    description: 'Egg from a chicken',
    maxQuantity: 99,
  };

  export const WATER: Type = {
    name: 'Water',
    description: 'Water',
    maxQuantity: 99,
  };

  export const RICE: Type = {
    name: 'Rice',
    description: 'Rice grains',
    maxQuantity: 99,
  };

  export const PORK: Type = {
    name: 'Pork',
    description: 'Meat form a pig',
    maxQuantity: 99,
  };

  export const RICE_BALL: Type = {
    name: 'Rice Ball',
    description: 'Made of condensed rice',
    maxQuantity: 99,
    ingredients: [
      { item: 'RICE', quantity: 1 },
      { item: 'WATER', quantity: 2 },
    ],
    // heals
  };

  export const DANGO: Type = {
    name: 'Dango',
    description: 'Mochi-like sweet made from crushed rice ',
    maxQuantity: 99,
    // heals
  };

  export const RAMEN: Type = {
    name: 'Ramen',
    description: 'Noodles, tare, broth, topping and aroma oil',
    maxQuantity: 99,
    ingredients: [
      { item: 'FLOUR', quantity: 1 },
      { item: 'CHICKEN_EGG', quantity: 2 },
      { item: 'PORK', quantity: 1 },
      { item: 'WATER', quantity: 1 },
    ],
    // heals
  };

  export const PELMENI: Type = {
    name: 'Pelmeni',
    description: 'Dumplings in broth',
    maxQuantity: 99,
    ingredients: [
      { item: 'FLOUR', quantity: 1 },
      { item: 'CHICKEN_EGG', quantity: 2 },
      { item: 'PORK', quantity: 1 },
      { item: 'WATER', quantity: 1 },
    ],
  };
}

export const ItemIds = Object.keys(Item);

export type ItemId = keyof typeof Item;

export type Ingredient = {
  item: ItemId;
  quantity: number;
};
