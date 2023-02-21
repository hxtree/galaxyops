import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TemplateModule } from './template.module';
import { TemplateService } from './template.service';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dtos';

describe('/templates', () => {
  let app: INestApplication;
  let templateService: TemplateService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [TemplateModule],
    }).compile();

    app = moduleRef.createNestApplication();
    templateService = moduleRef.get<TemplateService>(TemplateService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('POST /templates/user-account-created', async () => {
    const body = FakerFactory.create<UserAccountCreatedDto>(
      UserAccountCreatedDto,
    );

    await supertest(app.getHttpServer())
      .post('/templates/user-account-created')
      .send(body)
      .expect(201);
  });

  it('POST /templates/user-forgotten-password-reset', async () => {
    const body = FakerFactory.create<UserForgottenPasswordResetDto>(
      UserForgottenPasswordResetDto,
    );

    await supertest(app.getHttpServer())
      .post('/templates/user-forgotten-password-reset')
      .send(body)
      .expect(201);
  });
});
