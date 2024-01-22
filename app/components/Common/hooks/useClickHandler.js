import { useEffect, useRef } from 'react';
import { getChalkRectValues, getElementsAtPosition } from '~/components/utils/getElementsAtPosition';
import { changeToOneScalingFactor } from '~/components/utils/redrawCanvas';
import { UPDATE_CANVAS_AREA, UPDATE_SELECTED_TOOL } from '../../DrawCanvas/DrawAreaConstants';
import { restoreContext } from '../../DrawCanvas/utils';
import useEventListener from './useEventListener';
import { drawOuterRect, getEdgesForSelectedElement } from '~/components/utils/edgeAndDrawouterRect';

function useClickHandler({ tempCanvas, tool, scalingFactor, scrollX, scrollY, selectedTool, shapes, selectedElement, selectedTheme, lineWidth, dispatch }) {
  let lastClickedRef = useRef(null);
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
    lastClickedRef.current = { scaledX: ev._x, scaledY: ev._y, x: ev.x, y: ev.y };
    // NOTE: selectedtool in click handler and wheel move. If possible refactor the early return
    if (selectedTool === 'text') {
      //Revertting tyhius is required.
      tool.current['onBlur']();
      dispatch({
        type: UPDATE_SELECTED_TOOL,
        payload: {
          selectedTool: 'select'
        }
      })
      return;
    }
    if (selectedTool === 'select') {
      let selectedElement = getElementsAtPosition(ev._x, ev._y, shapes);
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
      if (selectedElement.type === 'rectangle' || selectedElement.type === 'image') {
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

  return { edgesForResize, lastClickedRef };
}


export default useClickHandler;