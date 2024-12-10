import { InputAction } from './InputAction.type';
import { InputActionType } from './InputActionType.type';
import { InputState } from './InputState.type';

export const InputReducer = (
  state: InputState,
  action: InputAction,
): InputState => {
  switch (action.type) {
    case InputActionType.SET_TOUCH_GRID:
      return { ...state, x: action.payload.x, y: action.payload.y };
    case InputActionType.SET_KEYSTROKE:
      return {
        ...state,
        key: action.payload.key,
        timestamp: action.payload.timestamp,
      };
    default:
      return state;
  }
};
