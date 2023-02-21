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
    const body = await FakerFactory.create<UserAccountCreatedDto>(
      UserAccountCreatedDto,
    );

    const response = await supertest(app.getHttpServer())
      .post('/templates/user-account-created')
      .send({
        recipient: body.recipient,
        firstName: body.firstName,
      })
      .expect(201);
    expect(response.body).toEqual({
      template: expect.stringContaining('html'),
      html: expect.stringContaining('html'),
      text: expect.stringContaining(body.firstName),
    });
  });

  it('POST /templates/user-forgotten-password-reset', async () => {
    const body = await FakerFactory.create<UserForgottenPasswordResetDto>(
      UserForgottenPasswordResetDto,
    );

    const response = await supertest(app.getHttpServer())
      .post('/templates/user-forgotten-password-reset')
      .send({
        recipient: body.recipient,
        username: body.username,
        link: body.link,
      })
      .expect(201);

    expect(response.body).toEqual({
      template: expect.stringContaining('html'),
      html: expect.stringContaining('html'),
      text: expect.stringContaining(body.username),
    });
  });
});
