import React, { useEffect } from 'react';
import { useInputContext } from '../../context/Input/useInputContext';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';
import { GameState } from '../../dtos/GameState.dto';

export type GameEngineProps = {
  data: GameState;
  updateData: (newData: any) => void;
};

export const GameEngine: React.FC<GameEngineProps> = props => {
  const { data, updateData } = props;
  const inputContext = useInputContext();

  useEffect(() => {
    if (inputContext.state.key === InputEventRecordKey.LEFT) {
      data.actors[0].movement.targetPosition.x--;
    }
    if (inputContext.state.key === InputEventRecordKey.RIGHT) {
      data.actors[0].movement.targetPosition.x++;
    }
    if (inputContext.state.key === InputEventRecordKey.UP) {
      data.actors[0].movement.targetPosition.y--;
    }
    if (inputContext.state.key === InputEventRecordKey.DOWN) {
      data.actors[0].movement.targetPosition.y++;
    }

    updateData(data);
  }, [updateData, inputContext.state.key]);

  return null;
};
