import { MeterProps } from './MeterProps';
import { GRID_WIDTH } from '../utils/GridDimensions';

export function drawMeter(ctx: CanvasRenderingContext2D, props: MeterProps) {
  const x = props.x;
  const y = props.y;
  const width = props.width ?? GRID_WIDTH;
  const height = props.height ?? 5;
  const percent = props.percent ? props.percent * 0.01 : 1;
  const lineWidth = props.lineWidth ?? 2;
  const strokeColor = props.strokeColor ?? '#000';
  const fillColor = props.fillColor ?? '#f00';

  const startX = x - width / 2;
  const startY = y;

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeColor;

  // Draw the background rectangle
  ctx.beginPath();

  ctx.globalAlpha = 0.618;
  ctx.fillStyle = '#000';
  ctx.rect(startX, startY, width, height);
  ctx.fill();
  ctx.stroke();
  ctx.globalAlpha = 1.0;

  // Draw the filled rectangle
  const filledWidth = width * percent;
  ctx.fillStyle = fillColor;
  ctx.fillRect(startX, startY, filledWidth, height);
}
