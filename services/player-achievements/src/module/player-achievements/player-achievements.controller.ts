import {
  Controller,
  Post,
  Get,
  NotFoundException,
  Query,
  Body,
  VERSION_NEUTRAL,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { IsUuidV4Validator } from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { ObjectId } from 'mongoose';
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
    const playerAchievement = new PlayerAchievement();

    const achievement = await this._achievementRepository.findOneOrFail({
      id: body.achievementId,
    });

    if (IsUuidV4Validator(body.id)) {
      playerAchievement._id = body.id;
    } else {
      playerAchievement._id = v4();
    }
    playerAchievement.playerId = body.playerId;
    playerAchievement.achievementId = achievement!._id;
    playerAchievement.updatedAt = new Date().toISOString();
    playerAchievement.createdAt = new Date().toISOString();

    // TODO publish event

    return this._playerAchievementRepository.create(playerAchievement);
  }

  @Delete()
  async delete(@Body() body: DeleteDto) {
    return this._playerAchievementRepository.delete({
      id: body.id,
    });

    // TODO publish event
  }
}
