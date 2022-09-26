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
exports.Character = void 0;
const typeorm_1 = require("typeorm");
const Trait_1 = require("./Trait");
const Experience_1 = require("./Experience");
const Equipment_1 = require("./Equipment");
const Attributes_1 = require("./Attributes");
/**
 * A character is a instance of a player or non-player
 */
let Character = class Character {
    constructor() {
        this._equipmentSlots = ['head', 'neck', 'chest', 'hands', 'waist', 'legs', 'feet'];
    }
    addEquipment(equipment) {
        this.equipment.push(equipment);
    }
    removeEquipment(equipment) {
        this.equipment.splice(this.equipment.indexOf(equipment), 1);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Character.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Trait_1.Trait, (trait) => trait.character),
    __metadata("design:type", Array)
], Character.prototype, "traits", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Attributes_1.Attributes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Attributes_1.Attributes)
], Character.prototype, "attributes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Experience_1.Experience, (experience) => experience.character),
    __metadata("design:type", Array)
], Character.prototype, "experiences", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Equipment_1.Equipment, (equipment) => equipment.character),
    __metadata("design:type", Array)
], Character.prototype, "equipment", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Character.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Character.prototype, "createdAt", void 0);
Character = __decorate([
    (0, typeorm_1.Entity)()
], Character);
exports.Character = Character;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9JO0FBR3BJLG1DQUFnQztBQUNoQyw2Q0FBMEM7QUFDMUMsMkNBQXdDO0FBQ3hDLDZDQUEwQztBQUUxQzs7R0FFRztBQUVGLElBQXNCLFNBQVMsR0FBL0IsTUFBc0IsU0FBUztJQUEvQjtRQW9CVyxvQkFBZSxHQUFHLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFlekYsQ0FBQztJQVBVLFlBQVksQ0FBQyxTQUFvQjtRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sZUFBZSxDQUFDLFNBQW9CO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDSixDQUFBO0FBaENHO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O3FDQUNwQjtBQUdYO0lBREMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGFBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs4QkFDM0MsS0FBSzt5Q0FBUTtBQUlyQjtJQUZDLElBQUEsa0JBQVEsRUFBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBVSxDQUFDO0lBQzFCLElBQUEsb0JBQVUsR0FBRTs4QkFDRCx1QkFBVTs2Q0FBQztBQUd2QjtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDOzhCQUNyRCxLQUFLOzhDQUFhO0FBRy9CO0lBREMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7OzRDQUN6QztBQU90QjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1IsSUFBSTs0Q0FBQztBQUdoQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1IsSUFBSTs0Q0FBQztBQTFCRyxTQUFTO0lBRDlCLElBQUEsZ0JBQU0sR0FBRTtHQUNhLFNBQVMsQ0FtQy9CO0FBbkNzQiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBPbmVUb09uZSwgT25lVG9NYW55LCBKb2luQ29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBVcGRhdGVEYXRlQ29sdW1uLCBDb2x1bW59IGZyb20gJ3R5cGVvcm0nO1xuICAgXG5pbXBvcnQgeyBCYXNlQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvQmFzZUFjdGlvblwiO1xuaW1wb3J0IHsgVHJhaXQgfSBmcm9tIFwiLi9UcmFpdFwiO1xuaW1wb3J0IHsgRXhwZXJpZW5jZSB9IGZyb20gXCIuL0V4cGVyaWVuY2VcIjtcbmltcG9ydCB7IEVxdWlwbWVudCB9IGZyb20gXCIuL0VxdWlwbWVudFwiO1xuaW1wb3J0IHsgQXR0cmlidXRlcyB9IGZyb20gXCIuL0F0dHJpYnV0ZXNcIjtcblxuLyoqXG4gKiBBIGNoYXJhY3RlciBpcyBhIGluc3RhbmNlIG9mIGEgcGxheWVyIG9yIG5vbi1wbGF5ZXJcbiAqL1xuIEBFbnRpdHkoKVxuIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFyYWN0ZXIgeyBcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkOiBzdHJpbmc7XG4gICAgXG4gICAgQE9uZVRvTWFueSgoKSA9PiBUcmFpdCwgKHRyYWl0KSA9PiB0cmFpdC5jaGFyYWN0ZXIpXG4gICAgdHJhaXRzOiBBcnJheTxUcmFpdD47XG5cbiAgICBAT25lVG9PbmUoKCkgPT4gQXR0cmlidXRlcylcbiAgICBASm9pbkNvbHVtbigpXG4gICAgYXR0cmlidXRlczogQXR0cmlidXRlcztcblxuICAgIEBPbmVUb01hbnkoKCkgPT4gRXhwZXJpZW5jZSwgKGV4cGVyaWVuY2UpID0+IGV4cGVyaWVuY2UuY2hhcmFjdGVyKVxuICAgIGV4cGVyaWVuY2VzOiBBcnJheTxFeHBlcmllbmNlPjtcblxuICAgIEBPbmVUb01hbnkoKCkgPT4gRXF1aXBtZW50LCAoZXF1aXBtZW50KSA9PiBlcXVpcG1lbnQuY2hhcmFjdGVyKVxuICAgIGVxdWlwbWVudDogRXF1aXBtZW50W11cblxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEFycmF5PEJhc2VBY3Rpb24+O1xuXG4gICAgcHJpdmF0ZSBfZXF1aXBtZW50U2xvdHMgPSBbJ2hlYWQnLCduZWNrJywgJ2NoZXN0JywgJ2hhbmRzJywgJ3dhaXN0JywgJ2xlZ3MnLCAnZmVldCddO1xuXG4gICAgQFVwZGF0ZURhdGVDb2x1bW4oKVxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcblxuICAgIEBDcmVhdGVEYXRlQ29sdW1uKClcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBwdWJsaWMgYWRkRXF1aXBtZW50KGVxdWlwbWVudDogRXF1aXBtZW50KXtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnQucHVzaChlcXVpcG1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVFcXVpcG1lbnQoZXF1aXBtZW50OiBFcXVpcG1lbnQpe1xuICAgICAgICB0aGlzLmVxdWlwbWVudC5zcGxpY2UodGhpcy5lcXVpcG1lbnQuaW5kZXhPZihlcXVpcG1lbnQpLCAxKTtcbiAgICB9XG59Il19