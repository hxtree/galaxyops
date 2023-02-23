import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { EmailMessageModule } from './email-message.module';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dto';
import { closeInMongodConnection } from '@cats-cradle/nestjs-modules';

describe('/email-message', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [EmailMessageModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        // disableErrorMessages: true,
        enableDebugMessages: true,

        transform: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('POST /email-message/user-account-created', () => {
    it('should interpolate template with dto', async () => {
      const body = await FakerFactory.create<UserAccountCreatedDto>(
        UserAccountCreatedDto,
      );

      const response = await supertest(app.getHttpServer())
        .post('/email-message/user-account-created')
        .send({
          recipient: body.recipient,
          firstName: body.firstName,
        })
        .expect(201);
      expect(response.body).toEqual({
        html: expect.stringContaining('html'),
        text: expect.stringContaining(body.firstName),
      });
    });
  });

  describe('POST /email-message/user-forgotten-password-reset?format=html', () => {
    it('should return data as html', async () => {
      const body = await FakerFactory.create<UserForgottenPasswordResetDto>(
        UserForgottenPasswordResetDto,
      );

      const response = await supertest(app.getHttpServer())
        .post('/email-message/user-forgotten-password-reset?format=html')
        .send({
          recipient: body.recipient,
          username: body.username,
          link: body.link,
        })
        .expect(201);

      expect(response.body).toEqual({
        data: expect.stringContaining('html'),
      });
    });
  });
});
