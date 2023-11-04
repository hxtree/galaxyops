import { IsEnum } from '@cats-cradle/validation-schemas';
import { HappinessType } from './happiness.type';
import { TimeOfDayType } from './time-of-day.type';
import { ClimateType } from './climates.type';

export class ResponseDto {
  @IsEnum(HappinessType)
    timeOfDay: TimeOfDayType;

  @IsEnum(ClimateType)
    climate: ClimateType;
}
