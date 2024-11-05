import { IsometricRender } from './utils/IsometricRender';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { IsometricCanvasProps } from './IsometricCanvasProps';
import { Coordinate2D } from './types/Coordinates.type';
import { useResize } from './hooks/useResize';
import { canvasToGridCoordinate } from './utils/IsometricTransformer';
import { useArrowKeyMoveCamera } from './hooks/useArrowKeyMoveCamera';
import { useCanvasClassNames } from './hooks/useCanvasClassNames';
import { useInterval } from './hooks/useInterval';
import './IsometricCanvas.scss';

const isometricRender = new IsometricRender({
  drawCoordinates: true,
});

export const IsometricCanvas = (props: IsometricCanvasProps) => {
  const { grid, actors, spriteMapRegistry, dialogues, properties } = props;
  const canvasRef = useRef(null);
  const offScreenCanvasRef = useRef(null);
  const { width, height } = useResize(300); // Debounce resize events by 300ms
  const [cameraCoordinates, setCameraCoordinates] = useState<{
    x: number;
    y: number;
    z: number;
  }>({ x: 0, y: 0, z: 0 });

  useArrowKeyMoveCamera(setCameraCoordinates);

  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorCanvasCoordinate, setCursorCanvasCoordinate] =
    useState<Coordinate2D | null>(null);
  const [cursorGridCoordinate, setCursorGridCoordinate] =
    useState<Coordinate2D | null>(null);
  const [showDebug, setShowDebug] = useState(true);

  const canvasClassNames = useCanvasClassNames(properties);

  isometricRender.grid = grid;
  isometricRender.dialogues = dialogues;
  isometricRender.actors = actors;

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

    isometricRender.drawCoordinates = showDebug;
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
    showDebug,
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
    showDebug,
    grid,
    width,
    height,
    cursorCanvasCoordinate,
    cameraCoordinates,
    spriteMapRegistry,
    dialogues,
    isLoaded,
  ]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;
    const coordinates = canvasToGridCoordinate(
      {
        x: cursorX,
        y: cursorY,
      },
      isometricRender.cameraOffset,
    );
    isometricRender.cursorCoordinate = coordinates;
    setCursorGridCoordinate(coordinates);
    setCursorCanvasCoordinate({ x: cursorX, y: cursorY });
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className={`${canvasClassNames.join(' ')}`}
      />
      <canvas
        ref={offScreenCanvasRef}
        className="isometric-canvas isometric-canvas-off-screen"
      />
      <div className="row">
        <div className="col-sm-4">
          <button onClick={() => setShowDebug(!showDebug)}>
            {showDebug ? 'Hide' : 'Show'} Debug
          </button>
        </div>
        <div className="col-sm-4">
          Camera:
          <button onClick={() => setCameraCoordinates({ x: 0, y: 0, z: 0 })}>
            reset
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
        <div className="col-sm-4" id="cursorGridCoordinates">
          Cursor Grid Coordinates:{' '}
          {Math.round((cursorGridCoordinate?.x || 0) * 1000) / 1000},{' '}
          {Math.round((cursorGridCoordinate?.y || 0) * 1000) / 1000}
        </div>
      </div>
    </div>
  );
};

export default IsometricCanvas;
