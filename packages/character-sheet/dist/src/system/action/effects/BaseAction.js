"use strict";
// import {Thing} from '../WIP/contracts/Thing';
// import {Character} from '../entity/Character';
// import {Attribute} from '../WIP/Attribute';
// import {Effects} from '../WIP/Effects';
// type Factor = [Attribute, number, string, string];
// type Trait = Factor;
// export enum ActionCategory {
//   MOVEMENT = 'Movement', // changes position
//   MENU = 'Menu', // activated via menu
//   COMBO = 'Combo', // activated via combo
//   INTERACTION = 'Interaction',
//   WEAPON = 'Weapon',
//   CLASS = 'Class',
//   DRIVE = 'Drive',
//   PARTY = 'Party',
//   GEAR = 'Gear', // are related to the use of gear
//   NATURAL = 'Natural', //  actions that do not need to be called to be used
// }
// /**
//  * Actions are decoupled from the actor and target.
//  * Each action SHOULD scale in computation based on actors and target stats.
//  * Two vastly different skilled actors performing the same action may foresably yield vastly different effects.
//  */
// export abstract class BaseAction {
//   protected abstract _id: number;
//   protected abstract _name: string;
//   protected abstract _description: string;
//   protected abstract _category: ActionCategory;
//   protected _actors: Array<Character>;
//   protected _targets: Array<Character>;
//   constructor(actors: Array<Character>, targets: Array<Character>) {
//     this._actors = actors;
//     this._targets = targets;
//   }
//   abstract execute(actors: Array<Thing>, targets: Array<Thing>): Effects;
//   public get name(): string {
//     return this._name;
//   }
//   public get description(): string {
//     return this._description;
//   }
//   // interupts?
//   // should these be actual Date times?
//   /**
//    * The time spent before an action can be taken.
//    * Being in the act of preparing may change one's defense, etc.
//    * Before a prepareTime a character must be idle.
//    */
//   abstract get perpareTime(): number;
//   /**
//    * the amount of time an action takes to execute
//    */
//   abstract get executionTime(): number;
//   /**
//    * The recovery stage represents the time spent to recover from an action.
//    * Recovery stage may vary greatly depending on the nature of the actions.
//    * Some actions may cause immoblization, etc. during the recovery stage.
//    * Others may simply prevent reuse for a duration.
//    * Recoveries may stack and these stacks may have have physiclogical symptoms,
//    * such as afflictions, but often are not visible.
//    * After a recovery time the character returns to a idle state.
//    */
//   abstract get recoveryTime(): number;
//   /**
//    * the amount of time before the action can be executed again
//    */
//   abstract get cooldownTime(): number;
//   /**
//    * Every action can be represented by the time it takes to peform various stages of the action.
//    * Although it's possble the time to perform an action is null, most user based action will take time to perform.
//    * Each stage may be a different method depending on the action.
//    * The duration and effects change character to character.
//    */
//   public get totalDuration(): number {
//     return this.perpareTime + this.executionTime + this.recoveryTime;
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zeXN0ZW0vYWN0aW9uL2VmZmVjdHMvQmFzZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMsMENBQTBDO0FBRTFDLHFEQUFxRDtBQUNyRCx1QkFBdUI7QUFFdkIsK0JBQStCO0FBQy9CLCtDQUErQztBQUMvQyx5Q0FBeUM7QUFDekMsNENBQTRDO0FBQzVDLGlDQUFpQztBQUNqQyx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscURBQXFEO0FBQ3JELDhFQUE4RTtBQUM5RSxJQUFJO0FBRUosTUFBTTtBQUNOLHNEQUFzRDtBQUN0RCwrRUFBK0U7QUFDL0Usa0hBQWtIO0FBQ2xILE1BQU07QUFDTixxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0Qyw2Q0FBNkM7QUFDN0Msa0RBQWtEO0FBRWxELHlDQUF5QztBQUN6QywwQ0FBMEM7QUFFMUMsdUVBQXVFO0FBQ3ZFLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsTUFBTTtBQUVOLDRFQUE0RTtBQUU1RSxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBQ3pCLE1BQU07QUFFTix1Q0FBdUM7QUFDdkMsZ0NBQWdDO0FBQ2hDLE1BQU07QUFFTixrQkFBa0I7QUFDbEIsMENBQTBDO0FBRTFDLFFBQVE7QUFDUixxREFBcUQ7QUFDckQsb0VBQW9FO0FBQ3BFLHNEQUFzRDtBQUN0RCxRQUFRO0FBQ1Isd0NBQXdDO0FBRXhDLFFBQVE7QUFDUixxREFBcUQ7QUFDckQsUUFBUTtBQUNSLDBDQUEwQztBQUUxQyxRQUFRO0FBQ1IsK0VBQStFO0FBQy9FLCtFQUErRTtBQUMvRSw2RUFBNkU7QUFDN0UsdURBQXVEO0FBQ3ZELG1GQUFtRjtBQUNuRix1REFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFLFFBQVE7QUFDUix5Q0FBeUM7QUFFekMsUUFBUTtBQUNSLGtFQUFrRTtBQUNsRSxRQUFRO0FBQ1IseUNBQXlDO0FBRXpDLFFBQVE7QUFDUixvR0FBb0c7QUFDcEcsc0hBQXNIO0FBQ3RILHFFQUFxRTtBQUNyRSwrREFBK0Q7QUFDL0QsUUFBUTtBQUNSLHlDQUF5QztBQUN6Qyx3RUFBd0U7QUFDeEUsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge1RoaW5nfSBmcm9tICcuLi9XSVAvY29udHJhY3RzL1RoaW5nJztcbi8vIGltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tICcuLi9lbnRpdHkvQ2hhcmFjdGVyJztcbi8vIGltcG9ydCB7QXR0cmlidXRlfSBmcm9tICcuLi9XSVAvQXR0cmlidXRlJztcbi8vIGltcG9ydCB7RWZmZWN0c30gZnJvbSAnLi4vV0lQL0VmZmVjdHMnO1xuXG4vLyB0eXBlIEZhY3RvciA9IFtBdHRyaWJ1dGUsIG51bWJlciwgc3RyaW5nLCBzdHJpbmddO1xuLy8gdHlwZSBUcmFpdCA9IEZhY3RvcjtcblxuLy8gZXhwb3J0IGVudW0gQWN0aW9uQ2F0ZWdvcnkge1xuLy8gICBNT1ZFTUVOVCA9ICdNb3ZlbWVudCcsIC8vIGNoYW5nZXMgcG9zaXRpb25cbi8vICAgTUVOVSA9ICdNZW51JywgLy8gYWN0aXZhdGVkIHZpYSBtZW51XG4vLyAgIENPTUJPID0gJ0NvbWJvJywgLy8gYWN0aXZhdGVkIHZpYSBjb21ib1xuLy8gICBJTlRFUkFDVElPTiA9ICdJbnRlcmFjdGlvbicsXG4vLyAgIFdFQVBPTiA9ICdXZWFwb24nLFxuLy8gICBDTEFTUyA9ICdDbGFzcycsXG4vLyAgIERSSVZFID0gJ0RyaXZlJyxcbi8vICAgUEFSVFkgPSAnUGFydHknLFxuLy8gICBHRUFSID0gJ0dlYXInLCAvLyBhcmUgcmVsYXRlZCB0byB0aGUgdXNlIG9mIGdlYXJcbi8vICAgTkFUVVJBTCA9ICdOYXR1cmFsJywgLy8gIGFjdGlvbnMgdGhhdCBkbyBub3QgbmVlZCB0byBiZSBjYWxsZWQgdG8gYmUgdXNlZFxuLy8gfVxuXG4vLyAvKipcbi8vICAqIEFjdGlvbnMgYXJlIGRlY291cGxlZCBmcm9tIHRoZSBhY3RvciBhbmQgdGFyZ2V0LlxuLy8gICogRWFjaCBhY3Rpb24gU0hPVUxEIHNjYWxlIGluIGNvbXB1dGF0aW9uIGJhc2VkIG9uIGFjdG9ycyBhbmQgdGFyZ2V0IHN0YXRzLlxuLy8gICogVHdvIHZhc3RseSBkaWZmZXJlbnQgc2tpbGxlZCBhY3RvcnMgcGVyZm9ybWluZyB0aGUgc2FtZSBhY3Rpb24gbWF5IGZvcmVzYWJseSB5aWVsZCB2YXN0bHkgZGlmZmVyZW50IGVmZmVjdHMuXG4vLyAgKi9cbi8vIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWN0aW9uIHtcbi8vICAgcHJvdGVjdGVkIGFic3RyYWN0IF9pZDogbnVtYmVyO1xuLy8gICBwcm90ZWN0ZWQgYWJzdHJhY3QgX25hbWU6IHN0cmluZztcbi8vICAgcHJvdGVjdGVkIGFic3RyYWN0IF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuLy8gICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2NhdGVnb3J5OiBBY3Rpb25DYXRlZ29yeTtcblxuLy8gICBwcm90ZWN0ZWQgX2FjdG9yczogQXJyYXk8Q2hhcmFjdGVyPjtcbi8vICAgcHJvdGVjdGVkIF90YXJnZXRzOiBBcnJheTxDaGFyYWN0ZXI+O1xuXG4vLyAgIGNvbnN0cnVjdG9yKGFjdG9yczogQXJyYXk8Q2hhcmFjdGVyPiwgdGFyZ2V0czogQXJyYXk8Q2hhcmFjdGVyPikge1xuLy8gICAgIHRoaXMuX2FjdG9ycyA9IGFjdG9ycztcbi8vICAgICB0aGlzLl90YXJnZXRzID0gdGFyZ2V0cztcbi8vICAgfVxuXG4vLyAgIGFic3RyYWN0IGV4ZWN1dGUoYWN0b3JzOiBBcnJheTxUaGluZz4sIHRhcmdldHM6IEFycmF5PFRoaW5nPik6IEVmZmVjdHM7XG5cbi8vICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuLy8gICB9XG5cbi8vICAgLy8gaW50ZXJ1cHRzP1xuLy8gICAvLyBzaG91bGQgdGhlc2UgYmUgYWN0dWFsIERhdGUgdGltZXM/XG5cbi8vICAgLyoqXG4vLyAgICAqIFRoZSB0aW1lIHNwZW50IGJlZm9yZSBhbiBhY3Rpb24gY2FuIGJlIHRha2VuLlxuLy8gICAgKiBCZWluZyBpbiB0aGUgYWN0IG9mIHByZXBhcmluZyBtYXkgY2hhbmdlIG9uZSdzIGRlZmVuc2UsIGV0Yy5cbi8vICAgICogQmVmb3JlIGEgcHJlcGFyZVRpbWUgYSBjaGFyYWN0ZXIgbXVzdCBiZSBpZGxlLlxuLy8gICAgKi9cbi8vICAgYWJzdHJhY3QgZ2V0IHBlcnBhcmVUaW1lKCk6IG51bWJlcjtcblxuLy8gICAvKipcbi8vICAgICogdGhlIGFtb3VudCBvZiB0aW1lIGFuIGFjdGlvbiB0YWtlcyB0byBleGVjdXRlXG4vLyAgICAqL1xuLy8gICBhYnN0cmFjdCBnZXQgZXhlY3V0aW9uVGltZSgpOiBudW1iZXI7XG5cbi8vICAgLyoqXG4vLyAgICAqIFRoZSByZWNvdmVyeSBzdGFnZSByZXByZXNlbnRzIHRoZSB0aW1lIHNwZW50IHRvIHJlY292ZXIgZnJvbSBhbiBhY3Rpb24uXG4vLyAgICAqIFJlY292ZXJ5IHN0YWdlIG1heSB2YXJ5IGdyZWF0bHkgZGVwZW5kaW5nIG9uIHRoZSBuYXR1cmUgb2YgdGhlIGFjdGlvbnMuXG4vLyAgICAqIFNvbWUgYWN0aW9ucyBtYXkgY2F1c2UgaW1tb2JsaXphdGlvbiwgZXRjLiBkdXJpbmcgdGhlIHJlY292ZXJ5IHN0YWdlLlxuLy8gICAgKiBPdGhlcnMgbWF5IHNpbXBseSBwcmV2ZW50IHJldXNlIGZvciBhIGR1cmF0aW9uLlxuLy8gICAgKiBSZWNvdmVyaWVzIG1heSBzdGFjayBhbmQgdGhlc2Ugc3RhY2tzIG1heSBoYXZlIGhhdmUgcGh5c2ljbG9naWNhbCBzeW1wdG9tcyxcbi8vICAgICogc3VjaCBhcyBhZmZsaWN0aW9ucywgYnV0IG9mdGVuIGFyZSBub3QgdmlzaWJsZS5cbi8vICAgICogQWZ0ZXIgYSByZWNvdmVyeSB0aW1lIHRoZSBjaGFyYWN0ZXIgcmV0dXJucyB0byBhIGlkbGUgc3RhdGUuXG4vLyAgICAqL1xuLy8gICBhYnN0cmFjdCBnZXQgcmVjb3ZlcnlUaW1lKCk6IG51bWJlcjtcblxuLy8gICAvKipcbi8vICAgICogdGhlIGFtb3VudCBvZiB0aW1lIGJlZm9yZSB0aGUgYWN0aW9uIGNhbiBiZSBleGVjdXRlZCBhZ2FpblxuLy8gICAgKi9cbi8vICAgYWJzdHJhY3QgZ2V0IGNvb2xkb3duVGltZSgpOiBudW1iZXI7XG5cbi8vICAgLyoqXG4vLyAgICAqIEV2ZXJ5IGFjdGlvbiBjYW4gYmUgcmVwcmVzZW50ZWQgYnkgdGhlIHRpbWUgaXQgdGFrZXMgdG8gcGVmb3JtIHZhcmlvdXMgc3RhZ2VzIG9mIHRoZSBhY3Rpb24uXG4vLyAgICAqIEFsdGhvdWdoIGl0J3MgcG9zc2JsZSB0aGUgdGltZSB0byBwZXJmb3JtIGFuIGFjdGlvbiBpcyBudWxsLCBtb3N0IHVzZXIgYmFzZWQgYWN0aW9uIHdpbGwgdGFrZSB0aW1lIHRvIHBlcmZvcm0uXG4vLyAgICAqIEVhY2ggc3RhZ2UgbWF5IGJlIGEgZGlmZmVyZW50IG1ldGhvZCBkZXBlbmRpbmcgb24gdGhlIGFjdGlvbi5cbi8vICAgICogVGhlIGR1cmF0aW9uIGFuZCBlZmZlY3RzIGNoYW5nZSBjaGFyYWN0ZXIgdG8gY2hhcmFjdGVyLlxuLy8gICAgKi9cbi8vICAgcHVibGljIGdldCB0b3RhbER1cmF0aW9uKCk6IG51bWJlciB7XG4vLyAgICAgcmV0dXJuIHRoaXMucGVycGFyZVRpbWUgKyB0aGlzLmV4ZWN1dGlvblRpbWUgKyB0aGlzLnJlY292ZXJ5VGltZTtcbi8vICAgfVxuLy8gfVxuIl19