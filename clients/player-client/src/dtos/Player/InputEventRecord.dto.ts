import { IsEnum } from 'class-validator';
import { DateTime } from 'luxon';
import { InputEventRecordKey } from './InputEventRecordKey.type';

export class InputEventRecord {
  @IsEnum(InputEventRecordKey)
  key: InputEventRecordKey;

  timestamp: DateTime;
}
