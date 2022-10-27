import {Controller, Get, Param} from '@nestjs/common';
import {GearService} from './gear.service';

@Controller('gear')
export class GearController {
  _gearService;

  // DI not working, probably due to esbuild
  constructor() {
    this._gearService = new GearService();
  }

  @Get('list')
  async list(): Promise<any> {
    return await this._gearService.list();
  }
}
