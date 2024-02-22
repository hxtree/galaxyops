import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Put,
  Patch,
  Param,
  Req,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { RouterService } from './router.service';
import { RouteUrlsDto } from './route-url.dto';

@Controller({ path: '', version: ['1', VERSION_NEUTRAL] })
export class RouterController {
  constructor(private readonly routerService: RouterService) {}

  @Get('')
  getRoutes(): RouteUrlsDto {
    return this.routerService.getRoutes();
  }

  @Get('debug')
  getConfig(): { [key: string]: { path: string; endpoint: string } } {
    return this.routerService.getConfig();
  }

  @Get('*')
  async getRoute(@Req() req: any): Promise<any> {
    const { path, query } = req;
    const queryParams = new URLSearchParams(query).toString();
    const fullPath = queryParams ? `${path}?${queryParams}` : path;
    return this.routerService.routeRequest(fullPath, null, 'GET');
  }

  @Post('*')
  async postRoute(@Body() body: any, @Req() req: any): Promise<any> {
    const { path } = req;
    return this.routerService.routeRequest(path, body, 'POST');
  }

  @Put('*')
  async putRoute(@Body() body: any, @Req() req: any): Promise<any> {
    const { path } = req;
    return this.routerService.routeRequest(path, body, 'PUT');
  }

  @Delete('*')
  async deleteRoute(@Body() body: any, @Req() req: any): Promise<any> {
    const { path } = req;
    return this.routerService.routeRequest(path, body, 'DELETE');
  }

  @Patch('*')
  async patchRoute(@Body() body: any, @Req() req: any): Promise<any> {
    const { path } = req;
    return this.routerService.routeRequest(path, body, 'PATCH');
  }
}
