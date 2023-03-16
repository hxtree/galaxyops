import { Test, TestingModule } from '@nestjs/testing';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { mockClient } from 'aws-sdk-client-mock';
import { CharacterLevelUpEvent } from '@cats-cradle/messaging-schemas';
import { SnsService, SnsClientService } from '../sns';
import { S3Service, S3ClientService } from '../s3';
import { MessageService } from './message.service';

describe(MessageService, () => {
  const s3Mock = mockClient(S3Client);
  const snsMock = mockClient(SNSClient);
  let messageService: MessageService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        ConfigService,
        MessageService,
        { provide: S3ClientService, useValue: s3Mock },
        S3Service,
        { provide: SnsClientService, useValue: snsMock },
        SnsService,
      ],
    }).compile();

    messageService = moduleRef.get<MessageService>(MessageService);
  });

  beforeEach(async () => {
    s3Mock.reset();
    snsMock.reset();
  });

  afterAll(async () => {});

  describe('publish', () => {
    it('should receive acknowledge message', async () => {
      s3Mock.on(PutObjectCommand).resolves({
        $metadata: { httpStatusCode: 200 },
      });
      snsMock.on(PublishCommand).resolves({
        $metadata: { httpStatusCode: 200 },
      });

      const message = await FakerFactory.create<CharacterLevelUpEvent>(
        CharacterLevelUpEvent,
      );

      const response = await messageService.publish(message);

      expect(response).toBeUndefined();
    });
  });
});
