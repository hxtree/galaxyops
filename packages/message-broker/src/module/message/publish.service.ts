import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { S3Service, SnsService } from '@cats-cradle/nestjs-modules';
import { v4 } from 'uuid';
import { DateTime } from 'luxon';

@Injectable()
export class PublishService {
  constructor(
    private _configService: ConfigService,
    private _s3Service: S3Service,
    private _snsService: SnsService,
  ) {}

  async publish(data: any): Promise<void> {
    await this.write(data);

    await this.send(data);
  }

  /**
   * Send SNS message
   * @param data
   */
  public async send(data: any): Promise<void> {
    // TODO determine based on data/dto
    const topicArn = 'arn:aws:sns:us-east-1:111111111111:MyTopic';
    const message = 'My message';

    await this._snsService.publish(message, topicArn);
  }

  /**
   * Save data as json file to data lake
   * @param data
   */
  public async write(data: any): Promise<void> {
    const bucket = this._configService.get('AWS_BUCKET_NAME') ?? '';

    const eventName = 'unknown'; // TODO determine
    const timestamp = DateTime.now().toFormat('y/MM/dd');
    const uuid = v4();
    const key = `${eventName}/${timestamp}/${uuid}.json`;

    const fileContent = JSON.stringify(data);

    await this._s3Service.putObject(bucket, key, fileContent);
  }
}
