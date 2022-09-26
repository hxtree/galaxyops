"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDiscipline_1 = require("./BaseDiscipline");
class Warrior extends BaseDiscipline_1.BaseDiscipline {
    constructor() {
        super(...arguments);
        this._name = 'Warrior';
        this._description = 'Specializzes in combat on the battlefield.';
        this._category = BaseDiscipline_1.DisciplineCategory.ARCHETYPE;
        // get effects(): Array<Effect> {
        //     let effects = [];
        //     if(this.level > 0) {
        //         Character.actions.push(new Focus());
        //         Character.actions.push(new Parry());
        //     }
        //     return Effects;
        // }
        //     Warrior – Warriors specialize in combat on the battlefield.
        // Actions: Focus, Parry, 
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Fycmlvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9lY3MvY29tcG9uZW50L2NoYXJhY3Rlci9kaXNjaXBsaW5lL1dhcnJpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBc0U7QUFFdEUsTUFBTSxPQUFRLFNBQVEsK0JBQWM7SUFBcEM7O1FBRWMsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixpQkFBWSxHQUFXLDRDQUE0QyxDQUFDO1FBQ3BFLGNBQVMsR0FBRyxtQ0FBa0IsQ0FBQyxTQUFTLENBQUM7UUFFbkQsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUV4QiwyQkFBMkI7UUFDM0IsK0NBQStDO1FBQy9DLCtDQUErQztRQUMvQyxRQUFRO1FBRVIsc0JBQXNCO1FBQ3RCLElBQUk7UUFFUixrRUFBa0U7UUFDbEUsMEJBQTBCO0lBQzFCLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VEaXNjaXBsaW5lLCBEaXNjaXBsaW5lQ2F0ZWdvcnkgfSBmcm9tICcuL0Jhc2VEaXNjaXBsaW5lJztcblxuY2xhc3MgV2FycmlvciBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcblxuICAgIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nID0gJ1dhcnJpb3InO1xuICAgIHByb3RlY3RlZCBfZGVzY3JpcHRpb246IHN0cmluZyA9ICdTcGVjaWFsaXp6ZXMgaW4gY29tYmF0IG9uIHRoZSBiYXR0bGVmaWVsZC4nO1xuICAgIHByb3RlY3RlZCBfY2F0ZWdvcnkgPSBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuXG4gICAgLy8gZ2V0IGVmZmVjdHMoKTogQXJyYXk8RWZmZWN0PiB7XG4gICAgLy8gICAgIGxldCBlZmZlY3RzID0gW107XG5cbiAgICAvLyAgICAgaWYodGhpcy5sZXZlbCA+IDApIHtcbiAgICAvLyAgICAgICAgIENoYXJhY3Rlci5hY3Rpb25zLnB1c2gobmV3IEZvY3VzKCkpO1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLmFjdGlvbnMucHVzaChuZXcgUGFycnkoKSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICByZXR1cm4gRWZmZWN0cztcbiAgICAvLyB9XG5cbi8vICAgICBXYXJyaW9yIOKAkyBXYXJyaW9ycyBzcGVjaWFsaXplIGluIGNvbWJhdCBvbiB0aGUgYmF0dGxlZmllbGQuXG4vLyBBY3Rpb25zOiBGb2N1cywgUGFycnksIFxufVxuIl19