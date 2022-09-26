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
exports.Item = void 0;
const typeorm_1 = require("typeorm");
// an item is an object within the game world that can be collected by a player or non-player character. 
// an item is not an instance of a individual item.
// https://en.wikipedia.org/wiki/Item_(game_terminology)
let Item = class Item {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "_category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Item.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Item.prototype, "createdAt", void 0);
Item = __decorate([
    (0, typeorm_1.Entity)()
], Item);
exports.Item = Item;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkg7QUFFM0gseUdBQXlHO0FBQ3pHLG1EQUFtRDtBQUNuRCx3REFBd0Q7QUFHeEQsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtDQW1CaEIsQ0FBQTtBQWhCRztJQURDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOztnQ0FDcEI7QUFHWDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7dUNBQ21CO0FBRzVCO0lBREMsSUFBQSxnQkFBTSxHQUFFOztrQ0FDWTtBQUdyQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7eUNBQ21CO0FBRzVCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJO3VDQUFDO0FBR2hCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJO3VDQUFDO0FBbEJQLElBQUk7SUFEaEIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksSUFBSSxDQW1CaEI7QUFuQlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgSm9pbkNvbHVtbiwgT25lVG9PbmUsIFVwZGF0ZURhdGVDb2x1bW4sIENyZWF0ZURhdGVDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG4vLyBhbiBpdGVtIGlzIGFuIG9iamVjdCB3aXRoaW4gdGhlIGdhbWUgd29ybGQgdGhhdCBjYW4gYmUgY29sbGVjdGVkIGJ5IGEgcGxheWVyIG9yIG5vbi1wbGF5ZXIgY2hhcmFjdGVyLiBcbi8vIGFuIGl0ZW0gaXMgbm90IGFuIGluc3RhbmNlIG9mIGEgaW5kaXZpZHVhbCBpdGVtLlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSXRlbV8oZ2FtZV90ZXJtaW5vbG9neSlcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgSXRlbSB7IFxuXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oXCJ1dWlkXCIpXG4gICAgaWQ6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHByb3RlY3RlZCBfY2F0ZWdvcnk6IHN0cmluZztcbiAgICBcbiAgICBAQ29sdW1uKClcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIEBVcGRhdGVEYXRlQ29sdW1uKClcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG5cbiAgICBAQ3JlYXRlRGF0ZUNvbHVtbigpXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xufVxuIl19