/* eslint @typescript-eslint/no-var-requires: "off" */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Readable } from 'stream';

const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium-min');

@Injectable()
export class PdfService {
  async renderHtml(html: string): Promise<any> {
    try {
      const browser = await this.getBrowser();
      const page = await browser.newPage();

      await page.setContent(html, {
        waitUntil: ['networkidle0', 'domcontentloaded'],
      });

      const buffer = await page.pdf({ format: 'a4', printBackground: true });

      await browser.close();
      return buffer;
    } catch (err) {
      const error = err as Error;
      return new BadRequestException(`Failed to render pdf: ${error.message}`);
    }
  }

  async renderUrl(url: string) {
    try {
      const browser = await this.getBrowser();
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: ['networkidle2', 'domcontentloaded'] });

      const buffer = await page.pdf({
        format: 'A4',
        landscape: false,
        printBackground: true,
        margin: { top: '30px' },
        scale: 0.98,
      });

      await browser.close();

      return buffer;
    } catch (err) {
      const error = err as Error;
      return new BadRequestException(`Failed to render pdf: ${error.message}`);
    }
  }

  async renderPageData(html: string) {
    try {
      const browser = await this.getBrowser();
      const page = await browser.newPage();
      await page.setContent(html, {
        waitUntil: ['networkidle0', 'domcontentloaded'],
      });
      const data = {
        title: (await page.title()) ?? 'undefined',
        mimeType: page.mimeType,
        filename: page.filename,
        charset: page.charset,
      };

      await browser.close();
      return data;
    } catch (err) {
      const error = err as Error;
      return new BadRequestException(`Failed to render pdf: ${error.message}`);
    }
  }

  private async getBrowser() {
    const CHROMIUM_EXECUTABLE_PATH = process.env.AWS_EXECUTION_ENV
      ? '/opt/nodejs/node_modules/@sparticuz/chromium/bin'
      : undefined;

    chromium.setHeadlessMode = true;
    chromium.setGraphicsMode = true;

    await chromium.font(
      'http://themes.googleusercontent.com/static/fonts/opensans/v6/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf',
    );

    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(CHROMIUM_EXECUTABLE_PATH),
      headless: 'new', // chromium.headless,
      ignoreHTTPSErrors: true,
    });
  }

  createReadableStream(buffer: Buffer) {
    const stream: Readable = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
  }
}
