import { getEdges } from './common';
import { changeFromOneScalingFactor } from './redrawCanvas';

function getEdgesForSelectedElement(elementX, elementY, width, height, state, elementType = 'rectangle') {
  let { scrollX, scrollY, scalingFactor } = state;
  let x = changeFromOneScalingFactor(elementX, scalingFactor) + scrollX;
  let y = changeFromOneScalingFactor(elementY, scalingFactor) + scrollY;
  let scaledWidth = changeFromOneScalingFactor(width, scalingFactor);
  let scaledHeight = changeFromOneScalingFactor(height, scalingFactor);
  let edges = getEdges({
    type: elementType,
    x: x,
    y: y,
    endX: x + scaledWidth,
    endY: y + scaledHeight,
    width: scaledWidth,
    height: scaledHeight
  });
  return [edges, scaledWidth, scaledHeight];
}

function drawOuterRect(tempContext, edges, { x, y, scaledWidth, scaledHeight, scrollX, scrollY, scalingFactor }) {
  let modX = changeFromOneScalingFactor(x, scalingFactor) + scrollX;
  let modY = changeFromOneScalingFactor(y, scalingFactor) + scrollY;
  tempContext.lineWidth = 2;
  tempContext.strokeStyle = "#9b9ef3";
  tempContext.strokeRect(modX - 5, modY - 5, scaledWidth + 10, scaledHeight + 10);
  edges.filter(([x, y]) => x !== null && y !== null).forEach(([x, y]) => {
    tempContext.setLineDash([]);
    tempContext.strokeStyle = "#9b9ef3";
    tempContext.beginPath();
    tempContext.arc(x, y, 5, 0, 2 * Math.PI);
    tempContext.stroke();
  })
}

export { drawOuterRect, getEdgesForSelectedElement }