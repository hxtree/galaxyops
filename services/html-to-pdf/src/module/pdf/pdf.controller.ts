import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { Response } from 'express';
import { v4 } from 'uuid';
import { PdfService } from './pdf.service';
import { CreateHtmlToPdfDto } from './create-html-to-pdf.dto';
import { CreateUrlToPdfDto } from './create-url-to-pdf.dto';

@Controller({ path: 'pdf', version: ['1', VERSION_NEUTRAL] })
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('example-data')
  async exampleData(@Res() res: Response) {
    const data = await this.pdfService.renderPageData(
      '<!doctype><html><head><title>Demo Page</title></head><body><h1>Demo</h1></body></html>',
    );

    res.status(200).send(data);
  }

  @Get('example-pdf')
  async test(@Res() res: Response) {
    const buffer = await this.pdfService.renderUrl('http://example.com');
    this.responseAsPdf(false, buffer, res, `${v4()}.pdf`);
  }

  @Post('render-url')
  async renderUrl(@Res() res: Response, @Body() body: CreateUrlToPdfDto) {
    const buffer = await this.pdfService.renderUrl(body.url);
    this.responseAsPdf(false, buffer, res, body.filename);
  }

  @Post('render-html-data')
  async renderHtmlData(@Res() res: Response, @Body() body: CreateHtmlToPdfDto) {
    return this.pdfService.renderPageData(body.html);
  }

  @Post('render-html')
  async renderHtml(@Res() res: Response, @Body() body: CreateHtmlToPdfDto) {
    const buffer = await this.pdfService.renderHtml(body.html);
    this.responseAsPdf(false, buffer, res, body.filename);
  }

  private responseAsPdf(
    json: boolean,
    buffer: Buffer,
    res: Response,
    filename: string,
  ) {
    if (!json) {
      const stream = this.pdfService.createReadableStream(buffer);

      res.setHeader('Content-Length', Buffer.byteLength(buffer, 'utf-8'));
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      stream.pipe(res);
    } else {
      /**
       * base64 can be responses can be checked using the following
       * https://base64.guru/converter/decode/pdf
       */
      res.setHeader('Content-Type', 'application/json;charset=UTF-8');
      res.status(200).send({
        content: buffer.toString('base64'),
        filename,
        mimeType: 'application/pdf',
      });
    }
  }
}
