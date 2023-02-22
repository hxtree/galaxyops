import { Module } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { MonitoringController } from './monitoring.controller';
import {
  rootMongooseTestModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { EmailRequestSchema } from './email-request.schema';
import { EmailRequestRepository } from './email-request.repository';

@Module({
  controllers: [MonitoringController],
  providers: [MonitoringService, EmailRequestRepository],
  imports: [
    rootMongooseTestModule(),
    MongooseModule.forFeature([
      { name: 'EmailRequest', schema: EmailRequestSchema },
    ]),
  ],
})
export class MonitoringModule {}
