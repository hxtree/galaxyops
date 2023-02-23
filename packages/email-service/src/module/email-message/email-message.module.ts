import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import {
  rootMongooseTestModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { EmailMessageSchema } from './email-message.schema';
import { EmailMessageRepository } from './email-message.repository';
import { EmailMessageController } from './email-message.controller';
import { QueueService } from './queue.service';

@Module({
  controllers: [EmailMessageController],
  providers: [TemplateService, EmailMessageRepository, QueueService],
  imports: [
    rootMongooseTestModule(),
    MongooseModule.forFeature([
      { name: 'EmailMessage', schema: EmailMessageSchema },
    ]),
  ],
})
export class EmailMessageModule {}
