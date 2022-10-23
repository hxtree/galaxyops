"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teamwork = void 0;
/**
 * Teamwork Skill
 * Actions that involve multiple Player characters interacting to perform an action.
 */
var Teamwork;
(function (Teamwork) {
    Teamwork["COMMAND"] = "Command";
    Teamwork["FORMATIONS"] = "Formations";
    Teamwork["ORDER"] = "Order";
})(Teamwork = exports.Teamwork || (exports.Teamwork = {}));
// category: SkillCategory.PARTY;
(function (Teamwork) {
    Teamwork.Command = {
        name: Teamwork.COMMAND,
        description: 'tell other party members what actions to use.',
    };
    Teamwork.Formations = {
        name: Teamwork.FORMATIONS,
        description: 'get part to move to certain areas.',
    };
    Teamwork.Order = {
        name: Teamwork.ORDER,
        description: 'Tell any what to do.',
    };
})(Teamwork = exports.Teamwork || (exports.Teamwork = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbXdvcmsuc2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL3RlYW13b3JrLnNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7R0FHRztBQUNILElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNsQiwrQkFBbUIsQ0FBQTtJQUNuQixxQ0FBeUIsQ0FBQTtJQUN6QiwyQkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUluQjtBQUVELGlDQUFpQztBQUVqQyxXQUFpQixRQUFRO0lBTVYsZ0JBQU8sR0FBaUI7UUFDbkMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPO1FBQ3RCLFdBQVcsRUFBRSwrQ0FBK0M7S0FDN0QsQ0FBQztJQUVXLG1CQUFVLEdBQWlCO1FBQ3RDLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVTtRQUN6QixXQUFXLEVBQUUsb0NBQW9DO0tBQ2xELENBQUM7SUFFVyxjQUFLLEdBQWlCO1FBQ2pDLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSztRQUNwQixXQUFXLEVBQUUsc0JBQXNCO0tBQ3BDLENBQUM7QUFDSixDQUFDLEVBcEJnQixRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQW9CeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlYW13b3JrIFNraWxsXG4gKiBBY3Rpb25zIHRoYXQgaW52b2x2ZSBtdWx0aXBsZSBQbGF5ZXIgY2hhcmFjdGVycyBpbnRlcmFjdGluZyB0byBwZXJmb3JtIGFuIGFjdGlvbi5cbiAqL1xuZXhwb3J0IGVudW0gVGVhbXdvcmsge1xuICBDT01NQU5EID0gJ0NvbW1hbmQnLFxuICBGT1JNQVRJT05TID0gJ0Zvcm1hdGlvbnMnLFxuICBPUkRFUiA9ICdPcmRlcicsXG59XG5cbi8vIGNhdGVnb3J5OiBTa2lsbENhdGVnb3J5LlBBUlRZO1xuXG5leHBvcnQgbmFtZXNwYWNlIFRlYW13b3JrIHtcbiAgZXhwb3J0IHR5cGUgVGVhbXdvcmtUeXBlID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBDb21tYW5kOiBUZWFtd29ya1R5cGUgPSB7XG4gICAgbmFtZTogVGVhbXdvcmsuQ09NTUFORCxcbiAgICBkZXNjcmlwdGlvbjogJ3RlbGwgb3RoZXIgcGFydHkgbWVtYmVycyB3aGF0IGFjdGlvbnMgdG8gdXNlLicsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEZvcm1hdGlvbnM6IFRlYW13b3JrVHlwZSA9IHtcbiAgICBuYW1lOiBUZWFtd29yay5GT1JNQVRJT05TLFxuICAgIGRlc2NyaXB0aW9uOiAnZ2V0IHBhcnQgdG8gbW92ZSB0byBjZXJ0YWluIGFyZWFzLicsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE9yZGVyOiBUZWFtd29ya1R5cGUgPSB7XG4gICAgbmFtZTogVGVhbXdvcmsuT1JERVIsXG4gICAgZGVzY3JpcHRpb246ICdUZWxsIGFueSB3aGF0IHRvIGRvLicsXG4gIH07XG59XG4iXX0=