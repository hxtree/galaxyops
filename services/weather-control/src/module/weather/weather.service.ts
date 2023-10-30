/* eslint @typescript-eslint/no-var-requires: "off" */
import { Injectable } from '@nestjs/common';
import { ClimateType } from './climates.type';

@Injectable()
export class WeatherService {
  async get(longitude: number, latitude: number): Promise<any> {
    const climate = this.getClimate(latitude);
    return {
      climate,
    };
  }

  // ranges from 90, -90 angle (180 degrees mirrored on both sides of world)
  // pattern is generally polar climate, temperate and continental, dry climates, tropical climate
  getClimate(latitude: number) {
    switch (true) {
      case latitude > 60:
        return ClimateType.POLAR;
      case latitude > 40:
        return ClimateType.CONTINENTAL;
      case latitude > 25:
        return ClimateType.TEMPERATE;
      case latitude > 20:
        return ClimateType.DRY;
      case latitude > -15:
        return ClimateType.TROPICAL;
      case latitude > -20:
        return ClimateType.DRY;
      case latitude > -25:
        return ClimateType.TEMPERATE;
      case latitude > -40:
        return ClimateType.CONTINENTAL;
      case latitude < -60:
      default:
        return ClimateType.POLAR;
    }
  }
}
