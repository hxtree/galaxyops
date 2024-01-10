import { Module } from '@nestjs/common';
import { HealthModule } from './module/health/health.module';
import { PdfModule } from './module/pdf/pdf.module';
import { MetaTagsModule } from './module/meta-tags/meta-tags.module';

@Module({
  imports: [HealthModule, PdfModule, MetaTagsModule],
  providers: [],
  exports: [],
})
export class AppModule {}
