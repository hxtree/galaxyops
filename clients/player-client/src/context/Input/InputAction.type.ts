import { InputActionType } from './InputActionType.type';
import { DateTime } from 'luxon';

export type InputAction =
  | { type: InputActionType.SET_TOUCH_GRID; payload: { x: number; y: number } }
  | {
      type: InputActionType.SET_KEYSTROKE;
      payload: { key: string; timestamp: DateTime };
    };
