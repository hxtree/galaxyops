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
exports.Inventory = void 0;
const typeorm_1 = require("typeorm");
// 
let Inventory = class Inventory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Inventory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inventory.prototype, "_playerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inventory.prototype, "_placeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inventory.prototype, "_itemId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inventory.prototype, "_quntity", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Inventory.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Inventory.prototype, "createdAt", void 0);
Inventory = __decorate([
    (0, typeorm_1.Entity)()
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52ZW50b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9JbnZlbnRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9HO0FBRXBHLEdBQUc7QUFFSCxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBdUJyQixDQUFBO0FBcEJHO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O3FDQUNwQjtBQUdYO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs0Q0FDaUI7QUFJMUI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzJDQUNnQjtBQUd6QjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MENBQ2U7QUFHeEI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzJDQUNnQjtBQUd6QjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1IsSUFBSTs0Q0FBQztBQUdoQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1IsSUFBSTs0Q0FBQztBQXRCUCxTQUFTO0lBRHJCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLFNBQVMsQ0F1QnJCO0FBdkJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIENyZWF0ZURhdGVDb2x1bW4sIFVwZGF0ZURhdGVDb2x1bW59IGZyb20gXCJ0eXBlb3JtXCI7XG4gICBcbi8vIFxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBwcml2YXRlIF9wbGF5ZXJJZDogbnVtYmVyO1xuXG4gICAgLy8gd2hlcmUgaXMgdGhlIGl0ZW0sIGJhbmssIGNoZXN0LCBldGMuXG4gICAgQENvbHVtbigpXG4gICAgcHJpdmF0ZSBfcGxhY2VJZDogbnVtYmVyO1xuXG4gICAgQENvbHVtbigpXG4gICAgcHJpdmF0ZSBfaXRlbUlkOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uKClcbiAgICBwcml2YXRlIF9xdW50aXR5OiBudW1iZXI7XG5cbiAgICBAVXBkYXRlRGF0ZUNvbHVtbigpXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xuXG4gICAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbn0iXX0=