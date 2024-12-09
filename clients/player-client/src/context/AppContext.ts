import { createContext } from 'react';
import { AppState } from './AppState.type';
import { Action } from './Action.type';

export const AppContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);
