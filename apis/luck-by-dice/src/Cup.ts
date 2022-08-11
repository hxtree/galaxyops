import {ICollection} from './Collection';

export interface ICup extends Array<ICollection> {
  roll(): number;
  allocateBonuses(amount: number): number;
  get outcomePercent(): number;
}

/**
 * A cup is a array containing collections
 */
export class Cup extends Array implements ICup {
  public allocateBonuses(amount: number): number {
    this.forEach((collection: ICollection) => {
      amount = collection.allocateBonuses(amount);
    });
    return amount;
  }

  public roll(): number {
    let value = 0;
    this.forEach((collection: ICollection) => {
      // roll each collection
      collection.roll();

      if (collection.value !== undefined) {
        // get value without modifier and multiplier
        value += collection.value;
      }
    });

    return value;
  }

  public get outcomePercent(): number {
    const values: Array<number> = [];
    this.forEach((collection: ICollection) => {
      values.push(collection.outcomePercent);
    });
    return this._getAverage(values);
  }

  private _getAverage(array: Array<number>): number {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total / array.length;
  }
}
