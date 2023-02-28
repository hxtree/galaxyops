import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';
import { Injectable } from '@nestjs/common';

export type SendMailDto = {
  toAddresses: string | string[];
  fromAddress: string;
  subject: string;
  htmlMessage: string;
  textMessage: string;
  replyToAddresses?: string | string[];
  ccAddresses?: string | string[];
};

@Injectable()
export class MailerService {
  public async sendMail(params: SendMailDto): Promise<any> {
    const sesClient = new SESClient({
      region: process.env?.AWS_REGION ?? 'us-east-2',
    });

    const sendEmailCommand = this.createSendEmailCommand(params);

    try {
      return sesClient.send(sendEmailCommand);
    } catch (e) {
      console.error('Failed to send email.');
      return e;
    }
  }

  createSendEmailCommand = (params: SendMailDto) =>
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
