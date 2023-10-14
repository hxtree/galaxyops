import {
  Controller, Post, Body, Res, Get,
} from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';
import { CreateHtmlToPdfDto } from './create-html-to-pdf.dto';
import { CreateUrlToPdfDto } from './create-url-to-pdf.dto';

@Controller({ path: 'pdf', version: ['1'] })
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('test')
  async test(@Res() res: Response) {
    const buffer = await this.pdfService.renderUrl('http://example.com');
    this.responseAsPdf(false, buffer, res, 'file.pdf');
  }

  @Post('render-url')
  async renderUrl(@Res() res: Response, @Body() body: CreateUrlToPdfDto) {
    const buffer = await this.pdfService.renderUrl(body.url);
    this.responseAsPdf(false, buffer, res, body.filename);
  }

  @Post('data-url')
  async fetchPageData(@Body() body: CreateUrlToPdfDto) {
    return this.pdfService.fetchPageData(body.url);
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
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      stream.pipe(res);
    } else {
      res.setHeader('Content-Type', 'application/json;charset=UTF-8');
      res.status(200).send({
        content: buffer.toString('base64'),
        filename,
        mimeType: 'application/pdf',
      });
    }
  }
}
