# @cats-cradle/message-broker

This is a “Pub/Sub Message Broker”. It enables async communication between
microservices to provide loose coupling.

- SNS topics are deployed with the message broker.
- SQS deployments should be owned by consumer.

## Message Categories

**Command** Command send a idempotent request to a topic asking subscribers to
perform task. The consumer of a command does not inform or provide a response to
the publisher. The publisher expects something to occur as a result of the
request.

> Publisher -> SNS -> SQS -> Consumer

**Event** Publish to a SNS topic informing any subscribers that something
occurred within a given system. Events published may be significant events that
were published only for the purpose of data retention and analytic purposes.

> Publisher -> SNS -> SQS -> Consumer

**Request** Publish an async message to a single queue letting them know which
queue to send a reply to.

> Publisher -> SQS -> Consumer -> (SQS -> Publisher)

**Reply** In response to a request publish an message to a single queue as
request.

> (Publisher -> SQS) -> Consumer -> SQS -> Publisher

## TODO

- Add a feature to make it easy for apps to publish to events.
- Add a feature to make it easy to subscribe to events.
- Provision S3 bucket and place all history of all events into.
- Save all messages received to bucket.
- Indicate whether message was sent only for testing / debugging purposes and
  should not contaminate history.
- Hydration that ties into api-client query might be nifty.
- logical id format
- decouple topics from broker into global lib

## Documentation

- <https://medium.com/design-microservices-architecture-with-patterns/microservices-asynchronous-message-based-communication-6643bee06123>
- <https://badia-kharroubi.gitbooks.io/microservices-architecture/content/patterns/communication-patterns/message-queue-pattern.html>
- <https://aws.plainenglish.io/an-introduction-to-request-reply-pattern-and-its-uses-2a0bb74ff7d8>
