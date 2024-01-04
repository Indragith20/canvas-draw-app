import { useEffect, useRef } from 'react';
import { getChalkRectValues, getElementsAtPosition } from '~/components/utils/getElementsAtPosition';
import { changeFromOneScalingFactor, changeToOneScalingFactor } from '~/components/utils/redrawCanvas';
import { UPDATE_CANVAS_AREA } from '../DrawAreaContext';
import { getEdges } from '~/components/utils/common';
import { restoreContext } from '../utils';
import useEventListener from './useEventListener';

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
  console.log(scaledWidth, scaledHeight)
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

function useClickHandler({ tempCanvas, tool, scalingFactor, scrollX, scrollY, selectedTool, shapes, selectedElement, selectedTheme, lineWidth, dispatch }) {


  let edgesForResize = useRef([]);

  function clearSelectedElement() {
    if (selectedElement) {
      let tempContext = tempCanvas.current.getContext('2d');
      restoreContext(tempContext, tempCanvas.current.width, tempCanvas.current.height, selectedTheme, lineWidth);
      edgesForResize.current = [];
      tool.current = null;
      dispatch({
        type: UPDATE_CANVAS_AREA,
        payload: {
          selectedElement: null
        }
      })
    }
  }

  function onDocumentClick(ev) {
    ev._x = changeToOneScalingFactor(ev.x - scrollX, scalingFactor);
    ev._y = changeToOneScalingFactor(ev.y - scrollY, scalingFactor);

    // NOTE: selectedtool in click handler and wheel move. If possible refactor the early return
    if (selectedTool === 'text') {
      //Revertting tyhius is required.
      tool.current['onBlur']();
      return;
    }
    if (selectedTool === 'select') {
      let selectedElement = getElementsAtPosition(ev._x, ev._y, shapes);
      console.log("selectedEle", selectedElement);
      if (selectedElement) {
        dispatch({
          type: UPDATE_CANVAS_AREA,
          payload: {
            selectedElement
          }
        })
      } else {
        clearSelectedElement();
      }
    }
  }

  useEffect(() => {
    if (selectedElement && selectedTool === 'select') {
      let tempContext = tempCanvas.current.getContext('2d');
      tempContext.clearRect(0, 0, tempCanvas.current.width, tempCanvas.current.height);
      if (selectedElement.type === 'rectangle') {
        let { x, y, width, height } = selectedElement;
        let [edges, scaledWidth, scaledHeight] = getEdgesForSelectedElement(x, y, width, height, { scrollX, scrollY, scalingFactor });
        edgesForResize.current = edges;
        drawOuterRect(tempContext, edges, { x, y, scaledWidth, scaledHeight, scrollX, scrollY, scalingFactor });
      } else if (selectedElement.type === 'line' || selectedElement.type === 'arrow') {
        let { startX, startY, width, height } = selectedElement;
        let [edges, scaledWidth, scaledHeight] = getEdgesForSelectedElement(startX, startY, width, height, { scrollX, scrollY, scalingFactor });
        edgesForResize.current = edges;
        drawOuterRect(tempContext, edges, { scaledWidth, scaledHeight, x: startX, y: startY, scrollX, scrollY, scalingFactor });
      } else if (selectedElement.type === 'circle') {
        let x = selectedElement.x - selectedElement.radius;
        let y = selectedElement.y - selectedElement.radius;
        let [edges, scaledWidth, scaledHeight] = getEdgesForSelectedElement(x, y, selectedElement.radius * 2, selectedElement.radius * 2, { scrollX, scrollY, scalingFactor });
        edgesForResize.current = edges;
        drawOuterRect(tempContext, edges, { scaledWidth, scaledHeight, x, y, scrollX, scrollY, scalingFactor });
      } else if (selectedElement.type === 'diamond') {
        let { startX: x, startY: y, width, height } = selectedElement;
        let [edges, scaledWidth, scaledHeight] = getEdgesForSelectedElement(x, y, width, height, { scrollX, scrollY, scalingFactor }, 'diamond');
        edgesForResize.current = edges;
        drawOuterRect(tempContext, edges, { scaledWidth, scaledHeight, x, y, scrollX, scrollY, scalingFactor });
      } else if (selectedElement.type === 'text') {
        let { x, y, width, height } = selectedElement;
        let [edges, scaledWidth, scaledHeight] = getEdgesForSelectedElement(x, y, width, height, { scrollX, scrollY, scalingFactor });
        edgesForResize.current = edges;
        drawOuterRect(tempContext, edges, { scaledWidth, scaledHeight, x, y, scrollX, scrollY, scalingFactor });
      } else if (selectedElement.type === 'chalk') {
        let [minX, minY, maxX, maxY] = getChalkRectValues(selectedElement.drawPoints);
        let [edges, scaledWidth, scaledHeight] = getEdgesForSelectedElement(minX, minY, maxX - minX, maxY - minY, { scrollX, scrollY, scalingFactor }, 'chalk');
        edgesForResize.current = edges;
        drawOuterRect(tempContext, edges, { scaledWidth, scaledHeight, x: minX, y: minY, scrollX, scrollY, scalingFactor });
      }
    }
  }, [selectedElement, selectedTool, scrollX, scrollY, scalingFactor, tempCanvas]);


  useEventListener('click', onDocumentClick, tempCanvas, false);

  return edgesForResize;
}


export default useClickHandler;