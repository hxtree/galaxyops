"use strict";
// damage is calculated on the server side, because client side there are cheaters.
// Input
// We want to cut down on the number of requests back and forth.
// User sends via web sockets data on their actions, not inputs.
// {
//     actions:
//         [
//             character-id: 10,
//             name: slash,
//             targets: {
//                 character-id: 22
//             }
//         ],
//         [
//             character-id: 10,
//             name: accept,
//             data: {
//                 quest: 213,
//                 answer: yes
//             }
//         ],
//         [
//             character-id: 11,
//             name: move
//             data {
//                 direction: NE
//                 amount: 3ft
//                 orentation: NE
//             },
//             datetime: 1023
//             action-id: 23123,
//         ];
// }
// engine is ran on server and simulated for user input on client.
// NPC actions decided by server, including team NPC -- ones not selected for play.
// ## Damage Type Modifier (DTM)
// A character may be impacted affected more or less due to the type of damage.
// Formula:
// ```
// Damage Done = Damage + Damage * (DTM *.01 + 1)
// ```
// *Note that the DTM used is the defender’s corresponding value of the DT from the attack.
// A User's understand of DTM can be the difference between success and failure.
// The type of damage being done. The entities damage type modified. 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lY3Mvc3lzdGVtL1Byb2Nlc3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1GQUFtRjtBQUVuRixRQUFRO0FBQ1IsZ0VBQWdFO0FBRWhFLGdFQUFnRTtBQUNoRSxJQUFJO0FBQ0osZUFBZTtBQUNmLFlBQVk7QUFDWixnQ0FBZ0M7QUFDaEMsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFDbkMsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixZQUFZO0FBQ1osZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLFlBQVk7QUFDWixnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixnQ0FBZ0M7QUFDaEMsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLGdDQUFnQztBQUNoQyxhQUFhO0FBQ2IsSUFBSTtBQUVKLGtFQUFrRTtBQUNsRSxtRkFBbUY7QUFHbkYsZ0NBQWdDO0FBRWhDLCtFQUErRTtBQUUvRSxXQUFXO0FBQ1gsTUFBTTtBQUNOLGlEQUFpRDtBQUNqRCxNQUFNO0FBQ04sMkZBQTJGO0FBRTNGLGdGQUFnRjtBQUVoRixxRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYW1hZ2UgaXMgY2FsY3VsYXRlZCBvbiB0aGUgc2VydmVyIHNpZGUsIGJlY2F1c2UgY2xpZW50IHNpZGUgdGhlcmUgYXJlIGNoZWF0ZXJzLlxuXG4vLyBJbnB1dFxuLy8gV2Ugd2FudCB0byBjdXQgZG93biBvbiB0aGUgbnVtYmVyIG9mIHJlcXVlc3RzIGJhY2sgYW5kIGZvcnRoLlxuXG4vLyBVc2VyIHNlbmRzIHZpYSB3ZWIgc29ja2V0cyBkYXRhIG9uIHRoZWlyIGFjdGlvbnMsIG5vdCBpbnB1dHMuXG4vLyB7XG4vLyAgICAgYWN0aW9uczpcbi8vICAgICAgICAgW1xuLy8gICAgICAgICAgICAgY2hhcmFjdGVyLWlkOiAxMCxcbi8vICAgICAgICAgICAgIG5hbWU6IHNsYXNoLFxuLy8gICAgICAgICAgICAgdGFyZ2V0czoge1xuLy8gICAgICAgICAgICAgICAgIGNoYXJhY3Rlci1pZDogMjJcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgXSxcbi8vICAgICAgICAgW1xuLy8gICAgICAgICAgICAgY2hhcmFjdGVyLWlkOiAxMCxcbi8vICAgICAgICAgICAgIG5hbWU6IGFjY2VwdCxcbi8vICAgICAgICAgICAgIGRhdGE6IHtcbi8vICAgICAgICAgICAgICAgICBxdWVzdDogMjEzLFxuLy8gICAgICAgICAgICAgICAgIGFuc3dlcjogeWVzXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIF0sXG4vLyAgICAgICAgIFtcbi8vICAgICAgICAgICAgIGNoYXJhY3Rlci1pZDogMTEsXG4vLyAgICAgICAgICAgICBuYW1lOiBtb3ZlXG4vLyAgICAgICAgICAgICBkYXRhIHtcbi8vICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IE5FXG4vLyAgICAgICAgICAgICAgICAgYW1vdW50OiAzZnRcbi8vICAgICAgICAgICAgICAgICBvcmVudGF0aW9uOiBORVxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIGRhdGV0aW1lOiAxMDIzXG4vLyAgICAgICAgICAgICBhY3Rpb24taWQ6IDIzMTIzLFxuLy8gICAgICAgICBdO1xuLy8gfVxuXG4vLyBlbmdpbmUgaXMgcmFuIG9uIHNlcnZlciBhbmQgc2ltdWxhdGVkIGZvciB1c2VyIGlucHV0IG9uIGNsaWVudC5cbi8vIE5QQyBhY3Rpb25zIGRlY2lkZWQgYnkgc2VydmVyLCBpbmNsdWRpbmcgdGVhbSBOUEMgLS0gb25lcyBub3Qgc2VsZWN0ZWQgZm9yIHBsYXkuXG5cblxuLy8gIyMgRGFtYWdlIFR5cGUgTW9kaWZpZXIgKERUTSlcblxuLy8gQSBjaGFyYWN0ZXIgbWF5IGJlIGltcGFjdGVkIGFmZmVjdGVkIG1vcmUgb3IgbGVzcyBkdWUgdG8gdGhlIHR5cGUgb2YgZGFtYWdlLlxuXG4vLyBGb3JtdWxhOlxuLy8gYGBgXG4vLyBEYW1hZ2UgRG9uZSA9IERhbWFnZSArIERhbWFnZSAqIChEVE0gKi4wMSArIDEpXG4vLyBgYGBcbi8vICpOb3RlIHRoYXQgdGhlIERUTSB1c2VkIGlzIHRoZSBkZWZlbmRlcuKAmXMgY29ycmVzcG9uZGluZyB2YWx1ZSBvZiB0aGUgRFQgZnJvbSB0aGUgYXR0YWNrLlxuXG4vLyBBIFVzZXIncyB1bmRlcnN0YW5kIG9mIERUTSBjYW4gYmUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBzdWNjZXNzIGFuZCBmYWlsdXJlLlxuXG4vLyBUaGUgdHlwZSBvZiBkYW1hZ2UgYmVpbmcgZG9uZS4gVGhlIGVudGl0aWVzIGRhbWFnZSB0eXBlIG1vZGlmaWVkLiAiXX0=