import { Injectable } from '@nestjs/common';
import { launch } from 'puppeteer';
import chromium from 'chrome-aws-lambda';
import { Readable } from 'stream';

@Injectable()
export class PdfService {
  createReadableStream(buffer: Buffer) {
    const stream: Readable = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
  }

  async renderHtml(html: string): Promise<any> {
    const browser = await launch({
      headless: true,
      userDataDir: '/dev/null',
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
    });
    const page = await browser.newPage();
    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
    });
    const buffer = await page.pdf({
      format: 'A4',
    });
    await page.setContent(html);
    return buffer;
  }

  async renderUrl(url: string) {
    const browser = await launch({
      headless: true,
      userDataDir: '/dev/null',
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
    });
    const page = await browser.newPage();
    await page.goto(url);
    const buffer = await page.pdf({
      format: 'A4',
    });
    await browser.close();
    return buffer;
  }
}
