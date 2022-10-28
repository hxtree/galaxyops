import {Controller, Get, Param} from '@nestjs/common';
import {SkillService} from './skill.service';
import {QuerySkillDto} from './query-skill.dto';

@Controller('skill')
export class SkillController {
  _skillService;

  // DI not working, probably due to esbuild
  constructor() {
    this._skillService = new SkillService();
  }

  @Get('id/:id')
  async find(@Param() QuerySkillDto: QuerySkillDto): Promise<any> {
    return await this._skillService.find(QuerySkillDto.id);
  }

  @Get('list')
  async list(): Promise<any> {
    return await this._skillService.list();
  }
}
