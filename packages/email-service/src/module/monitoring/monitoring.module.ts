import { Module } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { MonitoringController } from './monitoring.controller';
import {
  rootMongooseTestModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { EmailRequestSchema } from './email-request.schema';

@Module({
  controllers: [MonitoringController],
  providers: [MonitoringService],
  imports: [
    rootMongooseTestModule(),
    MongooseModule.forFeature([
      { name: 'EmailRequest', schema: EmailRequestSchema },
    ]),
  ],
})
export class MonitoringModule {}
