/**
 * Gear is a physical item that can be equiped by a character has.
 */
type GearCategory =
  | 'weapon'
  | 'accessory'
  | 'garment'
  | 'item'
  | 'consumable'
  | 'other'
  | 'token'
  | 'tool';

export interface Gear {
  name: string;
  itemSlots: {};
  category: GearCategory;
}
