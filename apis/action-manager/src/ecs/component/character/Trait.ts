import { StatusEffect } from "./StatusEffect";
import { EffectTag } from "./character/EffectTag";

export enum Effect {
    WEAK = 'Weak', // Weakness, increases damage taken by the damage type.
    RESIST = 'Resist', // Resistance. decreases damage taken by the damage type.
    ABSORB = 'Absorb', // Absorption, reduces damage type area of effect to nearby targets.
    IMMUNE = 'Immune', // Immunity, completely blocks damage taken by the damage type.
    HEAL = 'Heal', // Healing, reverses damage taken into healing by the damage type.
}

export enum Operator {
    ADD = "ADD",
    MULTIPLY = "MULTIPLY",
    SUBTRACT = "SUBTRACT",
    DIVIDE = "DIVIDE"
}

/**
 * e.g.
 * ELECTRIC HEAL 20%
 * ARROW IMMUNE
 * COLD WEAK 2x
 * POISON IMMUNE
 * SLEEP IMMUNE
 * Experience 1.2x
 * FIRE WEAKNESS 1.2x
 * 
 */

// how to handle status effects?
// export interface Trait {
//     add?: Attribute | StatusEffect,
//     remove?: Attribute | StatusEffect,
//     quanity?: string,
//     chance?: number,
//     tags?: Array<EffectTag>
// }


export interface Trait {
    tag: EffectTag,
    modifier: Effect,
    quantity: number,
    operator: Operator
}


export type Traits = Array<Trait>;
