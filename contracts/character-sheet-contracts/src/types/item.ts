import { Outcome } from './table.effect';
import { SupplyItem } from './supply-item';

export type Item = SupplyItem & {
  /**
   * When the item is used, the outcome of the action.
   */
  outcome?: Outcome;
};
