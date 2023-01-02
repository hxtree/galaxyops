import { Controller, Get, Param } from '@nestjs/common';
import { GearService } from './gear.service';
import { QueryGearDto } from './query-gear.dto';

@Controller('gear')
export class GearController {
  _gearService;

  // DI not working, probably due to esbuild
  constructor() {
    this._gearService = new GearService();
  }

  @Get('id/:id')
  async find(@Param() param: QueryGearDto): Promise<any> {
    return this._gearService.find(param.id);
  }

  @Get('list')
  async list(): Promise<any> {
    return this._gearService.list();
  }
}
