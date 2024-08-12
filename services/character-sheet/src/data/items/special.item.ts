import {
  Attribute,
  ItemCapacity,
  Item,
} from '@galaxyops/character-sheet-contracts';

export namespace SpecialItems {
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
}
