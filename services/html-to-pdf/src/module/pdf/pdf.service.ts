/* eslint @typescript-eslint/no-var-requires: "off" */
import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';

@Injectable()
export class PdfService {
  async htmlToPdf(html: string): Promise<any> {
    const browser = await this.getBrowser();
    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: ['networkidle0', 'domcontentloaded'],
    });

    const buffer = await page.pdf({ format: 'a4', printBackground: true });

    await browser.close();
    return buffer;
  }

  async urlToPdf(url: string) {
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
  }

  async htmlToData(html: string) {
    const browser = await this.getBrowser();
    const page = await browser.newPage();
    await page.setContent(html, {
      waitUntil: ['networkidle0', 'domcontentloaded'],
    });
    const data = {
      title: (await page.title()) ?? 'undefined',
    };

    await browser.close();
    return data;
  }

  async urlToData(url: string) {
    const browser = await this.getBrowser();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: ['networkidle2', 'domcontentloaded'] });
    const data = {
      title: (await page.title()) ?? 'undefined',
    };

    await browser.close();
    return data;
  }

  private async getBrowser() {
    const CHROMIUM_EXECUTABLE_PATH = process.env.AWS_EXECUTION_ENV
      ? '/opt/nodejs/node_modules/@sparticuz/chromium/bin'
      : undefined;

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
