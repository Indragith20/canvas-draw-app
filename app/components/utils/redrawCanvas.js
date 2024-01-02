import { drawArrow } from './drawArrow';
import { drawCircle, drawDiamond, drawLine, drawText } from './drawShapes';

export function changeFromOneScalingFactor(coords, scalingFactor) {
  return coords * scalingFactor;
}

export function changeToOneScalingFactor(coords, scalingFactor) {
  return coords / scalingFactor;
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