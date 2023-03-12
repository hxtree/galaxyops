import { S3ClientService, S3Service } from '@cats-cradle/nestjs-modules';
import { Module } from '@nestjs/common';
import { PublishController } from './publish.controller';
import { PublishService } from './publish.service';

@Module({
  controllers: [PublishController],
  providers: [PublishService, S3ClientService, S3Service],
})
export class PublishModule {}
