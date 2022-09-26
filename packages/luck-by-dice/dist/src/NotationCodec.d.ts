import { ICollection } from './Collection';
import { ICup } from './Cup';
import { IDice } from './Dice';
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
export declare class NotationCodec {
    private _separator;
    private _cup;
    get cup(): string;
    /**
     * Encode from a cup to a string
     * @param cup - the cup to encode
     * @returns
     */
    encodeCup(cup: ICup): string;
    /**
     * Encode from a collection to a string
     * @param collection - the collection to encode
     * @returns
     */
    encodeCollection(collection: ICollection): string;
    /**
     * Encode from a dice to a string
     */
    encodeDice(dice: IDice): string;
    /**
     * Decodes a dice cup notation
     * @param notation - 1d6+2*8,1d10,2d%
     */
    decodeCup(notation: string): ICup;
    /**
     * Decodes a dice collection notation
     * @param notation - 1d6+2*8
     * @returns ICollection
     */
    decodeCollection(notation: string): ICollection;
    decodeDice(notation: string): IDice;
    /**
     * Determine whether string is empty or not
     * @param string - the string to check
     * @returns
     */
    private _isEmpty;
}
