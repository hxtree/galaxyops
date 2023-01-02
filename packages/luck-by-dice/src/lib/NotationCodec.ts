import { Collection, ICollection } from './Collection';
import { Cup, ICup } from './Cup';
import { Dice, IDice } from './Dice';

export interface INotationCodec {
  get cup(): string;
  encodeCup(cup: ICup): string;
  encodeCollection(collection: ICollection): string;
  encodeDice(dice: IDice): string;
  decodeCup(notation: string): ICup;
  decodeCollection(notation: string): ICollection;
  decodeDice(notation: string): IDice;
}

/**
 * Codec that encodes objects to notations and decodes notations to objects.
 */
export class NotationCodec {
  private _separator: string = ',';

  private _cup: string = '2';

  public get cup(): string {
    return this._cup;
  }

  /**
   * Encode from a cup to a string
   * @param cup - the cup to encode
   * @returns
   */
  public encodeCup(cup: ICup): string {
    let notation = '';

    let firstIteration = true;
    cup.forEach((collection: ICollection) => {
      if (firstIteration) {
        firstIteration = false;
      } else {
        notation += this._separator;
      }

      notation += this.encodeCollection(collection);
    });

    return notation;
  }

  /**
   * Encode from a collection to a string
   * @param collection - the collection to encode
   * @returns
   */
  public encodeCollection(collection: ICollection): string {
    let notation = '';
    const amount = collection.count();
    if (amount > 1) {
      notation += amount;
    }

    const { sides } = collection;
    if (sides === 100) {
      notation += 'd%';
    } else {
      notation += `d${sides}`;
    }
    const { modifier } = collection;
    if (modifier > 0) {
      notation += `+${Math.abs(modifier)}`;
    } else if (modifier < 0) {
      notation += `-${Math.abs(modifier)}`;
    }

    const { multiplier } = collection;
    if (multiplier > 1) {
      notation += `*${multiplier}`;
    }

    return notation;
  }

  /**
   * Encode from a dice to a string
   */
  public encodeDice(dice: IDice): string {
    let notation = '';
    if (dice.max === 100) {
      notation += 'd%';
    } else {
      notation += `d${dice.max}`;
    }
    return notation;
  }

  /**
   * Decodes a dice cup notation
   * @param notation - 1d6+2*8,1d10,2d%
   */
  public decodeCup(notation: string): ICup {
    const expressionParts = notation.toLowerCase().split(this._separator);
    const cup = new Cup();

    expressionParts.forEach((expressionPart: string) => {
      cup.push(this.decodeCollection(expressionPart));
    });

    return cup;
  }

  /**
   * Decodes a dice collection notation
   * @param notation - 1d6+2*8
   * @returns ICollection
   */
  public decodeCollection(notation: string): ICollection {
    let amount = 1;
    let sides = 2;
    let multiplier = 1;
    let modifier = 0;

    let unsorted = notation.split('d');

    amount = unsorted[0] !== '' ? Number(unsorted[0]) : 1;

    unsorted = unsorted[1].split('*');

    if (!this._isEmpty(unsorted[1])) {
      multiplier = Number(unsorted[1]);
    }

    if (unsorted[0].includes('+') !== false) {
      unsorted = unsorted[0].split('+');
      modifier = unsorted[1] !== null ? Number(unsorted[1]) : 0;
    } else if (unsorted[0].includes('-') !== false) {
      unsorted = unsorted[0].split('-');
      modifier = unsorted[1] !== null ? 0 - Number(unsorted[1]) : 0;
    }

    if (unsorted[0] === '%') {
      sides = 100;
    } else {
      sides = Number(unsorted[0]);
    }

    return new Collection(amount, sides, modifier, multiplier);
  }

  public decodeDice(notation: string): IDice {
    if (notation.charAt(0).toLowerCase() !== 'd') {
      throw new Error('Invalid dice notation');
    }
    const number = Number(notation.substring(1));
    return new Dice(number);
  }

  /**
   * Determine whether string is empty or not
   * @param string - the string to check
   * @returns
   */
  private _isEmpty(string: string): boolean {
    return !string || string.length === 0;
  }
}
