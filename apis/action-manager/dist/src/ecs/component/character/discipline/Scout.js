"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDiscipline_1 = require("./BaseDiscipline");
class Scout extends BaseDiscipline_1.BaseDiscipline {
    constructor() {
        super(...arguments);
        this._name = 'Scout';
        this._description = 'Specialize in moving ahead of the party to gathering information and reconnaissance.';
        this._category = BaseDiscipline_1.DisciplineCategory.ARCHETYPE;
        // get effects(): Array<Effect> {
        //     let effects = [];
        //     if(this.level > 0) {
        //         Character.actions.push(new Scout());
        //         Character.actions.push(new Scan());
        //         Character.actions.push(new Search());
        //     }
        //     return Effects;
        // }
        //     Scout – Scouts specialize moving ahead of the party to gathering information and reconnaissance it.
        // Actions: Scout, Scan, Search
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZWNzL2NvbXBvbmVudC9jaGFyYWN0ZXIvZGlzY2lwbGluZS9TY291dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFzRTtBQUV0RSxNQUFNLEtBQU0sU0FBUSwrQkFBYztJQUFsQzs7UUFFYyxVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsc0ZBQXNGLENBQUM7UUFDOUcsY0FBUyxHQUFHLG1DQUFrQixDQUFDLFNBQVMsQ0FBQztRQUVuRCxpQ0FBaUM7UUFDakMsd0JBQXdCO1FBRXhCLDJCQUEyQjtRQUMzQiwrQ0FBK0M7UUFDL0MsOENBQThDO1FBQzlDLGdEQUFnRDtRQUNoRCxRQUFRO1FBQ1Isc0JBQXNCO1FBQ3RCLElBQUk7UUFFUiwwR0FBMEc7UUFDMUcsK0JBQStCO0lBQy9CLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VEaXNjaXBsaW5lLCBEaXNjaXBsaW5lQ2F0ZWdvcnkgfSBmcm9tICcuL0Jhc2VEaXNjaXBsaW5lJztcblxuY2xhc3MgU2NvdXQgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG5cbiAgICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZyA9ICdTY291dCc7XG4gICAgcHJvdGVjdGVkIF9kZXNjcmlwdGlvbjogc3RyaW5nID0gJ1NwZWNpYWxpemUgaW4gbW92aW5nIGFoZWFkIG9mIHRoZSBwYXJ0eSB0byBnYXRoZXJpbmcgaW5mb3JtYXRpb24gYW5kIHJlY29ubmFpc3NhbmNlLic7XG4gICAgcHJvdGVjdGVkIF9jYXRlZ29yeSA9IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG5cbiAgICAvLyBnZXQgZWZmZWN0cygpOiBBcnJheTxFZmZlY3Q+IHtcbiAgICAvLyAgICAgbGV0IGVmZmVjdHMgPSBbXTtcblxuICAgIC8vICAgICBpZih0aGlzLmxldmVsID4gMCkge1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLmFjdGlvbnMucHVzaChuZXcgU2NvdXQoKSk7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuYWN0aW9ucy5wdXNoKG5ldyBTY2FuKCkpO1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLmFjdGlvbnMucHVzaChuZXcgU2VhcmNoKCkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBFZmZlY3RzO1xuICAgIC8vIH1cblxuLy8gICAgIFNjb3V0IOKAkyBTY291dHMgc3BlY2lhbGl6ZSBtb3ZpbmcgYWhlYWQgb2YgdGhlIHBhcnR5IHRvIGdhdGhlcmluZyBpbmZvcm1hdGlvbiBhbmQgcmVjb25uYWlzc2FuY2UgaXQuXG4vLyBBY3Rpb25zOiBTY291dCwgU2NhbiwgU2VhcmNoXG59XG4iXX0=