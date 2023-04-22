import { Module } from '@nestjs/common';
import {
  rootMongooseModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { TemplateService } from './template.service';
import {
  EmailMessageSchema,
  EmailMessage,
} from '../../models/email-message/email-message.schema';
import { EmailMessageRepository } from './email-message.repository';
import { EmailMessageController } from './email-message.controller';
import { QueueService } from './queue.service';
import { EngineService } from './engine.service';
import { MailerService } from './mailer.service';

@Module({
  controllers: [EmailMessageController],
  providers: [
    TemplateService,
    EmailMessageRepository,
    QueueService,
    EngineService,
    MailerService,
  ],
  imports: [
    rootMongooseModule(),
    MongooseModule.forFeature([
      { name: EmailMessage.name, schema: EmailMessageSchema },
    ]),
  ],
})
export class EmailMessageModule {}
