# @org-apis/action-manager
![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

The action manager is responsible for processing character actions and saving effects to target data structure


Todo:
* There should be a sanity check in regards to geo location of chaters
* Should saving effects fan out, SNS? Or be a CQS change state but not return value :?


## Stacks

* AppSync
* DynamoDB
* Lambda

## Action
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
                targets: {
                    character-id: 22
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

The type of damage being done. The entities damage type modified. 



considering database layer

Perhaps an ORM make sense
https://github.com/prisma/prisma
https://github.com/typeorm/typeorm

Kind of want to seed db during deploy.

## References:
Similar concept:
* https://rivalslib.com/workshop_guide/art/anticipation_action_recovery.html#fast-transitions

* https://docs.aws.amazon.com/cdk/api/v1/docs/aws-appsync-readme.html
* https://aws.amazon.com/blogs/architecture/things-to-consider-when-you-build-a-graphql-api-with-aws-appsync/
* https://aws.amazon.com/appsync/?trk=41731cf6-f5eb-4611-81ef-f2914ec706b5&sc_channel=ps&sc_campaign=acquisition&sc_medium=GC-PMM|PS-GO|Brand|All|PA|Mobile%20Services|Amplify|US|EN|Text|PMO22-13306&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync&ef_id=EAIaIQobChMIvpnDkMv09wIVAD-tBh0vigdrEAAYASAAEgJNf_D_BwE:G:s&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync
* https://aws.amazon.com/blogs/mobile/building-scalable-graphql-apis-on-aws-with-cdk-and-aws-appsync/
* https://aws.amazon.com/blogs/mobile/building-real-time-serverless-apis-with-postgres-cdk-typescript-and-aws-appsync/

