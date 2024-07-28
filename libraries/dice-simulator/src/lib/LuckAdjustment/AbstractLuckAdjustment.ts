export interface ILuckAdjustment {
  set max(max: number);
  get max(): number;
  set min(min: number);
  get min(): number;
  run(currentLuck: number, rollPercent: number): number;
  adjustment(rollPercent: number): number;
}

export abstract class AbstractLuckAdjustment implements ILuckAdjustment {
  private _min: number = 0;

  private _max: number = 2147483647;

  public set max(max: number) {
    this._max = max;
  }

  public get max(): number {
    return this._max;
  }

  public set min(min: number) {
    this._min = min;
  }

  public get min(): number {
    return this._min;
  }

  /**
   * Given a current luck, modify it based on whether the rollPercentage was
   * favorable or unfavorable without exceeding min and maximum
   */
  public run(currentLuck: number, rollPercent: number = 0.5): number {
    const adjustment = this.adjustment(rollPercent);

    const adjustedLuck = currentLuck + adjustment;

    if (adjustedLuck < this._min) {
      return this._min;
    }
    if (adjustedLuck > this._max) {
      return this._max;
    }

    return adjustedLuck;
  }

  /**
   * The amount of change based on the rollPercent that should occur
   * @param rollPercent
   */
  public abstract adjustment(rollPercent: number): number;
}
