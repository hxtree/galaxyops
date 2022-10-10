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
exports.CharacterSheet = void 0;
const typeorm_1 = require("typeorm");
const Experience_1 = require("./Experience");
const Equipment_1 = require("./Equipment");
const Trait_1 = require("./Trait");
const Attributes_1 = require("./Attributes");
let CharacterSheet = 
/**
 * Contains the latest known instance of a player or non-player character
 */
class CharacterSheet {
    /**
     * characters actual stats vary based on disciplines, afflictions, and equipment
     * the values actually stored in the database are the raw stats
     */
    getStats() { }
    /**
     * skills are determined based on disciplines, afflictions, and equipment
     * they are not correlated to character
     */
    getSkills() { }
    addEquipment(equipment) {
        this.equipment.push(equipment);
    }
    removeEquipment(equipment) {
        this.equipment.splice(this.equipment.indexOf(equipment), 1);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], CharacterSheet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterSheet.prototype, "archetype", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Trait_1.Trait, trait => trait.character),
    __metadata("design:type", Array)
], CharacterSheet.prototype, "traits", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Attributes_1.Attributes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Attributes_1.Attributes)
], CharacterSheet.prototype, "attributes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Experience_1.Experience, experience => experience.characterSheet),
    __metadata("design:type", Array)
], CharacterSheet.prototype, "experiences", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Equipment_1.Equipment, equipment => equipment.character),
    __metadata("design:type", Array)
], CharacterSheet.prototype, "equipment", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CharacterSheet.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CharacterSheet.prototype, "createdAt", void 0);
CharacterSheet = __decorate([
    (0, typeorm_1.Entity)()
    /**
     * Contains the latest known instance of a player or non-player character
     */
], CharacterSheet);
exports.CharacterSheet = CharacterSheet;
const User = dynamoose.model('CharacterSheet', {
    id: Number,
    name: String,
});
const myUser = new User({
    id: 1,
    name: 'Tim',
});
console.log(myUser.id);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyU2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXR5L0NoYXJhY3RlclNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQVNpQjtBQUNqQiw2Q0FBd0M7QUFDeEMsMkNBQXNDO0FBQ3RDLG1DQUE4QjtBQUM5Qiw2Q0FBd0M7QUFNeEMsSUFBYSxjQUFjO0FBSDNCOztHQUVHO0FBQ0gsTUFBYSxjQUFjO0lBOEJ6Qjs7O09BR0c7SUFDSCxRQUFRLEtBQUksQ0FBQztJQUViOzs7T0FHRztJQUNILFNBQVMsS0FBSSxDQUFDO0lBRVAsWUFBWSxDQUFDLFNBQW9CO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxlQUFlLENBQUMsU0FBb0I7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGLENBQUE7QUEvQ0M7SUFEQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzs7MENBQ3BCO0FBT1g7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O2lEQUNTO0FBR2xCO0lBREMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGFBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7OEJBQ3pDLEtBQUs7OENBQVE7QUFJckI7SUFGQyxJQUFBLGtCQUFRLEVBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsQ0FBQztJQUMxQixJQUFBLG9CQUFVLEdBQUU7OEJBQ0QsdUJBQVU7a0RBQUM7QUFHdkI7SUFEQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7O21EQUMzQztBQUcxQjtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7aURBQ3RDO0FBR3ZCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJO2lEQUFDO0FBR2hCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJO2lEQUFDO0FBNUJMLGNBQWM7SUFKMUIsSUFBQSxnQkFBTSxHQUFFO0lBQ1Q7O09BRUc7R0FDVSxjQUFjLENBaUQxQjtBQWpEWSx3Q0FBYztBQW1EM0IsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtJQUM3QyxFQUFFLEVBQUUsTUFBTTtJQUNWLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUM7SUFDdEIsRUFBRSxFQUFFLENBQUM7SUFDTCxJQUFJLEVBQUUsS0FBSztDQUNaLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRW50aXR5LFxuICBDb2x1bW4sXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEpvaW5Db2x1bW4sXG4gIE9uZVRvTWFueSxcbiAgT25lVG9PbmUsXG4gIFVwZGF0ZURhdGVDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtFeHBlcmllbmNlfSBmcm9tICcuL0V4cGVyaWVuY2UnO1xuaW1wb3J0IHtFcXVpcG1lbnR9IGZyb20gJy4vRXF1aXBtZW50JztcbmltcG9ydCB7VHJhaXR9IGZyb20gJy4vVHJhaXQnO1xuaW1wb3J0IHtBdHRyaWJ1dGVzfSBmcm9tICcuL0F0dHJpYnV0ZXMnO1xuXG5ARW50aXR5KClcbi8qKlxuICogQ29udGFpbnMgdGhlIGxhdGVzdCBrbm93biBpbnN0YW5jZSBvZiBhIHBsYXllciBvciBub24tcGxheWVyIGNoYXJhY3RlclxuICovXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXG4gIGlkOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGJhc2UgY2hhcmFjdGVyIGluZm9ybWF0aW9uIG5vdCBzdG9yZWQgaW4gZGF0YWJhc2VcbiAgICogY29udGFpbnMgcG90ZW50aWFsR2VhdFNsb3RzLCBwb3RlbnRpYWxEaXNjaXBsaW5lcywgZXRjLlxuICAgKi9cbiAgQENvbHVtbigpXG4gIGFyY2hldHlwZTogc3RyaW5nO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gVHJhaXQsIHRyYWl0ID0+IHRyYWl0LmNoYXJhY3RlcilcbiAgdHJhaXRzOiBBcnJheTxUcmFpdD47XG5cbiAgQE9uZVRvT25lKCgpID0+IEF0dHJpYnV0ZXMpXG4gIEBKb2luQ29sdW1uKClcbiAgYXR0cmlidXRlczogQXR0cmlidXRlcztcblxuICBAT25lVG9NYW55KCgpID0+IEV4cGVyaWVuY2UsIGV4cGVyaWVuY2UgPT4gZXhwZXJpZW5jZS5jaGFyYWN0ZXJTaGVldClcbiAgZXhwZXJpZW5jZXM6IEV4cGVyaWVuY2VbXTtcblxuICBAT25lVG9NYW55KCgpID0+IEVxdWlwbWVudCwgZXF1aXBtZW50ID0+IGVxdWlwbWVudC5jaGFyYWN0ZXIpXG4gIGVxdWlwbWVudDogRXF1aXBtZW50W107XG5cbiAgQFVwZGF0ZURhdGVDb2x1bW4oKVxuICB1cGRhdGVkQXQ6IERhdGU7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgLyoqXG4gICAqIGNoYXJhY3RlcnMgYWN0dWFsIHN0YXRzIHZhcnkgYmFzZWQgb24gZGlzY2lwbGluZXMsIGFmZmxpY3Rpb25zLCBhbmQgZXF1aXBtZW50XG4gICAqIHRoZSB2YWx1ZXMgYWN0dWFsbHkgc3RvcmVkIGluIHRoZSBkYXRhYmFzZSBhcmUgdGhlIHJhdyBzdGF0c1xuICAgKi9cbiAgZ2V0U3RhdHMoKSB7fVxuXG4gIC8qKlxuICAgKiBza2lsbHMgYXJlIGRldGVybWluZWQgYmFzZWQgb24gZGlzY2lwbGluZXMsIGFmZmxpY3Rpb25zLCBhbmQgZXF1aXBtZW50XG4gICAqIHRoZXkgYXJlIG5vdCBjb3JyZWxhdGVkIHRvIGNoYXJhY3RlclxuICAgKi9cbiAgZ2V0U2tpbGxzKCkge31cblxuICBwdWJsaWMgYWRkRXF1aXBtZW50KGVxdWlwbWVudDogRXF1aXBtZW50KSB7XG4gICAgdGhpcy5lcXVpcG1lbnQucHVzaChlcXVpcG1lbnQpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUVxdWlwbWVudChlcXVpcG1lbnQ6IEVxdWlwbWVudCkge1xuICAgIHRoaXMuZXF1aXBtZW50LnNwbGljZSh0aGlzLmVxdWlwbWVudC5pbmRleE9mKGVxdWlwbWVudCksIDEpO1xuICB9XG59XG5cbmNvbnN0IFVzZXIgPSBkeW5hbW9vc2UubW9kZWwoJ0NoYXJhY3RlclNoZWV0Jywge1xuICBpZDogTnVtYmVyLFxuICBuYW1lOiBTdHJpbmcsXG59KTtcbmNvbnN0IG15VXNlciA9IG5ldyBVc2VyKHtcbiAgaWQ6IDEsXG4gIG5hbWU6ICdUaW0nLFxufSk7XG5jb25zb2xlLmxvZyhteVVzZXIuaWQpO1xuIl19