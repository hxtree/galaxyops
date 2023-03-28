import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailMessageModule } from './modules/email-message/email-message.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    EmailMessageModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
