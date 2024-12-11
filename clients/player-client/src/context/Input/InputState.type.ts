import { DateTime } from 'luxon';

export type InputState = {
  x?: number;
  y?: number;
  cursorX?: number;
  cursorY?: number;
  key?: string;
  timestamp?: DateTime;
  debug?: boolean;
};
