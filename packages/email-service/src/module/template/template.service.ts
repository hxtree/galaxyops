import Handlebars = require('handlebars');
import { convert as htmlToText } from 'html-to-text';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class TemplateService {
  private TEMPLATES_DIR_PATH = '../../../../public/templates';

  async convert(dto: any): Promise<any> {
    try {
      const param = instanceToPlain(dto);
      const template = await this.getTemplate(dto.template);
      const templateCompiled = Handlebars.compile(template);
      const html = templateCompiled(param);
      const text = await this.toText(html);
      return await Promise.resolve({ template, html, text });
    } catch (err) {
      const error = err as Error;
      return Promise.reject(
        new Error(`Failed to get Template. ${error.message}`),
      );
    }
  }

  async findAll(): Promise<any> {
    try {
      return await Promise.resolve({});
    } catch (err) {
      return Promise.reject(new Error('Failed to list Templates'));
    }
  }

  async toText(html: string): Promise<string> {
    const options = {
      wordwrap: 130,
    };
    return htmlToText(html, options);
  }

  async getTemplate(filename: string): Promise<string> {
    const filepath = path.resolve(
      __dirname,
      `${this.TEMPLATES_DIR_PATH}/${filename}`,
    );

    return fs.readFileSync(filepath).toString();
  }
}
