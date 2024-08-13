import {
  Attribute,
  ItemCapacity,
  Item,
} from '@galaxyops/character-sheet-contracts';

export namespace VendorTrash {
  export const SPIDER_WEB: Item = {
    capacity: ItemCapacity.VERY_HIGH,
    description: "It's sticky",
    marketValue: 2,
    name: 'Spider Web',
  };

  export const FANG: Item = {
    capacity: ItemCapacity.VERY_HIGH,
    description: 'Looks kind of sharp',
    marketValue: 1,
    name: 'Fang',
  };
}
