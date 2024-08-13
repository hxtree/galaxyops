import {
  Attribute,
  SupplyCapacity,
  Item,
} from '@galaxyops/character-sheet-contracts';

/**
 * Crafting materials,
 * consumables, and more within the game world that can be collected by a
 * player or non-player character. Items cannot be equipped.
 * An item is not an instance of a individual item.
 * {@link https://en.wikipedia.org/wiki/Item_(game_terminology)}
 */
export namespace CraftingMaterials {
  export const FLOUR: Item = {
    capacity: SupplyCapacity.MEDIUM,
    description: 'Powder made from crushed grains',
    name: 'Flour',
  };

  export const CHICKEN_EGG: Item = {
    capacity: SupplyCapacity.LOW,
    description: 'Egg from a chicken',
    name: 'Chicken Egg',
  };

  export const WATER: Item = {
    capacity: SupplyCapacity.MEDIUM,
    description: 'Water',
    name: 'Water',
  };

  export const RICE: Item = {
    capacity: SupplyCapacity.VERY_HIGH,
    description: 'Rice grains',
    name: 'Rice',
  };

  export const PORK: Item = {
    capacity: SupplyCapacity.LOW,
    description: 'Meat form a pig',
    name: 'Pork',
  };
}
