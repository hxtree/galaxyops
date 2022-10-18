export interface Item {
    name: string;
    description: string;
}
export declare type Items = Array<Item>;
export declare class Compass implements Item {
    name: 'Compass';
    description: 'Shows direction';
}
/**
 * GC is the currency used in all of the game.
 * GC can be found or gained by defeating an opponent.
 * GC is used to buy items.
 */
export declare type GC = number;
