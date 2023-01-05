# Appsync

Moved prior used appsync code here for now as to decouple from other packages.
It's harder to develop each service with graphql layer at this time. Rather it
be single abstract, which is more inline with graphql concept.

## TODO

See if schema can automated be generated from other microservices open api
<https://openapi-generator.tech/docs/generators/graphql-schema>

## AWS, GraphQL, AppSync, etc

- <https://docs.aws.amazon.com/cdk/api/v1/docs/aws-appsync-readme.html>
- <https://aws.amazon.com/blogs/architecture/things-to-consider-when-you-build-a-graphql-api-with-aws-appsync/>
- <https://aws.amazon.com/appsync/?trk=41731cf6-f5eb-4611-81ef-f2914ec706b5&sc_channel=ps&sc_campaign=acquisition&sc_medium=GC-PMM|PS-GO|Brand|All|PA|Mobile%20Services|Amplify|US|EN|Text|PMO22-13306&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync&ef_id=EAIaIQobChMIvpnDkMv09wIVAD-tBh0vigdrEAAYASAAEgJNf_D_BwE:G:s&s_kwcid=AL!4422!3!588971138398!e!!g!!amazon%20appsync>
- <https://aws.amazon.com/blogs/mobile/building-scalable-graphql-apis-on-aws-with-cdk-and-aws-appsync/>
- <https://aws.amazon.com/blogs/mobile/building-real-time-serverless-apis-with-postgres-cdk-typescript-and-aws-appsync/>
