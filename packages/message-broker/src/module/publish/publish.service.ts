import { Injectable } from '@nestjs/common';
import { S3Service } from '@cats-cradle/nestjs-modules';

@Injectable()
export class PublishService {
  constructor(private _s3Service: S3Service) {}

  async publish(data: any): Promise<void> {
    // save to data lake
    await this._s3Service.putObject('myBucket', 'myKey', JSON.stringify(data));

    // send sns
  }
}
