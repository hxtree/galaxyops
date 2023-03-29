import {
  SendEmailCommand,
  SendEmailCommandOutput,
  SESClient,
} from '@aws-sdk/client-ses';
import { Injectable } from '@nestjs/common';
import { SendEmailCommandDto } from './dto/send-email-command.dto';

@Injectable()
export class MailerService {
  public async sendMail(
    params: SendEmailCommandDto,
  ): Promise<SendEmailCommandOutput> {
    const sesClient = new SESClient({
      region: process.env?.AWS_REGION ?? 'us-east-2',
    });

    const sendEmailCommand = this.createSendEmailCommand(params);

    try {
      const result = sesClient.send(sendEmailCommand);
      return await result;
    } catch (e) {
      console.error('Failed to send email.');
      return Promise.reject(e);
    }
  }

  createSendEmailCommand = (params: SendEmailCommandDto) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new SendEmailCommand({
      Destination: {
        CcAddresses: [],
        ToAddresses: Array.isArray(params.toAddresses)
          ? params.toAddresses
          : [params.toAddresses],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: params.htmlMessage,
          },
          Text: {
            Charset: 'UTF-8',
            Data: params.textMessage,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: params.subject,
        },
      },
      Source: params.fromAddress,
      ReplyToAddresses: [],
    });
}
