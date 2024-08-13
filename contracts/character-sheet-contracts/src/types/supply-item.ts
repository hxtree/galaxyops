import { Slot } from './slot';
import { SupplyCapacity } from './supply-capacity';

export type RecipeIngredient = {
  item: string;
  quantity: number;
};

export type SupplyItem = {
  /**
   * The name of the weapon.
   */
  name: string;

  /**
   * The immediately evident appearance of the weapon.
   */
  description: string;

  /**
   * The capacity of the item, how many of the item can be held in a single slot.
   */
  capacity: SupplyCapacity;

  /**
   * The ingredients needed to craft the item.
   */
  craftingMaterials?: RecipeIngredient[];

  // TODO should be capable slots, and an array of them
  // for example {INVENTORY, {RIGHT_HAND, LEFT_HAND}, {RIGHT_CLAW, LEFT_CLAW}}
  gearSlots?: Slot[];

  /**
   * The amount of money the item is worth in the market,
   * actual amount to by and sell the may vary by vendor.
   * for example a vendor may buy an item for 50% of its market value and
   * sell it for 150% of its market value.
   */
  marketValue?: number;
};
