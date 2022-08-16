"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInstance = void 0;
const typeorm_1 = require("typeorm");
/**
 * A instance is a record of a game engine instance
 */
let GameInstance = class GameInstance {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], GameInstance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GameInstance.prototype, "playerID", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GameInstance.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GameInstance.prototype, "createdAt", void 0);
GameInstance = __decorate([
    (0, typeorm_1.Entity)()
], GameInstance);
exports.GameInstance = GameInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9HYW1lSW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXFHO0FBRXJHOztHQUVHO0FBRUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQWF4QixDQUFBO0FBVkc7SUFEQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzs7d0NBQ3BCO0FBR1g7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzhDQUNRO0FBR2pCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJOytDQUFDO0FBR2hCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJOytDQUFDO0FBWlAsWUFBWTtJQUR4QixJQUFBLGdCQUFNLEdBQUU7R0FDSSxZQUFZLENBYXhCO0FBYlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xuXG4vKipcbiAqIEEgaW5zdGFuY2UgaXMgYSByZWNvcmQgb2YgYSBnYW1lIGVuZ2luZSBpbnN0YW5jZVxuICovXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBHYW1lSW5zdGFuY2Uge1xuXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oXCJ1dWlkXCIpXG4gICAgaWQ6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHBsYXllcklEOiBzdHJpbmc7XG5cbiAgICBAVXBkYXRlRGF0ZUNvbHVtbigpXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xuXG4gICAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbn0iXX0=