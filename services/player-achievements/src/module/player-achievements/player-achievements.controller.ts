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
import { IsUuidV4Validator } from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { CreateDto } from './create.dto';
import { PlayerAchievementsRepository } from '../../models/player-achievements.repository';
import { PlayerAchievements } from '../../models/player-achievements.schema';
import { DeleteDto } from './delete.dto';
import { QueryDto } from './query.dto';

@Controller({ path: 'player-achievements', version: ['1', VERSION_NEUTRAL] })
export class PlayerAchievementsController {
  constructor(
    private readonly _playerAchievementsRepository: PlayerAchievementsRepository,
  ) {}

  @Get()
  async findByFilter(@Query() filterParams: QueryDto): Promise<any[]> {
    const result = await this._playerAchievementsRepository.find({
      filterParams,
    });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Get()
  async findAll(): Promise<any> {
    const result = await this._playerAchievementsRepository.findAll();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Post()
  async create(@Body() body: CreateDto) {
    const playerAchievements = new PlayerAchievements();
    if (IsUuidV4Validator(body.id)) {
      playerAchievements._id = body.id;
    } else {
      playerAchievements._id = v4();
    }
    playerAchievements.playerId = body.playerId;
    playerAchievements.achievementId = body.achievementId;

    playerAchievements.createdAt = new Date().toISOString();

    // TODO publish event

    return this._playerAchievementsRepository.create(playerAchievements);
  }

  @Delete()
  async delete(@Body() body: DeleteDto) {
    return this._playerAchievementsRepository.delete({
      id: body.id,
    });

    // TODO publish event
  }
}
