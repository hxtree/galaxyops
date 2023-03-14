/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable-next-line max-classes-per-file */
import { FakerFactory } from '@cats-cradle/faker-factory';
import { PlayerCreateEvent } from './events';
import { BaseMessage } from './base-message';

describe('BaseMessage', () => {
  let event: BaseMessage;

  beforeAll(async () => {
    process.env.STAGE = 'default';
    process.env.APP_NAME = 'message-broker';
  });

  describe('topicName', () => {
    it('should make topic name based on class name prefix with STAGE, kebab case, ending in topic', async () => {
      event = await FakerFactory.create<PlayerCreateEvent>(PlayerCreateEvent);
      expect(event.topicName).toEqual('default-player-create-event-topic');
    });

    it('should truncate long class names', async () => {
      class TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws extends BaseMessage {}
      event =
        new TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws();
      expect(event.topicName).toEqual(
        'default-the-quick-brown-fox-jumps-over-a-lazy-dog-and-create-a-long-topic-name-that-must-be-shortened-for-aws-topic',
      );
    });
  });

  describe('queueName', () => {
    it('should make queue name based on class name prefix with STAGE and APP_NAME, kebab case, ending in queue', async () => {
      event = await FakerFactory.create<PlayerCreateEvent>(PlayerCreateEvent);
      expect(event.queueName).toEqual(
        'default-message-broker-player-create-event-queue',
      );
    });

    it('should truncate long class names', async () => {
      // eslint-disable-next-line max-len
      class TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws extends BaseMessage {}
      event =
        new TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws();
      expect(event.queueName).toEqual(
        'default-message-broker-the-quick-brown-fox-jumps-over-a-lazy-dog-and-queue',
      );
    });
  });
});
