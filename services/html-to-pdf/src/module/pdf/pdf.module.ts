import { Module } from '@nestjs/common';
import { S3ClientService, S3Service } from '@galaxyops/nestjs-modules';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';

@Module({
  imports: [],
  controllers: [PdfController],
  providers: [PdfService, S3Service, S3ClientService],
})
export class PdfModule {}
