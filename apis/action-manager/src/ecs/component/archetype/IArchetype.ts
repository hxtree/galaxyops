import { StatusEffects } from "../StatusEffect";
import { Drive, Life, Spirit, Stats } from "../Attribute";
import { Traits } from "../Trait";
import { Token } from "./Token";

/**
 * A character that can be played
 * values are relative to player instance
 */
export interface IPlayerCharacter {
    name: string;
    description: string;
    experience: number;
    life: Life;
    drive: Drive;
    spirit: Spirit;
    stats: Stats;
    traits: Traits;
    statusEffects: StatusEffects;
    token: Token;
}

/**
 * A human or non-humanoid character.
 */
export interface INonPlayerCharacter {
    name: string;
    description: string;
    life: Life;
    drive: Drive;
    spirit: Spirit;
    stats: Stats;
    traits: Traits;
    statusEffects: StatusEffects;
}
