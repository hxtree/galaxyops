
import { Gear } from './Gear';

export abstract class Equipment extends Gear {
    protected _category: string = 'Equipment';
    protected _name: string;
    protected _description: string;
    protected _gearSlots: Array<string>;

    public set gearSlots(value: Array<string>) {
        this._gearSlots = value;
    }

    public get gearSlots(): Array<string> {
        return this._gearSlots;
    }
}