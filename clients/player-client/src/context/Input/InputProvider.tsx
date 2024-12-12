import React, { useReducer } from 'react';
import { InputContext } from './InputContext';
import { InputReducer } from './InputReducer';
import { InputState } from './InputState.type';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';

const initialState: InputState = {
  x: undefined,
  y: undefined,
  key: InputEventRecordKey.NONE,
};

export const InputProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<typeof InputReducer, InputState>(
    InputReducer,
    initialState,
    arg => arg,
  );

  return (
    <InputContext.Provider value={{ state, dispatch }}>
      {children}
    </InputContext.Provider>
  );
};
