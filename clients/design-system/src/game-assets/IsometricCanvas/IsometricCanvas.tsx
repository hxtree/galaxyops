import { IsometricRender } from './IsometricRender';
import React, { useRef, useEffect, useState } from 'react';
import './IsometricCanvas.scss';
import { IsometricCanvasProps } from './IsometricCanvasProps';
import { Coordinate2D } from './types/Coordinates.type';
import { useResize } from './hooks/useResize';
import { canvasToGridCoordinate } from './IsometricTransformer';
import useArrowKeyMoveCamera from './hooks/useArrowKeyMoveCamera';
import { useCanvasClassNames } from './hooks/useCanvasClassNames';

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

  useEffect(() => {
    const draw = async (
      offScreenCanvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
    ) => {
      if (!isLoaded) {
        await isometricRender.loadSpriteMaps(spriteMapRegistry);
        setIsLoaded(true);
      }

      isometricRender.drawCoordinates = showDebug;

      isometricRender.render(offScreenCanvas, ctx);
    };

    if (!canvasRef.current) return;
    if (!offScreenCanvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

    const offScreenCanvas: HTMLCanvasElement = offScreenCanvasRef.current;
    const offScreenCtx: CanvasRenderingContext2D =
      offScreenCanvas.getContext('2d')!;

    isometricRender.cameraCoordinates = cameraCoordinates;

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    offScreenCtx.canvas.width = width;
    offScreenCtx.canvas.height = height;

    isometricRender.cameraCoordinates = cameraCoordinates;
    isometricRender.height = height;
    isometricRender.width = width;

    draw(offScreenCanvas, ctx);
  }, [
    showDebug,
    grid,
    width,
    height,
    cursorCanvasCoordinate,
    cameraCoordinates,
    spriteMapRegistry,
    dialogues,
    isLoaded,
    setIsLoaded,
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
      <button onClick={() => setShowDebug(!showDebug)}>
        {showDebug ? 'Hide' : 'Show'} Debug
      </button>
      <br />
      Camera:
      <button onClick={() => setCameraCoordinates({ x: 0, y: 0, z: 0 })}>
        reset
      </button>
      <div id="cameraCoordinates">
        Camera Coordinates: {cameraCoordinates.x}, {cameraCoordinates.y},{' '}
        {cameraCoordinates.z}
      </div>
      <div id="cursorCanvasCoordinates">
        Cursor Coordinates: {cursorCanvasCoordinate?.x},{' '}
        {cursorCanvasCoordinate?.y}
      </div>
      <div id="cursorGridCoordinates">
        Cursor Grid Coordinates:{' '}
        {Math.round((cursorGridCoordinate?.x || 0) * 1000) / 1000},{' '}
        {Math.round((cursorGridCoordinate?.y || 0) * 1000) / 1000}
      </div>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className={`${canvasClassNames.join(' ')}`}
      />
      <canvas
        ref={offScreenCanvasRef}
        className="isometric-canvas isometric-canvas-off-screen"
      />
    </div>
  );
};

export default IsometricCanvas;
