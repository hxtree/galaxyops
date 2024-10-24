export function drawDialogue(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  actor: string,
  text: string,
  fillColor: string = 'white', // Default to white background
  strokeColor: string = '#A89BC6',
  lineWidth: number = 1,
  textColor: string = '#333333', // Text color
  cornerRadius: number = 10, // Radius for rounded corners
  tailWidth: number = 20, // Width of the tail
  tailHeight: number = 10, // Height of the tail
) {
  // Set text properties for measurement
  ctx.font = '16px Arial'; // Dialogue text font size
  const padding = 10; // Padding around text
  const actorPadding = 18; // Additional padding between actor name and text
  const actorFontSize = 12; // Smaller font size for actor's name

  // Measure the actor's name
  ctx.font = `${actorFontSize}px Arial`; // Set font for actor's name
  const actorWidth = ctx.measureText(actor).width;

  ctx.font = '16px Arial'; // Reset font for dialogue
  const canvasWidth = ctx.canvas.width; // Use canvas width
  const maxWidth = canvasWidth * 0.8; // Set max width as a percentage of the canvas width

  // Wrap text based on the maximum width
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine + (currentLine.length > 0 ? ' ' : '') + word;
    const testWidth = ctx.measureText(testLine).width;

    if (testWidth > maxWidth - 2 * padding) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine); // Push the last line

  const textHeight = lines.length * 20; // Approximate height for each line
  const boxHeight = textHeight + 2 * padding + actorFontSize; // Use actor font size for height

  // Calculate the final dimensions
  const textWidth = Math.max(...lines.map(line => ctx.measureText(line).width)); // Width based on the longest line
  let width = Math.max(actorWidth, textWidth) + 2 * padding; // Width based on actor's name and longest line
  if (width > maxWidth) {
    width = maxWidth;
  }
  const height = boxHeight + tailHeight; // Adjust height to include the tail

  // Draw the rounded rectangle for the dialog box
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = fillColor;

  ctx.beginPath();
  ctx.moveTo(startX + cornerRadius, startY);
  ctx.lineTo(startX + width - cornerRadius, startY);

  // right top corner
  ctx.arcTo(
    startX + width,
    startY,
    startX + width,
    startY + height - tailHeight,
    cornerRadius,
  );

  // Bottom-right corner
  ctx.arcTo(
    startX + width,
    startY + height - tailHeight,
    startX + width - cornerRadius,
    startY + height - tailHeight,
    cornerRadius,
  );

  // Tail end point
  ctx.lineTo(startX + width / 2 + tailWidth / 2, startY + height - tailHeight);
  // Tail peak
  ctx.lineTo(startX + width / 2, startY + height);
  // Tail starting point
  ctx.lineTo(startX + width / 2 - tailWidth / 2, startY + height - tailHeight);

  // bottom left corner
  ctx.arcTo(
    startX,
    startY + height - tailHeight,
    startX,
    startY + height - cornerRadius - tailHeight,
    cornerRadius,
  );
  ctx.lineTo(startX, startY + cornerRadius);

  // top left corner
  ctx.arcTo(startX, startY, startX + cornerRadius, startY, cornerRadius);

  ctx.closePath(); // Close the path to connect the tail smoothly

  ctx.fill(); // Fill the shape with the background color
  ctx.stroke(); // Outline the shape with the stroke color

  // Set text color
  ctx.fillStyle = textColor;

  // Draw actor's name with smaller font size
  ctx.font = `${actorFontSize}px Arial`; // Set font for actor's name
  ctx.textAlign = 'left';
  ctx.fillText(
    actor.toUpperCase() + ':',
    startX + padding,
    startY + padding + actorFontSize,
  ); // Adjust vertical position

  // Draw wrapped text
  let currentY = startY + padding + actorFontSize + actorPadding; // Start below the actor's name
  ctx.font = '16px Arial'; // Reset font for dialogue
  for (const line of lines) {
    ctx.fillText(line, startX + padding, currentY);
    currentY += 20; // Move down for the next line
  }
}
