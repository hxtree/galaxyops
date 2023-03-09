import { Injectable } from '@nestjs/common';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { S3ClientService } from './s3-client.service';

@Injectable()
export class S3Service {
  constructor(private s3ClientService: S3ClientService) {}

  async putObject(
    bucket: string,
    key: string,
    fileContent: string | Buffer,
    metadata?: Record<string, string>,
  ): Promise<boolean> {
    try {
      const cmd = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: fileContent,
        Metadata: metadata,
      });
      await this.s3ClientService.send(cmd);
      return await Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
