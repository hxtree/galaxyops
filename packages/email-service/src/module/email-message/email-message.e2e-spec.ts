import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { closeInMongodConnection } from '@cats-cradle/nestjs-modules';
import { EmailMessageModule } from './email-message.module';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dto';

describe('/email-message', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [EmailMessageModule],
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
    await closeInMongodConnection();
    app.close();
  });

  describe('POST /email-message/user-account-created', () => {
    it('should interpolate template with dto', async () => {
      const body = await FakerFactory.create<UserAccountCreatedDto>(
        UserAccountCreatedDto,
      );

      const response = await supertest(app.getHttpServer())
        .post('/email-message/user-account-created?action=VIEW_TEXT')
        .send(body)
        .expect(201);

      expect(response.text).toEqual(expect.stringContaining(body.firstName));
    });
  });

  describe('POST /email-message/user-forgotten-password-reset?action=VIEW_HTML', () => {
    it('should return html', async () => {
      const body = await FakerFactory.create<UserForgottenPasswordResetDto>(
        UserForgottenPasswordResetDto,
      );

      const response = await supertest(app.getHttpServer())
        .post('/email-message/user-forgotten-password-reset?action=VIEW_HTML')
        .send(body)
        .expect(201);

      expect(response.text).toEqual(expect.stringContaining('html'));
    });
  });
});
