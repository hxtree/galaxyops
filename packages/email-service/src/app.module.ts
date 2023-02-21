import { Module } from '@nestjs/common';
import { TemplateModule } from './module/template/template.module';

@Module({
  imports: [TemplateModule],
  providers: [],
  exports: [],
})
export class AppModule {}
