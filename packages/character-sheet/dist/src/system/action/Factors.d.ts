import { Attribute } from "./Attribute";
import { Operator } from "./Operator";
export declare class Factor {
    private _attribute;
    private _operator;
    private _amount;
    constructor(attribute: Attribute, operator: Operator, amount: number);
    get attribute(): Attribute;
    set attribute(attribute: Attribute);
    get operator(): Operator;
    set operator(operator: Operator);
    get amount(): number;
    set amount(amount: number);
    toString(): string;
    toJSON(): any;
}
export declare class Factors {
    private _factors;
    constructor(factors: Array<Factor>);
    get factors(): Array<Factor>;
    set factors(factors: Array<Factor>);
}
