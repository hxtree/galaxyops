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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zeXN0ZW0vUHJvY2Vzc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUZBQW1GO0FBRW5GLFFBQVE7QUFDUixnRUFBZ0U7QUFFaEUsZ0VBQWdFO0FBQ2hFLElBQUk7QUFDSixlQUFlO0FBQ2YsWUFBWTtBQUNaLGdDQUFnQztBQUNoQywyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCLG1DQUFtQztBQUNuQyxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLFlBQVk7QUFDWixnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsWUFBWTtBQUNaLGdDQUFnQztBQUNoQyx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsaUNBQWlDO0FBQ2pDLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixJQUFJO0FBRUosa0VBQWtFO0FBQ2xFLG1GQUFtRjtBQUduRixnQ0FBZ0M7QUFFaEMsK0VBQStFO0FBRS9FLFdBQVc7QUFDWCxNQUFNO0FBQ04saURBQWlEO0FBQ2pELE1BQU07QUFDTiwyRkFBMkY7QUFFM0YsZ0ZBQWdGO0FBRWhGLHFFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRhbWFnZSBpcyBjYWxjdWxhdGVkIG9uIHRoZSBzZXJ2ZXIgc2lkZSwgYmVjYXVzZSBjbGllbnQgc2lkZSB0aGVyZSBhcmUgY2hlYXRlcnMuXG5cbi8vIElucHV0XG4vLyBXZSB3YW50IHRvIGN1dCBkb3duIG9uIHRoZSBudW1iZXIgb2YgcmVxdWVzdHMgYmFjayBhbmQgZm9ydGguXG5cbi8vIFVzZXIgc2VuZHMgdmlhIHdlYiBzb2NrZXRzIGRhdGEgb24gdGhlaXIgYWN0aW9ucywgbm90IGlucHV0cy5cbi8vIHtcbi8vICAgICBhY3Rpb25zOlxuLy8gICAgICAgICBbXG4vLyAgICAgICAgICAgICBjaGFyYWN0ZXItaWQ6IDEwLFxuLy8gICAgICAgICAgICAgbmFtZTogc2xhc2gsXG4vLyAgICAgICAgICAgICB0YXJnZXRzOiB7XG4vLyAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLWlkOiAyMlxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICBbXG4vLyAgICAgICAgICAgICBjaGFyYWN0ZXItaWQ6IDEwLFxuLy8gICAgICAgICAgICAgbmFtZTogYWNjZXB0LFxuLy8gICAgICAgICAgICAgZGF0YToge1xuLy8gICAgICAgICAgICAgICAgIHF1ZXN0OiAyMTMsXG4vLyAgICAgICAgICAgICAgICAgYW5zd2VyOiB5ZXNcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgXSxcbi8vICAgICAgICAgW1xuLy8gICAgICAgICAgICAgY2hhcmFjdGVyLWlkOiAxMSxcbi8vICAgICAgICAgICAgIG5hbWU6IG1vdmVcbi8vICAgICAgICAgICAgIGRhdGEge1xuLy8gICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogTkVcbi8vICAgICAgICAgICAgICAgICBhbW91bnQ6IDNmdFxuLy8gICAgICAgICAgICAgICAgIG9yZW50YXRpb246IE5FXG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgZGF0ZXRpbWU6IDEwMjNcbi8vICAgICAgICAgICAgIGFjdGlvbi1pZDogMjMxMjMsXG4vLyAgICAgICAgIF07XG4vLyB9XG5cbi8vIGVuZ2luZSBpcyByYW4gb24gc2VydmVyIGFuZCBzaW11bGF0ZWQgZm9yIHVzZXIgaW5wdXQgb24gY2xpZW50LlxuLy8gTlBDIGFjdGlvbnMgZGVjaWRlZCBieSBzZXJ2ZXIsIGluY2x1ZGluZyB0ZWFtIE5QQyAtLSBvbmVzIG5vdCBzZWxlY3RlZCBmb3IgcGxheS5cblxuXG4vLyAjIyBEYW1hZ2UgVHlwZSBNb2RpZmllciAoRFRNKVxuXG4vLyBBIGNoYXJhY3RlciBtYXkgYmUgaW1wYWN0ZWQgYWZmZWN0ZWQgbW9yZSBvciBsZXNzIGR1ZSB0byB0aGUgdHlwZSBvZiBkYW1hZ2UuXG5cbi8vIEZvcm11bGE6XG4vLyBgYGBcbi8vIERhbWFnZSBEb25lID0gRGFtYWdlICsgRGFtYWdlICogKERUTSAqLjAxICsgMSlcbi8vIGBgYFxuLy8gKk5vdGUgdGhhdCB0aGUgRFRNIHVzZWQgaXMgdGhlIGRlZmVuZGVy4oCZcyBjb3JyZXNwb25kaW5nIHZhbHVlIG9mIHRoZSBEVCBmcm9tIHRoZSBhdHRhY2suXG5cbi8vIEEgVXNlcidzIHVuZGVyc3RhbmQgb2YgRFRNIGNhbiBiZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHN1Y2Nlc3MgYW5kIGZhaWx1cmUuXG5cbi8vIFRoZSB0eXBlIG9mIGRhbWFnZSBiZWluZyBkb25lLiBUaGUgZW50aXRpZXMgZGFtYWdlIHR5cGUgbW9kaWZpZWQuICJdfQ==