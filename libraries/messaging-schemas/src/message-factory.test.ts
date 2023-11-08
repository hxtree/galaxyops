import { BaseMessageDto } from './dto/messages';
import { MessageFactory } from './message-factory';
import { CharacterLevelUpEvent } from './dto/events/character-level-up.event';

describe('MessageFactory', () => {
  let message: CharacterLevelUpEvent;

  beforeAll(async () => {
    process.env.AWS_ACCOUNT_ID = '123456789012';
    process.env.AWS_REGION = 'us-east-2';
    process.env.STAGE_NAME = 'default';
    process.env.APP_NAME = 'message-broker';

    message = await MessageFactory.create<CharacterLevelUpEvent>(
      CharacterLevelUpEvent,
      { level: 3 },
    );
  });

  it('should populate messageId with uuid', async () => {
    expect(message.messageId).toHaveLength(36);
  });

  it('should populate time', async () => {
    expect(message.timestamp).toHaveLength(24);
  });

  it('should populate partial info', async () => {
    expect(message.level).toBe(3);
  });

  it('should populate queueName', async () => {
    expect(message.queueName).toBe(
      'default-message-broker-character-level-up-event-queue',
    );
  });

  it('should populate topicArn', async () => {
    expect(message.topicArn).toBe(
      'arn:aws:sns:us-east-2:123456789012:default-character-level-up-event-topic',
    );
  });

  it('should not leave fields undefined if not defined', async () => {
    expect(message.characterId).toBeUndefined();
  });
});
