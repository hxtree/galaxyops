import {Controller, Get, Param} from '@nestjs/common';
import {SkillService} from './skill.service';

@Controller('skill')
export class SkillController {
  _skillService;

  // DI not working, probably due to esbuild
  constructor() {
    this._skillService = new SkillService();
  }

  @Get('list')
  async list(): Promise<any> {
    return await this._skillService.list();
  }
}
