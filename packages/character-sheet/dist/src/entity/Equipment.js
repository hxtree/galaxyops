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
exports.Equipment = void 0;
const typeorm_1 = require("typeorm");
const Item_1 = require("./Item");
const Character_1 = require("./Character");
let Equipment = class Equipment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Equipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Character_1.Character, (character) => character.equipment),
    __metadata("design:type", Character_1.Character)
], Equipment.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Item_1.Item)
], Equipment.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Equipment.prototype, "gearSlot", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Equipment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Equipment.prototype, "createdAt", void 0);
Equipment = __decorate([
    (0, typeorm_1.Entity)()
], Equipment);
exports.Equipment = Equipment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9FcXVpcG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXlIO0FBQ3pILGlDQUE4QjtBQUM5QiwyQ0FBd0M7QUFHeEMsSUFBc0IsU0FBUyxHQUEvQixNQUFzQixTQUFTO0NBbUI5QixDQUFBO0FBaEJHO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O3FDQUNwQjtBQUdYO0lBREMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQ3BELHFCQUFTOzRDQUFDO0FBR3JCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzhCQUNILFdBQUk7dUNBQUE7QUFHVjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MkNBQ1E7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NENBQUM7QUFHaEI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NENBQUM7QUFsQkUsU0FBUztJQUQ5QixJQUFBLGdCQUFNLEdBQUU7R0FDYSxTQUFTLENBbUI5QjtBQW5CcUIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgTWFueVRvT25lLCBPbmVUb01hbnksIENvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vQ2hhcmFjdGVyJztcblxuQEVudGl0eSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXF1aXBtZW50IHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkOiBzdHJpbmc7XG4gICAgXG4gICAgQE1hbnlUb09uZSgoKSA9PiBDaGFyYWN0ZXIsIChjaGFyYWN0ZXIpID0+IGNoYXJhY3Rlci5lcXVpcG1lbnQpXG4gICAgY2hhcmFjdGVyOiBDaGFyYWN0ZXI7XG5cbiAgICBAQ29sdW1uKClcbiAgICBpdGVtOiBJdGVtXG5cbiAgICBAQ29sdW1uKClcbiAgICBnZWFyU2xvdDogc3RyaW5nO1xuXG4gICAgQFVwZGF0ZURhdGVDb2x1bW4oKVxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcblxuICAgIEBDcmVhdGVEYXRlQ29sdW1uKClcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG59Il19