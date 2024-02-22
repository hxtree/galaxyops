import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { UserService } from './user.service';

@Controller({ path: 'users', version: [VERSION_NEUTRAL, '1'] })
export class UserController {
  _userService;

  // DI not working, probably due to esbuild
  constructor() {
    this._userService = new UserService();
  }

  // @Get('/')
  // async find(): Promise<any> {
  // TODO find user
  // }

  // @Post('/')
  // async create(): Promise<any> {
  // TODO create user account
  // }

  // forgot-password
  // reset-password
  // login
  // logout
}
