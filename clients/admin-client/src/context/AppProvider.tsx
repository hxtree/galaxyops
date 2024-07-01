import React, { createContext, useReducer, useContext } from 'react';

enum Actions {
  PAGE_LOADING = 'PAGE_LOADING',
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

interface AppState {
  user: string | null;
  isLoading?: boolean;
}

// TODO add footnotes

type Action =
  | { type: Actions.SET_USER; payload: string }
  | { type: Actions.LOGOUT }
  | { type: Actions.PAGE_LOADING; payload: boolean };

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case Actions.PAGE_LOADING:
      return { ...state, isLoading: action.payload };
    case Actions.SET_USER:
      return { ...state, user: action.payload };
    case Actions.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

const AppContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, { user: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
