import React, { useEffect, useState } from 'react';
import { useInputContext } from '../../context/Input/useInputContext';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';
import { GameState } from '../../dtos/GameState.dto';
import { InputEventRecord } from '../../dtos/Player/InputEventRecord.dto';
import { DateTime } from 'luxon';
import { InputActionType } from '../../context/Input/InputActionType.type';

export type GameEngineProps = {
  data: GameState;
  updateData: (newData: any) => void;
};

export const GameEngine: React.FC<GameEngineProps> = props => {
  const { data, updateData } = props;
  const inputContext = useInputContext();
  const [lastProcessedInput, setLastProcessedInput] =
    useState<InputEventRecord>({
      key: InputEventRecordKey.DEBUG,
      timestamp: DateTime.now(),
    });

  useEffect(() => {
    if (
      !inputContext.state.key ||
      !inputContext.state.timestamp ||
      (lastProcessedInput.key === inputContext.state.key &&
        lastProcessedInput.timestamp === inputContext.state.timestamp)
    ) {
      return;
    }

    switch (inputContext.state.key) {
      case InputEventRecordKey.LEFT:
        data.actors[0].movement.targetPosition.x--;
        break;
      case InputEventRecordKey.RIGHT:
        data.actors[0].movement.targetPosition.x++;
        break;
      case InputEventRecordKey.UP:
        data.actors[0].movement.targetPosition.y--;
        break;
      case InputEventRecordKey.DOWN:
        data.actors[0].movement.targetPosition.y++;
        break;
      case InputEventRecordKey.DEBUG:
        inputContext.dispatch({
          type: InputActionType.SET_DEBUG,
          payload: { debug: inputContext.state.debug ? false : true },
        });
        break;
    }
    setLastProcessedInput({
      key: inputContext.state.key,
      timestamp: inputContext.state.timestamp,
    });

    updateData(data);
  }, [inputContext.state, lastProcessedInput, data, updateData]);

  return null;
};
