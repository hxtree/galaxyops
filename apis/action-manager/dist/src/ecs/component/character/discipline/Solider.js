"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDiscipline_1 = require("./BaseDiscipline");
class Solider extends BaseDiscipline_1.BaseDiscipline {
    constructor() {
        super(...arguments);
        this._name = 'Solider';
        this._description = 'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.';
        this._category = BaseDiscipline_1.DisciplineCategory.ARCHETYPE;
        // get effects(): Array<Effect> {
        //     let effects = [];
        //     if(this.level > 0) {
        //         Character.Life.max += 10;
        //         Character.actions.push(new Cleave());
        //     }
        //     if(this.level > 5) {
        //         Character.Life.max += 10;
        //         Character.speed += 5;
        //     }
        //     return Effects;
        // }
        //     Solider - Solider is a class based upon strict maneuvers. Solider is a classed formed for followers of the United Forces. This class can be taken up by: Gunter, Meeku and Malace.
        // Ranks: Cleave
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29saWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9lY3MvY29tcG9uZW50L2NoYXJhY3Rlci9kaXNjaXBsaW5lL1NvbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBc0U7QUFFdEUsTUFBTSxPQUFRLFNBQVEsK0JBQWM7SUFBcEM7O1FBRWMsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixpQkFBWSxHQUFXLCtGQUErRixDQUFDO1FBQ3ZILGNBQVMsR0FBRyxtQ0FBa0IsQ0FBQyxTQUFTLENBQUM7UUFFbkQsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUV4QiwyQkFBMkI7UUFDM0Isb0NBQW9DO1FBQ3BDLGdEQUFnRDtRQUNoRCxRQUFRO1FBRVIsMkJBQTJCO1FBQzNCLG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFDaEMsUUFBUTtRQUVSLHNCQUFzQjtRQUN0QixJQUFJO1FBRVIseUxBQXlMO1FBQ3pMLGdCQUFnQjtJQUNoQixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRGlzY2lwbGluZSwgRGlzY2lwbGluZUNhdGVnb3J5IH0gZnJvbSAnLi9CYXNlRGlzY2lwbGluZSc7XG5cbmNsYXNzIFNvbGlkZXIgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG5cbiAgICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZyA9ICdTb2xpZGVyJztcbiAgICBwcm90ZWN0ZWQgX2Rlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQSBzb2xpZGVyIGlzIGEgZm9sbG93ZXIgb2YgdGhlIFVuaXRlZCBGb3JjZXMuIFRoZXkgc3BlY2lhbGl6ZSBpbiBwZXJmb3JtaW5nIHN0cmljdCBtYW5ldXZlcnMuJztcbiAgICBwcm90ZWN0ZWQgX2NhdGVnb3J5ID0gRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcblxuICAgIC8vIGdldCBlZmZlY3RzKCk6IEFycmF5PEVmZmVjdD4ge1xuICAgIC8vICAgICBsZXQgZWZmZWN0cyA9IFtdO1xuXG4gICAgLy8gICAgIGlmKHRoaXMubGV2ZWwgPiAwKSB7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuTGlmZS5tYXggKz0gMTA7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuYWN0aW9ucy5wdXNoKG5ldyBDbGVhdmUoKSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBpZih0aGlzLmxldmVsID4gNSkge1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLkxpZmUubWF4ICs9IDEwO1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLnNwZWVkICs9IDU7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICByZXR1cm4gRWZmZWN0cztcbiAgICAvLyB9XG5cbi8vICAgICBTb2xpZGVyIC0gU29saWRlciBpcyBhIGNsYXNzIGJhc2VkIHVwb24gc3RyaWN0IG1hbmV1dmVycy4gU29saWRlciBpcyBhIGNsYXNzZWQgZm9ybWVkIGZvciBmb2xsb3dlcnMgb2YgdGhlIFVuaXRlZCBGb3JjZXMuIFRoaXMgY2xhc3MgY2FuIGJlIHRha2VuIHVwIGJ5OiBHdW50ZXIsIE1lZWt1IGFuZCBNYWxhY2UuXG4vLyBSYW5rczogQ2xlYXZlXG59XG4iXX0=