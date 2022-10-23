/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export declare enum Summon {
    SUMMON = "SUMMON",
    DISMISS = "Dismiss",
    COMMAND = "Command",
    VACHEL = "Vachel",
    FELIX = "Felix",
    HERALDIC_LION = "Heraldic Lion",
    LYRE = "Lyre",
    SANDY = "Sandy",
    OURUBORUS = "Ouruborus",
    MISCHIEVOUS = "Mischievous",
    SCRIBBLES = "Scribbles"
}
export declare namespace Summon {
    type SummonType = {
        name: Summon;
        description: string;
        backstory?: string;
        commands?: string[];
    };
    const Vachel: SummonType;
    const Felix: SummonType;
    const HeraldicLion: SummonType;
    const Lyre: SummonType;
    const Sandy: SummonType;
    const Ouruborus: SummonType;
    const Mischievous: SummonType;
    const Scribbles: SummonType;
}
