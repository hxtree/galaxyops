import { Controller, Get, Param } from '@nestjs/common';
import { GearService } from './gear.service';
import { QueryGearDto } from './query-gear.dto';

@Controller('/gears')
export class GearController {
  _gearService;

  // DI not working, probably due to esbuild
  constructor() {
    this._gearService = new GearService();
  }

  @Get('/')
  async list(): Promise<any> {
    return this._gearService.list();
  }

  @Get('/:id')
  async find(@Param() param: QueryGearDto): Promise<any> {
    return this._gearService.find(param.id);
  }
}
