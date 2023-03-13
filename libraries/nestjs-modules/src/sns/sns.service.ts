import { Injectable } from '@nestjs/common';
import { PublishCommand } from '@aws-sdk/client-sns';
import { SnsClientService } from './sns-client.service';

@Injectable()
export class SnsService {
  constructor(private snsClientService: SnsClientService) {}

  async publish(message: string, topicArn: string): Promise<boolean> {
    try {
      /**
       * {@link https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sns/interfaces/publishcommandinput.html}
       */
      const cmd = new PublishCommand({
        Message: message,
        TopicArn: topicArn,
      });
      await this.snsClientService.send(cmd);
      return await Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
