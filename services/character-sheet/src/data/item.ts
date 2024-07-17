import {
  Attribute,
  ItemCapacity,
  Item,
} from '@galaxyops/character-sheet-contracts';

/**
 * Items crafting materials,
 * consumables, and more within the game world that can be collected by a
 * player or non-player character. Items cannot be equipped.
 * An item is not an instance of a individual item.
 * {@link https://en.wikipedia.org/wiki/Item_(game_terminology)}
 */
export namespace Items {
  export const COMPASS: Item = {
    capacity: ItemCapacity.UNIQUE,
    description: 'Shows direction',
    name: 'Compass',
    // enables player map
  };

  /**
   * GC is the currency used in all of the game.
   * It can be found or gained by defeating an opponent.
   * It is used to buy/sell items.
   */
  export const GC: Item = {
    capacity: ItemCapacity.GC,
    description: 'Currency',
    name: 'GC',
  };

  export const FLOUR: Item = {
    capacity: ItemCapacity.MEDIUM,
    description: 'Powder made from crushed grains',
    name: 'Flour',
  };

  export const CHICKEN_EGG: Item = {
    capacity: ItemCapacity.LOW,
    description: 'Egg from a chicken',
    name: 'Chicken Egg',
  };

  export const WATER: Item = {
    capacity: ItemCapacity.MEDIUM,
    description: 'Water',
    name: 'Water',
  };

  export const RICE: Item = {
    capacity: ItemCapacity.VERY_HIGH,
    description: 'Rice grains',
    name: 'Rice',
  };

  export const PORK: Item = {
    capacity: ItemCapacity.LOW,
    description: 'Meat form a pig',
    name: 'Pork',
  };

  export const RICE_BALL: Item = {
    capacity: 99,
    craftingMaterials: [
      { item: 'RICE', quantity: 1 },
      { item: 'WATER', quantity: 2 },
    ],
    description: 'Onigiri made from condensed rice',
    name: 'Rice Ball',
    outcome: {
      SELF: [
        {
          chance: 1.0,
          quantity: '3d10',
          remove: Attribute.LIFE,
        },
      ],
    },
  };

  export const DANGO: Item = {
    capacity: ItemCapacity.MEDIUM,
    description: 'Mochi-like sweet made from crushed rice ',
    name: 'Dango',
    outcome: {
      SELF: [
        {
          chance: 1.0,
          quantity: '4d10',
          remove: Attribute.LIFE,
        },
      ],
    },
  };

  export const RAMEN: Item = {
    capacity: ItemCapacity.LOW,
    craftingMaterials: [
      { item: 'FLOUR', quantity: 1 },
      { item: 'CHICKEN_EGG', quantity: 2 },
      { item: 'PORK', quantity: 1 },
      { item: 'WATER', quantity: 1 },
    ],
    description: 'Noodles, tare, broth, topping and aroma oil',
    name: 'Ramen',
    outcome: {
      SELF: [
        {
          chance: 1.0,
          quantity: '5d10',
          remove: Attribute.LIFE,
        },
      ],
    },
  };

  export const PELMENI: Item = {
    capacity: ItemCapacity.MEDIUM,
    craftingMaterials: [
      { item: 'FLOUR', quantity: 1 },
      { item: 'CHICKEN_EGG', quantity: 2 },
      { item: 'PORK', quantity: 1 },
      { item: 'WATER', quantity: 1 },
    ],
    description: 'Dumplings in broth',
    name: 'Pelmeni',
    outcome: {
      SELF: [
        {
          chance: 1.0,
          quantity: '5d10',
          remove: Attribute.LIFE,
        },
      ],
    },
  };
}

export type ItemId = keyof typeof Items;

export const ItemIds = <ItemId[]>Object.keys(Items);

export type ItemType = Item & { id: ItemId };
