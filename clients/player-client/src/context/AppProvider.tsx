import React, { useReducer } from 'react';
import { Action } from './Action.type';
import { Actions } from './Actions.type';
import { AppState } from './AppState.type';
import { AppContext } from './AppContext';

// TODO add footnotes
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

export const AppProvider: React.FC<{ children: React.ReactNode }> = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, { user: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
