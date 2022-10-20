"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zeXN0ZW0vYWN0aW9uL0ZhY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVEQUF1RDtBQUN2RCxzQ0FBc0M7QUFFdEMsd0JBQXdCO0FBQ3hCLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBRTdCLDRFQUE0RTtBQUM1RSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QixNQUFNO0FBRU4sd0NBQXdDO0FBQ3hDLDhCQUE4QjtBQUM5QixNQUFNO0FBRU4saURBQWlEO0FBQ2pELG1DQUFtQztBQUNuQyxNQUFNO0FBRU4sc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QixNQUFNO0FBRU4sOENBQThDO0FBQzlDLGlDQUFpQztBQUNqQyxNQUFNO0FBRU4sa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQixNQUFNO0FBRU4sd0NBQXdDO0FBQ3hDLDZCQUE2QjtBQUM3QixNQUFNO0FBRU4sZ0NBQWdDO0FBQ2hDLHFFQUFxRTtBQUNyRSxNQUFNO0FBRU4sMkJBQTJCO0FBQzNCLGVBQWU7QUFDZixvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsTUFBTTtBQUNOLElBQUk7QUFFSix5QkFBeUI7QUFDekIscUNBQXFDO0FBRXJDLDBDQUEwQztBQUMxQywrQkFBK0I7QUFDL0IsTUFBTTtBQUVOLDBDQUEwQztBQUMxQyw0QkFBNEI7QUFDNUIsTUFBTTtBQUVOLGlEQUFpRDtBQUNqRCwrQkFBK0I7QUFDL0IsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge0F0dHJpYnV0ZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50L2F0dHJpYnV0ZSc7XG4vLyBpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuT3BlcmF0b3InO1xuXG4vLyBleHBvcnQgY2xhc3MgRmFjdG9yIHtcbi8vICAgcHJpdmF0ZSBfYXR0cmlidXRlOiBBdHRyaWJ1dGU7XG4vLyAgIHByaXZhdGUgX29wZXJhdG9yOiBPcGVyYXRvcjtcbi8vICAgcHJpdmF0ZSBfYW1vdW50OiBudW1iZXI7XG5cbi8vICAgY29uc3RydWN0b3IoYXR0cmlidXRlOiBBdHRyaWJ1dGUsIG9wZXJhdG9yOiBPcGVyYXRvciwgYW1vdW50OiBudW1iZXIpIHtcbi8vICAgICB0aGlzLl9hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG4vLyAgICAgdGhpcy5fb3BlcmF0b3IgPSBvcGVyYXRvcjtcbi8vICAgICB0aGlzLl9hbW91bnQgPSBhbW91bnQ7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZSgpOiBBdHRyaWJ1dGUge1xuLy8gICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGU7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgc2V0IGF0dHJpYnV0ZShhdHRyaWJ1dGU6IEF0dHJpYnV0ZSkge1xuLy8gICAgIHRoaXMuX2F0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbi8vICAgfVxuXG4vLyAgIHB1YmxpYyBnZXQgb3BlcmF0b3IoKTogT3BlcmF0b3Ige1xuLy8gICAgIHJldHVybiB0aGlzLl9vcGVyYXRvcjtcbi8vICAgfVxuXG4vLyAgIHB1YmxpYyBzZXQgb3BlcmF0b3Iob3BlcmF0b3I6IE9wZXJhdG9yKSB7XG4vLyAgICAgdGhpcy5fb3BlcmF0b3IgPSBvcGVyYXRvcjtcbi8vICAgfVxuXG4vLyAgIHB1YmxpYyBnZXQgYW1vdW50KCk6IG51bWJlciB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX2Ftb3VudDtcbi8vICAgfVxuXG4vLyAgIHB1YmxpYyBzZXQgYW1vdW50KGFtb3VudDogbnVtYmVyKSB7XG4vLyAgICAgdGhpcy5fYW1vdW50ID0gYW1vdW50O1xuLy8gICB9XG5cbi8vICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4vLyAgICAgcmV0dXJuIGAke3RoaXMuX2F0dHJpYnV0ZX0gJHt0aGlzLl9vcGVyYXRvcn0gJHt0aGlzLl9hbW91bnR9YDtcbi8vICAgfVxuXG4vLyAgIHB1YmxpYyB0b0pTT04oKTogYW55IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgYXR0cmlidXRlOiB0aGlzLl9hdHRyaWJ1dGUsXG4vLyAgICAgICBvcGVyYXRvcjogdGhpcy5fb3BlcmF0b3IsXG4vLyAgICAgICBhbW91bnQ6IHRoaXMuX2Ftb3VudCxcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBjbGFzcyBGYWN0b3JzIHtcbi8vICAgcHJpdmF0ZSBfZmFjdG9yczogQXJyYXk8RmFjdG9yPjtcblxuLy8gICBjb25zdHJ1Y3RvcihmYWN0b3JzOiBBcnJheTxGYWN0b3I+KSB7XG4vLyAgICAgdGhpcy5fZmFjdG9ycyA9IGZhY3RvcnM7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgZ2V0IGZhY3RvcnMoKTogQXJyYXk8RmFjdG9yPiB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX2ZhY3RvcnM7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgc2V0IGZhY3RvcnMoZmFjdG9yczogQXJyYXk8RmFjdG9yPikge1xuLy8gICAgIHRoaXMuX2ZhY3RvcnMgPSBmYWN0b3JzO1xuLy8gICB9XG4vLyB9XG4iXX0=