import { FakerFactory } from '@cats-cradle/faker-factory';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import { MailerService } from '../modules/email-message/mailer.service';
import { SendEmailCommandDto } from '../modules/email-message/dto/send-email-command.dto';

describe('MailerService', () => {
  let mailerService: MailerService;

  beforeEach(async () => {
    mailerService = new MailerService();
  });

  describe('createSendEmailCommand', () => {
    it('should return instance of SendEmailCommand', async () => {
      const sendEmailCommand = await FakerFactory.create<SendEmailCommandDto>(
        SendEmailCommandDto,
      );

      const result = await mailerService.createSendEmailCommand(
        sendEmailCommand,
      );

      expect(result).toBeInstanceOf(SendEmailCommand);
    });
  });
});
