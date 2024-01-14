import {
  Controller, Body, Post, Get, VERSION_NEUTRAL,
} from '@nestjs/common';
import { RouterService } from './router.service';

@Controller({ path: 'router', version: ['1', VERSION_NEUTRAL] })
export class RouterController {
  private _rollService;

  // DI not working, probably due to esbuild
  constructor() {
    this._rollService = new RouterService();
  }

  @Post()
  routePost(@Body() param: any): Promise<any> {
    return Promise.resolve({
      message: 'not yet implemented',
    });
  }

  @Get()
  routeGet(): Promise<any> {
    return Promise.resolve({
      message: 'not yet implemented',
    });
  }
}
