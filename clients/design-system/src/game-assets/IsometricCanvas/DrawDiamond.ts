export function drawDiamond(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  width: number,
  height: number,
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

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(topX, topY); // Top vertex
  ctx.lineTo(rightX, rightY); // Right vertex
  ctx.lineTo(bottomX, bottomY); // Bottom vertex
  ctx.lineTo(leftX, leftY); // Left vertex
  ctx.closePath();
  ctx.stroke();
}
