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
exports.Experience = void 0;
const typeorm_1 = require("typeorm");
const CharacterSheet_1 = require("./CharacterSheet");
const Discipline_1 = require("../component/character/Discipline");
/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */
let Experience = class Experience {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Experience.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CharacterSheet_1.CharacterSheet, characterSheet => characterSheet.equipment),
    __metadata("design:type", CharacterSheet_1.CharacterSheet)
], Experience.prototype, "characterSheet", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Discipline_1.Discipline,
    }),
    __metadata("design:type", String)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwZXJpZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvRXhwZXJpZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FRaUI7QUFDakIscURBQWdEO0FBQ2hELGtFQUE2RDtBQUU3RDs7Ozs7R0FLRztBQUVILElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7Q0FxQnRCLENBQUE7QUFuQkM7SUFEQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzs7c0NBQ3BCO0FBR1g7SUFEQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsK0JBQWMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7OEJBQzVELCtCQUFjO2tEQUFDO0FBTS9CO0lBSkMsSUFBQSxnQkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsdUJBQVU7S0FDakIsQ0FBQzs7OENBQ3FCO0FBR3ZCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs4Q0FDVTtBQUduQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1IsSUFBSTs2Q0FBQztBQUdoQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1IsSUFBSTs2Q0FBQztBQXBCTCxVQUFVO0lBRHRCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLFVBQVUsQ0FxQnRCO0FBckJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRW50aXR5LFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuICBNYW55VG9PbmUsXG4gIENvbHVtbixcbiAgT25lVG9NYW55LFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBVcGRhdGVEYXRlQ29sdW1uLFxufSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7Q2hhcmFjdGVyU2hlZXR9IGZyb20gJy4vQ2hhcmFjdGVyU2hlZXQnO1xuaW1wb3J0IHtEaXNjaXBsaW5lfSBmcm9tICcuLi9jb21wb25lbnQvY2hhcmFjdGVyL0Rpc2NpcGxpbmUnO1xuXG4vKipcbiAqIEV4cGVyaWVuY2UgcmVjb3JkcyBhIGNoYXJhY3RlciBleHBlcmllbmNlIGZvciBhIHNwZWNpZmljIGRpc2NpcGxpbmUuXG4gKiBEaWZmZXJlbnQgZGlzY2lwbGluZXMgaGF2ZSBkaWZmZXJlbnQgZXhwZXJpZW5jZSByZXF1aXJlbWVudHMuXG4gKiBBIGNoYXJhY3RlciBjYW4gaGF2ZSBtdWx0aXBsZSBkaXNjaXBsaW5lcyBhbmQgdGhlcmVmb3JlIG11bHRpcGxlIGV4cGVyaWVuY2UgcmVjb3Jkcy5cbiAqIFByb2dyZXNzaW9uIGluIG9uZSBkaXNjaXBpbmUgbWF5IHVubG9jayBvdGhlciBkaXNjaXBsaW5lcywgYWN0aW9ucywgYW5kIGF0dHJpYnV0ZXMgYm9udXNlcy5cbiAqL1xuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgRXhwZXJpZW5jZSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKCd1dWlkJylcbiAgaWQ6IHN0cmluZztcblxuICBATWFueVRvT25lKCgpID0+IENoYXJhY3RlclNoZWV0LCBjaGFyYWN0ZXJTaGVldCA9PiBjaGFyYWN0ZXJTaGVldC5lcXVpcG1lbnQpXG4gIGNoYXJhY3RlclNoZWV0OiBDaGFyYWN0ZXJTaGVldDtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiAnZW51bScsXG4gICAgZW51bTogRGlzY2lwbGluZSxcbiAgfSlcbiAgZGlzY2lwbGluZTogRGlzY2lwbGluZTtcblxuICBAQ29sdW1uKClcbiAgZXhwZXJpZW5jZTogbnVtYmVyO1xuXG4gIEBVcGRhdGVEYXRlQ29sdW1uKClcbiAgdXBkYXRlZEF0OiBEYXRlO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKClcbiAgY3JlYXRlZEF0OiBEYXRlO1xufVxuIl19