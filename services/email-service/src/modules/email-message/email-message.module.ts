import { Module } from '@nestjs/common';
import { MongooseModule } from '@galaxyops/nestjs-modules';
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
import { databaseModule } from '../../database.module';

@Module({
  imports: [
    databaseModule(),
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
  ],
})
export class EmailMessageModule {}
