import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  VERSION_NEUTRAL,
  Query,
  BadRequestException,
  StreamableFile,
} from '@nestjs/common';
import { Response } from 'express';
import { v4 } from 'uuid';
import { PdfService } from './pdf.service';
import { OperationDto, OperationInput, OperationOutput } from './operation.dto';

@Controller({ path: 'pdf', version: ['1', VERSION_NEUTRAL] })
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  async url(
  @Res({ passthrough: true }) res: Response,
    @Query('url') url?: string,
  ) {
    const buffer = await this.pdfService.urlToPdf(url ?? 'http://example.com');
    return this.responseAsPdf(buffer, res, `${v4()}.pdf`);
  }

  @Post()
  async operation(
    @Res({ passthrough: true }) res: Response,
      @Body() body: OperationDto,
  ): Promise<any> {
    let buffer;

    try {
      switch (true) {
        case body.input === OperationInput.HTML
          && body.output === OperationOutput.DATA:
          return await this.pdfService.htmlToData(body.content ?? '');
        case body.input === OperationInput.HTML
          && body.output === OperationOutput.JSON:
          buffer = await this.pdfService.htmlToPdf(body.content ?? '');
          return {
            content: buffer.toString('base64'),
            filename: body.filename ?? `${v4()}.pdf`,
            mimeType: 'application/pdf',
          };
        case body.input === OperationInput.HTML
          && body.output === OperationOutput.PDF:
          buffer = await this.pdfService.htmlToPdf(body.content ?? '');
          return this.responseAsPdf(
            buffer,
            res,
            body.filename ?? `${v4()}.pdf`,
          );
        case body.input === OperationInput.URL
          && body.output === OperationOutput.DATA:
          return await this.pdfService.urlToData(body.url ?? '');
        case body.input === OperationInput.URL
          && body.output === OperationOutput.JSON:
          buffer = await this.pdfService.urlToPdf(body.url ?? '');
          return {
            content: buffer.toString('base64'),
            filename: body.filename ?? `${v4()}.pdf`,
            mimeType: 'application/pdf',
          };
        case body.input === OperationInput.URL
          && body.output === OperationOutput.PDF:
          buffer = await this.pdfService.urlToPdf(body.url ?? '');
          return this.responseAsPdf(
            buffer,
            res,
            body.filename ?? `${v4()}.pdf`,
          );
        default:
          return new BadRequestException('Invalid request');
      }
    } catch (err) {
      const error = err as Error;
      return new BadRequestException(`Failed to render pdf: ${error.message}`);
    }
  }

  private responseAsPdf(buffer: Buffer, res: Response, filename: string) {
    const stream = this.pdfService.createReadableStream(buffer);
    res.setHeader('Content-Length', Buffer.byteLength(buffer, 'utf-8'));
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    return new StreamableFile(stream);
  }
}
