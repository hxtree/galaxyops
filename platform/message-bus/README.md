# @cats-cradle/message-bus

![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Lifecycle](https://img.shields.io/badge/lifecycle-stable-brightgreen)

This service deploys a SNS topic for every registered
`@cats-cradle/message-schema`. Other services can then subscribe to these
topics.

## Data Lake

Message sent to any topic also get stored in a S3 data lake. This works using a
Kinesis Firehose.

Messages are saved in the `123456789-default-data-lake-bucket` in a structured
manner for analysis. For example:

> messages/2023/11/06/04/test-firehose-delivery-stream-2-2023-11-06-04-28-20-be72f66c-f0e7-4812-9b1d-064cee498d23

## References

- [Event-Driven Architecture.](https://aws.amazon.com/event-driven-architecture/)
- [Pub/sub](https://cloud.google.com/pubsub/docs/overview)
- [Structure Data Lake for Analysis](https://www.youtube.com/watch?v=4xjckHvapFk)
- [SNS to Kinesis Data Firehouse to S3](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html)
