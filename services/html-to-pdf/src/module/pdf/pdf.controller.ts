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
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { v4 } from 'uuid';
import { PdfService } from './pdf.service';
import { OperationDto, OperationInput, OperationOutput } from './operation.dto';

@Controller({ path: 'pdf', version: ['1', VERSION_NEUTRAL] })
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('test')
  async saveUrlToPdfInS3(): Promise<any> {
    const id = v4();
    const key = `uploads/${id}.pdf`;
    const buffer = await this.pdfService.urlToPdf('http://example.com');
    await this.pdfService.objectPut(key, buffer);
    return Promise.resolve({
      msg: 'Success',
      url: `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${key}`,
      bucket: process.env.AWS_BUCKET,
      key: `${key}`,
    });
  }

  @Get()
  async url(
    @Res({ passthrough: true }) res: Response,
      @Query('url') url?: string,
  ): Promise<any> {
    try {
      const filename = `${v4()}.pdf`;
      const buffer = await this.pdfService.urlToPdf(
        url ?? 'http://example.com',
      );
      res.setHeader('Content-Length', Buffer.byteLength(buffer, 'utf-8'));
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      return new StreamableFile(this.pdfService.createReadableStream(buffer));
    } catch (err) {
      const error = err as Error;
      throw new NotFoundException(error.message, { cause: error });
    }
  }

  @Post()
  async operation(
    @Res({ passthrough: true }) res: Response,
      @Body() body: OperationDto,
  ): Promise<any> {
    let buffer;
    const id = v4();
    const filename = body.filename ?? `${id}.pdf`;
    const key = `uploads/${id}.pdf`;

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
          res.setHeader('Content-Length', Buffer.byteLength(buffer, 'utf-8'));
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader(
            'Content-Disposition',
            `attachment; filename=${filename}`,
          );
          return new StreamableFile(
            this.pdfService.createReadableStream(buffer),
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

          res.setHeader('Content-Length', Buffer.byteLength(buffer, 'utf-8'));
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader(
            'Content-Disposition',
            `attachment; filename=${filename}`,
          );
          return new StreamableFile(
            this.pdfService.createReadableStream(buffer),
          );
        case body.input === OperationInput.URL
          && body.output === OperationOutput.S3:
          buffer = await this.pdfService.urlToPdf(body.url ?? '');
          await this.pdfService.objectPut(key, buffer);
          return await Promise.resolve({
            msg: 'Success',
            url: `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${key}`,
            bucket: process.env.AWS_BUCKET,
            key: `${key}`,
          });
        default:
          return new BadRequestException('Invalid request');
      }
    } catch (err) {
      const error = err as Error;
      return new BadRequestException(`Failed to render pdf: ${error.message}`);
    }
  }
}
