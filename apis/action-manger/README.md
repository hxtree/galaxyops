# @org-apis/action-manager
![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

# Action
Actions are decoupled from the actor and target. Each action SHOULD scale in computation based on actors and target stats. Two vastly different skilled actors performing the same action will foresably yield vastly different effects.

## Duration
Every action can be represented by the time it takes to peform various stages of the action.
Although it's possble the time to perform an action is null, most user based action will take time to perform.

Each stage may be a different method depending on the action.
The duration and effects change character to character.

## Stages:
*  All stages may be interupted by external forces.
*  Not all actions feature all stages.
*  The individual stages may have varying required durations; some durations may be null. But the total time for an action may not be null.

Actions can be broken down into four distincts stages, idle, prepare, act, and recovery.

### Idle
Generally a neutral position that is achived via recovery and allows for one to enter prepare.
### Prepare
The time spent before an action can be taken. Being in the act of preparing may change one's defense, etc.
### Act
The Time spent to take an action. 
### Recovery
The recovery stage represents the time spent to recover from an action. Recovery stage may vary greatly depending on the nature of the actions. Some actions may cause immoblization, etc. during the recovery stage. Others may simply prevent reuse for a duration. Recoveries may stack and these stacks may have have physiclogical symptoms, such as afflictions, but often are not visible.

# InstanceID

# NounID Person, Place, or Thing.

# Visibility:
Server
Client

instance_id | object_id | state | duration | 


SQS

action_id : Action | actors {Things} | targets {Things}


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

## Damage Type
All damage can be categorized as one more damage type. 

Damage types allow for exploitation and weaknesses in characters. Realizing damage types allows a player to exploit weakness of their opponent. 

Physical is the default DTM.

## Damage Type Modifier (DTM)

A character may be impacted affected more or less due to the type of damage.

Formula:
```
Damage Done = Damage + Damage * (DTM *.01 + 1)
```
*Note that the DTM used is the defender’s corresponding value of the DT from the attack.

A User's understand of DTM can be the difference between success and failure.


100

roll;

1000

getCharacterStats



Roll(100) Fire Damaage 


Resistance (100)
Weakness


The type of damage being done. The entities damage type modified. 

References:

Similar concept:
https://rivalslib.com/workshop_guide/art/anticipation_action_recovery.html#fast-transitions
