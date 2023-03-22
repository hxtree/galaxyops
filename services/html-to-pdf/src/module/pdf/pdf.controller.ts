import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService, PDFRenderOptions } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('render-url')
  async postRenderFromUrl(
    @Res() res: Response,
    @Body('url') url: string,
    @Body('filename') filename?: string,
    @Body('json') json?: boolean,
  ) {
    const options = {
      page: 1,
      headerTemplate: '<p></p>',
      footerTemplate: '<p></p>',
      displayHeaderFooter: false,
      margin: {
        top: '50px',
        bottom: '50px',
      },
      printBackground: true,
      path: 'invoice.pdf',
    };

    const buffer = await this.pdfService.renderUrl(url);
    this.responseAsPdf(json || true, buffer, res, filename || '');
  }

  @Post('render-html')
  async postRenderFromHtml(
    @Res() res: Response,
    @Body('html') html: string,
    @Body('filename') filename?: string,
    @Body('json') json?: boolean,
  ) {
    const buffer = await this.pdfService.renderHtml(html);
    this.responseAsPdf(json || true, buffer, res, filename || '');
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
      res.setHeader('Content-Disposition', 'attachment; filename=result.pdf');
      if (filename) {
        res.setHeader(
          'Content-Disposition',
          `attachment; filename=${filename}`,
        );
      }
      stream.pipe(res);
    } else {
      res.setHeader('Content-Type', 'application/json;charset=UTF-8');
      res.status(200).send({
        content: buffer.toString('base64'),
        filename: filename || 'result.pdf',
        mimeType: 'application/pdf',
      });
    }
  }
}
