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

  const topLeftX = startX - width / 2; // Center the box horizontally
  const topLeftY = startY - height; // Adjust the box above the actor

  ctx.beginPath();
  ctx.moveTo(topLeftX + cornerRadius, topLeftY);
  ctx.lineTo(topLeftX + width - cornerRadius, topLeftY);

  // right top corner
  ctx.arcTo(
    topLeftX + width,
    topLeftY,
    topLeftX + width,
    topLeftY + height - tailHeight,
    cornerRadius,
  );

  // Bottom-right corner
  ctx.arcTo(
    topLeftX + width,
    topLeftY + height - tailHeight,
    topLeftX + width - cornerRadius,
    topLeftY + height - tailHeight,
    cornerRadius,
  );

  // Tail end point
  ctx.lineTo(
    topLeftX + width / 2 + tailWidth / 2,
    topLeftY + height - tailHeight,
  );
  // Tail peak
  ctx.lineTo(topLeftX + width / 2, topLeftY + height);
  // Tail starting point
  ctx.lineTo(
    topLeftX + width / 2 - tailWidth / 2,
    topLeftY + height - tailHeight,
  );

  // bottom left corner
  ctx.arcTo(
    topLeftX,
    topLeftY + height - tailHeight,
    topLeftX,
    topLeftY + height - cornerRadius - tailHeight,
    cornerRadius,
  );
  ctx.lineTo(topLeftX, topLeftY + cornerRadius);

  // top left corner
  ctx.arcTo(
    topLeftX,
    topLeftY,
    topLeftX + cornerRadius,
    topLeftY,
    cornerRadius,
  );

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
    topLeftX + padding,
    topLeftY + padding + actorFontSize,
  ); // Adjust vertical position

  // Draw wrapped text
  let currentY = topLeftY + padding + actorFontSize + actorPadding; // Start below the actor's name
  ctx.font = '16px Arial'; // Reset font for dialogue
  for (const line of lines) {
    ctx.fillText(line, topLeftX + padding, currentY);
    currentY += 20; // Move down for the next line
  }
}
