import { Outcome } from './table.effect';

export enum ItemCapacity {
  UNIQUE = 1,
  LOW = 10,
  MEDIUM = 25,
  HIGH = 50,
  VERY_HIGH = 75,
  MAXIMUM = 99,
  GC = 9999,
}

export type RecipeIngredient = {
  item: string;
  quantity: number;
};

export type Item = {
  name: string;
  description: string;

  /**
   * The capacity of the item, how many of the item can be held in a single slot.
   */
  capacity: ItemCapacity;

  /**
   * The ingredients needed to craft the item.
   */
  craftingMaterials?: RecipeIngredient[];

  /**
   * The amount of money the item is worth in the market,
   * actual amount to by and sell the may vary by vendor.
   * for example a vendor may buy an item for 50% of its market value and
   * sell it for 150% of its market value.
   */
  marketValue?: number;

  /**
   * When the item is used, the outcome of the action.
   */
  outcome?: Outcome;
};
