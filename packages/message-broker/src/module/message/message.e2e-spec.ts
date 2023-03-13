import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import {
  S3Service,
  S3ClientService,
  SnsService,
  SnsClientService,
} from '@cats-cradle/nestjs-modules';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { mockClient } from 'aws-sdk-client-mock';
import { PublishService } from './publish.service';
import { MessageController } from './message.controller';
import { PlayerCreateEvent } from '../../topics';

describe('/messages', () => {
  let app: INestApplication;
  const s3Mock = mockClient(S3Client);
  const snsMock = mockClient(SNSClient);

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [MessageController],
      providers: [
        ConfigService,
        PublishService,
        { provide: S3ClientService, useValue: s3Mock },
        S3Service,
        { provide: SnsClientService, useValue: snsMock },
        SnsService,
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );
    await app.init();
  });

  beforeEach(async () => {
    s3Mock.reset();
    snsMock.reset();
  });

  afterAll(async () => {
    app.close();
  });

  describe('POST /publish', () => {
    it('should 201 to acknowledge message', async () => {
      s3Mock.on(PutObjectCommand).resolves({
        $metadata: { httpStatusCode: 200 },
      });
      snsMock.on(PublishCommand).resolves({
        $metadata: { httpStatusCode: 200 },
      });

      const body = await FakerFactory.create<PlayerCreateEvent>(
        PlayerCreateEvent,
      );

      const response = await supertest(app.getHttpServer())
        .post('/messages')
        .send(body)
        .expect(201);

      expect(response.body).toEqual({});
    });
  });
});
