import { ICollection } from './Collection';

export interface ICup extends Array<ICollection> {
  roll(): number;
  allocateBonuses(amount: number): number;
  get outcomePercent(): number;
  get averageOutcome(): number;
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
    let total = 0;
    this.forEach((collection: ICollection) => {
      total += collection.outcomePercent;
    });

    return total / this.length;
  }

  public get averageOutcome(): number {
    let total = 0;
    this.forEach((collection: ICollection) => {
      total += collection.averageOutcome;
    });

    return total;
  }
}
