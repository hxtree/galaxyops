import { S3ClientService, S3Service } from '@cats-cradle/nestjs-modules';
import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { PublishService } from './publish.service';

@Module({
  controllers: [MessageController],
  providers: [PublishService, S3ClientService, S3Service],
})
export class MessageModule {}
