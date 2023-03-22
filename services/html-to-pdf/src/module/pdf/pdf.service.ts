import { Injectable, Logger } from '@nestjs/common';
import { Readable } from 'stream';
// import puppeteer from 'puppeteer-core';
import puppeteer, { Puppeteer } from 'puppeteer';

export interface PDFRenderOptions {
  page: any; // Partial<puppeteer.PDFOptions>;
  screen?: boolean;
}

@Injectable()
export class PdfService {
  private readonly logger: Logger = new Logger(PdfService.name);

  options: PDFRenderOptions = {
    page: 1,
  };

  async renderUrl(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const pdfContent = await page.pdf(this.options.page);
    await browser.close();
    return pdfContent;
  }

  async renderHtml(html: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
      timeout: 0,
    });
    const pdfContent = await page.pdf(this.options.page);
    await browser.close();

    return pdfContent;
  }

  createReadableStream(buffer: Buffer) {
    const stream: Readable = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
  }
}
