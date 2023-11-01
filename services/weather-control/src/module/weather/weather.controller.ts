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

@Controller({ path: 'weather', version: ['1', VERSION_NEUTRAL] })
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  async fetch(
  @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ) {
    return this.weatherService.get(latitude, longitude);
  }
}
