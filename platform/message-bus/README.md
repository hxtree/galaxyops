# @galaxyops/message-bus

![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Lifecycle](https://img.shields.io/badge/lifecycle-stable-brightgreen)

This service deploys a SNS topic for every registered
`@galaxyops/message-schema`. Other services can then subscribe to these
topics.

## Command Query Responsibility Segregation (CQRS)

Command Query Responsibility Segregation (CQRS) is a design pattern that
separates the responsibility of handling commands (write operations) from
queries (read operations) in a system. This separation enables more flexible and
scalable architectures by allowing different models and data stores to be
optimized for specific tasks.

### Key Aspects of CQRS:

1. **Command and Query Separation:** CQRS emphasizes the distinction between
   commands, which modify state, and queries, which retrieve data. This
   separation enables independent scaling, optimization, and maintenance of
   command and query processing components.

2. **Domain-Driven Design Integration:** CQRS is often employed in conjunction
   with Domain-Driven Design (DDD) principles, enabling the creation of distinct
   command and query models that closely align with the domain concepts and
   requirements.

3. **Event Sourcing:** CQRS is frequently coupled with event sourcing, where
   changes to the system's state are captured as a series of immutable events.
   Event sourcing facilitates auditability, scalability, and replayability of
   state changes, enhancing system reliability and resilience.

4. **Scalability and Performance:** By segregating command and query processing,
   CQRS allows for independent scaling of write and read workloads, enabling
   optimizations tailored to the specific requirements of each operation type.
   This can lead to improved performance, responsiveness, and resource
   utilization.

5. **Complexity and Trade-offs:** While CQRS offers benefits in terms of
   flexibility and scalability, it also introduces additional complexity,
   particularly in terms of system architecture, data synchronization, and
   consistency management. Teams adopting CQRS must carefully evaluate the
   trade-offs and complexities involved to ensure they align with the project's
   requirements and constraints.

By embracing CQRS principles, we aim to design systems that are better suited to
evolving business needs, provide enhanced performance and scalability, and
maintain a clear separation of concerns between command and query processing.

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
