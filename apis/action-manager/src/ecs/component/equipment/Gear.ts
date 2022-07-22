
type GearCategory = "weapon" | "accessory" | "garment" | "item" | "consumable" | "other" | "token" | "tool"; 

/**
 * Gear is a physical item that can be equiped by a character has.
 */
export abstract class Gear {
    
    protected _name: string;
    protected _itemSlots: {}

    private category: GearCategory;

}