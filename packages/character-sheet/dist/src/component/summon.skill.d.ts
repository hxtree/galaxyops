/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export declare enum Summon {
    VACHEL = "Vachel",
    FELIX = "Felix",
    HERALDIC_LION = "Heraldic Lion",
    LYRE = "Lyre",
    SANDY = "Sandy",
    OURUBORUS = "Ouruborus",
    MISCHIEVOUS = "Mischievous",
    SCRIBBLES = "Scribbles"
}
export declare type SummonType = {
    name: Summon;
    description: string;
    backstory?: string;
    commands?: string[];
};
export declare const Vachel: SummonType;
export declare const Felix: SummonType;
export declare const HeraldicLion: SummonType;
export declare const Lyre: SummonType;
export declare const Sandy: SummonType;
export declare const Ouruborus: SummonType;
export declare const Mischievous: SummonType;
export declare const Scribbles: SummonType;
