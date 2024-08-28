import { IsometricGrid } from './IsometricGrid';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import './IsometricCanvas.scss';
import { IsometricCanvasProps } from './IsometricCanvasProps';
import SpriteMap from './SpriteMap';
import { TILE_HEIGHT, TILE_WIDTH } from './TileDimensions';
import { Coordinate2D, Coordinate3D } from './Coordinates.type';
import { useResize } from './useResize';

const cameraPosition: Coordinate3D = { x: 0, y: 0, z: 0 };
const isometricRender = new IsometricGrid({
  cameraPosition: cameraPosition,
  drawCoordinates: true,
});

export const IsometricCanvas = (props: IsometricCanvasProps) => {
  const { grid, spriteMapSrc, spriteMapColumns } = props;
  const canvasRef = useRef(null);
  const { width, height } = useResize(300); // Debounce resize events by 300ms
  const [cursorCoordinate, setCursorCoordinate] = useState<Coordinate2D | null>(
    null,
  );

  const spriteMap = useMemo(
    () =>
      new SpriteMap({
        imageSrc: spriteMapSrc,
        columns: spriteMapColumns,
        tileWidth: TILE_WIDTH,
        tileHeight: TILE_HEIGHT,
      }),
    [spriteMapSrc, spriteMapColumns],
  );

  isometricRender.spriteMap = spriteMap;
  isometricRender.grid = grid;

  useEffect(() => {
    const draw = async (ctx: CanvasRenderingContext2D) => {
      await spriteMap.load();

      isometricRender.render(ctx);
    };
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    isometricRender.height = height;
    isometricRender.width = width;

    draw(ctx);
  }, [grid, width, height, spriteMap]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;
    const coordinates = isometricRender.screenToGridCoordinate({
      x: cursorX,
      y: cursorY,
    });
    setCursorCoordinate(coordinates);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className="isometric-canvas"
      />

      <div id="screenCoordinates">0, 0</div>
      <div id="cursorCoordinates">
        {cursorCoordinate?.x}, {cursorCoordinate?.y}
      </div>
    </div>
  );
};

export default IsometricCanvas;
