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
var _a;
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
    __metadata("design:type", typeof (_a = typeof Character_1.Character !== "undefined" && Character_1.Character) === "function" ? _a : Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9FcXVpcG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF5SDtBQUN6SCxpQ0FBOEI7QUFDOUIsMkNBQXdDO0FBR3hDLElBQXNCLFNBQVMsR0FBL0IsTUFBc0IsU0FBUztDQW1COUIsQ0FBQTtBQWhCRztJQURDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOztxQ0FDcEI7QUFHWDtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO2tEQUNwRCxxQkFBUyxvQkFBVCxxQkFBUzs0Q0FBQztBQUdyQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs4QkFDSCxXQUFJO3VDQUFBO0FBR1Y7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzJDQUNRO0FBR2pCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJOzRDQUFDO0FBR2hCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJOzRDQUFDO0FBbEJFLFNBQVM7SUFEOUIsSUFBQSxnQkFBTSxHQUFFO0dBQ2EsU0FBUyxDQW1COUI7QUFuQnFCLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIE1hbnlUb09uZSwgT25lVG9NYW55LCBDb2x1bW4sIENyZWF0ZURhdGVDb2x1bW4sIFVwZGF0ZURhdGVDb2x1bW59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuL0NoYXJhY3Rlcic7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVxdWlwbWVudCB7XG5cbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgICBpZDogc3RyaW5nO1xuICAgIFxuICAgIEBNYW55VG9PbmUoKCkgPT4gQ2hhcmFjdGVyLCAoY2hhcmFjdGVyKSA9PiBjaGFyYWN0ZXIuZXF1aXBtZW50KVxuICAgIGNoYXJhY3RlcjogQ2hhcmFjdGVyO1xuXG4gICAgQENvbHVtbigpXG4gICAgaXRlbTogSXRlbVxuXG4gICAgQENvbHVtbigpXG4gICAgZ2VhclNsb3Q6IHN0cmluZztcblxuICAgIEBVcGRhdGVEYXRlQ29sdW1uKClcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG5cbiAgICBAQ3JlYXRlRGF0ZUNvbHVtbigpXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xufSJdfQ==