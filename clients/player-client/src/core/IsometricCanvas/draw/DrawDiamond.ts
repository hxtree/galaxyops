export function drawDiamond(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  width: number,
  height: number,
  fillColor: string = 'transparent',
  strokeColor: string = 'black',
  lineWidth: number = 1,
) {
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const topX = startX + halfWidth;
  const topY = startY;
  const rightX = startX + width;
  const rightY = startY + halfHeight;
  const bottomX = startX + halfWidth;
  const bottomY = startY + height;
  const leftX = startX;
  const leftY = startY + halfHeight;

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeColor;

  ctx.beginPath();
  ctx.moveTo(topX, topY);
  ctx.lineTo(rightX, rightY);
  ctx.lineTo(bottomX, bottomY);
  ctx.lineTo(leftX, leftY);
  ctx.closePath();

  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.stroke();
}
