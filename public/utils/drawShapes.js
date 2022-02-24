function drawDiamond(xCenter, yCenter, size, context) {
  let numberOfSides = 4;
  context.beginPath();
  context.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));

  for (var i = 1; i <= numberOfSides; i += 1) {
    context.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  context.stroke();
}

function drawText(text, context, x, y, maxWidth, lineHeight = 24, color) {
  context.font = 'normal 24px Arial';
  context.fillStyle = color;
  context.textBaseline = "top";
  let words = text.split('');
  let line = '';
  let numberOfLines = 1;

  for (let n = 0; n < words.length; n++) {
    if (words[n] === '\n') {
      context.fillText(line, x, y);
      line = '';
      y += lineHeight;
      numberOfLines++;
    } else {
      let testLine = line + words[n] + '';
      let metrics = context.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + '';
        y += lineHeight;
        numberOfLines++;
      } else {
        line = testLine;
      }
    }

  }
  context.fillText(line, x, y);
  return numberOfLines;
}


export { drawDiamond, drawText };