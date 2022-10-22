import { GearSlot } from './gear';
/**
 * Outfit
 *
 * A collection of garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individuallly.
 */
export declare type OutfitType = {
    name: string;
    description: string;
    gearSlots?: GearSlot[];
};
export declare enum Outfit {
    TSHIRT_AND_JEANS = "T-Shirt and Jeans",
    OFFICERS_UNIFORM = "Officer's Uniform"
}
export declare const TShirtAndJeans: OutfitType;
export declare const OfficersUniform: OutfitType;
