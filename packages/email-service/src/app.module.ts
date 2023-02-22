import { Module } from '@nestjs/common';
import { MonitoringModule } from './module/monitoring/monitoring.module';
import { TemplateModule } from './module/template/template.module';

@Module({
  imports: [TemplateModule, MonitoringModule],
  providers: [],
  exports: [],
})
export class AppModule {}
