"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
class Equipment extends Gear {
    constructor() {
        super(...arguments);
        this._category = 'Equipment';
    }
    set gearSlots(value) {
        this._gearSlots = value;
    }
    get gearSlots() {
        return this._gearSlots;
    }
}
exports.Equipment = Equipment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Vjcy9zeXN0ZW0vRXF1aXBtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQXNCLFNBQVUsU0FBUSxJQUFJO0lBQTVDOztRQUNZLGNBQVMsR0FBVyxXQUFXLENBQUM7SUFZNUMsQ0FBQztJQVBDLElBQVcsU0FBUyxDQUFDLEtBQW9CO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQWJELDhCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZWFyfSBmcm9tICcuLi9jb21wb25lbnQvZXF1aXBtZW50L0dlYXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXF1aXBtZW50IGV4dGVuZHMgR2VhciB7XG4gIHByb3RlY3RlZCBfY2F0ZWdvcnk6IHN0cmluZyA9ICdFcXVpcG1lbnQnO1xuICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2dlYXJTbG90czogQXJyYXk8c3RyaW5nPjtcblxuICBwdWJsaWMgc2V0IGdlYXJTbG90cyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMuX2dlYXJTbG90cyA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBnZWFyU2xvdHMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2dlYXJTbG90cztcbiAgfVxufVxuIl19