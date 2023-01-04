import { drawDiamond, drawText } from "./drawShapes";

export function changeFromOneScalingFactor(coords, scalingFactor) {
  return coords * scalingFactor;
}

export function printCanvas({ shapes, tempContext, bufferX, bufferY, selectedTheme, baseLineHeight, baseFontSize, scalingFactor, canvasWidth, canvasHeight }) {
  tempContext.clearRect(0, 0, canvasWidth, canvasHeight);
  tempContext.restore();
  tempContext.setLineDash([]);
  tempContext.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
  tempContext.fillStyle = selectedTheme === 'dark' ? '#0e141b' : '#ffffff';
  tempContext.fillRect(0, 0, canvasWidth, canvasHeight);
  tempContext.fillStyle = selectedTheme === 'dark' ? "#424242" : '#000000';
  tempContext.lineWidth = 1.0;
  shapes.forEach(shape => {
    if (shape.type === 'rectangle') {
      tempContext.strokeRect(shape.x + bufferX, shape.y + bufferY, changeFromOneScalingFactor(shape.width, scalingFactor), changeFromOneScalingFactor(shape.height, scalingFactor));
    } else if (shape.type === 'arrow') {
      let headlen = 10;
      let x = shape.x + bufferX;
      let y = shape.y + bufferY;
      let endX = shape.endX + bufferX;
      let endY = shape.endY + bufferY;
      let dx = endX - x;
      let dy = endY - y;
      let angle = Math.atan2(dy, dx);
      tempContext.beginPath();
      tempContext.moveTo(x, y)
      tempContext.lineTo(endX, endY);
      tempContext.lineTo(endX - headlen * Math.cos(angle - Math.PI / 6), endY - headlen * Math.sin(angle - Math.PI / 6));
      tempContext.moveTo(endX, endY);
      tempContext.lineTo(endX - headlen * Math.cos(angle + Math.PI / 6), endY - headlen * Math.sin(angle + Math.PI / 6));
      tempContext.stroke();
      tempContext.closePath();
    } else if (shape.type === 'line') {
      tempContext.beginPath();
      tempContext.moveTo(shape.x + bufferX, shape.y + bufferY);
      tempContext.lineTo(shape.endX + bufferX, shape.endY + bufferY);
      tempContext.stroke();
      tempContext.closePath();
    } else if (shape.type === 'text') {
      let color = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
      drawText(shape.textContent, tempContext, shape.x + bufferX, shape.y + bufferY, changeFromOneScalingFactor(shape.width, scalingFactor), baseLineHeight, color, baseFontSize);
    } else if (shape.type === 'circle') {
      let x = shape.x + bufferX;
      let y = shape.y + bufferY;
      tempContext.beginPath();
      tempContext.arc(x, y, changeFromOneScalingFactor(shape.radius, scalingFactor), 0, 2 * Math.PI);
      tempContext.stroke();
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