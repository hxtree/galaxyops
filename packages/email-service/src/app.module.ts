import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailMessageModule } from './module/email-message/email-message.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), EmailMessageModule],
  providers: [],
  exports: [],
})
export class AppModule {}
