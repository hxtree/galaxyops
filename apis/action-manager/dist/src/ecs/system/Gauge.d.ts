/**
 * Gauge
 * A gauge is a value that can go up and down but never go below zero.
 */
export declare class Gauge {
    private _min;
    private _current;
    private _max;
    constructor(current: number, max: number, min?: number);
    toString(): string;
    private add;
    sub(amount: number): void;
    get max(): number;
    set max(max: number);
    get min(): number;
    set min(min: number);
    get current(): number;
    set current(current: number);
    toJSON(): any;
}
