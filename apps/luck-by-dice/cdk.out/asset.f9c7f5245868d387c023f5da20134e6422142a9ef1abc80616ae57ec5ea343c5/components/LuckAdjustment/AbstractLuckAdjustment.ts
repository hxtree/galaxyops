export interface ILuckAdjustment {
    set max(max: number);
    get max(): number;
    set min(min: number);
    get min(): number;
    run(currentLuck: number, rollPercent: number): number;
    adjustment(rollPercent: number): number;
}

export abstract class AbstractLuckAdjustment implements ILuckAdjustment
{
    private _min: number = 0;
    private _max: number = 2147483647;

    public set max(max: number)
    {
        this.max = max;
    }

    public get max(): number
    {
        return this._max;
    }

    public set min(min: number)
    {
        this._min = min;
    }

    public get min(): number
    {
        return this._min;
    }

    public run(currentLuck: number, rollPercent: number = 0.5): number
    {
        const adjustment = this.adjustment(rollPercent);

        const adjustedLuck = (currentLuck + adjustment);

        if (adjustedLuck < this._min) {
            // Return the amount of adjustment it would take for currentLuck
            // to equal min
            return (this._min - currentLuck);
        } else if (adjustedLuck > this.max) {
            // Return the amount of adjustment it would take for currentLuck
            // to equal max
            return (this._max - currentLuck);
        }

        return adjustment;
    }


    public abstract adjustment(rollPercent: number): number;
}