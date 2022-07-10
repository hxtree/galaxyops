# @org-apis/action-manager
![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

R&D ... WIP

The action manager is responsible for processing character actions and saving effects to target data structure

Todo:
* There should be a sanity check in regards to geo location of chaters
* Should saving effects fan out, SNS? Or be a CQS change state but not return value :?

## Stacks

* AppSync
* DynamoDB
* Lambda

## ECS
ECS follows the principle of composition over inheritance, meaning that every entity is defined not by a type hierarchy, but by the components that are associated with it. Systems act globally over all entities which have the required components. 

The behavior of an entity can be changed at runtime by systems that add, remove or modify components. This eliminates the ambiguity problems of deep and wide inheritance hierarchies often found in Object Oriented Programming techniques that are difficult to understand, maintain, and extend. Common ECS approaches are highly compatible with, and are often combined with, data-oriented design techniques. Data for all instances of a component are commonly stored together in physical memory, enabling efficient memory access for systems which operate over many entities. 

## Saga

TakeAction... Idempotent
GetTargets
ComputeEffects
ApplyEffects
NotifyClients

## References:
Saga:
* https://www.youtube.com/watch?v=1nJNx6_KSRU

Entity Component System and Netcode:
* https://www.youtube.com/watch?v=zrIY0eIyqmI

Character states, similar concept:
* https://rivalslib.com/workshop_guide/art/anticipation_action_recovery.html#fast-transitions

AWS, GraphQL, AppSync, etc:
* https://docs.aws.amazon.com/cdk/api/v1/docs/aws-appsync-readme.html
* https://aws.amazon.com/blogs/architecture/things-to-consider-when-you-build-a-graphql-api-with-aws-appsync/
* https://aws.amazon.com/appsync/?trk=41731cf6-f5eb-4611-81ef-f2914ec706b5&sc_channel=ps&sc_campaign=acquisition&sc_medium=GC-PMM|PS-GO|Brand|All|PA|Mobile%20Services|Amplify|US|EN|Text|PMO22-13306&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync&ef_id=EAIaIQobChMIvpnDkMv09wIVAD-tBh0vigdrEAAYASAAEgJNf_D_BwE:G:s&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync
* https://aws.amazon.com/blogs/mobile/building-scalable-graphql-apis-on-aws-with-cdk-and-aws-appsync/
* https://aws.amazon.com/blogs/mobile/building-real-time-serverless-apis-with-postgres-cdk-typescript-and-aws-appsync/

