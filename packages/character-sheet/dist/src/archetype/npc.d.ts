import { Drive, Life, Spirit } from '../component/gauges';
import { Stats } from '../component/stats';
import { Trait } from '../component/trait';
import { Items } from '../component/item.gear';
import { StatusEffect } from '../component/status.effect';
/**
 * A human or non-humanoid character.
 */
export declare namespace NPCList {
    type Character = {
        name: string;
        description: string;
        history?: string;
        life?: Life;
        drive?: Drive;
        spirit?: Spirit;
        stats?: Stats;
        traits?: Trait[];
        statusEffects?: StatusEffect[];
        loot?: Items;
    };
    const VallonOni: Character;
    const Mischievous: Character;
    const MahdiTsia: Character;
    const Lawzon: Character;
    const Janus: Character;
    const Spider: Character;
}
export declare type NPCKey = typeof NPCList;
export declare type NPCType = keyof NPCKey;
export declare const npc: (id: string) => NPCList.Character;
