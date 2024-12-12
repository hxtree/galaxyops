import { IsometricRender } from './utils/IsometricRender';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Coordinate2D } from './types/Coordinates.type';
import { useResize } from './hooks/useResize';
import { canvasToGridCoordinate } from './utils/IsometricTransformer';
import { useArrowKeyMoveCamera } from './hooks/useArrowKeyMoveCamera';
import { useCanvasClassNames } from './hooks/useCanvasClassNames';
import { useInterval } from './hooks/useInterval';
import { useInputContext } from '../../context/Input/useInputContext';
import './IsometricCanvas.scss';
import { InputActionType } from '../../context/Input/InputActionType.type';
import { GameState } from '../../dtos/GameState.dto';

const isometricRender = new IsometricRender({
  drawCoordinates: true,
});

export const IsometricCanvas = (props: GameState) => {
  const {
    grid,
    actors,
    spriteMapRegistry,
    dialogues,
    properties,
    gridAnimations,
  } = props;
  const canvasRef = useRef(null);
  const offScreenCanvasRef = useRef(null);
  const { width, height } = useResize(300); // Debounce resize events by 300ms
  const [cameraCoordinates, setCameraCoordinates] = useState<{
    x: number;
    y: number;
    z: number;
  }>({ x: 0, y: 0, z: 0 });
  const inputContext = useInputContext();

  useArrowKeyMoveCamera(setCameraCoordinates);

  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorCanvasCoordinate, setCursorCanvasCoordinate] =
    useState<Coordinate2D | null>(null);

  const canvasClassNames = useCanvasClassNames(properties);

  isometricRender.grid = grid;
  isometricRender.dialogues = dialogues;
  isometricRender.actors = actors;
  isometricRender.gridAnimations = gridAnimations ?? {};

  const drawCanvas = useCallback(async () => {
    if (!canvasRef.current || !offScreenCanvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const offScreenCanvas: HTMLCanvasElement = offScreenCanvasRef.current;
    const offScreenCtx: CanvasRenderingContext2D =
      offScreenCanvas.getContext('2d')!;

    if (!isLoaded) {
      await isometricRender.loadSpriteMaps(spriteMapRegistry);
      setIsLoaded(true);
    }

    isometricRender.drawCoordinates = inputContext.state.debug ?? false;
    isometricRender.cameraCoordinates = cameraCoordinates;

    // Set canvas sizes
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    offScreenCtx.canvas.width = width;
    offScreenCtx.canvas.height = height;

    // Set isometricRender properties
    isometricRender.height = height;
    isometricRender.width = width;
    isometricRender.cameraCoordinates = cameraCoordinates;

    // Call the render method directly
    isometricRender.render(offScreenCanvas, ctx);
  }, [
    isLoaded,
    inputContext,
    cameraCoordinates,
    spriteMapRegistry,
    width,
    height,
  ]);

  // draw canvas on interval for animations
  useInterval(() => {
    drawCanvas();
  }, 250);

  // draw canvas on certain dependencies
  useEffect(() => {
    drawCanvas();
  }, [
    drawCanvas,
    inputContext.state.debug,
    grid,
    width,
    height,
    cursorCanvasCoordinate,
    cameraCoordinates,
    spriteMapRegistry,
    dialogues,
    isLoaded,
  ]);

  const gridCoordinates = (
    e: React.MouseEvent<HTMLCanvasElement>,
  ): Coordinate2D | void => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;
    setCursorCanvasCoordinate({ x: cursorX, y: cursorY });

    return canvasToGridCoordinate(
      {
        x: cursorX,
        y: cursorY,
      },
      isometricRender.cameraOffset,
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const coordinates = gridCoordinates(e);
    if (!coordinates) return;
    isometricRender.cursorCoordinate = coordinates;
    inputContext.dispatch({
      type: InputActionType.SET_MOUSE_MOVE,
      payload: { cursorX: coordinates.x, cursorY: coordinates.y },
    });
  };

  const handleMouseClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const coordinates = gridCoordinates(e);
    if (!coordinates) return;

    inputContext.dispatch({
      type: InputActionType.SET_TOUCH_GRID,
      payload: { x: Math.floor(coordinates.x), y: Math.floor(coordinates.y) },
    });
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onClick={handleMouseClick}
        className={`${canvasClassNames.join(' ')}`}
      />
      <canvas
        ref={offScreenCanvasRef}
        className="isometric-canvas isometric-canvas-off-screen"
      />
      <div className="row">
        <div className="col-sm-4">
          <button onClick={() => setCameraCoordinates({ x: 0, y: 0, z: 0 })}>
            Camera Reset
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4" id="cameraCoordinates">
          Camera Coordinates: {cameraCoordinates.x}, {cameraCoordinates.y},{' '}
          {cameraCoordinates.z}
        </div>
        <div className="col-sm-4" id="cursorCanvasCoordinates">
          Cursor Coordinates: {cursorCanvasCoordinate?.x},{' '}
          {cursorCanvasCoordinate?.y}
        </div>
      </div>
    </div>
  );
};

export default IsometricCanvas;
