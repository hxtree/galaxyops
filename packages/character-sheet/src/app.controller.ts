import {Controller, Get, Param} from '@nestjs/common';
import {ArchetypeService} from './archetype.service';

@Controller('archetype')
export class AppController {
  _archetypeService;

  // DI not working, probably due to esbuild
  constructor() {
    this._archetypeService = new ArchetypeService();
  }

  @Get('id/:id')
  async findOne(@Param() params: any): Promise<any> {
    return await this._archetypeService.getByID(params.id);
  }

  @Get('list')
  async list(@Param() params: any): Promise<any> {
    return await this._archetypeService.findAll(params);
  }

  @Get('health')
  getPing(): string {
    return 'pong';
  }
}
