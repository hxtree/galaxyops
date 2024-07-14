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
  capacity: ItemCapacity;
  craftingMaterials?: RecipeIngredient[];
};
