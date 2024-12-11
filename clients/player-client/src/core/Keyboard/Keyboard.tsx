import React, { useEffect, useRef } from 'react';
import useHandleInput from './useHandleInput';
import { useInputContext } from '../../context/Input/useInputContext';
import { InputActionType } from '../../context/Input/InputActionType.type';

export type KeyboardProps = {
  config?: string;
};

export const Keyboard: React.FC<KeyboardProps> = () => {
  const input = useHandleInput();
  const inputContext = useInputContext();
  const inputContextRef = useRef(inputContext);

  useEffect(() => {
    inputContextRef.current = inputContext;
  }, [inputContext]);

  useEffect(() => {
    if (!input || input.length === 0) {
      return;
    }

    inputContextRef.current.dispatch({
      type: InputActionType.SET_KEYSTROKE,
      payload: { key: input[0]?.key, timestamp: input[0]?.timestamp },
    });

    if (input[0]?.key === 'debug') {
      inputContextRef.current.dispatch({
        type: InputActionType.SET_DEBUG,
        payload: { debug: !inputContextRef.current.state.debug },
      });
    }
  }, [input]);

  return (
    <div>
      {inputContext.state.key} {inputContext.state.timestamp?.toISO()}{' '}
      {inputContext.state.x} {inputContext.state.y}
      {input && <div>Input: {input?.map(i => i.key).join(', ')}</div>}
    </div>
  );
};
