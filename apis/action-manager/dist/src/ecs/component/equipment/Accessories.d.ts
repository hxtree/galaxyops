import { GearSlot } from './Gear';
export interface Accessory {
    name: string;
    description: string;
    purpose: string;
    gearSlots: Array<GearSlot>;
}
/**
 * Accessories
 * Seondary items that are equippable
 */
export declare class GoldBracelets {
    name: 'Gold Bracelets';
    description: 'Weighted gold bracelets that occupy both wrists meant';
    purpose: 'To keep Meeku’s power at bay (increase experience earned)';
    gearSlots: [GearSlot.RIGHT_WRIST, GearSlot.LEFT_WRIST];
}
export declare class RedScarf {
    name: 'Red Scarf';
    description: 'a red scarf knitted by Meeku’s mother to keep him warm.';
    gearSlots: [GearSlot.NECK];
}
export declare class FuneralJar {
    name: 'Funeral Jar';
    description: 'a jar meant to contain the ashes of the dead';
    gearSlots: [GearSlot.WAIST];
}
export declare class SwordSheath {
    name: 'Sword sheath';
    description: 'a sheath meant to hold a broad sword.';
    gearSlots: [GearSlot.BACK];
}
export declare class MagenticGloves {
    name: 'Magnetic Gloves';
    description: 'Helps catch metal objects (Traez’s boomerang).';
    effects: '+20 to catch action.';
    gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}
export declare class CatchersMitt {
    name: 'Catchers Mitt';
    effects: '+20 to catch action.';
    gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}
