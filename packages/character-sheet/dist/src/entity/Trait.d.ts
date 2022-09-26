import { Character } from "./Character";
import { ModifierTag } from "../tag/ModifierTag";
export declare enum Operator {
    ADD = "ADD",
    MULTIPLY = "MULTIPLY",
    SUBTRACT = "SUBTRACT",
    DIVIDE = "DIVIDE"
}
export declare enum Effect {
    WEAK = "Weak",
    RESIST = "Resist",
    ABSORB = "Absorb",
    IMMUNE = "Immune",
    HEAL = "Heal"
}
/**
 * Trait indicates a characters single resistances or weakness to type of effect
 * Trait-based resistances and weaknesses are calculated by the game engine based on whether tag is associated
 * with action being applied to target character.
 * Traits are stackable; a character can have multiple traits with the same ModifierType.
 *
 * e.g.
 * RESIST FIRE ADD 50
 * WEAK ICE MULTIPLY 0.5
 * IMMUNE BLADE NULL NULL
 * IMMUNE POSION NULL NULL
 * RESISTANT SPEED_DECREASE DIVIDE 0.5
 * HEAL LIFE_INCREASE MULTIPLY 1.25
*/
export declare class Trait {
    id: string;
    character: Character;
    effect: Effect;
    modifier: ModifierTag;
    operator: Operator;
    value: number;
    updatedAt: Date;
    createdAt: Date;
    toJSON(): any;
    /**
     * "Resistant to fire (-70%)"
     * "Weak to cold (x2.5)"
     * "Immune to frost"
     */
    toString(): string;
}
