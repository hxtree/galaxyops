# TODO make a construct for turn key pub sub, e.g

```
import { Queue } from 'aws-cdk-lib/aws-sqs';
new Queue(this, 'EmailSendCommand', { queueName:
EmailSendCommand.topicName });
```

Queues should be deployed with the service they run on Make turn-key DLE
