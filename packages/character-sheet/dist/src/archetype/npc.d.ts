import { Drive, Life, Spirit } from '../component/gauges';
import { Stats } from '../component/stats';
import { Trait } from '../component/trait';
import { Items } from '../component/item.gear';
import { StatusEffect } from '../component/status.effect';
import { Discipline } from '../component/discipline';
/**
 * A human or non-humanoid character.
 */
export declare namespace NPCList {
    type Character = {
        firstName: string;
        lastName?: string;
        alias?: string[];
        description?: string;
        backstory?: string;
        symbolizes?: string;
        affiliation?: string[];
        history?: string;
        life?: Life;
        drive?: Drive;
        spirit?: Spirit;
        stats?: Stats;
        traits?: Trait[];
        statusEffects?: StatusEffect[];
        potentialDisciplines?: Discipline[];
        loot?: Items;
    };
    /**
     * Keepers
     */
    const Mischievous: Character;
    const Janus: Character;
    const Loomee: Character;
    /**
     *
     */
    const GaaliRuin: Character;
    /**
     * Sins
     */
    const Vallon: Character;
    const Mahdi: Character;
    const Lawzon: Character;
    const Spider: Character;
}
export declare type NPCKey = typeof NPCList;
export declare type NPCType = keyof NPCKey;
export declare const npc: (id: string) => NPCList.Character;
