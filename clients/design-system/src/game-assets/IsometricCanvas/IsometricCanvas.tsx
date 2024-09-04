import { IsometricRender } from './IsometricRender';
import React, { useRef, useEffect, useState } from 'react';
import './IsometricCanvas.scss';
import { IsometricCanvasProps } from './IsometricCanvasProps';
import { Coordinate2D } from './Coordinates.type';
import { useResize } from './useResize';
import { canvasToGridCoordinate } from './IsometricTransformer';

const isometricRender = new IsometricRender({
  drawCoordinates: true,
});

export const IsometricCanvas = (props: IsometricCanvasProps) => {
  const { grid, spriteMapSrc, spriteMapColumns } = props;
  const canvasRef = useRef(null);
  const offScreenCanvasRef = useRef(null);
  const { width, height } = useResize(300); // Debounce resize events by 300ms
  const [cameraCoordinates, setCameraCoordinates] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorCanvasCoordinate, setCursorCanvasCoordinate] =
    useState<Coordinate2D | null>(null);
  const [cursorGridCoordinate, setCursorGridCoordinate] =
    useState<Coordinate2D | null>(null);

  isometricRender.grid = grid;

  useEffect(() => {
    const load = async () => {
      if (!isLoaded) {
        await isometricRender.spriteMap(spriteMapSrc, spriteMapColumns);
        setIsLoaded(true);
      }
    };
    load();
  }, [spriteMapSrc, spriteMapColumns, isLoaded, setIsLoaded]);

  useEffect(() => {
    const draw = async (
      offScreenCanvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
    ) => {
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
  }, [grid, width, height, cursorCanvasCoordinate, cameraCoordinates]);

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

  const moveCamera = (direction: string) => {
    setCameraCoordinates(prevPosition => {
      const step = 10; // Define how much movement per step
      switch (direction) {
        case 'up':
          return { ...prevPosition, y: prevPosition.y + step };
        case 'down':
          return { ...prevPosition, y: prevPosition.y - step };
        case 'left':
          return { ...prevPosition, x: prevPosition.x - step };
        case 'right':
          return { ...prevPosition, x: prevPosition.x + step };
        case 'higher':
          return { ...prevPosition, z: prevPosition.z + step };
        case 'lower':
          return { ...prevPosition, z: prevPosition.z - step };
        default:
          return prevPosition;
      }
    });
  };

  return (
    <div>
      Camera:
      <button onClick={() => setCameraCoordinates({ x: 0, y: 0, z: 0 })}>
        reset
      </button>
      <button onClick={() => moveCamera('up')}>Move Up</button>
      <button onClick={() => moveCamera('down')}>Move Down</button>
      <button onClick={() => moveCamera('left')}>Move Left</button>
      <button onClick={() => moveCamera('right')}>Move Right</button>
      <button onClick={() => moveCamera('higher')}>Move Higher</button>
      <button onClick={() => moveCamera('lower')}>Move Lower</button>
      <div id="cameraCoordinates">
        Camera Coordinates: {cameraCoordinates.x}, {cameraCoordinates.y},{' '}
        {cameraCoordinates.z}
      </div>
      <div id="cursorCanvasCoordinates">
        Cursor Coordinates: {cursorCanvasCoordinate?.x},{' '}
        {cursorCanvasCoordinate?.y}
      </div>
      <div id="cursorGridCoordinates">
        Cursor Grid Coordinates: {cursorGridCoordinate?.x},{' '}
        {cursorGridCoordinate?.y}
      </div>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className="isometric-canvas"
      />
      <canvas ref={offScreenCanvasRef} className="isometric-canvas" />
    </div>
  );
};

export default IsometricCanvas;
