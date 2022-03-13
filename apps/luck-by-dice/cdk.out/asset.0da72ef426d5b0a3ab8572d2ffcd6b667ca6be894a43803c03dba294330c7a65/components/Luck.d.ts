import { ILuckAdjustment } from './LuckAdjustment/AbstractLuckAdjustment';
export declare enum Active {
    enable = 0,
    disable = 1
}
export interface ILuck {
    get status(): Active;
    set status(value: Active);
    set algorithm(algorithm: ILuckAdjustment);
    get algorithm(): ILuckAdjustment;
    update(rollPercent: number): void;
    get value(): number;
    set value(luck: number);
    modify(number: number): number;
    get applicablePercent(): number;
}
export declare class Luck implements ILuck {
    private _status;
    private _value;
    private _history;
    private _algorithm;
    constructor(value?: number);
    set status(value: Active);
    get status(): Active;
    set algorithm(algorithm: ILuckAdjustment);
    get algorithm(): ILuckAdjustment;
    update(rollPercent: number): void;
    get value(): number;
    set value(value: number);
    modify(number: number): number;
    get applicablePercent(): number;
}
