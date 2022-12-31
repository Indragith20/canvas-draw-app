function drawDiamond(xCenter, yCenter, size, context) {
  let numberOfSides = 4;
  context.beginPath();
  context.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));

  for (var i = 1; i <= numberOfSides; i += 1) {
    context.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  context.stroke();
}

function drawText(text, context, x, y, maxWidth, lineHeight, color, fontSize = 24) {
  context.font = `normal ${fontSize}px/${lineHeight}px Mali`;
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
      // let testLine = line + words[n] + '';
      // let metrics = context.measureText(testLine);
      // let testWidth = metrics.width;
      // if (testWidth > maxWidth && n > 0) {
      //   context.fillText(line, x, y);
      //   line = words[n] + '';
      //   y += lineHeight;
      //   numberOfLines++;
      // } else {
      //   line = testLine;
      // }
      let testLine = line + words[n] + '';
      line = testLine;
    }

  }
  context.fillText(line, x, y);
  return numberOfLines;
}


function getMinMaxCoords(shapes) {
  let top = 0;
  let left = 0;
  let right = 0;
  let bottom = 0;
  //TODO: Need to identify the logic for circle
  shapes.forEach((shape) => {
    if ((shape.x < left) || (shape.endX < left)) {
      left = Math.min(shape.x, shape.endX);
    }
    if ((shape.x > right) || (shape.endX > right)) {
      right = Math.max(shape.x, shape.endX);
    }
    if ((shape.y < top) || (shape.endY < top)) {
      top = Math.min(shape.y, shape.endY);
    }
    if ((shape.y > bottom) || (shape.endY > bottom)) {
      bottom = Math.max(shape.y, shape.endY);
    }
  });
  return { top, left, right, bottom }
}


function getBufferedCoords(shapes) {
  let { bottom, left, right, top } = getMinMaxCoords(shapes);
  let bufferX = 0;
  let bufferY = 0;
  let width = 10; // Buffer for space around the corners
  let height = 10;
  if (top < 0) {
    bufferY = Math.abs(top) + 10;
  }
  if (left < 0) {
    bufferX = Math.abs(left) + 10;
  }
  width = width + Math.abs(right) + bufferX;
  height = height + Math.abs(bottom) + bufferY;


  return {
    canvasWidth: Math.max(window.innerWidth, width),
    canvasHeight: Math.max(window.innerHeight, height),
    bufferX,
    bufferY
  }
}


export { drawDiamond, drawText, getMinMaxCoords, getBufferedCoords };