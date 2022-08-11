import {Dice} from './Dice';
import {NotationCodec} from './NotationCodec';

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
export class Collection implements ICollection {
  private _dice: Array<Dice> = [];

  private _sides: number;

  private _modifier: number;

  private _multiplier: number;

  /** excess bonus amount that could not be absorbed by dice */
  private _excess: number;

  // Sides should be a Dice object
  public constructor(
    amount: number,
    sides: number,
    modifier: number = 0,
    multiplier: number = 1,
  ) {
    if (amount === undefined) {
      throw new RangeError('A collection must have at least one dice.');
    }

    for (let i = 1; i <= amount; i++) {
      this._dice.push(new Dice(sides));
    }

    this._sides = sides;
    this._modifier = modifier;
    this._multiplier = multiplier;
    this._excess = 0;
  }

  public allocateBonuses(amount: number): number {
    this._dice.forEach((dice: Dice) => {
      amount = dice.allocateBonuses(amount);
    });
    return amount;
  }

  public set modifier(value: number) {
    this._modifier = value;
  }

  public get modifier(): number {
    return this._modifier;
  }

  public set multiplier(value: number) {
    this._multiplier = value;
  }

  public get multiplier(): number {
    return this._multiplier;
  }

  public get sides(): number {
    return this._sides;
  }

  public get dice(): Array<Dice> {
    return this._dice;
  }

  public set dice(value: Array<Dice>) {
    this._dice = value;
  }

  public get value(): number | undefined {
    let value = 0;

    for (const dice of this._dice) {
      if (dice.value === undefined) {
        continue;
      }
      value += dice.value;
    }

    return (value + this._modifier) * this._multiplier;
  }

  public get bonus(): number {
    let bonus = 0;

    for (const dice of this._dice) {
      if (dice.bonus === undefined) {
        continue;
      }
      bonus += dice.bonus;
    }

    return bonus;
  }

  public set bonus(value: number) {
    this._dice = this._shuffle(this._dice);

    // do while seems to make more sense here
    this._dice.forEach((part: Dice, index: number, dice: Array<Dice>) => {
      if (value === 0) {
        dice[index].bonus = 0;
      }

      if (dice[index].value === undefined) {
        throw new RangeError(
          'A bonus cannot only be applied to a rolled dice.',
        );
      }

      const bonus = dice[index].max - (dice[index].value ?? 0);

      dice[index].bonus = bonus;

      if (value > bonus) {
        value -= bonus;
      } else {
        value = 0;
      }
    });

    this._excess = value;
  }

  public get totalNatural(): number {
    let total = 0;

    this._dice.forEach((part: Dice, index: number, dice: Array<Dice>) => {
      total += dice[index].total;
    });

    return total;
  }

  public get total(): number {
    return (this.totalNatural + this.modifier) * this.multiplier;
  }

  public get excess(): number {
    return this._excess;
  }

  public get notation(): string {
    const notationCodec = new NotationCodec();
    return notationCodec.encodeCollection(this);
  }

  public get minOutcome(): number {
    return this.count();
  }

  public get maxOutcome(): number {
    return this.count() * this._sides;
  }

  public get minPotential(): number {
    return (this.minOutcome + this.modifier) * this.multiplier;
  }

  public get maxPotential(): number {
    return (this.maxOutcome + this.modifier) * this.multiplier;
  }

  public get outcomePercent(): number {
    if (this.value === undefined) {
      throw new Error(
        'Dice must be rolled before an outcome percent can be computed',
      );
    }
    return (this.value - this.count()) / (this.maxOutcome - this.count());
  }

  public count(): number {
    return this._dice.length;
  }

  public roll(): number {
    this._dice.forEach((part: Dice, index: number, dice: Array<Dice>) => {
      dice[index].roll();
    });

    return this.total;
  }

  private _shuffle(array: Array<Dice>): Array<Dice> {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
