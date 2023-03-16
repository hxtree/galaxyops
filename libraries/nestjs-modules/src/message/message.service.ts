import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { DateTime } from 'luxon';
import { BaseMessageDto } from '@cats-cradle/messaging-schemas';
import { SnsService } from '../sns';

@Injectable()
export class MessageService {
  constructor(
    // private _configService: ConfigService,
    // private _s3Service: S3Service,
    private _snsService: SnsService,
  ) {}

  /**
   * Save to data lake and send message
   */
  async publish(message: BaseMessageDto): Promise<void> {
    if (!message.messageId) {
      message.messageId = v4();
    }

    if (!message.timestamp) {
      message.timestamp = DateTime.utc().toISO();
    }

    const messageContents = JSON.stringify(message);

    await this._snsService.publish(messageContents, message.topicArn);
  }

  /**
   * Save data as json file to data lake
   */
  // import { ConfigService } from '@nestjs/config';
  // import { S3Service } from '../s3';
  // TODO replace with something like https://docs.aws.amazon.com/sns/latest/dg/firehose-endpoints-subscribe.html to avoid giving each service access
  // public async write(message: any, topicArn: string): Promise<void> {
  // const bucket = this._configService.get('AWS_BUCKET_NAME') ?? '';
  // const timestamp = DateTime.now().toFormat('y/MM/dd');
  // const uuid = v4();
  // const key = `${topicArn}/${timestamp}/${uuid}.json`;
  // const fileContent = JSON.stringify(message);
  // await this._s3Service.putObject(bucket, key, fileContent);
  // }
}
