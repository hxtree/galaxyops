import { InputActionType } from './InputActionType.type';
import { DateTime } from 'luxon';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';

export type InputAction =
  | { type: InputActionType.SET_DEBUG; payload: { debug: boolean } }
  | { type: InputActionType.SET_TOUCH_GRID; payload: { x: number; y: number } }
  | {
      type: InputActionType.SET_KEYSTROKE;
      payload: { key: InputEventRecordKey; timestamp: DateTime };
    }
  | {
      type: InputActionType.SET_MOUSE_MOVE;
      payload: { cursorX: number; cursorY: number };
    };
