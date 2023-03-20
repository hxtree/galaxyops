/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable-next-line max-classes-per-file */
import { FakerFactory } from '@cats-cradle/faker-factory';
import { IsMoney } from '@cats-cradle/validation-schemas';
import { BaseMessageDto, BaseEventDto } from '../base';

describe('BaseMessageDto', () => {
  let event: BaseMessageDto;
  let eventLong: BaseMessageDto;

  class TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws extends BaseMessageDto {
    @IsMoney()
    public gc: string;
  }

  class PlayerCreateEvent extends BaseEventDto {
    @IsMoney()
    public gc: string;
  }

  beforeAll(async () => {
    // set by default in consumers
    process.env.AWS_ACCOUNT_ID = '123456789012';
    process.env.AWS_REGION = 'us-east-2';
    process.env.STAGE_NAME = 'default';
    process.env.APP_NAME = 'message-broker';

    event = await FakerFactory.create<PlayerCreateEvent>(PlayerCreateEvent);
    eventLong =
      await FakerFactory.create<TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws>(
        TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws,
      );
  });

  describe('topicName', () => {
    it('should make topic name based on class name prefix with STAGE, kebab case, ending in topic', async () => {
      expect(PlayerCreateEvent.topicName()).toEqual(
        'default-player-create-event-topic',
      );
    });

    it('should truncate long class names', async () => {
      expect(
        TheQuickBrownFoxJumpsOverALazyDogAndCreateALongTopicNameThatMustBeShortenedForAws.topicName(),
      ).toEqual(
        'default-the-quick-brown-fox-jumps-over-a-lazy-dog-and-create-a-long-topic-name-that-must-be-shortened-for-aws-topic',
      );
    });
  });

  describe('queueName', () => {
    it('should make queue name based on class name prefix with STAGE and APP_NAME, kebab case, ending in queue', async () => {
      expect(event.queueName).toEqual(
        'default-message-broker-player-create-event-queue',
      );
    });

    it('should truncate long class names', async () => {
      expect(eventLong.queueName).toEqual(
        'default-message-broker-the-quick-brown-fox-jumps-over-a-lazy-dog-and-queue',
      );
    });
  });

  describe('topicArn', () => {
    it('should get valid topic ARN', async () => {
      expect(event.topicArn).toEqual(
        'arn:aws:sns:us-east-2:123456789012:default-player-create-event-topic',
      );
    });
  });
});
