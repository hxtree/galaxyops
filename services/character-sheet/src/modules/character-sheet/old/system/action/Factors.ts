// import {Attribute} from '../../component/attribute';
// import {Operator} from '.Operator';

// export class Factor {
//   private _attribute: Attribute;
//   private _operator: Operator;
//   private _amount: number;

//   constructor(attribute: Attribute, operator: Operator, amount: number) {
//     this._attribute = attribute;
//     this._operator = operator;
//     this._amount = amount;
//   }

//   public get attribute(): Attribute {
//     return this._attribute;
//   }

//   public set attribute(attribute: Attribute) {
//     this._attribute = attribute;
//   }

//   public get operator(): Operator {
//     return this._operator;
//   }

//   public set operator(operator: Operator) {
//     this._operator = operator;
//   }

//   public get amount(): number {
//     return this._amount;
//   }

//   public set amount(amount: number) {
//     this._amount = amount;
//   }

//   public toString(): string {
//     return `${this._attribute} ${this._operator} ${this._amount}`;
//   }

//   public toJSON(): any {
//     return {
//       attribute: this._attribute,
//       operator: this._operator,
//       amount: this._amount,
//     };
//   }
// }

// export class Factors {
//   private _factors: Array<Factor>;

//   constructor(factors: Array<Factor>) {
//     this._factors = factors;
//   }

//   public get factors(): Array<Factor> {
//     return this._factors;
//   }

//   public set factors(factors: Array<Factor>) {
//     this._factors = factors;
//   }
// }
