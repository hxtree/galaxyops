export interface Item {
    name: string;
    description: string;
}

export type Items = Array<Item>;

export class Compass implements Item {
    name: 'Compass';
    description: 'Shows direction';
}