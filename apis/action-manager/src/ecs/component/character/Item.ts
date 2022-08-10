export interface IItem {
    name: string;
    description: string;
}

export type Items = Array<IItem>;

export class Compass implements IItem {
    name: 'Compass';
    description: 'Shows direction';
}