import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
// import { v4 } from 'uuid';
// import { DateTime } from 'luxon';
import { S3Service } from '../s3';
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
   * @param message
   * @param topicArn
   */
  async publish(message: any, topicArn: string): Promise<void> {
    await this.write(message, topicArn);

    await this.send(message, topicArn);
  }

  /**
   * Send SNS message
   */
  public async send(message: any, topicArn: string): Promise<void> {
    await this._snsService.publish(message, topicArn);
  }

  /**
   * Save data as json file to data lake
   */
  // TODO replace with something like https://docs.aws.amazon.com/sns/latest/dg/firehose-endpoints-subscribe.html to avoid giving each service access
  public async write(message: any, topicArn: string): Promise<void> {
    // const bucket = this._configService.get('AWS_BUCKET_NAME') ?? '';
    // const timestamp = DateTime.now().toFormat('y/MM/dd');
    // const uuid = v4();
    // const key = `${topicArn}/${timestamp}/${uuid}.json`;
    // const fileContent = JSON.stringify(message);
    // await this._s3Service.putObject(bucket, key, fileContent);
  }
}
