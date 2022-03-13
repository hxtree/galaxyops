import { Dice } from './Dice';
export interface ICollection {
    set modifier(value: number);
    get modifier(): number;
    set multiplier(value: number);
    get multiplier(): number;
    get sides(): number;
    get dice(): Array<Dice>;
    set dice(value: Array<Dice>);
    get value(): number | undefined;
    get bonus(): number;
    set bonus(value: number);
    get totalNatural(): number;
    get total(): number;
    get excess(): number;
    get notation(): string;
    get minOutcome(): number;
    get maxOutcome(): number;
    get minPotential(): number;
    get maxPotential(): number;
    get outcomePercent(): number;
    count(): number;
    roll(): number;
    allocateBonuses(amount: number): number;
}
/**
 * A Collection holds same sided Dice and can be configured to modify or multiply the Dice outcome.
 */
export declare class Collection implements ICollection {
    private _dice;
    private _sides;
    private _modifier;
    private _multiplier;
    /** excess bonus amount that could not be absorbed by dice */
    private _excess;
    constructor(amount: number, sides: number, modifier?: number, multiplier?: number);
    allocateBonuses(amount: number): number;
    set modifier(value: number);
    get modifier(): number;
    set multiplier(value: number);
    get multiplier(): number;
    get sides(): number;
    get dice(): Array<Dice>;
    set dice(value: Array<Dice>);
    get value(): number | undefined;
    get bonus(): number;
    set bonus(value: number);
    get totalNatural(): number;
    get total(): number;
    get excess(): number;
    get notation(): string;
    get minOutcome(): number;
    get maxOutcome(): number;
    get minPotential(): number;
    get maxPotential(): number;
    get outcomePercent(): number;
    count(): number;
    roll(): number;
    private _shuffle;
}
