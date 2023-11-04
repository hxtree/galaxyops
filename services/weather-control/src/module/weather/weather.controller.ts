import {
  Controller, Post, Body, VERSION_NEUTRAL,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { QueryDto } from './query.dto';
import { CreateDto } from './create.dto';
import { ResponseDto } from './response.dto';

@Controller({ path: 'weather', version: ['1', VERSION_NEUTRAL] })
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  async query(@Body() body: QueryDto): Promise<ResponseDto> {
    return this.weatherService.query(
      new Date(body.date),
      body.latitude,
      body.longitude,
    );
  }

  @Post('influence')
  async create(@Body() body: CreateDto) {
    return this.weatherService.create(body.mood, body.latitude, body.longitude);
  }
}
