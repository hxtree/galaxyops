import { Injectable } from '@nestjs/common';
import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';
import { SendEmailCommandDto } from './dto/send-email-command.dto';

@Injectable()
export class MailerService {
  public async sendMail(params: SendEmailCommandDto): Promise<any> {
};
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

  createSendEmailCommand = (params: SendEmailCommandDto) =>
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
