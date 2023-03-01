/**
 * Gauge
 * A gauge is a value that can go up and down but never go below zero.
 */
export class Gauge {
  private _min: number;

  private _current: number;

  private _max: number;

  constructor(current: number, max: number, min = 0) {
    this._current = current;
    this._max = max;
    this._min = min;
  }

  public toString(): string {
    return `${this._current}/${this._max}`;
  }

  private add(amount: number) {
    this._current += amount;
    if (this._current > this._max) {
      this._current = this._max;
    }
    if (this._current < this._min) {
      this._current = this._min;
    }
  }

  public sub(amount: number) {
    this.add(-amount);
  }

  public get max(): number {
    return this._max;
  }

  public set max(max: number) {
    this._max = max;
  }

  public get min(): number {
    return this._min;
  }

  public set min(min: number) {
    this._min = min;
  }

  public get current(): number {
    return this._current;
  }

  public set current(current: number) {
    this._current = current;
  }

  public toJSON(): any {
    return {
      min: this._min,
      max: this._max,
      current: this._current,
    };
  }
}
