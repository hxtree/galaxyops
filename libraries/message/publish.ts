// Import required AWS SDK clients and commands for Node.js
import { PublishCommand } from '@aws-sdk/client-sns';
import { snsClient } from './libs/snsClient.js';

// Set the parameters
var params = {
  Message: 'MESSAGE_TEXT', // MESSAGE_TEXT
  TopicArn: 'TOPIC_ARN', //TOPIC_ARN
};

const run = async () => {
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log('Success.', data);
    return data; // For unit tests.
  } catch (err) {
    console.log('Error', err.stack);
  }
};
run();
