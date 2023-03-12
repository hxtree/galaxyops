import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PublishModule } from './module/publish/publish.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PublishModule],
  providers: [],
  exports: [],
})
export class AppModule {}
