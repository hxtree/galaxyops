import { Attribute } from "./Attribute";

export class Effect {
    private _thingId: string;
    private _attribute: Attribute;
    private _value: number;

    // todo what about an action Command that causes target to trigger action event?

    constructor(thingId: string, attribute: Attribute, value: number) {
        this._thingId = thingId;
        this._attribute = attribute;
        this._value = value;
    }   
}

export type Effects = Array<Effect>;