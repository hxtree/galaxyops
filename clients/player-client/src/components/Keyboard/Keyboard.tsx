import useHandleInput from './useHandleInput';
import { useInputContext } from '../../context/Input/useInputContext';
import { InputActionType } from '../../context/Input/InputActionType.type';
import { useEffect } from 'react';

export type KeyboardProps = {
  config?: string;
};

export const Keyboard: React.FC<KeyboardProps> = () => {
  const input = useHandleInput();
  const inputContext = useInputContext();

  useEffect(() => {
    if (input && input.length > 0) {
      inputContext.dispatch({
        type: InputActionType.SET_KEYSTROKE,
        payload: { key: input[0]?.key, timestamp: input[0]?.timestamp },
      });
    }
  }, [inputContext, input]);

  return (
    <div>
      {inputContext.state.key} {inputContext.state.timestamp?.toISO()}{' '}
      {inputContext.state.x} {inputContext.state.y}
      {input && <div>Input: {input?.map(i => i.key).join(', ')}</div>}
    </div>
  );
};
