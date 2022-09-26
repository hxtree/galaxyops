"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDiscipline_1 = require("./BaseDiscipline");
class Gaurd extends BaseDiscipline_1.BaseDiscipline {
    constructor() {
        super(...arguments);
        this._name = 'Gaurd';
        this._description = 'Specialize in protection.';
        this._category = BaseDiscipline_1.DisciplineCategory.ARCHETYPE;
        // get effects(): Array<Effect> {
        //     let effects = [];
        //     if(this.level > 0) {
        //         Character.actions.push(new Gaurd());
        //         Character.actions.push(new Protect());
        //     }
        //     return Effects;
        // }
        //     Guard – Guards specialize in protection.
        // Actions: Guard, Protect, 
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2F1cmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZWNzL2NvbXBvbmVudC9jaGFyYWN0ZXIvZGlzY2lwbGluZS9HYXVyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFzRTtBQUV0RSxNQUFNLEtBQU0sU0FBUSwrQkFBYztJQUFsQzs7UUFFYyxVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsMkJBQTJCLENBQUM7UUFDbkQsY0FBUyxHQUFHLG1DQUFrQixDQUFDLFNBQVMsQ0FBQztRQUVuRCxpQ0FBaUM7UUFDakMsd0JBQXdCO1FBRXhCLDJCQUEyQjtRQUMzQiwrQ0FBK0M7UUFDL0MsaURBQWlEO1FBQ2pELFFBQVE7UUFFUixzQkFBc0I7UUFDdEIsSUFBSTtRQUVSLCtDQUErQztRQUMvQyw0QkFBNEI7SUFDNUIsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZURpc2NpcGxpbmUsIERpc2NpcGxpbmVDYXRlZ29yeSB9IGZyb20gJy4vQmFzZURpc2NpcGxpbmUnO1xuXG5jbGFzcyBHYXVyZCBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcblxuICAgIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nID0gJ0dhdXJkJztcbiAgICBwcm90ZWN0ZWQgX2Rlc2NyaXB0aW9uOiBzdHJpbmcgPSAnU3BlY2lhbGl6ZSBpbiBwcm90ZWN0aW9uLic7XG4gICAgcHJvdGVjdGVkIF9jYXRlZ29yeSA9IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG5cbiAgICAvLyBnZXQgZWZmZWN0cygpOiBBcnJheTxFZmZlY3Q+IHtcbiAgICAvLyAgICAgbGV0IGVmZmVjdHMgPSBbXTtcblxuICAgIC8vICAgICBpZih0aGlzLmxldmVsID4gMCkge1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLmFjdGlvbnMucHVzaChuZXcgR2F1cmQoKSk7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuYWN0aW9ucy5wdXNoKG5ldyBQcm90ZWN0KCkpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgcmV0dXJuIEVmZmVjdHM7XG4gICAgLy8gfVxuXG4vLyAgICAgR3VhcmQg4oCTIEd1YXJkcyBzcGVjaWFsaXplIGluIHByb3RlY3Rpb24uXG4vLyBBY3Rpb25zOiBHdWFyZCwgUHJvdGVjdCwgXG59XG4iXX0=