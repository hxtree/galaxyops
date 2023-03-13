import { Injectable } from '@nestjs/common';
import { TemplateService } from './template.service';
import { ActionType } from './types/action.type';
import { QueueService } from './queue.service';
import { MailerService } from './mailer.service';

@Injectable()
export class EngineService {
  constructor(
    private _queueService: QueueService,
    private _templateService: TemplateService,
    private _mailerService: MailerService,
  ) {}

  public async process(
    action: ActionType,
    slug: string,
    template: string,
    data: any,
  ): Promise<any> {
    const { html, text } = await this._templateService.convert(template, data);

    switch (action) {
      case ActionType.VIEW_HTML:
        return html;
      case ActionType.VIEW_TEMPLATE:
        return template;
      case ActionType.VIEW_TEXT:
        return text;
      case ActionType.QUEUE:
        await this._queueService.addOpen(slug, data);
        return '';
      case ActionType.SEND:
        await this._mailerService.sendMail({
          toAddresses: data.recipient,
          fromAddress: data.fromAddress,
          subject: data.subject,
          htmlMessage: html,
          textMessage: text,
        });

        await this._queueService.addCompleted(slug, data);

        return undefined;
      default:
        return html;
    }
  }
}
