import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  VERSION_NEUTRAL,
  Res,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CognitoService } from './cognito.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './login.dto';
import { ForgotPasswordDto } from './forgot-password.dto';
import { ResetPasswordDto } from './reset-password.dto';
import { SignUpDto } from './sign-up.dto';
import { ConfirmSignUpDto } from './confirm-sign-up.dto';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'auth',
})
export class AuthController {
  constructor(
    private readonly cognitoService: CognitoService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    try {
      const authResult = await this.cognitoService.authenticate(
        email,
        password,
      );
      const token = await this.authService.generateToken(authResult);
      return { token };
    } catch (err) {
      const error = err as Error;
      throw new NotFoundException('User not found', {
        cause: error,
        description: error.message,
      });
    }
  }

  @Post('forgot-password')
  async forgotPassword(@Body() body: ForgotPasswordDto) {
    const { username } = body;
    await this.cognitoService.forgotPassword(username);
    return { message: 'Password reset instructions sent to your email.' };
  }

  @Post('reset-password')
  async resetPassword(@Body() body: ResetPasswordDto) {
    const { username, code, newPassword } = body;
    await this.cognitoService.resetPassword(username, code, newPassword);
    return { message: 'Password reset successful.' };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: any) {
    // TODO add DTO
    // You can implement your own logout logic here if needed.
    // For example, you can invalidate the JWT token.
    return { message: 'Logout successful.' };
  }

  @Post('sign-up')
  async signUp(@Body() body: SignUpDto) {
    try {
      const { email, password } = body;
      await this.cognitoService.signUp(email, password);
      return {
        message:
          'Sign-up successful. Please check your email for verification instructions.',
      };
    } catch (err) {
      const error = err as Error;
      throw new BadRequestException('Failed to sign up', {
        cause: error,
        description: error.message,
      });
    }
  }

  @Post('confirm-sign-up')
  async verifyCode(@Body() body: ConfirmSignUpDto) {
    try {
      const { email, code } = body;
      await this.cognitoService.confirmSignUp(email, code);
      return {
        message: 'Code verified. Sign-up complete.',
      };
    } catch (err) {
      const error = err as Error;
      throw new NotFoundException('Failed to confirm sign up', {
        cause: error,
        description: error.message,
      });
    }
  }

  @Post('delete')
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Req() req: any) {
    // TODO add DTO
    const userId = req.user.sub; // Assuming sub is the user ID in the JWT
    await this.cognitoService.deleteUser(userId);
    return { message: 'User deletion successful.' };
  }
}
