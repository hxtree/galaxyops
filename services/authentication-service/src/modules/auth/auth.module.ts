// src/app.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CognitoService } from './cognito.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY',
      signOptions: { expiresIn: '1h' }, // Adjust token expiration as needed
    }),
  ],
  controllers: [AuthController],
  providers: [CognitoService, AuthService],
})
export class AppModule {}
