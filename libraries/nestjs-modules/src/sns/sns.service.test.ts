import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { mockClient } from 'aws-sdk-client-mock';
import { Test, TestingModule } from '@nestjs/testing';
import { SnsService } from './sns.service';
import { SnsClientService } from './sns-client.service';

describe('SNSService', () => {
  let snsService: SnsService;
  const snsMock = mockClient(SNSClient);

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [SnsService, { provide: SnsClientService, useValue: snsMock }],
    }).compile();

    snsService = moduleRef.get<SnsService>(SnsService);
  });

  beforeEach(async () => {
    snsMock.reset();
  });

  describe('publish', () => {
    it.only('should return true on success', async () => {
      snsMock.on(PublishCommand).resolves({
        $metadata: { httpStatusCode: 200 },
      });

      const result = await snsService.publish(
        'My message',
        'arn:aws:sns:us-east-1:111111111111:MyTopic',
      );

      expect(result).toEqual(true);
    });
  });
});
