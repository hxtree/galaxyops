import { FayeImago, GunterStonewell, LoomeeAngora, MalaceTsia, MeekuOni, PennyKibbutz, PlayerCharacter, TraezUthsha } from '../archetype/player';
/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export declare enum SummonSkillList {
    VACHEL = "Vachel",
    FELIX = "Felix",
    HERALDIC_LION = "Heraldic Lion",
    LYRE = "Lyre",
    SANDY = "Sandy",
    OURUBORUS = "Ouruborus",
    MISCHIEVOUS = "Mischievous",
    SCRIBBLES = "Scribbles"
}
export interface Summon {
    name: SummonSkillList;
    description: string;
    summoner: PlayerCharacter;
    commands?: Array<string>;
}
export declare class Vachel implements Summon {
    name: SummonSkillList.VACHEL;
    description: 'A silver bull';
    backstory: 'A bull that Meeku raised as a child';
    summoner: MeekuOni;
    commands: [
        'Charge',
        'Graze',
        'Pull Cart'
    ];
}
export declare class Felix implements Summon {
    name: SummonSkillList.FELIX;
    description: 'A white lop-eared dwarf rabbit';
    backstory: 'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.';
    summoner: LoomeeAngora;
}
export declare class HeraldicLion implements Summon {
    name: SummonSkillList.HERALDIC_LION;
    description: 'A regal lion with an impecable stance';
    summoner: PennyKibbutz;
    commands: [
        'Passant Stance',
        'Rampant Stance',
        'Issuant Stance',
        'Guardant Stance'
    ];
}
export declare class Lyre implements Summon {
    name: SummonSkillList.LYRE;
    description: 'A giant half Luna moth and lyrebird that Faye can summon at will';
    backstory: '';
    summoner: FayeImago;
}
export declare class Sandy implements Summon {
    name: SummonSkillList.SANDY;
    description: 'A box turtle';
    backstory: '';
    summoner: TraezUthsha;
}
export declare class Ouruborus implements Summon {
    name: SummonSkillList.OURUBORUS;
    description: 'A demon that consumes itself';
    backstory: '';
    summoner: MalaceTsia;
}
export declare class Mischievous implements Summon {
    name: SummonSkillList.MISCHIEVOUS;
    description: 'A black and white cat';
    backstory: 'The Keeper of Law';
    summoner: MalaceTsia;
}
export declare class Scribbles implements Summon {
    name: SummonSkillList.SCRIBBLES;
    description: 'A flying squirrel';
    backstory: '';
    summoner: GunterStonewell;
}
