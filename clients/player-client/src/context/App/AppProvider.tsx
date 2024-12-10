import React, { useReducer } from 'react';
import { AppContext } from './AppContext';
import { AppReducer } from './AppReducer';

export const AppProvider: React.FC<{ children: React.ReactNode }> = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(AppReducer, { user: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
