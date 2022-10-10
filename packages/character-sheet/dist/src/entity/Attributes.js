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
const CharacterSheet_1 = require("./CharacterSheet");
const Gauge_1 = require("../WIP/Gauge");
/*
 * Attributes are the primary way to describe a character's **last known state**.
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
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Attributes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CharacterSheet_1.CharacterSheet),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Attributes.prototype, "characterSheetId", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvQXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUNBUWlCO0FBQ2pCLHFEQUFnRDtBQUNoRCx3Q0FBbUM7QUFFbkM7Ozs7Ozs7O0dBUUc7QUFFSCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBMER0QixDQUFBO0FBeERDO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O3NDQUNwQjtBQUtYO0lBSEMsSUFBQSxrQkFBUSxFQUFDLEdBQUcsRUFBRSxDQUFDLCtCQUFjLENBQUM7SUFDOUIsSUFBQSxvQkFBVSxHQUFFO0lBQ1osSUFBQSxnQkFBTSxFQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOztvREFDRTtBQUl6QjtJQURDLElBQUEsZ0JBQU0sR0FBRTtrREFDSCxhQUFLLG9CQUFMLGFBQUs7d0NBQUM7QUFJWjtJQURDLElBQUEsZ0JBQU0sR0FBRTtrREFDRCxhQUFLLG9CQUFMLGFBQUs7MENBQUM7QUFJZDtJQURDLElBQUEsZ0JBQU0sR0FBRTtrREFDRixhQUFLLG9CQUFMLGFBQUs7eUNBQUM7QUFJYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7eUNBQ0s7QUFJZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7eUNBQ0s7QUFJZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MENBQ007QUFJZjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7Z0RBQ1k7QUFJckI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzJDQUNPO0FBSWhCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs0Q0FDUTtBQUlqQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MkNBQ087QUFJaEI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3dDQUNJO0FBR2I7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NkNBQUM7QUFHaEI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7NkNBQUM7QUF6REwsVUFBVTtJQUR0QixJQUFBLGdCQUFNLEdBQUU7R0FDSSxVQUFVLENBMER0QjtBQTFEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVudGl0eSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbiAgQ29sdW1uLFxuICBKb2luQ29sdW1uLFxuICBPbmVUb09uZSxcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgVXBkYXRlRGF0ZUNvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQge0NoYXJhY3RlclNoZWV0fSBmcm9tICcuL0NoYXJhY3RlclNoZWV0JztcbmltcG9ydCB7R2F1Z2V9IGZyb20gJy4uL1dJUC9HYXVnZSc7XG5cbi8qXG4gKiBBdHRyaWJ1dGVzIGFyZSB0aGUgcHJpbWFyeSB3YXkgdG8gZGVzY3JpYmUgYSBjaGFyYWN0ZXIncyAqKmxhc3Qga25vd24gc3RhdGUqKi5cbiAqIEdhdWdlIGF0dHJpYnV0ZXMgc3VjaCBhcyBMaWZlLCBTcGlyaXQsIGFuZCBEcml2ZSBoYXZlIGEgY3VycmVudCB2YWx1ZSBhbmQgYSBtYXhpbXVtIHZhbHVlLlxuICogVGhlIG1heGltdW0gdmFsdWUgbWF5IGJlIGV4Y2VlZGVkLCBidXQgdGhlIGN1cnJlbnQgdmFsdWUgY2Fubm90IGJlIG5lZ2F0aXZlLlxuICogVGhlIGN1cnJlbnQgdmFsdWUgaXMgdmFyaWFibGUsIGFuZCBtYXkgYmUgbW9kaWZpZWQgYnkgYWN0aW9ucy5cbiAqIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGZpeGVkLCBhbmQgY2Fubm90IGJlIG1vZGlmaWVkIGJ5IGFjdGlvbnMuIEluc3RlYWQgaXQgaXMgY29tcHV0ZWQgZnJvbSB0aGVcbiAqIGNoYXJhY3RlcidzIGRpc2NpcGxpbmUsIHRoZSBjaGFyYWN0ZXIncyBsZXZlbCwgYW5kIHRoZSBjaGFyYWN0ZXIncyBlcXVpcG1lbnQuXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BdHRyaWJ1dGVfKHJvbGUtcGxheWluZ19nYW1lcylcbiAqL1xuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlcyB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKCd1dWlkJylcbiAgaWQ6IHN0cmluZztcblxuICBAT25lVG9PbmUoKCkgPT4gQ2hhcmFjdGVyU2hlZXQpXG4gIEBKb2luQ29sdW1uKClcbiAgQENvbHVtbih7dW5pcXVlOiB0cnVlfSlcbiAgY2hhcmFjdGVyU2hlZXRJZDogbnVtYmVyO1xuXG4gIC8vIEEgbWVhc3VyZW1lbnQgb2Ygb25lcyBhYmlsaXR5IHRvIGhvbGQgc3Bpcml0IHRvIHBoeXNpY2FsIHBsYWluXG4gIEBDb2x1bW4oKVxuICBsaWZlOiBHYXVnZTtcblxuICAvLyBBIG1lYXN1cmVtZW50IG9mIG9uZXMgc3Bpcml0dWFsIGFiaWxpdHlcbiAgQENvbHVtbigpXG4gIHNwaXJpdDogR2F1Z2U7XG5cbiAgLy8gQSBnYXVnZSBvZiAgYWJpbGl0eSB0byBkbyBzcGVjaWFsIHNraWxsc1xuICBAQ29sdW1uKClcbiAgZHJpdmU6IEdhdWdlO1xuXG4gIC8vIFRoZSBhYmlsaXR5IHRvIGFwcGx5IGZvcmNlIHRvIG9uZXMgbW92ZW1lbnRzXG4gIEBDb2x1bW4oKVxuICBwb3dlcjogbnVtYmVyO1xuXG4gIC8vIFRoZSBhYmlsaXR5IHRvIG1vdmUgcXVpY2tseVxuICBAQ29sdW1uKClcbiAgc3BlZWQ6IG51bWJlcjtcblxuICAvLyBUaGUgcXVhbGl0eSBvZiBoYXZpbmcgZXhwZXJpZW5jZSwga25vd2xlZGdlLCBhbmQgZ29vZCBqdWRnbWVudC5cbiAgQENvbHVtbigpXG4gIHdpc2RvbTogbnVtYmVyO1xuXG4gIC8vIFRoZSBhYmlsaXR5IHRvIHRoaW5rIGFuZCByZWFzb24gbG9naWNhbGx5LlxuICBAQ29sdW1uKClcbiAgaW50ZWxsaWdlbmNlOiBudW1iZXI7XG5cbiAgLy8gVGhlIGFiaWxpdHkgdG8gcHJvdGVjdCBhbmQgZGVmZW5kIG9uZXNlbGYuXG4gIEBDb2x1bW4oKVxuICBkZWZlbnNlOiBudW1iZXI7XG5cbiAgLy8gVGhlIGFiaWxpdHkgdG8gaGl0IGFuZCBpbmp1cmUgb3RoZXJzLlxuICBAQ29sdW1uKClcbiAgYWNjdXJhY3k6IG51bWJlcjtcblxuICAvLyBUaGUgYWJpbGl0eSB0byBhdm9pZCBhbmQgZXZhZGUgYXR0YWNrcy5cbiAgQENvbHVtbigpXG4gIGV2YXNpb246IG51bWJlcjtcblxuICAvLyBUaGUgYWJpbGl0eSB0byBoYXZlIGEgZmF2b3JhYmxlIG91dGNvbWUuXG4gIEBDb2x1bW4oKVxuICBsdWNrOiBudW1iZXI7XG5cbiAgQFVwZGF0ZURhdGVDb2x1bW4oKVxuICB1cGRhdGVkQXQ6IERhdGU7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICBjcmVhdGVkQXQ6IERhdGU7XG59XG4iXX0=