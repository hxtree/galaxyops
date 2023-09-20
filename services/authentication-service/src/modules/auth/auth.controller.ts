import {
  Controller, Post, Body, UseGuards, Req,
} from '@nestjs/common';
import { CognitoService } from './cognito.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly cognitoService: CognitoService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const authResult = await this.cognitoService.authenticate(
      username,
      password,
    );
    const token = await this.authService.generateToken(authResult);
    return { token };
  }

  @Post('forgot-password')
  async forgotPassword(@Body() body: { username: string }) {
    const { username } = body;
    await this.cognitoService.forgotPassword(username);
    return { message: 'Password reset instructions sent to your email.' };
  }

  @Post('reset-password')
  async resetPassword(
  @Body() body: { username: string; code: string; newPassword: string },
  ) {
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
  async signUp(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    await this.cognitoService.signUp(username, password);
    return {
      message:
        'Sign-up successful. Please check your email for verification instructions.',
    };
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
