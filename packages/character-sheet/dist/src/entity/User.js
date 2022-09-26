"use strict";
// Todo move to another service, do not use DTO
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
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "lastLogonDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDOzs7Ozs7Ozs7Ozs7QUFFL0MscUNBQXFHO0FBR3JHLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FnQmhCLENBQUE7QUFiRztJQURDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOztnQ0FDcEI7QUFHWDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7c0NBQ1E7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNKLElBQUk7MkNBQUM7QUFHcEI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7dUNBQUM7QUFHaEI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7dUNBQUM7QUFmUCxJQUFJO0lBRGhCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLElBQUksQ0FnQmhCO0FBaEJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVG9kbyBtb3ZlIHRvIGFub3RoZXIgc2VydmljZSwgZG8gbm90IHVzZSBEVE9cblxuaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIENyZWF0ZURhdGVDb2x1bW4sIFVwZGF0ZURhdGVDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuICAgXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBVc2VyIHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuXG4gICAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICAgIGxhc3RMb2dvbkRhdGU6IERhdGU7XG5cbiAgICBAVXBkYXRlRGF0ZUNvbHVtbigpXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xuXG4gICAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbn0iXX0=