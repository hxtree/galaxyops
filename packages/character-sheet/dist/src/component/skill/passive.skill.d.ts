export declare enum Passive {
    DUAL_WELD = "Dual Weld",
    ESCAPE_ARTIST = "Escape Artist",
    INTIMIDATE = "Intimidate",
    CONCENTRATION = "Concentration",
    BLUFF = "Bluff",
    SENSE_BLUFF = "Sense Bluff",
    GREEDY_INTENT = "Greedy Intent",
    SLOTH_COMPOSURE = "Sloth Composure",
    BLOOD_LUST = "Blood Lust",
    ENVIOUS_OF_COMBAT = "Envious of Combat",
    GLUTTONOUS_DESIRE = "Gluttonous Desire",
    CATCHER = "Catcher"
}
/**
 * Passive are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
export declare namespace Passive {
    type PassiveType = {
        name: string;
        description: string;
    };
    const DualWeld: PassiveType;
    const EscapeArtist: PassiveType;
    const Intimidate: PassiveType;
    const Concentration: PassiveType;
    const Bluff: PassiveType;
    const SenseBluff: PassiveType;
    const GreedyIntent: PassiveType;
    const SlothComposure: PassiveType;
    const BloodLust: PassiveType;
    const EnviousOfCombat: PassiveType;
    const GluttonousDesire: PassiveType;
    const Catcher: PassiveType;
}
