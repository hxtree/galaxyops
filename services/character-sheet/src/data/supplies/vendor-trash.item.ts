import { SupplyCapacity, Item } from '@galaxyops/character-sheet-contracts';

export namespace VendorTrash {
  export const SPIDER_WEB: Item = {
    capacity: SupplyCapacity.VERY_HIGH,
    description: "It's sticky",
    marketValue: 2,
    name: 'Spider Web',
  };

  export const FANG: Item = {
    capacity: SupplyCapacity.VERY_HIGH,
    description: 'Looks kind of sharp',
    marketValue: 1,
    name: 'Fang',
  };

  export const RUBBER_DUCK: Item = {
    capacity: SupplyCapacity.VERY_HIGH,
    description: 'Quack',
    marketValue: 5,
    name: 'Rubber Duck',
  };
}
