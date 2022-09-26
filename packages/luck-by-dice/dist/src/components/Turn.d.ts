import { ICup } from './Cup';
import { ILuck } from './Luck';
export interface ITurn {
}
export declare class Turn implements ITurn {
    private _notationCodec;
    private _cup;
    private _luck;
    private _extraBonus;
    constructor(notation: string | undefined, luck: number | undefined);
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
