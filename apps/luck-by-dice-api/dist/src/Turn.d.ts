import { ICup } from './Cup';
import { ILuck } from './Luck';
export interface ITurn {
}
export declare class Turn implements ITurn {
    private _notationCodec;
    private _cup;
    private _luck;
    private _extraBonus;
    /**
     * Constructor
     * @param notation
     * @param luck
     */
    constructor(notation: string | undefined, luck: number | undefined);
    get notation(): string;
    set notation(value: string);
    get luck(): ILuck;
    set luck(luck: ILuck);
    get cup(): ICup;
    set cup(cup: ICup);
    /**
     * Get min potential of turn
     * @returns
     */
    minPotential(): number;
    /**
     * Get maximum potential of turn
     * @returns
     */
    maxPotential(): number;
    get total(): number;
    get extraBonus(): number;
    /**
     * Roll cup of dice
     * @returns
     */
    roll(): number;
}
