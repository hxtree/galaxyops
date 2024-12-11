import { DateTime } from 'luxon';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';

export type InputState = {
  x?: number;
  y?: number;
  cursorX?: number;
  cursorY?: number;
  key?: InputEventRecordKey;
  timestamp?: DateTime;
  debug?: boolean;
};
