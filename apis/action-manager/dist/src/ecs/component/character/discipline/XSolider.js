"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDiscipline_1 = require("./BaseDiscipline");
class XSolider extends BaseDiscipline_1.BaseDiscipline {
    constructor() {
        super(...arguments);
        this._name = 'XSolider';
        this._description = 'Soldiers that have gone against their teachings to gain new skills.';
        this._category = BaseDiscipline_1.DisciplineCategory.ARCHETYPE;
        // get effects(): Array<Effect> {
        //     let effects = [];
        //     if(this.level > 0) {
        //         Character.Life.max += 10;
        //         Character.actions.push(new Liberate());
        //         Character.actions.push(new Disobey());
        //         Character.actions.push(new GreaterCleave());
        //     }
        //     return Effects;
        // }
        // X-Solider – X-Soldiers are soldiers that have gone against their teachings to gain new more powerful actions.
        // Actions: Liberate, Disobey, Cleave lv2
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWFNvbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZWNzL2NvbXBvbmVudC9jaGFyYWN0ZXIvZGlzY2lwbGluZS9YU29saWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFzRTtBQUV0RSxNQUFNLFFBQVMsU0FBUSwrQkFBYztJQUFyQzs7UUFFYyxVQUFLLEdBQVcsVUFBVSxDQUFDO1FBQzNCLGlCQUFZLEdBQVcscUVBQXFFLENBQUM7UUFDN0YsY0FBUyxHQUFHLG1DQUFrQixDQUFDLFNBQVMsQ0FBQztRQUVuRCxpQ0FBaUM7UUFDakMsd0JBQXdCO1FBRXhCLDJCQUEyQjtRQUMzQixvQ0FBb0M7UUFDcEMsa0RBQWtEO1FBQ2xELGlEQUFpRDtRQUNqRCx1REFBdUQ7UUFDdkQsUUFBUTtRQUNSLHNCQUFzQjtRQUN0QixJQUFJO1FBRUosZ0hBQWdIO1FBQ2hILHlDQUF5QztJQUM3QyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRGlzY2lwbGluZSwgRGlzY2lwbGluZUNhdGVnb3J5IH0gZnJvbSAnLi9CYXNlRGlzY2lwbGluZSc7XG5cbmNsYXNzIFhTb2xpZGVyIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuXG4gICAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmcgPSAnWFNvbGlkZXInO1xuICAgIHByb3RlY3RlZCBfZGVzY3JpcHRpb246IHN0cmluZyA9ICdTb2xkaWVycyB0aGF0IGhhdmUgZ29uZSBhZ2FpbnN0IHRoZWlyIHRlYWNoaW5ncyB0byBnYWluIG5ldyBza2lsbHMuJztcbiAgICBwcm90ZWN0ZWQgX2NhdGVnb3J5ID0gRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcblxuICAgIC8vIGdldCBlZmZlY3RzKCk6IEFycmF5PEVmZmVjdD4ge1xuICAgIC8vICAgICBsZXQgZWZmZWN0cyA9IFtdO1xuXG4gICAgLy8gICAgIGlmKHRoaXMubGV2ZWwgPiAwKSB7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuTGlmZS5tYXggKz0gMTA7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuYWN0aW9ucy5wdXNoKG5ldyBMaWJlcmF0ZSgpKTtcbiAgICAvLyAgICAgICAgIENoYXJhY3Rlci5hY3Rpb25zLnB1c2gobmV3IERpc29iZXkoKSk7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuYWN0aW9ucy5wdXNoKG5ldyBHcmVhdGVyQ2xlYXZlKCkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBFZmZlY3RzO1xuICAgIC8vIH1cblxuICAgIC8vIFgtU29saWRlciDigJMgWC1Tb2xkaWVycyBhcmUgc29sZGllcnMgdGhhdCBoYXZlIGdvbmUgYWdhaW5zdCB0aGVpciB0ZWFjaGluZ3MgdG8gZ2FpbiBuZXcgbW9yZSBwb3dlcmZ1bCBhY3Rpb25zLlxuICAgIC8vIEFjdGlvbnM6IExpYmVyYXRlLCBEaXNvYmV5LCBDbGVhdmUgbHYyXG59XG4iXX0=