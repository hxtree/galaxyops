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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
const typeorm_1 = require("typeorm");
const Character_1 = require("./Character");
const Gauge_1 = require("../WIP/Gauge");
/*
* Attributes are the primary way to describe a character's last known state.
* Gauge attributes such as Life, Spirit, and Drive have a current value and a maximum value.
* The maximum value may be exceeded, but the current value cannot be negative.
* The current value is variable, and may be modified by actions.
* The maximum value is fixed, and cannot be modified by actions. Instead it is computed from the
* character's discipline, the character's level, and the character's equipment.
* https://en.wikipedia.org/wiki/Attribute_(role-playing_games)
*/
let Attributes = class Attributes {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Attributes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Character_1.Character),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Attributes.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Gauge_1.Gauge !== "undefined" && Gauge_1.Gauge) === "function" ? _a : Object)
], Attributes.prototype, "life", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_b = typeof Gauge_1.Gauge !== "undefined" && Gauge_1.Gauge) === "function" ? _b : Object)
], Attributes.prototype, "spirit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_c = typeof Gauge_1.Gauge !== "undefined" && Gauge_1.Gauge) === "function" ? _c : Object)
], Attributes.prototype, "drive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "power", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "speed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "wisdom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "intelligence", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "defense", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "evasion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Attributes.prototype, "luck", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Attributes.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Attributes.prototype, "createdAt", void 0);
Attributes = __decorate([
    (0, typeorm_1.Entity)()
], Attributes);
exports.Attributes = Attributes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvQXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTJIO0FBQzNILDJDQUF3QztBQUN4Qyx3Q0FBcUM7QUFFckM7Ozs7Ozs7O0VBUUU7QUFFRixJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBMkR0QixDQUFBO0FBeERHO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O3NDQUNwQjtBQUtYO0lBSEMsSUFBQSxrQkFBUSxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFTLENBQUM7SUFDekIsSUFBQSxvQkFBVSxHQUFFO0lBQ1osSUFBQSxnQkFBTSxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzsrQ0FDTDtBQUlwQjtJQURDLElBQUEsZ0JBQU0sR0FBRTtrREFDSCxhQUFLLG9CQUFMLGFBQUs7d0NBQUM7QUFJWjtJQURDLElBQUEsZ0JBQU0sR0FBRTtrREFDRCxhQUFLLG9CQUFMLGFBQUs7MENBQUM7QUFJZDtJQURDLElBQUEsZ0JBQU0sR0FBRTtrREFDRixhQUFLLG9CQUFMLGFBQUs7eUNBQUM7QUFJYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7eUNBQ0s7QUFJZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7eUNBQ0s7QUFJZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MENBQ007QUFJZjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7Z0RBQ1k7QUFJckI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzJDQUNPO0FBSWhCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs0Q0FDUTtBQUlqQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MkNBQ087QUFJaEI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3dDQUNJO0FBR2I7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NkNBQUM7QUFHaEI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NkNBQUM7QUExRFAsVUFBVTtJQUR0QixJQUFBLGdCQUFNLEdBQUU7R0FDSSxVQUFVLENBMkR0QjtBQTNEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQ29sdW1uLCBKb2luQ29sdW1uLCBPbmVUb09uZSwgQ3JlYXRlRGF0ZUNvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi9DaGFyYWN0ZXJcIjtcbmltcG9ydCB7IEdhdWdlIH0gZnJvbSBcIi4uL1dJUC9HYXVnZVwiO1xuXG4vKiBcbiogQXR0cmlidXRlcyBhcmUgdGhlIHByaW1hcnkgd2F5IHRvIGRlc2NyaWJlIGEgY2hhcmFjdGVyJ3MgbGFzdCBrbm93biBzdGF0ZS5cbiogR2F1Z2UgYXR0cmlidXRlcyBzdWNoIGFzIExpZmUsIFNwaXJpdCwgYW5kIERyaXZlIGhhdmUgYSBjdXJyZW50IHZhbHVlIGFuZCBhIG1heGltdW0gdmFsdWUuXG4qIFRoZSBtYXhpbXVtIHZhbHVlIG1heSBiZSBleGNlZWRlZCwgYnV0IHRoZSBjdXJyZW50IHZhbHVlIGNhbm5vdCBiZSBuZWdhdGl2ZS5cbiogVGhlIGN1cnJlbnQgdmFsdWUgaXMgdmFyaWFibGUsIGFuZCBtYXkgYmUgbW9kaWZpZWQgYnkgYWN0aW9ucy5cbiogVGhlIG1heGltdW0gdmFsdWUgaXMgZml4ZWQsIGFuZCBjYW5ub3QgYmUgbW9kaWZpZWQgYnkgYWN0aW9ucy4gSW5zdGVhZCBpdCBpcyBjb21wdXRlZCBmcm9tIHRoZVxuKiBjaGFyYWN0ZXIncyBkaXNjaXBsaW5lLCB0aGUgY2hhcmFjdGVyJ3MgbGV2ZWwsIGFuZCB0aGUgY2hhcmFjdGVyJ3MgZXF1aXBtZW50LlxuKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BdHRyaWJ1dGVfKHJvbGUtcGxheWluZ19nYW1lcylcbiovXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICBcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgICBpZDogc3RyaW5nO1xuXG4gICAgQE9uZVRvT25lKCgpID0+IENoYXJhY3RlcilcbiAgICBASm9pbkNvbHVtbigpXG4gICAgQENvbHVtbih7IHVuaXF1ZTogdHJ1ZSB9KVxuICAgIGNoYXJhY3RlcklkOiBudW1iZXI7XG5cbiAgICAvLyBBIG1lYXN1cmVtZW50IG9mIG9uZXMgYWJpbGl0eSB0byBob2xkIHNwaXJpdCB0byBwaHlzaWNhbCBwbGFpblxuICAgIEBDb2x1bW4oKVxuICAgIGxpZmU6IEdhdWdlO1xuXG4gICAgLy8gQSBtZWFzdXJlbWVudCBvZiBvbmVzIHNwaXJpdHVhbCBhYmlsaXR5XG4gICAgQENvbHVtbigpXG4gICAgc3Bpcml0OiBHYXVnZTtcblxuICAgIC8vIEEgZ2F1Z2Ugb2YgIGFiaWxpdHkgdG8gZG8gc3BlY2lhbCBza2lsbHNcbiAgICBAQ29sdW1uKClcbiAgICBkcml2ZTogR2F1Z2U7XG5cbiAgICAvLyBUaGUgYWJpbGl0eSB0byBhcHBseSBmb3JjZSB0byBvbmVzIG1vdmVtZW50c1xuICAgIEBDb2x1bW4oKVxuICAgIHBvd2VyOiBudW1iZXI7XG5cbiAgICAvLyBUaGUgYWJpbGl0eSB0byBtb3ZlIHF1aWNrbHlcbiAgICBAQ29sdW1uKClcbiAgICBzcGVlZDogbnVtYmVyOyAgIFxuXG4gICAgLy8gVGhlIHF1YWxpdHkgb2YgaGF2aW5nIGV4cGVyaWVuY2UsIGtub3dsZWRnZSwgYW5kIGdvb2QganVkZ21lbnQuXG4gICAgQENvbHVtbigpXG4gICAgd2lzZG9tOiBudW1iZXI7XG5cbiAgICAvLyBUaGUgYWJpbGl0eSB0byB0aGluayBhbmQgcmVhc29uIGxvZ2ljYWxseS5cbiAgICBAQ29sdW1uKClcbiAgICBpbnRlbGxpZ2VuY2U6IG51bWJlcjtcbiBcbiAgICAvLyBUaGUgYWJpbGl0eSB0byBwcm90ZWN0IGFuZCBkZWZlbmQgb25lc2VsZi5cbiAgICBAQ29sdW1uKClcbiAgICBkZWZlbnNlOiBudW1iZXI7XG4gXG4gICAgLy8gVGhlIGFiaWxpdHkgdG8gaGl0IGFuZCBpbmp1cmUgb3RoZXJzLlxuICAgIEBDb2x1bW4oKVxuICAgIGFjY3VyYWN5OiBudW1iZXI7XG4gXG4gICAgLy8gVGhlIGFiaWxpdHkgdG8gYXZvaWQgYW5kIGV2YWRlIGF0dGFja3MuXG4gICAgQENvbHVtbigpXG4gICAgZXZhc2lvbjogbnVtYmVyO1xuIFxuICAgIC8vIFRoZSBhYmlsaXR5IHRvIGhhdmUgYSBmYXZvcmFibGUgb3V0Y29tZS5cbiAgICBAQ29sdW1uKClcbiAgICBsdWNrOiBudW1iZXI7XG5cbiAgICBAVXBkYXRlRGF0ZUNvbHVtbigpXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xuXG4gICAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbn0iXX0=