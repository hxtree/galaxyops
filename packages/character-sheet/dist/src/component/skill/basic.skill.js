"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = exports.Focusable = void 0;
// fuel?
// Whether when performing move if character can hold action to put more effort into action
var Focusable;
(function (Focusable) {
    Focusable["STAMINA"] = "Stamina";
    Focusable["TRUE"] = "True";
    Focusable["FALSE"] = "False";
})(Focusable = exports.Focusable || (exports.Focusable = {}));
var Basic;
(function (Basic) {
    Basic["BOAST"] = "Boast";
    Basic["DISGUISE"] = "Disguise";
    Basic["FOCUS"] = "Focus";
    Basic["GRAPPLE"] = "Grapple";
    Basic["HIDE"] = "Hide";
    Basic["SCAN"] = "Scan";
    Basic["CHEER"] = "Cheer";
    Basic["SUPPORT"] = "Support";
    Basic["HOPE"] = "Hope";
    Basic["INSPIRE"] = "Inspire";
    Basic["SCOUT"] = "Scout";
    Basic["MIMIC"] = "Mimic";
    Basic["PICKPOCKET"] = "Pickpocket";
    Basic["SEAL"] = "Seal";
    Basic["LULLABY"] = "Lullaby";
    Basic["WARD"] = "Ward";
    Basic["SACRIFICE"] = "Sacrifice";
    Basic["PROTECT"] = "Protect";
    Basic["MOCK"] = "Mock";
    Basic["SEARCH"] = "Search";
    Basic["STEAL"] = "Steal";
    Basic["PROTECTION"] = "Protection";
    Basic["LIGHT"] = "Light";
    Basic["REFLECT"] = "Reflect";
    Basic["RAGE"] = "Rage";
    Basic["DISMISS"] = "Dismiss";
})(Basic = exports.Basic || (exports.Basic = {}));
// todo really what makes something a class skill is whether it can be earned via class? decouple
/**
 * Class Skills are motor programs that a character learns to preform.
 * Each skill can be acquired via items, etc. but often
 * progression is determined by class.
 */
