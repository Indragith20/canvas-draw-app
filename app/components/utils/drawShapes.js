function drawDiamond(xCenter, yCenter, size, context) {
  let numberOfSides = 4;
  context.beginPath();
  context.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));

  for (var i = 1; i <= numberOfSides; i += 1) {
    context.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  context.stroke();
}

const tokens = {
  'b': 'bold',
  'i': 'italic'
};

function traverseDOM(node, depth) {
  let returnArray = [];
  let domObj = {};
  let textContent = ''
  domObj = {
    tagName: node.tagName.toLowerCase(),
  }
  for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i];
    if (childNode.nodeType === Node.ELEMENT_NODE) {
      returnArray = [...returnArray, ...traverseDOM(childNode, depth + 1)]
    } else if (childNode.nodeType === Node.TEXT_NODE) {
      textContent += childNode.textContent;
    }
  }
  domObj = { ...domObj, textContent: textContent };
  returnArray.push(domObj)
  return returnArray;
}


function htmlTagParser(htmlInput) {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlInput;

  const t = traverseDOM(tempElement);
  return t.reverse();
}

// TODO: Optimize usinng Html Tag parser
function drawText(text, context, x, y, maxWidth, lineHeight, color, fontSize = 24) {
  context.font = `normal ${fontSize}px/${lineHeight}px Mali`;
  context.fillStyle = color;
  context.textBaseline = "hanging";
  let words = text.split('');
  let line = '';
  let numberOfLines = 1;
  let xPointer = x;

  for (let n = 0; n < words.length; n++) {
    if (words[n] === '<') {
      let nextToken = words[n + 1];
      if (tokens[nextToken] && words[n + 2] === '>') {
        if (line !== '') {
          context.font = `normal ${fontSize}px/${lineHeight}px Mali`;
          context.fillText(line, xPointer, y);
          let width = context.measureText(line).width;
          line = '';
          xPointer = xPointer + width;
        }
        let indicator = n + 3;
        let wordsForToken = ``
        while (words[indicator] && (words[indicator] != '<' && words[indicator + 1] != '/')) {
          wordsForToken = `${wordsForToken}${words[indicator]}`
          indicator++;
        }
        context.font = `${tokens[nextToken]} ${fontSize}px/${lineHeight}px Mali`;
        context.fillText(wordsForToken, xPointer, y);
        let width = context.measureText(wordsForToken).width;
        xPointer = xPointer + width;
        n = indicator + 3;
      } else if (tokens[nextToken] && words[n + 2] === ' ') {
        if (line !== '') {
          context.font = `normal ${fontSize}px/${lineHeight}px Mali`;
          context.fillText(line, xPointer, y);
          let width = context.measureText(line).width;
          line = '';
          xPointer = xPointer + width;
        }
        // finding > end for the identified tag(nextToken)
        let indicator = n + 2;
        while (tokens[indicator] && tokens[indicator] !== '>') {
          indicator++;
        }
        // get words after the tag end
        indicator = indicator + 1;
        let wordsForToken = ``
        while (words[indicator] && (words[indicator] != '<' && words[indicator + 1] != '/')) {
          wordsForToken = `${wordsForToken}${words[indicator]}`
          indicator++;
        }
        context.font = `${tokens[nextToken]} ${fontSize}px/${lineHeight}px Mali`;
        context.fillText(wordsForToken, xPointer, y);
        let width = context.measureText(wordsForToken).width;
        xPointer = xPointer + width;
        n = indicator + 3;
      }
    } else if (words[n] === '\n') {
      context.font = `normal ${fontSize}px/${lineHeight}px Mali`;
      context.fillText(line, xPointer, y);
      line = '';
      xPointer = x;
      y += lineHeight;
      numberOfLines++;
    } else {
      let testLine = line + words[n] + '';
      line = testLine;
    }

  }
  context.font = `normal ${fontSize}px/${lineHeight}px Mali`;
  context.fillText(line, xPointer, y);
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


function drawLine(x, y, endX, endY, ctx) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.closePath();
}


function drawCircle(x, y, radius, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}


export { drawDiamond, drawText, getMinMaxCoords, getBufferedCoords, htmlTagParser, drawLine, drawCircle };