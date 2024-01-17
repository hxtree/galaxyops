import { Module } from '@nestjs/common';
import { HealthModule } from './module/health/health.module';
import { PdfModule } from './module/pdf/pdf.module';

@Module({
  imports: [HealthModule, PdfModule],
  providers: [],
  exports: [],
})
export class AppModule {}
