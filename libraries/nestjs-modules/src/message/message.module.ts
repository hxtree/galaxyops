import { Module } from '@nestjs/common';
import { SnsClientService, SnsService } from '../sns';
import { S3ClientService, S3Service } from '../s3';
import { MessageService } from './message.service';

@Module({
  providers: [
    MessageService,
    S3ClientService,
    S3Service,
    SnsClientService,
    SnsService,
  ],
})
export class MessageModule {}
