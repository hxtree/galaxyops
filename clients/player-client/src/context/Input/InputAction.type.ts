import { InputActionType } from './InputActionType.type';

export type InputAction =
  | { type: InputActionType.SET_TOUCH_GRID; payload: { x: number; y: number } }
  | {
      type: InputActionType.SET_KEYSTROKE;
      payload: { key: string; timestamp: string };
    };
