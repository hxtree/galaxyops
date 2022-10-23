"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionSkill = exports.Interaction = void 0;
/**
 * InteractionSkills are actions that can only be used when a compatable object is present
 */
var Interaction;
(function (Interaction) {
    Interaction["GRAB"] = "Grab";
    Interaction["PUSH"] = "Push";
    Interaction["PULL"] = "Pull";
    Interaction["LIFT"] = "Lift";
    Interaction["THROW"] = "Throw";
})(Interaction = exports.Interaction || (exports.Interaction = {}));
var InteractionSkill;
(function (InteractionSkill) {
    let ObjectCategory;
    (function (ObjectCategory) {
        ObjectCategory["MOVEABLE"] = "Moveable";
        ObjectCategory["IMPENDING"] = "Impending";
    })(ObjectCategory = InteractionSkill.ObjectCategory || (InteractionSkill.ObjectCategory = {}));
    InteractionSkill.Grab = {
        name: Interaction.GRAB,
        description: 'Grab object',
        target: ObjectCategory.MOVEABLE,
    };
    InteractionSkill.Push = {
        name: Interaction.PUSH,
        description: 'Push object',
        target: ObjectCategory.MOVEABLE,
    };
    InteractionSkill.Pull = {
        name: Interaction.PULL,
        description: 'Pull object',
        target: ObjectCategory.MOVEABLE,
    };
    InteractionSkill.Lift = {
        name: Interaction.LIFT,
        description: 'Lift object',
        target: ObjectCategory.MOVEABLE,
    };
    InteractionSkill.Throw = {
        name: Interaction.THROW,
        description: 'Throw object',
        target: ObjectCategory.MOVEABLE,
    };
    // InteractionSkill Actions
    // InteractionSkill Actions are a type of Command Menu actions, which essentially means that they take up a slot on the players Command Menu. InteractionSkill Actions take up the InteractionSkill Slot on the Commnd Menu. What distinguishes InteractionSkill Actions from the rest is that all interaction actions relate to interacting with other objects.
    // Counter – make a maneuver in reaction to an enemy’s.
    // Disobey – do not follow orders given.
    // Parry – use your weapon to block / deflect the enemies attack.
    // Standard Object – Take no action points
    // Pick Up / Take
    // Open
    // Open Lock
    // Pull – (Example “Pull Lever”)
    // Impending Object
    // Catch – Catch an item or weapon that has been thrown in your path of travel.
    // Reflect
    // Throw
    // Ward – (spirit) a action that keeps enemies away
    // Guard – (stamina) protect from oncoming attacks.
    // Charge – Hold attack button down. This uses up Stamina and raise Power of attack.
    // Charge – Hold attack button down. This uses up Spirit and raise Power of attack.
    // Class Actions (Slot 2)
    // Learn
})(InteractionSkill = exports.InteractionSkill || (exports.InteractionSkill = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpb24uc2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL2ludGVyYWN0aW9uLnNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOztHQUVHO0FBQ0gsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ3JCLDRCQUFhLENBQUE7SUFDYiw0QkFBYSxDQUFBO0lBQ2IsNEJBQWEsQ0FBQTtJQUNiLDRCQUFhLENBQUE7SUFDYiw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFOVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU10QjtBQUVELElBQWlCLGdCQUFnQixDQStEaEM7QUEvREQsV0FBaUIsZ0JBQWdCO0lBTy9CLElBQVksY0FHWDtJQUhELFdBQVksY0FBYztRQUN4Qix1Q0FBcUIsQ0FBQTtRQUNyQix5Q0FBdUIsQ0FBQTtJQUN6QixDQUFDLEVBSFcsY0FBYyxHQUFkLCtCQUFjLEtBQWQsK0JBQWMsUUFHekI7SUFFWSxxQkFBSSxHQUFvQjtRQUNuQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdEIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxRQUFRO0tBQ2hDLENBQUM7SUFFVyxxQkFBSSxHQUFvQjtRQUNuQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdEIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxRQUFRO0tBQ2hDLENBQUM7SUFFVyxxQkFBSSxHQUFvQjtRQUNuQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdEIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxRQUFRO0tBQ2hDLENBQUM7SUFFVyxxQkFBSSxHQUFvQjtRQUNuQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdEIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxRQUFRO0tBQ2hDLENBQUM7SUFFVyxzQkFBSyxHQUFvQjtRQUNwQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUs7UUFDdkIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsTUFBTSxFQUFFLGNBQWMsQ0FBQyxRQUFRO0tBQ2hDLENBQUM7SUFFRiwyQkFBMkI7SUFDM0IsZ1dBQWdXO0lBQ2hXLHVEQUF1RDtJQUN2RCx3Q0FBd0M7SUFDeEMsaUVBQWlFO0lBQ2pFLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFlBQVk7SUFDWixnQ0FBZ0M7SUFFaEMsbUJBQW1CO0lBQ25CLCtFQUErRTtJQUMvRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQsb0ZBQW9GO0lBQ3BGLG1GQUFtRjtJQUNuRix5QkFBeUI7SUFDekIsUUFBUTtBQUNWLENBQUMsRUEvRGdCLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBK0RoQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJhY3Rpb25Ta2lsbHMgYXJlIGFjdGlvbnMgdGhhdCBjYW4gb25seSBiZSB1c2VkIHdoZW4gYSBjb21wYXRhYmxlIG9iamVjdCBpcyBwcmVzZW50XG4gKi9cbmV4cG9ydCBlbnVtIEludGVyYWN0aW9uIHtcbiAgR1JBQiA9ICdHcmFiJyxcbiAgUFVTSCA9ICdQdXNoJyxcbiAgUFVMTCA9ICdQdWxsJyxcbiAgTElGVCA9ICdMaWZ0JyxcbiAgVEhST1cgPSAnVGhyb3cnLFxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEludGVyYWN0aW9uU2tpbGwge1xuICBleHBvcnQgdHlwZSBJbnRlcmFjdGlvblR5cGUgPSB7XG4gICAgbmFtZTogSW50ZXJhY3Rpb247XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0YXJnZXQ6IE9iamVjdENhdGVnb3J5O1xuICB9O1xuXG4gIGV4cG9ydCBlbnVtIE9iamVjdENhdGVnb3J5IHtcbiAgICBNT1ZFQUJMRSA9ICdNb3ZlYWJsZScsXG4gICAgSU1QRU5ESU5HID0gJ0ltcGVuZGluZycsXG4gIH1cblxuICBleHBvcnQgY29uc3QgR3JhYjogSW50ZXJhY3Rpb25UeXBlID0ge1xuICAgIG5hbWU6IEludGVyYWN0aW9uLkdSQUIsXG4gICAgZGVzY3JpcHRpb246ICdHcmFiIG9iamVjdCcsXG4gICAgdGFyZ2V0OiBPYmplY3RDYXRlZ29yeS5NT1ZFQUJMRSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUHVzaDogSW50ZXJhY3Rpb25UeXBlID0ge1xuICAgIG5hbWU6IEludGVyYWN0aW9uLlBVU0gsXG4gICAgZGVzY3JpcHRpb246ICdQdXNoIG9iamVjdCcsXG4gICAgdGFyZ2V0OiBPYmplY3RDYXRlZ29yeS5NT1ZFQUJMRSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUHVsbDogSW50ZXJhY3Rpb25UeXBlID0ge1xuICAgIG5hbWU6IEludGVyYWN0aW9uLlBVTEwsXG4gICAgZGVzY3JpcHRpb246ICdQdWxsIG9iamVjdCcsXG4gICAgdGFyZ2V0OiBPYmplY3RDYXRlZ29yeS5NT1ZFQUJMRSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgTGlmdDogSW50ZXJhY3Rpb25UeXBlID0ge1xuICAgIG5hbWU6IEludGVyYWN0aW9uLkxJRlQsXG4gICAgZGVzY3JpcHRpb246ICdMaWZ0IG9iamVjdCcsXG4gICAgdGFyZ2V0OiBPYmplY3RDYXRlZ29yeS5NT1ZFQUJMRSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgVGhyb3c6IEludGVyYWN0aW9uVHlwZSA9IHtcbiAgICBuYW1lOiBJbnRlcmFjdGlvbi5USFJPVyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rocm93IG9iamVjdCcsXG4gICAgdGFyZ2V0OiBPYmplY3RDYXRlZ29yeS5NT1ZFQUJMRSxcbiAgfTtcblxuICAvLyBJbnRlcmFjdGlvblNraWxsIEFjdGlvbnNcbiAgLy8gSW50ZXJhY3Rpb25Ta2lsbCBBY3Rpb25zIGFyZSBhIHR5cGUgb2YgQ29tbWFuZCBNZW51IGFjdGlvbnMsIHdoaWNoIGVzc2VudGlhbGx5IG1lYW5zIHRoYXQgdGhleSB0YWtlIHVwIGEgc2xvdCBvbiB0aGUgcGxheWVycyBDb21tYW5kIE1lbnUuIEludGVyYWN0aW9uU2tpbGwgQWN0aW9ucyB0YWtlIHVwIHRoZSBJbnRlcmFjdGlvblNraWxsIFNsb3Qgb24gdGhlIENvbW1uZCBNZW51LiBXaGF0IGRpc3Rpbmd1aXNoZXMgSW50ZXJhY3Rpb25Ta2lsbCBBY3Rpb25zIGZyb20gdGhlIHJlc3QgaXMgdGhhdCBhbGwgaW50ZXJhY3Rpb24gYWN0aW9ucyByZWxhdGUgdG8gaW50ZXJhY3Rpbmcgd2l0aCBvdGhlciBvYmplY3RzLlxuICAvLyBDb3VudGVyIOKAkyBtYWtlIGEgbWFuZXV2ZXIgaW4gcmVhY3Rpb24gdG8gYW4gZW5lbXnigJlzLlxuICAvLyBEaXNvYmV5IOKAkyBkbyBub3QgZm9sbG93IG9yZGVycyBnaXZlbi5cbiAgLy8gUGFycnkg4oCTIHVzZSB5b3VyIHdlYXBvbiB0byBibG9jayAvIGRlZmxlY3QgdGhlIGVuZW1pZXMgYXR0YWNrLlxuICAvLyBTdGFuZGFyZCBPYmplY3Qg4oCTIFRha2Ugbm8gYWN0aW9uIHBvaW50c1xuICAvLyBQaWNrIFVwIC8gVGFrZVxuICAvLyBPcGVuXG4gIC8vIE9wZW4gTG9ja1xuICAvLyBQdWxsIOKAkyAoRXhhbXBsZSDigJxQdWxsIExldmVy4oCdKVxuXG4gIC8vIEltcGVuZGluZyBPYmplY3RcbiAgLy8gQ2F0Y2gg4oCTIENhdGNoIGFuIGl0ZW0gb3Igd2VhcG9uIHRoYXQgaGFzIGJlZW4gdGhyb3duIGluIHlvdXIgcGF0aCBvZiB0cmF2ZWwuXG4gIC8vIFJlZmxlY3RcbiAgLy8gVGhyb3dcbiAgLy8gV2FyZCDigJMgKHNwaXJpdCkgYSBhY3Rpb24gdGhhdCBrZWVwcyBlbmVtaWVzIGF3YXlcbiAgLy8gR3VhcmQg4oCTIChzdGFtaW5hKSBwcm90ZWN0IGZyb20gb25jb21pbmcgYXR0YWNrcy5cbiAgLy8gQ2hhcmdlIOKAkyBIb2xkIGF0dGFjayBidXR0b24gZG93bi4gVGhpcyB1c2VzIHVwIFN0YW1pbmEgYW5kIHJhaXNlIFBvd2VyIG9mIGF0dGFjay5cbiAgLy8gQ2hhcmdlIOKAkyBIb2xkIGF0dGFjayBidXR0b24gZG93bi4gVGhpcyB1c2VzIHVwIFNwaXJpdCBhbmQgcmFpc2UgUG93ZXIgb2YgYXR0YWNrLlxuICAvLyBDbGFzcyBBY3Rpb25zIChTbG90IDIpXG4gIC8vIExlYXJuXG59XG4iXX0=