(function (Basic) {
    Basic.Boast = {
        name: Basic.BOAST,
        description: 'increase party’s moral',
        effect: [],
    };
    Basic.Disguise = {
        name: Basic.DISGUISE,
        description: 'Changes appearance and disables command menu until canceled.',
        effect: [],
        // stamina
    };
    Basic.Dismiss = {
        name: Basic.DISMISS,
        description: 'Release a summon.',
        effect: [],
    };
    Basic.Focus = {
        name: Basic.FOCUS,
        description: 'raise attack and attack percent for following move.',
        effect: [],
    };
    Basic.Grapple = {
        name: Basic.GRAPPLE,
        description: 'Lowers character and opponents life.',
        effect: [],
    };
    Basic.Hide = {
        name: Basic.HIDE,
        description: 'Enemy cannot see you',
        effect: [],
        // [stamina]
    };
    Basic.Scan = {
        name: Basic.SCAN,
        description: 'Read enemies stats.',
        effect: [],
    };
    Basic.Cheer = {
        name: Basic.CHEER,
        description: 'Targets Spirit increases by 10% for a duration',
        effect: [],
    };
    Basic.Support = {
        name: Basic.SUPPORT,
        description: 'Read enemies stats.',
        effect: [],
    };
    Basic.Hope = {
        name: Basic.HOPE,
        description: 'The most powerful status bonus',
        effect: [],
    };
    Basic.Inspire = {
        name: Basic.INSPIRE,
        description: 'Increases target Drive gauge',
        effect: [],
    };
    Basic.Scout = {
        name: Basic.SCOUT,
        description: 'Move ahead of party.',
        effect: [],
        // constantly consumes stamina
    };
    Basic.Mimic = {
        name: Basic.MIMIC,
        description: 'Use the same move that was used on you on the enemy.',
        effect: [],
    };
    Basic.Pickpocket = {
        name: Basic.PICKPOCKET,
        description: 'Steal from enemy.',
        effect: [],
        // cost [stamina]
    };
    Basic.Seal = {
        name: Basic.SEAL,
        description: 'Keep enemies from getting close.',
        //  (Good for when party is powering up)
        effect: [],
    };
    Basic.Lullaby = {
        name: Basic.LULLABY,
        description: 'Send enemies moves back at them',
        effect: [],
    };
    Basic.Ward = {
        name: Basic.WARD,
        description: '"Keep enemies from getting close.',
        //  (Good for when party is powering up)
        effect: [],
    };
    Basic.Sacrifice = {
        name: Basic.SACRIFICE,
        description: '',
        effect: [],
    };
    Basic.Protect = {
        name: Basic.PROTECT,
        description: 'guard party members behind you.',
        // [stamina]
        effect: [],
    };
    Basic.Mock = {
        name: Basic.MOCK,
        description: 'make a mocking action to cause Berserk on the opponent',
        // stamina]
        effect: [],
    };
    Basic.Search = {
        name: Basic.SEARCH,
        description: 'scan nearby area for goods.',
        effect: [],
    };
    Basic.Steal = {
        name: Basic.STEAL,
        description: 'Take item from opponent',
        // [stamina]
        effect: [],
    };
    Basic.Reflect = {
        name: Basic.REFLECT,
        description: 'Send enemies moves back at them.',
        effect: [],
    };
    Basic.Protection = {
        name: Basic.PROTECTION,
        description: 'Create a barrier around a ally',
        effect: [],
    };
    Basic.Light = {
        name: Basic.LIGHT,
        description: 'Keep enemies from moving for a duration of time. Chance Puts enemy to sleep. Stops rage',
        effect: [],
    };
    Basic.Rage = {
        name: Basic.RAGE,
        description: 'Increase power decrease wisdom',
        effect: [],
    };
    // "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"
})(Basic = exports.Basic || (exports.Basic = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuc2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL2Jhc2ljLnNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLFFBQVE7QUFDUiwyRkFBMkY7QUFDM0YsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLGdDQUFtQixDQUFBO0lBQ25CLDBCQUFhLENBQUE7SUFDYiw0QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUVELElBQVksS0EyQlg7QUEzQkQsV0FBWSxLQUFLO0lBQ2Ysd0JBQWUsQ0FBQTtJQUNmLDhCQUFxQixDQUFBO0lBQ3JCLHdCQUFlLENBQUE7SUFDZiw0QkFBbUIsQ0FBQTtJQUNuQixzQkFBYSxDQUFBO0lBQ2Isc0JBQWEsQ0FBQTtJQUNiLHdCQUFlLENBQUE7SUFDZiw0QkFBbUIsQ0FBQTtJQUNuQixzQkFBYSxDQUFBO0lBQ2IsNEJBQW1CLENBQUE7SUFDbkIsd0JBQWUsQ0FBQTtJQUNmLHdCQUFlLENBQUE7SUFDZixrQ0FBeUIsQ0FBQTtJQUN6QixzQkFBYSxDQUFBO0lBQ2IsNEJBQW1CLENBQUE7SUFDbkIsc0JBQWEsQ0FBQTtJQUNiLGdDQUF1QixDQUFBO0lBQ3ZCLDRCQUFtQixDQUFBO0lBQ25CLHNCQUFhLENBQUE7SUFDYiwwQkFBaUIsQ0FBQTtJQUNqQix3QkFBZSxDQUFBO0lBQ2Ysa0NBQXlCLENBQUE7SUFDekIsd0JBQWUsQ0FBQTtJQUNmLDRCQUFtQixDQUFBO0lBQ25CLHNCQUFhLENBQUE7SUFDYiw0QkFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBM0JXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQTJCaEI7QUFFRCxpR0FBaUc7QUFFakc7Ozs7R0FJRztBQUNILFdBQWlCLEtBQUs7SUFxQlAsV0FBSyxHQUFjO1FBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsS0FB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SyxLQUFMLGFBQUssUUEyTHJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZmZlY3RUYWJsZX0gZnJvbSAnLi4vdGFibGUuZWZmZWN0JztcbmltcG9ydCB7QXR0cmlidXRlfSBmcm9tICcuLi9hdHRyaWJ1dGUnO1xuXG4vLyBmdWVsP1xuLy8gV2hldGhlciB3aGVuIHBlcmZvcm1pbmcgbW92ZSBpZiBjaGFyYWN0ZXIgY2FuIGhvbGQgYWN0aW9uIHRvIHB1dCBtb3JlIGVmZm9ydCBpbnRvIGFjdGlvblxuZXhwb3J0IGVudW0gRm9jdXNhYmxlIHtcbiAgU1RBTUlOQSA9ICdTdGFtaW5hJyxcbiAgVFJVRSA9ICdUcnVlJyxcbiAgRkFMU0UgPSAnRmFsc2UnLFxufVxuXG5leHBvcnQgZW51bSBCYXNpYyB7XG4gIEJPQVNUID0gJ0JvYXN0JyxcbiAgRElTR1VJU0UgPSAnRGlzZ3Vpc2UnLFxuICBGT0NVUyA9ICdGb2N1cycsXG4gIEdSQVBQTEUgPSAnR3JhcHBsZScsXG4gIEhJREUgPSAnSGlkZScsXG4gIFNDQU4gPSAnU2NhbicsXG4gIENIRUVSID0gJ0NoZWVyJyxcbiAgU1VQUE9SVCA9ICdTdXBwb3J0JyxcbiAgSE9QRSA9ICdIb3BlJyxcbiAgSU5TUElSRSA9ICdJbnNwaXJlJyxcbiAgU0NPVVQgPSAnU2NvdXQnLFxuICBNSU1JQyA9ICdNaW1pYycsXG4gIFBJQ0tQT0NLRVQgPSAnUGlja3BvY2tldCcsXG4gIFNFQUwgPSAnU2VhbCcsXG4gIExVTExBQlkgPSAnTHVsbGFieScsXG4gIFdBUkQgPSAnV2FyZCcsXG4gIFNBQ1JJRklDRSA9ICdTYWNyaWZpY2UnLFxuICBQUk9URUNUID0gJ1Byb3RlY3QnLFxuICBNT0NLID0gJ01vY2snLFxuICBTRUFSQ0ggPSAnU2VhcmNoJyxcbiAgU1RFQUwgPSAnU3RlYWwnLFxuICBQUk9URUNUSU9OID0gJ1Byb3RlY3Rpb24nLFxuICBMSUdIVCA9ICdMaWdodCcsXG4gIFJFRkxFQ1QgPSAnUmVmbGVjdCcsXG4gIFJBR0UgPSAnUmFnZScsXG4gIERJU01JU1MgPSAnRGlzbWlzcycsXG59XG5cbi8vIHRvZG8gcmVhbGx5IHdoYXQgbWFrZXMgc29tZXRoaW5nIGEgY2xhc3Mgc2tpbGwgaXMgd2hldGhlciBpdCBjYW4gYmUgZWFybmVkIHZpYSBjbGFzcz8gZGVjb3VwbGVcblxuLyoqXG4gKiBDbGFzcyBTa2lsbHMgYXJlIG1vdG9yIHByb2dyYW1zIHRoYXQgYSBjaGFyYWN0ZXIgbGVhcm5zIHRvIHByZWZvcm0uXG4gKiBFYWNoIHNraWxsIGNhbiBiZSBhY3F1aXJlZCB2aWEgaXRlbXMsIGV0Yy4gYnV0IG9mdGVuXG4gKiBwcm9ncmVzc2lvbiBpcyBkZXRlcm1pbmVkIGJ5IGNsYXNzLlxuICovXG5leHBvcnQgbmFtZXNwYWNlIEJhc2ljIHtcbiAgZXhwb3J0IHR5cGUgQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGVmZmVjdDogRWZmZWN0VGFibGU7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBza2lsbCBtdXN0IGJlIGNhbmNlbGVkIG9yIGF1dG9tYXRpY2FsbHkgc3RvcCBiZWluZyBwZXJmb3JtZWRcbiAgICAgKi9cbiAgICBmaXhlZD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBTdGFtaW5hIEJvb3N0IEVuYWJsZWQgQWN0aW9uXG4gICAgICogQnkgaG9sZGluZyBkb3duIHRoZSBidXR0b24gdXNlZCB0byBtYWtlIHRoYXQgbW92ZVxuICAgICAqIGEgcGxheWVyIG1heSBwbGFjZSBtb3JlIHN0YW1pbmEgaW50byB0aGUgbW92ZVxuICAgICAqIG1ha2luZyBpdCBhIG1vcmUgcG93ZXJmdWwgYWN0aW9uLlxuICAgICAqIEZvciBldmVyeSA2IHNlY29uZHMsIGNoYXJhY3RlciBnYWlucyBhIHBsdXMgMSBmb3IgZXhhbXBsZS5cbiAgICAgKi9cbiAgICBib29zdGVyPzogQXR0cmlidXRlO1xuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBCb2FzdDogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLkJPQVNULFxuICAgIGRlc2NyaXB0aW9uOiAnaW5jcmVhc2UgcGFydHnigJlzIG1vcmFsJyxcbiAgICBlZmZlY3Q6IFtdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBEaXNndWlzZTogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLkRJU0dVSVNFLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlcyBhcHBlYXJhbmNlIGFuZCBkaXNhYmxlcyBjb21tYW5kIG1lbnUgdW50aWwgY2FuY2VsZWQuJyxcbiAgICBlZmZlY3Q6IFtdLFxuICAgIC8vIHN0YW1pbmFcbiAgfTtcblxuICBleHBvcnQgY29uc3QgRGlzbWlzczogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLkRJU01JU1MsXG4gICAgZGVzY3JpcHRpb246ICdSZWxlYXNlIGEgc3VtbW9uLicsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgRm9jdXM6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5GT0NVUyxcbiAgICBkZXNjcmlwdGlvbjogJ3JhaXNlIGF0dGFjayBhbmQgYXR0YWNrIHBlcmNlbnQgZm9yIGZvbGxvd2luZyBtb3ZlLicsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgR3JhcHBsZTogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLkdSQVBQTEUsXG4gICAgZGVzY3JpcHRpb246ICdMb3dlcnMgY2hhcmFjdGVyIGFuZCBvcHBvbmVudHMgbGlmZS4nLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEhpZGU6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5ISURFLFxuICAgIGRlc2NyaXB0aW9uOiAnRW5lbXkgY2Fubm90IHNlZSB5b3UnLFxuICAgIGVmZmVjdDogW10sXG4gICAgLy8gW3N0YW1pbmFdXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFNjYW46IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5TQ0FOLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhZCBlbmVtaWVzIHN0YXRzLicsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQ2hlZXI6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5DSEVFUixcbiAgICBkZXNjcmlwdGlvbjogJ1RhcmdldHMgU3Bpcml0IGluY3JlYXNlcyBieSAxMCUgZm9yIGEgZHVyYXRpb24nLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFN1cHBvcnQ6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5TVVBQT1JULFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhZCBlbmVtaWVzIHN0YXRzLicsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgSG9wZTogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLkhPUEUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgbW9zdCBwb3dlcmZ1bCBzdGF0dXMgYm9udXMnLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEluc3BpcmU6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5JTlNQSVJFLFxuICAgIGRlc2NyaXB0aW9uOiAnSW5jcmVhc2VzIHRhcmdldCBEcml2ZSBnYXVnZScsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgU2NvdXQ6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5TQ09VVCxcbiAgICBkZXNjcmlwdGlvbjogJ01vdmUgYWhlYWQgb2YgcGFydHkuJyxcbiAgICBlZmZlY3Q6IFtdLFxuICAgIC8vIGNvbnN0YW50bHkgY29uc3VtZXMgc3RhbWluYVxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBNaW1pYzogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLk1JTUlDLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBzYW1lIG1vdmUgdGhhdCB3YXMgdXNlZCBvbiB5b3Ugb24gdGhlIGVuZW15LicsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUGlja3BvY2tldDogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLlBJQ0tQT0NLRVQsXG4gICAgZGVzY3JpcHRpb246ICdTdGVhbCBmcm9tIGVuZW15LicsXG4gICAgZWZmZWN0OiBbXSxcbiAgICAvLyBjb3N0IFtzdGFtaW5hXVxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTZWFsOiBCYXNpY1R5cGUgPSB7XG4gICAgbmFtZTogQmFzaWMuU0VBTCxcbiAgICBkZXNjcmlwdGlvbjogJ0tlZXAgZW5lbWllcyBmcm9tIGdldHRpbmcgY2xvc2UuJywgLy9ob2xkIGFuIGVuZW15IG9mZlxuICAgIC8vICAoR29vZCBmb3Igd2hlbiBwYXJ0eSBpcyBwb3dlcmluZyB1cClcbiAgICBlZmZlY3Q6IFtdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBMdWxsYWJ5OiBCYXNpY1R5cGUgPSB7XG4gICAgbmFtZTogQmFzaWMuTFVMTEFCWSxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgZW5lbWllcyBtb3ZlcyBiYWNrIGF0IHRoZW0nLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFdhcmQ6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5XQVJELFxuICAgIGRlc2NyaXB0aW9uOiAnXCJLZWVwIGVuZW1pZXMgZnJvbSBnZXR0aW5nIGNsb3NlLicsXG4gICAgLy8gIChHb29kIGZvciB3aGVuIHBhcnR5IGlzIHBvd2VyaW5nIHVwKVxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFNhY3JpZmljZTogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLlNBQ1JJRklDRSxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUHJvdGVjdDogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLlBST1RFQ1QsXG4gICAgZGVzY3JpcHRpb246ICdndWFyZCBwYXJ0eSBtZW1iZXJzIGJlaGluZCB5b3UuJyxcbiAgICAvLyBbc3RhbWluYV1cbiAgICBlZmZlY3Q6IFtdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBNb2NrOiBCYXNpY1R5cGUgPSB7XG4gICAgbmFtZTogQmFzaWMuTU9DSyxcbiAgICBkZXNjcmlwdGlvbjogJ21ha2UgYSBtb2NraW5nIGFjdGlvbiB0byBjYXVzZSBCZXJzZXJrIG9uIHRoZSBvcHBvbmVudCcsXG4gICAgLy8gc3RhbWluYV1cbiAgICBlZmZlY3Q6IFtdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTZWFyY2g6IEJhc2ljVHlwZSA9IHtcbiAgICBuYW1lOiBCYXNpYy5TRUFSQ0gsXG4gICAgZGVzY3JpcHRpb246ICdzY2FuIG5lYXJieSBhcmVhIGZvciBnb29kcy4nLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFN0ZWFsOiBCYXNpY1R5cGUgPSB7XG4gICAgbmFtZTogQmFzaWMuU1RFQUwsXG4gICAgZGVzY3JpcHRpb246ICdUYWtlIGl0ZW0gZnJvbSBvcHBvbmVudCcsXG4gICAgLy8gW3N0YW1pbmFdXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUmVmbGVjdDogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLlJFRkxFQ1QsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIGVuZW1pZXMgbW92ZXMgYmFjayBhdCB0aGVtLicsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUHJvdGVjdGlvbjogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLlBST1RFQ1RJT04sXG4gICAgZGVzY3JpcHRpb246ICdDcmVhdGUgYSBiYXJyaWVyIGFyb3VuZCBhIGFsbHknLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG4gIGV4cG9ydCBjb25zdCBMaWdodDogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLkxJR0hULFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0tlZXAgZW5lbWllcyBmcm9tIG1vdmluZyBmb3IgYSBkdXJhdGlvbiBvZiB0aW1lLiBDaGFuY2UgUHV0cyBlbmVteSB0byBzbGVlcC4gU3RvcHMgcmFnZScsXG4gICAgZWZmZWN0OiBbXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUmFnZTogQmFzaWNUeXBlID0ge1xuICAgIG5hbWU6IEJhc2ljLlJBR0UsXG4gICAgZGVzY3JpcHRpb246ICdJbmNyZWFzZSBwb3dlciBkZWNyZWFzZSB3aXNkb20nLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgLy8gXCIxMlwiLFwiQm9hc3QvUmFsbHkvSW5zcGlyZVwiLFwiSW5jcmVhc2UgYWxsaWVzIGRldGVybWluYXRpb25cIixcIjEwXCIsLFwiMTBcIlxufVxuIl19