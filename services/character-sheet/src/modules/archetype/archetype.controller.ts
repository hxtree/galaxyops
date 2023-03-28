import { Controller, Get, Param } from '@nestjs/common';
import { ArchetypeService } from './archetype.service';
import { QueryArchetypeDto } from './query-archetype.dto';

@Controller('/archetypes')
export class ArchetypeController {
  _archetypeService;

  // DI not working, probably due to esbuild
  constructor() {
    this._archetypeService = new ArchetypeService();
  }

  @Get('/:id')
  async find(@Param() param: QueryArchetypeDto): Promise<any> {
    return this._archetypeService.find(param.id);
  }

  @Get('/')
  async list(): Promise<any> {
    return this._archetypeService.findAll();
  }
}
