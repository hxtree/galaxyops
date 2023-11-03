/* eslint @typescript-eslint/no-var-requires: "off" */
import { Injectable } from '@nestjs/common';
import { ClimateType } from './climates.type';
import { TimeOfDayType } from './time-of-day.type';

@Injectable()
export class WeatherService {
  async get(
    date: Date,
    latitude: number | string,
    longitude: number | string,
  ): Promise<any> {
    return {
      timeOfDay: this.getTimeOfDay(date),
      climate: this.getClimate(latitude),
    };
  }

  // time of day effects are based on time
  getTimeOfDay(date?: Date): TimeOfDayType {
    if (date === undefined) {
      date = new Date();
    }
    const hour = date.getHours();

    switch (true) {
      case hour >= 0 && hour < 4:
        return TimeOfDayType.MIDNIGHT;
      case hour >= 4 && hour < 6:
        return TimeOfDayType.DAWN;
      case hour >= 6 && hour < 10:
        return TimeOfDayType.MORNING;
      case hour >= 10 && hour < 16:
        return TimeOfDayType.NOON;
      case hour >= 16 && hour < 20:
        return TimeOfDayType.EVENING;
      case hour >= 20 && hour < 21:
        return TimeOfDayType.DUSK;
      case hour >= 21 && hour < 24:
      default:
        return TimeOfDayType.MIDNIGHT;
    }
  }

  // ranges from 90, -90 angle (180 degrees mirrored on both sides of world)
  // pattern is generally polar climate, temperate and continental, dry climates, tropical climate
  getClimate(latitude: number | string): ClimateType {
    const value = Number(latitude);

    switch (true) {
      case value >= 60:
        return ClimateType.POLAR;
      case value >= 40:
        return ClimateType.CONTINENTAL;
      case value >= 25:
        return ClimateType.TEMPERATE;
      case value >= 20:
        return ClimateType.DRY;
      case value >= -15:
        return ClimateType.TROPICAL;
      case value >= -20:
        return ClimateType.DRY;
      case value >= -25:
        return ClimateType.TEMPERATE;
      case value >= -40:
        return ClimateType.CONTINENTAL;
      case value <= -60:
      default:
        return ClimateType.POLAR;
    }
  }
}
