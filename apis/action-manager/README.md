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

## Saga

Idempotent
https://www.youtube.com/watch?v=1nJNx6_KSRU

TakeAction
GetTargets
ComputeEffects
ApplyEffects
NotifyClients


## References:
Similar concept:
* https://rivalslib.com/workshop_guide/art/anticipation_action_recovery.html#fast-transitions

* https://docs.aws.amazon.com/cdk/api/v1/docs/aws-appsync-readme.html
* https://aws.amazon.com/blogs/architecture/things-to-consider-when-you-build-a-graphql-api-with-aws-appsync/
* https://aws.amazon.com/appsync/?trk=41731cf6-f5eb-4611-81ef-f2914ec706b5&sc_channel=ps&sc_campaign=acquisition&sc_medium=GC-PMM|PS-GO|Brand|All|PA|Mobile%20Services|Amplify|US|EN|Text|PMO22-13306&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync&ef_id=EAIaIQobChMIvpnDkMv09wIVAD-tBh0vigdrEAAYASAAEgJNf_D_BwE:G:s&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync
* https://aws.amazon.com/blogs/mobile/building-scalable-graphql-apis-on-aws-with-cdk-and-aws-appsync/
* https://aws.amazon.com/blogs/mobile/building-real-time-serverless-apis-with-postgres-cdk-typescript-and-aws-appsync/

