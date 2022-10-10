import { EffectTag } from '../effect/EffectTag';
export declare enum Effect {
    WEAK = "Weak",
    RESIST = "Resist",
    ABSORB = "Absorb",
    IMMUNE = "Immune",
    HEAL = "Heal"
}
export declare enum Operator {
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
export interface Trait {
    tag: EffectTag;
    modifier: Effect;
    quantity: number;
    operator: Operator;
}
export declare type Traits = Array<Trait>;
