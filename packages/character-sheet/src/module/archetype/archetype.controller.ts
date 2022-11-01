import {Controller, Get, Param} from '@nestjs/common';
import {ArchetypeService} from './archetype.service';
import {QueryArchetypeDto} from './query-archetype.dto';

@Controller('archetype')
export class ArchetypeController {
  _archetypeService;

  // DI not working, probably due to esbuild
  constructor() {
    this._archetypeService = new ArchetypeService();
  }

  @Get('id/:id')
  async find(@Param() QueryArchetypeDto: QueryArchetypeDto): Promise<any> {
    return await this._archetypeService.find(QueryArchetypeDto.id);
  }

  @Get('list')
  async list(): Promise<any> {
    return await this._archetypeService.findAll();
  }
}
