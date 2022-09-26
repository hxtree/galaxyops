"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDiscipline_1 = require("./BaseDiscipline");
class Commander extends BaseDiscipline_1.BaseDiscipline {
    constructor() {
        super(...arguments);
        this._name = 'Commander';
        this._description = 'Specialize in giving orders to others.';
        this._category = BaseDiscipline_1.DisciplineCategory.ARCHETYPE;
        // get effects(): Array<Effect> {
        //     let effects = [];
        //     if(this.level > 0) {
        //         Character.actions.push(new Order());
        //         Character.actions.push(new Formations());
        //         Character.actions.push(new Boast());
        //     }
        //     return Effects;
        // }
        //     Commander – Commanders specialize in giving orders to others
        // Actions: Order, Formations, Boast
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Vjcy9jb21wb25lbnQvY2hhcmFjdGVyL2Rpc2NpcGxpbmUvQ29tbWFuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQXNFO0FBRXRFLE1BQU0sU0FBVSxTQUFRLCtCQUFjO0lBQXRDOztRQUVjLFVBQUssR0FBVyxXQUFXLENBQUM7UUFDNUIsaUJBQVksR0FBVyx3Q0FBd0MsQ0FBQztRQUNoRSxjQUFTLEdBQUcsbUNBQWtCLENBQUMsU0FBUyxDQUFDO1FBRW5ELGlDQUFpQztRQUNqQyx3QkFBd0I7UUFFeEIsMkJBQTJCO1FBQzNCLCtDQUErQztRQUMvQyxvREFBb0Q7UUFDcEQsK0NBQStDO1FBQy9DLFFBQVE7UUFFUixzQkFBc0I7UUFDdEIsSUFBSTtRQUVSLG1FQUFtRTtRQUNuRSxvQ0FBb0M7SUFDcEMsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZURpc2NpcGxpbmUsIERpc2NpcGxpbmVDYXRlZ29yeSB9IGZyb20gJy4vQmFzZURpc2NpcGxpbmUnO1xuXG5jbGFzcyBDb21tYW5kZXIgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG5cbiAgICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZyA9ICdDb21tYW5kZXInO1xuICAgIHByb3RlY3RlZCBfZGVzY3JpcHRpb246IHN0cmluZyA9ICdTcGVjaWFsaXplIGluIGdpdmluZyBvcmRlcnMgdG8gb3RoZXJzLic7XG4gICAgcHJvdGVjdGVkIF9jYXRlZ29yeSA9IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG5cbiAgICAvLyBnZXQgZWZmZWN0cygpOiBBcnJheTxFZmZlY3Q+IHtcbiAgICAvLyAgICAgbGV0IGVmZmVjdHMgPSBbXTtcblxuICAgIC8vICAgICBpZih0aGlzLmxldmVsID4gMCkge1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLmFjdGlvbnMucHVzaChuZXcgT3JkZXIoKSk7XG4gICAgLy8gICAgICAgICBDaGFyYWN0ZXIuYWN0aW9ucy5wdXNoKG5ldyBGb3JtYXRpb25zKCkpO1xuICAgIC8vICAgICAgICAgQ2hhcmFjdGVyLmFjdGlvbnMucHVzaChuZXcgQm9hc3QoKSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICByZXR1cm4gRWZmZWN0cztcbiAgICAvLyB9XG5cbi8vICAgICBDb21tYW5kZXIg4oCTIENvbW1hbmRlcnMgc3BlY2lhbGl6ZSBpbiBnaXZpbmcgb3JkZXJzIHRvIG90aGVyc1xuLy8gQWN0aW9uczogT3JkZXIsIEZvcm1hdGlvbnMsIEJvYXN0XG59XG4iXX0=