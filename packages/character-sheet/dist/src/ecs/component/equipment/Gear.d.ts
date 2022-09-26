/**
 * Gear is a physical item that can be equiped by a character has.
 */
declare type GearCategory = 'weapon' | 'accessory' | 'garment' | 'item' | 'consumable' | 'other' | 'token' | 'tool';
export interface Gear {
    name: string;
    itemSlots: {};
    category: GearCategory;
}
export declare enum GearSlot {
    'HEAD' = "Head",
    'NECK' = "Neck",
    'BACK' = "Back",
    'TORSO' = "Torso",
    'RIGHT_WRIST' = "Right Wrist",
    'LEFT_WRIST' = "Left Wrist",
    'RIGHT_HAND' = "Right Hand",
    'LEFT_HAND' = "Left Hand",
    'WAIST' = "WAIST",
    'LEGS' = "Legs",
    'FEET' = "Feet"
}
export {};
