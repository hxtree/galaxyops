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
exports.Experience = void 0;
const typeorm_1 = require("typeorm");
const Character_1 = require("./Character");
const BaseDiscipline_1 = require("./../discipline/BaseDiscipline");
/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */
let Experience = class Experience {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Experience.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Character_1.Character, (character) => character.equipment),
    __metadata("design:type", Character_1.Character)
], Experience.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: BaseDiscipline_1.Discipline
    }),
    __metadata("design:type", typeof (_a = typeof BaseDiscipline_1.Discipline !== "undefined" && BaseDiscipline_1.Discipline) === "function" ? _a : Object)
], Experience.prototype, "discipline", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Experience.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Experience.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Experience.prototype, "createdAt", void 0);
Experience = __decorate([
    (0, typeorm_1.Entity)()
], Experience);
exports.Experience = Experience;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwZXJpZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvRXhwZXJpZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTBIO0FBQzFILDJDQUF3QztBQUN4QyxtRUFBNEQ7QUFFNUQ7Ozs7O0dBS0c7QUFFSCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBc0J0QixDQUFBO0FBbkJHO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O3NDQUNwQjtBQUdYO0lBREMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQ3BELHFCQUFTOzZDQUFDO0FBTXJCO0lBSkMsSUFBQSxnQkFBTSxFQUFDO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsMkJBQVU7S0FDbkIsQ0FBQztrREFDVSwyQkFBVSxvQkFBViwyQkFBVTs4Q0FBQztBQUd2QjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7OENBQ1U7QUFHbkI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NkNBQUM7QUFHaEI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NkNBQUM7QUFyQlAsVUFBVTtJQUR0QixJQUFBLGdCQUFNLEdBQUU7R0FDSSxVQUFVLENBc0J0QjtBQXRCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgTWFueVRvT25lLCBDb2x1bW4sIE9uZVRvTWFueSwgQ3JlYXRlRGF0ZUNvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi9DaGFyYWN0ZXJcIjtcbmltcG9ydCB7IERpc2NpcGxpbmUgfSBmcm9tIFwiLi8uLi9kaXNjaXBsaW5lL0Jhc2VEaXNjaXBsaW5lXCI7XG5cbi8qKlxuICogRXhwZXJpZW5jZSByZWNvcmRzIGEgY2hhcmFjdGVyIGV4cGVyaWVuY2UgZm9yIGEgc3BlY2lmaWMgZGlzY2lwbGluZS5cbiAqIERpZmZlcmVudCBkaXNjaXBsaW5lcyBoYXZlIGRpZmZlcmVudCBleHBlcmllbmNlIHJlcXVpcmVtZW50cy5cbiAqIEEgY2hhcmFjdGVyIGNhbiBoYXZlIG11bHRpcGxlIGRpc2NpcGxpbmVzIGFuZCB0aGVyZWZvcmUgbXVsdGlwbGUgZXhwZXJpZW5jZSByZWNvcmRzLlxuICogUHJvZ3Jlc3Npb24gaW4gb25lIGRpc2NpcGluZSBtYXkgdW5sb2NrIG90aGVyIGRpc2NpcGxpbmVzLCBhY3Rpb25zLCBhbmQgYXR0cmlidXRlcyBib251c2VzLlxuICovXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBFeHBlcmllbmNlIHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkOiBzdHJpbmc7XG4gICAgICBcbiAgICBATWFueVRvT25lKCgpID0+IENoYXJhY3RlciwgKGNoYXJhY3RlcikgPT4gY2hhcmFjdGVyLmVxdWlwbWVudClcbiAgICBjaGFyYWN0ZXI6IENoYXJhY3RlcjtcblxuICAgIEBDb2x1bW4oe1xuICAgICAgICB0eXBlOiBcImVudW1cIixcbiAgICAgICAgZW51bTogRGlzY2lwbGluZVxuICAgIH0pXG4gICAgZGlzY2lwbGluZTogRGlzY2lwbGluZTtcblxuICAgIEBDb2x1bW4oKVxuICAgIGV4cGVyaWVuY2U6IG51bWJlcjtcblxuICAgIEBVcGRhdGVEYXRlQ29sdW1uKClcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG5cbiAgICBAQ3JlYXRlRGF0ZUNvbHVtbigpXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xufSJdfQ==