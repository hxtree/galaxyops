import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { S3Service, S3ClientService } from '@cats-cradle/nestjs-modules';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { mockClient } from 'aws-sdk-client-mock';
import { PublishService } from './publish.service';
import { PublishController } from './publish.controller';
import { PlayerCreateEvent } from '../../topics';

describe('/publish', () => {
  let app: INestApplication;
  const s3Mock = mockClient(S3Client);

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [PublishController],
      providers: [
        ConfigService,
        PublishService,
        S3Service,
        { provide: S3ClientService, useValue: s3Mock },
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
  });

  afterAll(async () => {
    app.close();
  });

  describe('POST /publish', () => {
    it('should save file to data lake', async () => {
      s3Mock.on(PutObjectCommand).resolves({
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
