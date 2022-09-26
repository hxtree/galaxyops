import {ILuckAdjustment} from './LuckAdjustment/AbstractLuckAdjustment';
import {DefaultLuckAdjustment} from './LuckAdjustment/DefaultLuckAdjustment';

export enum Active {
  enable = 0,
  disable = 1,
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

export class Luck implements ILuck {
  private _status: Active;

  private _value: number;

  private _history: Array<number> = [];

  private _algorithm: ILuckAdjustment;

  public constructor(value?: number) {
    this._algorithm = new DefaultLuckAdjustment();

    // disable luck if undefined
    if (value === undefined) {
      this._status = Active.disable;
      this._value = 0;
      return;
    }

    this._status = Active.enable;
    this._history.push(value);
    this._value = value;
  }

  public set status(value: Active) {
    this._status = value;
  }

  public get status(): Active {
    return this._status;
  }

  public set algorithm(algorithm: ILuckAdjustment) {
    this._algorithm = algorithm;
  }

  public get algorithm(): ILuckAdjustment {
    return this._algorithm;
  }

  public update(rollPercent: number): void {
    this.value += this._algorithm.adjustment(rollPercent);
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._history.push(value);
    this._value = value;
  }

  public modify(number: number): number {
    let newNumber = number;
    if (this._status === 0) {
      newNumber *= this.applicablePercent;

      return Math.round(newNumber);
    }

    return newNumber;
  }

  public get applicablePercent(): number {
    const change = Math.random() * Math.abs(this._value) * 0.01;
    if (this._value < 0) {
      return 1 - change;
    }
    if (this._value === 0) {
      return 1;
    }
    return 1 + change;
  }
}
