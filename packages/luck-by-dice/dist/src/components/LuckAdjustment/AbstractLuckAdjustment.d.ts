export interface ILuckAdjustment {
    set max(max: number);
    get max(): number;
    set min(min: number);
    get min(): number;
    run(currentLuck: number, rollPercent: number): number;
    adjustment(rollPercent: number): number;
}
export declare abstract class AbstractLuckAdjustment implements ILuckAdjustment {
    private _min;
    private _max;
    set max(max: number);
    get max(): number;
    set min(min: number);
    get min(): number;
    run(currentLuck: number, rollPercent?: number): number;
    abstract adjustment(rollPercent: number): number;
}
