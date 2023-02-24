import Handlebars = require('handlebars');
import { convert as htmlToText } from 'html-to-text';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TemplateService {
  async convert(
    template: string,
    data: any,
  ): Promise<{ readonly html: string; readonly text: string }> {
    const html = await this.parse(template, data);
    const text = await this.toText(html);

    return { html, text } as const;
  }

  async parse(template: string, data: any): Promise<string> {
    const templateCompiled = Handlebars.compile(template);
    return templateCompiled(data);
  }

  async toText(html: string): Promise<string> {
    const options = {
      wordwrap: 130,
    };
    return htmlToText(html, options);
  }
}
