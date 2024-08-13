import {
  Attribute,
  SupplyCapacity,
  Item,
} from '@galaxyops/character-sheet-contracts';

export namespace Food {
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
    capacity: SupplyCapacity.MEDIUM,
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
    capacity: SupplyCapacity.LOW,
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
    capacity: SupplyCapacity.MEDIUM,
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
