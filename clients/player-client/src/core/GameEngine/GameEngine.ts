import React, { useEffect, useRef, useState } from 'react';
import { useInputContext } from '../../context/Input/useInputContext';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';
import { GameState } from '../../dtos/GameState.dto';
import { InputEventRecord } from '../../dtos/Player/InputEventRecord.dto';
import { DateTime, Duration } from 'luxon';
import { InputActionType } from '../../context/Input/InputActionType.type';
import { ActorOrientation } from '../../dtos/Actor/ActorDirection.type';
import { Coordinate3d } from '../../dtos/Coordinate3d.dto';

export type GameEngineProps = {
  data: GameState;
  updateData: (newData: any) => void;
};

export const GameEngine: React.FC<GameEngineProps> = props => {
  const { data, updateData } = props;
  const inputContext = useInputContext();
  const inputContextRef = useRef(inputContext);
  const [lastProcessedInput, setLastProcessedInput] =
    useState<InputEventRecord>({
      key: InputEventRecordKey.DEBUG,
      timestamp: DateTime.now(),
    });

  useEffect(() => {
    inputContextRef.current = inputContext;
  }, [inputContext]);

  const isTraversable = (data: GameState, targetPosition: Coordinate3d) => {
    const targetSurfaceGrid =
      data.grid?.[targetPosition.z]?.[targetPosition.y]?.[targetPosition.x] ??
      null;
    const targetAreaGrid =
      data.grid?.[targetPosition.z + 1]?.[targetPosition.y]?.[
        targetPosition.x
      ] ?? null;

    if (!targetSurfaceGrid || !targetSurfaceGrid.spriteId) {
      return false;
    }

    if (!targetSurfaceGrid.collisionId && !targetAreaGrid?.collisionId) {
      return true;
    }

    let isTraversable = true;
    data.collisions?.forEach(collision => {
      if (
        collision.isWalkable === false &&
        collision.id === targetSurfaceGrid.collisionId
      ) {
        isTraversable = false;
      }

      if (
        collision.defaultCollision === true &&
        collision.id === targetAreaGrid.collisionId
      ) {
        isTraversable = false;
      }
    });

    // TODO add direction support for stairs, etc.
    return isTraversable;
  };

  useEffect(() => {
    if (
      !inputContext.state.key ||
      !inputContext.state.timestamp ||
      (lastProcessedInput.key === inputContext.state.key &&
        lastProcessedInput.timestamp === inputContext.state.timestamp)
    ) {
      return;
    }

    // TODO automate this
    const actorIndex = 0;

    data.actors[actorIndex].animation.startTimestamp = DateTime.now();
    data.actors[actorIndex].movement.isInMotion = true;
    data.actors[actorIndex].movement.currentPosition =
      data.actors[actorIndex].movement.targetPosition;
    data.actors[actorIndex].movement.startTimestamp = DateTime.now();
    data.actors[actorIndex].movement.movementDuration = Duration.fromObject({
      seconds: 10,
    });

    switch (inputContext.state.key) {
      case InputEventRecordKey.LEFT:
        data.actors[actorIndex].animation.orientation =
          ActorOrientation.NORTHWEST;
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].movement.targetPosition.z,
            y: data.actors[actorIndex].movement.targetPosition.y,
            x: data.actors[actorIndex].movement.targetPosition.x - 1,
          })
        ) {
          data.actors[actorIndex].movement.targetPosition.x--;
        }
        break;
      case InputEventRecordKey.RIGHT:
        data.actors[actorIndex].animation.orientation =
          ActorOrientation.SOUTHEAST;
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].movement.targetPosition.z,
            y: data.actors[actorIndex].movement.targetPosition.y,
            x: data.actors[actorIndex].movement.targetPosition.x + 1,
          })
        ) {
          data.actors[actorIndex].movement.targetPosition.x++;
        }
        break;
      case InputEventRecordKey.UP:
        data.actors[actorIndex].animation.orientation =
          ActorOrientation.NORTHEAST;
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].movement.targetPosition.z,
            y: data.actors[actorIndex].movement.targetPosition.y - 1,
            x: data.actors[actorIndex].movement.targetPosition.x,
          })
        ) {
          data.actors[actorIndex].movement.targetPosition.y--;
        }
        break;
      case InputEventRecordKey.DOWN:
        data.actors[actorIndex].animation.orientation =
          ActorOrientation.SOUTHWEST;
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].movement.targetPosition.z,
            y: data.actors[actorIndex].movement.targetPosition.y + 1,
            x: data.actors[actorIndex].movement.targetPosition.x,
          })
        ) {
          data.actors[actorIndex].movement.targetPosition.y++;
        }
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
