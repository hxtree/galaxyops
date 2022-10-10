"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operator = exports.Effect = void 0;
var Effect;
(function (Effect) {
    Effect["WEAK"] = "Weak";
    Effect["RESIST"] = "Resist";
    Effect["ABSORB"] = "Absorb";
    Effect["IMMUNE"] = "Immune";
    Effect["HEAL"] = "Heal";
})(Effect = exports.Effect || (exports.Effect = {}));
var Operator;
(function (Operator) {
    Operator["ADD"] = "ADD";
    Operator["MULTIPLY"] = "MULTIPLY";
    Operator["SUBTRACT"] = "SUBTRACT";
    Operator["DIVIDE"] = "DIVIDE";
})(Operator = exports.Operator || (exports.Operator = {}));
// import { Attribute } from "./Attribute";
// import { Operator } from "./Operator";
// import { Element } from "./Element";
// export class Trait {
//     private _attribute: Attribute;
//     private _element: Element;
//     private _operator: Operator;
//     private _value: number;
//     // todo what about an action Command that causes target to trigger action event?
//     constructor(attribute: Attribute, element: Element, operator: Operator, value: number) {
//         this._attribute = attribute;
//         this._element = element;
//         this._operator = operator;
//         this._value = value;
//     }
// }
// export type Traits = Array<Trait>;
// // const trait = new Trait(Attribute.Life,Element.Fire,Operator["/"],50);
// export class Trait {
//     { tags: [EffectTag.ELECTRIC], remove: StatEffect.LIFE, quanity: "1d6+2", },
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L2NoYXJhY3Rlci9UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFZLE1BTVg7QUFORCxXQUFZLE1BQU07SUFDaEIsdUJBQWEsQ0FBQTtJQUNiLDJCQUFpQixDQUFBO0lBQ2pCLDJCQUFpQixDQUFBO0lBQ2pCLDJCQUFpQixDQUFBO0lBQ2pCLHVCQUFhLENBQUE7QUFDZixDQUFDLEVBTlcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBTWpCO0FBRUQsSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ2xCLHVCQUFXLENBQUE7SUFDWCxpQ0FBcUIsQ0FBQTtJQUNyQixpQ0FBcUIsQ0FBQTtJQUNyQiw2QkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkI7QUFnQ0QsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFFdkMsdUJBQXVCO0FBQ3ZCLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsbUNBQW1DO0FBQ25DLDhCQUE4QjtBQUU5Qix1RkFBdUY7QUFFdkYsK0ZBQStGO0FBQy9GLHVDQUF1QztBQUN2QyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQixRQUFRO0FBQ1IsSUFBSTtBQUVKLHFDQUFxQztBQUVyQyw0RUFBNEU7QUFFNUUsdUJBQXVCO0FBQ3ZCLGtGQUFrRjtBQUNsRixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZmZlY3RUYWd9IGZyb20gJy4uL2VmZmVjdC9FZmZlY3RUYWcnO1xuXG5leHBvcnQgZW51bSBFZmZlY3Qge1xuICBXRUFLID0gJ1dlYWsnLCAvLyBXZWFrbmVzcywgaW5jcmVhc2VzIGRhbWFnZSB0YWtlbiBieSB0aGUgZGFtYWdlIHR5cGUuXG4gIFJFU0lTVCA9ICdSZXNpc3QnLCAvLyBSZXNpc3RhbmNlLiBkZWNyZWFzZXMgZGFtYWdlIHRha2VuIGJ5IHRoZSBkYW1hZ2UgdHlwZS5cbiAgQUJTT1JCID0gJ0Fic29yYicsIC8vIEFic29ycHRpb24sIHJlZHVjZXMgZGFtYWdlIHR5cGUgYXJlYSBvZiBlZmZlY3QgdG8gbmVhcmJ5IHRhcmdldHMuXG4gIElNTVVORSA9ICdJbW11bmUnLCAvLyBJbW11bml0eSwgY29tcGxldGVseSBibG9ja3MgZGFtYWdlIHRha2VuIGJ5IHRoZSBkYW1hZ2UgdHlwZS5cbiAgSEVBTCA9ICdIZWFsJywgLy8gSGVhbGluZywgcmV2ZXJzZXMgZGFtYWdlIHRha2VuIGludG8gaGVhbGluZyBieSB0aGUgZGFtYWdlIHR5cGUuXG59XG5cbmV4cG9ydCBlbnVtIE9wZXJhdG9yIHtcbiAgQUREID0gJ0FERCcsXG4gIE1VTFRJUExZID0gJ01VTFRJUExZJyxcbiAgU1VCVFJBQ1QgPSAnU1VCVFJBQ1QnLFxuICBESVZJREUgPSAnRElWSURFJyxcbn1cblxuLyoqXG4gKiBlLmcuXG4gKiBFTEVDVFJJQyBIRUFMIDIwJVxuICogQVJST1cgSU1NVU5FXG4gKiBDT0xEIFdFQUsgMnhcbiAqIFBPSVNPTiBJTU1VTkVcbiAqIFNMRUVQIElNTVVORVxuICogRXhwZXJpZW5jZSAxLjJ4XG4gKiBGSVJFIFdFQUtORVNTIDEuMnhcbiAqXG4gKi9cblxuLy8gaG93IHRvIGhhbmRsZSBzdGF0dXMgZWZmZWN0cz9cbi8vIGV4cG9ydCBpbnRlcmZhY2UgVHJhaXQge1xuLy8gICAgIGFkZD86IEF0dHJpYnV0ZSB8IFN0YXR1c0VmZmVjdCxcbi8vICAgICByZW1vdmU/OiBBdHRyaWJ1dGUgfCBTdGF0dXNFZmZlY3QsXG4vLyAgICAgcXVhbml0eT86IHN0cmluZyxcbi8vICAgICBjaGFuY2U/OiBudW1iZXIsXG4vLyAgICAgdGFncz86IEFycmF5PEVmZmVjdFRhZz5cbi8vIH1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFpdCB7XG4gIHRhZzogRWZmZWN0VGFnO1xuICBtb2RpZmllcjogRWZmZWN0O1xuICBxdWFudGl0eTogbnVtYmVyO1xuICBvcGVyYXRvcjogT3BlcmF0b3I7XG59XG5cbmV4cG9ydCB0eXBlIFRyYWl0cyA9IEFycmF5PFRyYWl0PjtcblxuLy8gaW1wb3J0IHsgQXR0cmlidXRlIH0gZnJvbSBcIi4vQXR0cmlidXRlXCI7XG4vLyBpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gXCIuL09wZXJhdG9yXCI7XG4vLyBpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vRWxlbWVudFwiO1xuXG4vLyBleHBvcnQgY2xhc3MgVHJhaXQge1xuLy8gICAgIHByaXZhdGUgX2F0dHJpYnV0ZTogQXR0cmlidXRlO1xuLy8gICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnQ7XG4vLyAgICAgcHJpdmF0ZSBfb3BlcmF0b3I6IE9wZXJhdG9yO1xuLy8gICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG5cbi8vICAgICAvLyB0b2RvIHdoYXQgYWJvdXQgYW4gYWN0aW9uIENvbW1hbmQgdGhhdCBjYXVzZXMgdGFyZ2V0IHRvIHRyaWdnZXIgYWN0aW9uIGV2ZW50P1xuXG4vLyAgICAgY29uc3RydWN0b3IoYXR0cmlidXRlOiBBdHRyaWJ1dGUsIGVsZW1lbnQ6IEVsZW1lbnQsIG9wZXJhdG9yOiBPcGVyYXRvciwgdmFsdWU6IG51bWJlcikge1xuLy8gICAgICAgICB0aGlzLl9hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG4vLyAgICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuLy8gICAgICAgICB0aGlzLl9vcGVyYXRvciA9IG9wZXJhdG9yO1xuLy8gICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IHR5cGUgVHJhaXRzID0gQXJyYXk8VHJhaXQ+O1xuXG4vLyAvLyBjb25zdCB0cmFpdCA9IG5ldyBUcmFpdChBdHRyaWJ1dGUuTGlmZSxFbGVtZW50LkZpcmUsT3BlcmF0b3JbXCIvXCJdLDUwKTtcblxuLy8gZXhwb3J0IGNsYXNzIFRyYWl0IHtcbi8vICAgICB7IHRhZ3M6IFtFZmZlY3RUYWcuRUxFQ1RSSUNdLCByZW1vdmU6IFN0YXRFZmZlY3QuTElGRSwgcXVhbml0eTogXCIxZDYrMlwiLCB9LFxuLy8gfVxuIl19