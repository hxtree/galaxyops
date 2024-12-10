import { createContext } from 'react';
import { InputState } from './InputState.type';
import { InputAction } from './InputAction.type';

export const InputContext = createContext<
  | {
      state: InputState;
      dispatch: React.Dispatch<InputAction>;
    }
  | undefined
>(undefined);
