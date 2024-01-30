import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { HealthModule } from './module/health/health.module';
import { PdfModule } from './module/pdf/pdf.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HealthModule, PdfModule],
  providers: [ConfigService],
  exports: [],
})
export class AppModule {}
