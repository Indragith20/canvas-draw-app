import { drawArrow } from './drawArrow';
import { drawCircle, drawDiamond, drawFreeShape, drawLine, drawText } from './drawShapes';

export function changeFromOneScalingFactor(coords, scalingFactor) {
  return coords * scalingFactor;
}

export function changeToOneScalingFactor(coords, scalingFactor) {
  return coords / scalingFactor;
}

export function redraw({ tempContext, shapes, scrollX, scrollY, baseLineHeight, baseFontSize, selectedTheme, scalingFactor }) {
  // TODO: If the shape is outside the scrolling area skip the draw process(Possible Improvementt

  shapes.forEach(originalShape => {
    let shape = {
      ...originalShape,
      x: changeFromOneScalingFactor(originalShape.x, scalingFactor) + scrollX,
      y: changeFromOneScalingFactor(originalShape.y, scalingFactor) + scrollY,
      endX: changeFromOneScalingFactor(originalShape.endX, scalingFactor) + scrollX,
      endY: changeFromOneScalingFactor(originalShape.endY, scalingFactor) + scrollY,
    }
    if (shape.type === 'rectangle') {
      tempContext.strokeRect(shape.x, shape.y, changeFromOneScalingFactor(shape.width, scalingFactor), changeFromOneScalingFactor(shape.height, scalingFactor), [10]);
    } else if (shape.type === 'arrow') {
      drawArrow(shape.x, shape.y, shape.endX, shape.endY, tempContext);
    } else if (shape.type === 'line') {
      drawLine(shape.x, shape.y, shape.endX, shape.endY, tempContext);
    } else if (shape.type === 'text') {
      let color = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
      drawText(shape.textContent, tempContext, shape.x, shape.y, changeFromOneScalingFactor(shape.width, scalingFactor), baseLineHeight, color, baseFontSize);
    } else if (shape.type === 'circle') {
      drawCircle(shape.x, shape.y, changeFromOneScalingFactor(shape.radius, scalingFactor), tempContext);
    } else if (shape.type === 'diamond') {
      let size = changeFromOneScalingFactor(originalShape.x - originalShape.endX, scalingFactor);
      drawDiamond(shape.x, shape.y, size, tempContext);
    } else if (shape.type === 'chalk') {
      let modifiedShape = {
        ...shape,
        drawPoints: shape.drawPoints.map(point => {
          return { x: changeFromOneScalingFactor(point.x, scalingFactor) + scrollX, y: changeFromOneScalingFactor(point.y, scalingFactor) + scrollY };
        })
      }
      drawFreeShape(tempContext, modifiedShape);
    }
  });
}

export function printCanvas({ shapes, tempContext, bufferX, bufferY, selectedTheme, baseLineHeight, baseFontSize, scalingFactor, canvasWidth, canvasHeight, lineWidth }) {
  tempContext.clearRect(0, 0, canvasWidth, canvasHeight);
  tempContext.restore();
  tempContext.setLineDash([]);
  tempContext.strokeStyle = selectedTheme === 'dark' ? '#FFFFFF' : '#000000';
  tempContext.fillStyle = selectedTheme === 'dark' ? '#0e141b' : '#ffffff';
  tempContext.fillRect(0, 0, canvasWidth, canvasHeight);
  tempContext.fillStyle = selectedTheme === 'dark' ? '#424242' : '#000000';
  tempContext.lineWidth = lineWidth;
  shapes.forEach(shape => {
    if (shape.type === 'rectangle') {
      tempContext.strokeRect(shape.x + bufferX, shape.y + bufferY, changeFromOneScalingFactor(shape.width, scalingFactor), changeFromOneScalingFactor(shape.height, scalingFactor));
    } else if (shape.type === 'arrow') {
      let x = shape.x + bufferX;
      let y = shape.y + bufferY;
      let endX = shape.endX + bufferX;
      let endY = shape.endY + bufferY;
      drawArrow(x, y, endX, endY, tempContext);
    } else if (shape.type === 'line') {
      let x = shape.x + bufferX;
      let y = shape.y + bufferY;
      let endX = shape.endX + bufferX;
      let endY = shape.endY + bufferY;
      drawLine(x, y, endX, endY, tempContext);
    } else if (shape.type === 'text') {
      let color = selectedTheme === 'dark' ? '#FFFFFF' : '#000000';
      drawText(shape.textContent, tempContext, shape.x + bufferX, shape.y + bufferY, changeFromOneScalingFactor(shape.width, scalingFactor), baseLineHeight, color, baseFontSize);
    } else if (shape.type === 'circle') {
      let x = shape.x + bufferX;
      let y = shape.y + bufferY;
      drawCircle(x, y, changeFromOneScalingFactor(shape.radius, scalingFactor), tempContext);
    } else if (shape.type === 'diamond') {
      let xCenter = shape.x + bufferX;
      let yCenter = shape.y + bufferY;
      let size = changeFromOneScalingFactor((shape.x) - (shape.endX), scalingFactor);
      drawDiamond(xCenter, yCenter, size, tempContext);
    } else if (shape.type === 'chalk') {
      let x = shape.x + bufferX;
      let y = shape.y + bufferY;
      tempContext.beginPath();
      tempContext.moveTo(x, y);
      shape.drawPoints.forEach(point => {
        tempContext.lineTo(point.x + bufferX, point.y + bufferY)
      });
      tempContext.stroke();
      tempContext.closePath();
    }
  });

  return tempContext;
}