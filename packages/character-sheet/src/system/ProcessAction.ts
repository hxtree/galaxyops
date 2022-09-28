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