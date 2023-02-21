import Handlebars = require('handlebars');
import { convert as htmlToText } from 'html-to-text';
import { Injectable } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class TemplateService {
  private TEMPLATES_DIR_PATH = './templates';

  async convert(dto: any): Promise<any> {
    try {
      const html = await this.parse(dto.html, dto);
      const text = await this.toText(html);
      return await Promise.resolve({ template: dto.html, html, text });
    } catch (err) {
      const error = err as Error;
      return Promise.reject(
        new Error(`Failed to get Template. ${error.message}`),
      );
    }
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
