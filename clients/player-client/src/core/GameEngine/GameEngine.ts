import React, { useEffect, useRef, useState } from 'react';
import { useInputContext } from '../../context/Input/useInputContext';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';
import { GameState } from '../../dtos/GameState.dto';
import { InputEventRecord } from '../../dtos/Player/InputEventRecord.dto';
import { DateTime, Duration } from 'luxon';
import { InputActionType } from '../../context/Input/InputActionType.type';
import { ActorOrientation } from '../../dtos/Actor/ActorOrientation.type';
import { Coordinate3d } from '../../dtos/Coordinate3d.dto';
import { WalkAction } from '../../dtos/Actions/WalkAction';

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

    switch (inputContext.state.key) {
      case InputEventRecordKey.LEFT:
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].position.gridZ,
            y: data.actors[actorIndex].position.gridY,
            x: data.actors[actorIndex].position.gridX - 1,
          })
        ) {
          data.actors[actorIndex].addAction(
            new WalkAction({
              wait: Duration.fromObject({ seconds: 0 }),
              act: Duration.fromObject({ seconds: 0.5 }),
              recovery: Duration.fromObject({ seconds: 0 }),
              direction: ActorOrientation.NORTHWEST,
              frames: 10,
            }),
          );
        } else {
          data.actors[actorIndex].orientation = ActorOrientation.NORTHWEST;
        }
        break;
      case InputEventRecordKey.RIGHT:
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].position.gridZ,
            y: data.actors[actorIndex].position.gridY,
            x: data.actors[actorIndex].position.gridX + 1,
          })
        ) {
          data.actors[actorIndex].addAction(
            new WalkAction({
              wait: Duration.fromObject({ seconds: 0 }),
              act: Duration.fromObject({ seconds: 0.5 }),
              recovery: Duration.fromObject({ seconds: 0 }),
              direction: ActorOrientation.SOUTHEAST,
              frames: 10,
            }),
          );
        } else {
          data.actors[actorIndex].orientation = ActorOrientation.SOUTHEAST;
        }

        break;
      case InputEventRecordKey.UP:
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].position.gridZ,
            y: data.actors[actorIndex].position.gridY - 1,
            x: data.actors[actorIndex].position.gridX,
          })
        ) {
          data.actors[actorIndex].addAction(
            new WalkAction({
              wait: Duration.fromObject({ seconds: 0 }),
              act: Duration.fromObject({ seconds: 0.5 }),
              recovery: Duration.fromObject({ seconds: 0 }),
              direction: ActorOrientation.NORTHEAST,
              frames: 10,
            }),
          );
        } else {
          data.actors[actorIndex].orientation = ActorOrientation.NORTHEAST;
        }

        break;
      case InputEventRecordKey.DOWN:
        if (
          isTraversable(data, {
            z: data.actors[actorIndex].position.gridZ,
            y: data.actors[actorIndex].position.gridY + 1,
            x: data.actors[actorIndex].position.gridX,
          })
        ) {
          data.actors[actorIndex].addAction(
            new WalkAction({
              wait: Duration.fromObject({ seconds: 0 }),
              act: Duration.fromObject({ seconds: 0.5 }),
              recovery: Duration.fromObject({ seconds: 0 }),
              direction: ActorOrientation.SOUTHWEST,
              frames: 10,
            }),
          );
        } else {
          data.actors[actorIndex].orientation = ActorOrientation.SOUTHWEST;
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
