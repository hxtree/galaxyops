import { Injectable } from '@nestjs/common';
import { TemplateService } from './template.service';
import { ActionType } from './types/action.type';
import { QueueService } from './queue.service';

@Injectable()
export class EngineService {
  constructor(
    private _queueService: QueueService,
    private _templateService: TemplateService,
  ) {}

  public async process(
    action: ActionType,
    slug: string,
    template: string,
    data: any,
  ): Promise<any> {
    if (action === ActionType.SEND) {
      this._queueService.create(slug, data);
    }

    const { html, text } = await this._templateService.convert(template, data);

    switch (action) {
      case ActionType.VIEW_HTML:
        return html;
      case ActionType.VIEW_TEMPLATE:
        return template;
      case ActionType.VIEW_TEXT:
        return text;
      default:
        return html;
    }
  }
}
