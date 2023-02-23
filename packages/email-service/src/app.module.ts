import { Module } from '@nestjs/common';
import { EmailMessageModule } from './module/email-message/email-message.module';

@Module({
  imports: [EmailMessageModule],
  providers: [],
  exports: [],
})
export class AppModule {}
