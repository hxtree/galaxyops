import {
  Controller,
  Get,
  NotFoundException,
  Query,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { AchievementRepository } from '../../models/achievement.repository';
import { QueryDto } from './query.dto';

@Controller({ path: 'achievements', version: ['1', VERSION_NEUTRAL] })
export class AchievementController {
  constructor(private readonly _achievementRepository: AchievementRepository) {}

  @Get()
  async findByFilter(@Query() filterParams: QueryDto): Promise<any[]> {
    const result = await this._achievementRepository.find(filterParams);

    return result;
  }

  @Get()
  async findAll(): Promise<any> {
    const result = await this._achievementRepository.findAll();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
}
