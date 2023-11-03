import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  VERSION_NEUTRAL,
  Query,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { QueryDto } from './query.dto';

@Controller({ path: 'weather', version: ['1', VERSION_NEUTRAL] })
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  async fetch(@Body() body: QueryDto) {
    return this.weatherService.get(
      new Date(body.date),
      body.latitude,
      body.longitude,
    );
  }
}
