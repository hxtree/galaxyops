import { ConfigService } from '@nestjs/config';
import { SNSClient, SNSClientConfig } from '@aws-sdk/client-sns';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SnsClientService {
  private region: string | undefined;

  private accessKeyId: string | undefined;

  private secretAccessKey: string | undefined;

  private config: SNSClientConfig;

  private client: SNSClient;

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

    this.client = new SNSClient(this.config);
  }

  public send(cmd: any) {
    return this.client.send(cmd);
  }
}
