import {EffectTag} from './../effect/EffectTag';

export enum Effect {
  WEAK = 'Weak', // Weakness, increases damage taken by the damage type.
  RESIST = 'Resist', // Resistance. decreases damage taken by the damage type.
  ABSORB = 'Absorb', // Absorption, reduces damage type area of effect to nearby targets.
  IMMUNE = 'Immune', // Immunity, completely blocks damage taken by the damage type.
  HEAL = 'Heal', // Healing, reverses damage taken into healing by the damage type.
}

export enum Operator {
  ADD = 'ADD',
  MULTIPLY = 'MULTIPLY',
  SUBTRACT = 'SUBTRACT',
  DIVIDE = 'DIVIDE',
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
  tag: EffectTag;
  modifier: Effect;
  quantity: number;
  operator: Operator;
}

export type Traits = Array<Trait>;

// import { Attribute } from "./Attribute";
// import { Operator } from "./Operator";
// import { Element } from "./Element";

// export class Trait {
//     private _attribute: Attribute;
//     private _element: Element;
//     private _operator: Operator;
//     private _value: number;

//     // todo what about an action Command that causes target to trigger action event?

//     constructor(attribute: Attribute, element: Element, operator: Operator, value: number) {
//         this._attribute = attribute;
//         this._element = element;
//         this._operator = operator;
//         this._value = value;
//     }
// }

// export type Traits = Array<Trait>;

// // const trait = new Trait(Attribute.Life,Element.Fire,Operator["/"],50);

// export class Trait {
//     { tags: [EffectTag.ELECTRIC], remove: StatEffect.LIFE, quanity: "1d6+2", },
// }
