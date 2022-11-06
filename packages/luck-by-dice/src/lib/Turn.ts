import {ICollection} from './Collection';
import {Cup, ICup} from './Cup';
import {Active, ILuck, Luck} from './Luck';
import {INotationCodec, NotationCodec} from './NotationCodec';

export interface ITurn {
  get notation(): string;
  set notation(value: string);
  get luck(): ILuck;
  set luck(luck: ILuck);
  get cup(): ICup;
  set cup(cup: ICup);
  minPotential(): number;
  maxPotential(): number;
  get total(): number;
  get extraBonus(): number;
  roll(): number;
}

export class Turn implements ITurn {
  private _notationCodec: INotationCodec;

  private _cup: ICup;

  private _luck: ILuck;

  private _extraBonus: number; // surplusBonus;

  /**
   * Constructor
   * @param notation - dice notation to be used for turn
   * @param luck - inital value of luck
   */
  public constructor(notation: string | undefined, luck: number | undefined) {
    this._notationCodec = new NotationCodec();
    this._extraBonus = 0;

    if (luck === undefined) {
      this._luck = new Luck();
    } else {
      this._luck = new Luck(luck);
    }

    if (notation === undefined) {
      this._cup = new Cup();
    } else {
      this._cup = this._notationCodec.decodeCup(notation);
    }
  }

  public get notation(): string {
    return this._notationCodec.encodeCup(this._cup);
  }

  public set notation(value: string) {
    this._cup = this._notationCodec.decodeCup(value);
  }

  public get luck(): ILuck {
    return this._luck;
  }

  public set luck(luck: ILuck) {
    this._luck = luck;
  }

  public get cup(): ICup {
    return this._cup;
  }

  public set cup(cup: ICup) {
    this._cup = cup;
  }

  /**
   * Get min potential of turn
   * @returns
   */
  public minPotential(): number {
    let total = 0;
    this._cup.forEach((collection: ICollection) => {
      total += collection.minPotential;
    });
    return total;
  }

  /**
   * Get maximum potential of turn
   * @returns
   */
  public maxPotential(): number {
    let total = 0;
    this._cup.forEach((collection: ICollection) => {
      total += collection.maxPotential;
    });

    return total;
  }

  public get total(): number {
    let total = 0;
    this._cup.forEach((collection: ICollection) => {
      total += collection.total;
    });
    return total;
  }

  public get extraBonus(): number {
    return this._extraBonus;
  }

  /**
   * Roll cup of dice
   * @returns
   */
  public roll(): number {
    const value = this._cup.roll();

    if (this._luck.status === Active.disable) {
      return this.total;
    }

    // update luck base value based on roll outcome percentage
    this._luck.update(this._cup.outcomePercent);

    const bonus = this._luck.modify(value) - value;

    // take luck modifier and distribute to dice
    // luck modifies actual dice not modifiers or multipliers
    // there is the potential for an amount to still exist after above iterations, store it
    this._extraBonus = this.cup.allocateBonuses(bonus);

    return this.total;
  }
}
