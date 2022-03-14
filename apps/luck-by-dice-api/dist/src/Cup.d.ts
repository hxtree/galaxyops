import { ICollection } from './Collection';
export interface ICup extends Array<ICollection> {
    roll(): number;
    allocateBonuses(amount: number): number;
    get outcomePercent(): number;
}
/**
 * A cup is a array containing collections
 */
export declare class Cup extends Array implements ICup {
    allocateBonuses(amount: number): number;
    roll(): number;
    get outcomePercent(): number;
    private _getAverage;
}
