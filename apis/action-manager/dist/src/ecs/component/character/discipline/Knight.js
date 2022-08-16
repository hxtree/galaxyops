"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDiscipline_1 = require("./BaseDiscipline");
class Knight extends BaseDiscipline_1.BaseDiscipline {
    constructor() {
        super(...arguments);
        this._name = 'Knight';
        this._description = 'A honored fighter for protects the kingdom.';
        this._category = BaseDiscipline_1.DisciplineCategory.ARCHETYPE;
        // get effects(): Array<Effect> {
        //     let effects = [];
        //     if(this.level > 0) {
        //     }
        //     return Effects;
        // }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS25pZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Vjcy9jb21wb25lbnQvY2hhcmFjdGVyL2Rpc2NpcGxpbmUvS25pZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQXNFO0FBRXRFLE1BQU0sTUFBTyxTQUFRLCtCQUFjO0lBQW5DOztRQUVjLFVBQUssR0FBVyxRQUFRLENBQUM7UUFDekIsaUJBQVksR0FBVyw2Q0FBNkMsQ0FBQztRQUNyRSxjQUFTLEdBQUcsbUNBQWtCLENBQUMsU0FBUyxDQUFDO1FBRW5ELGlDQUFpQztRQUNqQyx3QkFBd0I7UUFFeEIsMkJBQTJCO1FBQzNCLFFBQVE7UUFFUixzQkFBc0I7UUFDdEIsSUFBSTtJQUNSLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VEaXNjaXBsaW5lLCBEaXNjaXBsaW5lQ2F0ZWdvcnkgfSBmcm9tICcuL0Jhc2VEaXNjaXBsaW5lJztcblxuY2xhc3MgS25pZ2h0IGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuXG4gICAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmcgPSAnS25pZ2h0JztcbiAgICBwcm90ZWN0ZWQgX2Rlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQSBob25vcmVkIGZpZ2h0ZXIgZm9yIHByb3RlY3RzIHRoZSBraW5nZG9tLic7XG4gICAgcHJvdGVjdGVkIF9jYXRlZ29yeSA9IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG5cbiAgICAvLyBnZXQgZWZmZWN0cygpOiBBcnJheTxFZmZlY3Q+IHtcbiAgICAvLyAgICAgbGV0IGVmZmVjdHMgPSBbXTtcblxuICAgIC8vICAgICBpZih0aGlzLmxldmVsID4gMCkge1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgcmV0dXJuIEVmZmVjdHM7XG4gICAgLy8gfVxufVxuIl19