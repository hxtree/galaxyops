import Handlebars = require('handlebars');
import { convert as htmlToText } from 'html-to-text';
import { Injectable } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class TemplateService {
  private TEMPLATES_DIR_PATH = './templates';

  async convert(dto: any): Promise<any> {
    try {
      const param = instanceToPlain(dto);
      const templateCompiled = Handlebars.compile(dto.html);
      const html = templateCompiled(param);
      const text = await this.toText(html);
      return await Promise.resolve({ template: dto.html, html, text });
    } catch (err) {
      const error = err as Error;
      return Promise.reject(
        new Error(`Failed to get Template. ${error.message}`),
      );
    }
  }

  async toText(html: string): Promise<string> {
    const options = {
      wordwrap: 130,
    };
    return htmlToText(html, options);
  }
}
