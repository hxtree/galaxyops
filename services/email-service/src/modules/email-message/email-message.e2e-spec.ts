import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import {
  closeInMongodConnection,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dto';
import { TemplateService } from './template.service';
import {
  EmailMessage,
  EmailMessageSchema,
} from '../../models/email-message/email-message.schema';
import { EmailMessageRepository } from './email-message.repository';
import { EmailMessageController } from './email-message.controller';
import { QueueService } from './queue.service';
import { EngineService } from './engine.service';
import { MailerService } from './mailer.service';
import { ActionType } from '../../models/email-message/action.type';
import { StatusType } from '../../models/email-message/status.type';

describe('/email-message', () => {
  let app: INestApplication;
  let emailMessageRepository: EmailMessageRepository;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri: process.env.MONGO_DATABASE_URI,
          }),
        }),
        MongooseModule.forFeature([
          { name: EmailMessage.name, schema: EmailMessageSchema },
        ]),
      ],
      controllers: [EmailMessageController],
      providers: [
        TemplateService,
        EmailMessageRepository,
        QueueService,
        EngineService,
        MailerService,
        EmailMessage,
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    emailMessageRepository = moduleRef.get<EmailMessageRepository>(
      EmailMessageRepository,
    );

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    // await closeInMongodConnection();
    app.close();
  });

  describe(`POST /email-message/user-forgotten-password-reset?action=${ActionType.QUEUE}`, () => {
    it('should save email to database', async () => {
      const body = await FakerFactory.create<UserForgottenPasswordResetDto>(
        UserForgottenPasswordResetDto,
      );

      const response = await supertest(app.getHttpServer())
        .post(
          `/email-message/user-forgotten-password-reset?action=${ActionType.QUEUE}`,
        )
        .send(body)
        .expect(201);

      const emailMessage: EmailMessage | null = await emailMessageRepository.findOneOrFail({
        recipient: body.recipient,
      });

      expect(emailMessage!.status).toEqual(StatusType.OPEN);
      expect(emailMessage!.template).toEqual(
        'user-forgotten-password-reset-dto',
      );

      // TODO validate data

      expect(response.text).toEqual('');
    });
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
