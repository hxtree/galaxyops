import { Module } from '@nestjs/common';
import {
  rootMongooseTestModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { TemplateService } from './template.service';
import { EmailMessageSchema } from './email-message.schema';
import { EmailMessageRepository } from './email-message.repository';
import { EmailMessageController } from './email-message.controller';
import { QueueService } from './queue.service';
import { EngineService } from './engine.service';

@Module({
  controllers: [EmailMessageController],
  providers: [
    TemplateService,
    EmailMessageRepository,
    QueueService,
    EngineService,
  ],
  imports: [
    rootMongooseTestModule(),
    MongooseModule.forFeature([
      { name: 'EmailMessage', schema: EmailMessageSchema },
    ]),
  ],
})
export class EmailMessageModule {}
