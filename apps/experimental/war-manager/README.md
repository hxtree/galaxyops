# @org-apps/action-manager

# Action
Every action takes time. Each stage may be a different method depending on the action.
The duration and effects change character to character.

## Stages:
### Idle
Generally a neutral position that is achived via recovery and allows for one to enter prepare.
### Prepare
The time spent before an action can be taken. Being in the act of preparing may change one's defense, etc.
### Act
The Time spent to take an action.
### Recovery
The time spent to recover from an action. Recovery stage may vary depending on actions. Some actions may have
a immoblized recovery stage. Others may simply prevent move reuse. Recoveries may stack. They may have physiclogical symptoms.

# InstanceID

# NounID Person, Place, or Thing.

# Visibility:
Server
Client

instance_id | object_id | state | duration | 



state manifest
What's happening in the instance
What's happening on each client
    User input

    We want to cut down on the number of requests back and forth.

    User sends via web sockets data on their actions, not inputs.
    {
        actions:
            [
                character-id: 10,
                name: slash,
                data: {
                                        
                }
            ],
            [
                character-id: 10,
                name: accept,
                data: {
                    quest: 213,
                    answer: yes
                }
            ],
            [
                character-id: 11,
                name: move
                data {
                    direction: NE
                    amount: 3ft
                    orentation: NE
                },
                datetime: 1023
                action-id: 23123,
            ];
    }

    engine is ran on server and simulated for user input on client.
    NPC actions decided by server, including team NPC -- ones not selected for play.


References:

Similar concept:
https://rivalslib.com/workshop_guide/art/anticipation_action_recovery.html#fast-transitions
