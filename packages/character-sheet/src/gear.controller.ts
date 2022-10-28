import {Controller, Get, Param} from '@nestjs/common';
import {GearService} from './gear.service';
import {QueryGearDto} from './query-gear.dto';

@Controller('gear')
export class GearController {
  _gearService;

  // DI not working, probably due to esbuild
  constructor() {
    this._gearService = new GearService();
  }

  @Get('id/:id')
  async find(@Param() QueryGearDto: QueryGearDto): Promise<any> {
    return await this._gearService.find(QueryGearDto.id);
  }

  @Get('list')
  async list(): Promise<any> {
    return await this._gearService.list();
  }
}
