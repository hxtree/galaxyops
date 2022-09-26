export interface Item {
    name: string;
    description: string;
}
export declare type Items = Array<Item>;
export declare class Compass implements Item {
    name: 'Compass';
    description: 'Shows direction';
}
