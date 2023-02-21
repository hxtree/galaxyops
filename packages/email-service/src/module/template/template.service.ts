import Handlebars = require('handlebars');
import { convert as htmlToText } from 'html-to-text';
import { Injectable } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { FormatType } from './format.type';

@Injectable()
export class TemplateService {
  async convert(template: string, dto: any): Promise<any> {
    const html = await this.parse(template, dto);
    const text = await this.toText(html);

    return { html, text, template } as const;
  }

  async parse(template: string, params: any): Promise<string> {
    const varaibles = instanceToPlain(params);
    const templateCompiled = Handlebars.compile(template);
    return templateCompiled(varaibles);
  }

  async toText(html: string): Promise<string> {
    const options = {
      wordwrap: 130,
    };
    return htmlToText(html, options);
  }
}
