import { createContext } from 'react';
import { AppState } from './AppState.type';
import { AppAction } from './AppAction.type';

export const AppContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<AppAction>;
    }
  | undefined
>(undefined);
