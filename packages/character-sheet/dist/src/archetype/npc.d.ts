import { IArchetype } from './archetype.interface';
import { Drive, Life, Spirit } from '../component/gauges';
import { Stats } from '../component/stats';
import { Trait } from '../component/trait';
import { Items } from '../component/item.gear';
import { StatusEffect } from '../component/status.effect';
/**
 * A human or non-humanoid character.
 */
export interface INonPlayerCharacter extends IArchetype {
    name: string;
    description: string;
    life?: Life;
    drive?: Drive;
    spirit?: Spirit;
    stats?: Stats;
    traits?: Trait[];
    statusEffects?: StatusEffect[];
    loot?: Items;
}
export declare class VallonOni implements INonPlayerCharacter {
    name: 'Vallon Oni';
    description: '';
}
export declare class Mischievous implements INonPlayerCharacter {
    name: 'Mischievous';
    description: 'A black and white cat with yellow eyes.';
    affiliation: Array<string>;
}
export declare class MahdiTsia implements INonPlayerCharacter {
    name: 'Mahdi Tsia';
    description: "Malace's brother";
}
export declare class Lawzon implements INonPlayerCharacter {
    name: string;
    description: string;
    history: string;
}
export declare class Janus implements INonPlayerCharacter {
    name: string;
    description: string;
}
export declare class Spider implements INonPlayerCharacter {
    name: string;
    description: string;
}
