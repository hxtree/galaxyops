import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { PublishService } from './publish.service';

describe('/publish', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [PublishController],
      providers: [PublishService],
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

  afterAll(async () => {
    app.close();
  });

  describe('POST /publish/publish', () => {
    it('should save file to data lake', async () => {
      // const body = await FakerFactory.create<UserAccountCreatedDto>(
      //   UserAccountCreatedDto,
      // );
      // const response = await supertest(app.getHttpServer())
      //   .post('/email-message/user-account-created?action=VIEW_TEXT')
      //   .send(body)
      //   .expect(201);
      // expect(response.text).toEqual(expect.stringContaining(body.firstName));
    });
  });
});
