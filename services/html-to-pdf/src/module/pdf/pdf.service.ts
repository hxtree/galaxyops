/* eslint @typescript-eslint/no-var-requires: "off" */
import { Injectable } from '@nestjs/common';
import { S3Service } from '@galaxyops/nestjs-modules';
import { Readable } from 'stream';
import puppeteer, { PDFOptions } from 'puppeteer-core';

// TOGGLE for local development
// import chromium from '@sparticuz/chromium';
import chromium from '@sparticuz/chromium-min';

@Injectable()
export class PdfService {
  public uploadBucket: string;

  public pageSettings: PDFOptions = {
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: { top: '0px' },
    scale: 0.973,
  };

  constructor(public s3Service: S3Service) {
    this.uploadBucket = process.env.AWS_BUCKET ?? '';
    console.log(this.uploadBucket);
  }

  async objectPut(key: string, fileContent: string | Buffer) {
    const result = await this.s3Service.putObject(
      this.uploadBucket,
      key,
      fileContent,
    );
    return result;
  }

  async htmlToPdf(html: string): Promise<any> {
    const browser = await this.getBrowser();
    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: ['networkidle0', 'domcontentloaded'],
    });

    const buffer = await page.pdf(this.pageSettings);

    await browser.close();
    return buffer;
  }

  async urlToPdf(url: string) {
    const browser = await this.getBrowser();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: ['networkidle2', 'domcontentloaded'] });

    const buffer = await page.pdf(this.pageSettings);

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
    let CHROMIUM_EXECUTABLE_PATH: string | undefined;

    if (process.env.AWS_EXECUTION_ENV) {
      CHROMIUM_EXECUTABLE_PATH = '/opt/nodejs/node_modules/@sparticuz/chromium/bin';
    }

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
