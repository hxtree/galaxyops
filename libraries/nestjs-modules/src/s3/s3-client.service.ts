import { ConfigService } from '@nestjs/config';
import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3ClientService {
  private region: string | undefined;

  private accessKeyId: string | undefined;

  private secretAccessKey: string | undefined;

  private config: S3ClientConfig;

  private client: S3Client;

  constructor(private configService: ConfigService) {
    this.region = this.configService.get('AWS_REGION');
    this.accessKeyId = this.configService.get('AWS_ACCESS_KEY_ID');
    this.secretAccessKey = this.configService.get('AWS_SECRET_ACCESS_KEY');
    this.config = {
      region: this.region,
      credentials: {
        accessKeyId: this.accessKeyId ?? '',
        secretAccessKey: this.secretAccessKey ?? '',
      },
    };

    this.client = new S3Client(this.config);
  }

  public send(cmd: any) {
    return this.client.send(cmd);
  }
}
