import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './module/message/message.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MessageModule],
  providers: [],
  exports: [],
})
export class AppModule {}
