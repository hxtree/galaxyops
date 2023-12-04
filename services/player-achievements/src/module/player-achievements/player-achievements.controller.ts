import {
  Controller,
  Post,
  Get,
  NotFoundException,
  Query,
  Body,
  VERSION_NEUTRAL,
  Delete,
} from '@nestjs/common';
import { CreateDto } from './create.dto';
import { PlayerAchievementRepository } from '../../models/player-achievement.repository';
import { PlayerAchievement } from '../../models/player-achievement.schema';
import { DeleteDto } from './delete.dto';
import { QueryDto } from './query.dto';
import { AchievementRepository } from '../../models/achievement.repository';

@Controller({ path: 'player-achievements', version: ['1', VERSION_NEUTRAL] })
export class PlayerAchievementController {
  constructor(
    private readonly _playerAchievementRepository: PlayerAchievementRepository,
    private readonly _achievementRepository: AchievementRepository,
  ) {}

  @Get()
  async findByFilter(@Query() filterParams: QueryDto): Promise<any[]> {
    const result = await this._playerAchievementRepository.find(filterParams);

    return result;
  }

  @Get()
  async findAll(): Promise<any> {
    const result = await this._playerAchievementRepository.findAll();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Post()
  async create(@Body() body: CreateDto) {
    const achievement = await this._achievementRepository.findOneOrFail({
      id: body.achievementId,
    });

    const playerAchievement = await this._playerAchievementRepository.create(
      new PlayerAchievement({
        playerId: body.playerId,
        achievement: achievement!._id,
        progress: body.progress,
      }),
    );

    // TODO publish event

    return playerAchievement?.toJSON();
  }

  @Delete()
  async delete(@Body() body: DeleteDto) {
    return this._playerAchievementRepository.delete({
      id: body.id,
    });

    // TODO publish event
  }
}
