import { Controller, Get, Param } from '@nestjs/common';
import { SkillService } from './skill.service';
import { QuerySkillDto } from './query-skill.dto';

@Controller({ path: 'skills', version: ['1'] })
export class SkillController {
  _skillService;

  // DI not working, probably due to esbuild
  constructor() {
    this._skillService = new SkillService();
  }

  @Get('/')
  async list(): Promise<any> {
    return this._skillService.list();
  }

  @Get('/:id')
  async find(@Param() param: QuerySkillDto): Promise<any> {
    return this._skillService.find(param.id);
  }
}
