import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { changeFromOneScalingFactor, changeToOneScalingFactor, redraw } from '../utils/redrawCanvas';
import DrawAreaContext from './DrawAreaContext';
import { UPDATE_CANVAS_AREA, UPDATE_SELECTED_TOOL } from './DrawAreaConstants';
import Chalk from '../Shapes/Chalk';
import Line from '../Shapes/Line';
import Rect from '../Shapes/Rectangle';
import Arrow from '../Shapes/Arrow';
import DrawText from '../Shapes/DrawText';
import Circle from '../Shapes/Circle';
import Diamond from '../Shapes/Diamond';
import { getUpdatedPerformedActions } from '../utils/common';
import { changeCoordsForMoveTool, changeCoordsForResizeTool, changeDrawenImageCoords, checkAndGetFilteredShapes, detectDragging, getCursorPositionAndType, restoreContext } from './utils';
import { getElementsAtPosition } from '../utils/getElementsAtPosition';
import MoveTool from '../Shapes/MoveTool';
import useClickHandler from '../Common/hooks/useClickHandler';
import useWheelMove from '../Common/hooks/useWheelMove';
import useResize from '../Common/hooks/useResize';
import useTextTool from '../Common/hooks/useTextTool';
import ResizeTool from '../Shapes/ResizeTool';
import useMouseOrTouchEvents from '../Common/hooks/useMouseOrTouchEvents';
import useImageHandler from '../Common/hooks/useImageHandler';

let eventTypeMapping = {
  'mouseup': 'mouseup',
  'mousedown': 'mousedown',
  'mousemove': 'mousemove',
  'dblclick': 'dblclick',
  'touchstart': 'mousedown',
  'touchmove': 'mousemove',
  'touchend': 'mouseup'
}


let toolsSupported = {
  move: '',
  chalk: Chalk,
  line: Line,
  rect: Rect,
  arrow: Arrow,
  text: DrawText,
  circle: Circle,
  diamond: Diamond,
  select: 'select'
};



function DrawCanvas({ selectedTheme, updateShape, keepLastSelected, mouseMove, updateCursorType }) {

  let mainCanvas = useRef(null);
  let tempCanvas = useRef(null);

  let draggingElement = useRef(null);
  let isResizing = useRef(false);
  let selectedTextEle = useRef(null);

  let mouseXPosition = useRef(null);
  let mouseYPosition = useRef(null);

  let tools = useRef(toolsSupported);
  let tool = useRef(null);

  let { state, dispatch } = useContext(DrawAreaContext);

  let {
    scalingFactor, shapes, selectedTool,
    scrollX, scrollY, selectedElement,
    lineWidth, baseLineHeight, baseFontSize,
    canvasHeight, canvasWidth, disableScroll,
    performedActions
  } = state;

  // NOTE: selectedtool in click handler and wheel move. If possible refactor the early return
  let edgesForResize = useClickHandler({ tempCanvas, tool, scalingFactor, scrollX, scrollY, selectedTool, shapes, selectedElement, selectedTheme, lineWidth, dispatch });


  const drawImage = useCallback(() => {
    resetDraggingValues();

    requestAnimationFrame(() => {

      if (selectedTool === 'move' || selectedTool === 'text' || selectedTool === 'select' || !keepLastSelected) {
        dispatch({
          type: UPDATE_SELECTED_TOOL,
          payload: {
            selectedTool: 'select'
          }
        })
        tool.current = null;
      } else {
        let mainContext = mainCanvas.current.getContext('2d');
        let tempContext = tempCanvas.current.getContext('2d');

        mainContext.drawImage(tempCanvas.current, 0, 0);
        tempContext.clearRect(0, 0, tempCanvas.current.width, tempCanvas.current.height);
      }
    })
  }, [dispatch, keepLastSelected, selectedTool]);


  const imgUpdate = useCallback((drawenImage) => {
    // Check whether we can move this logic to reducer 
    if (drawenImage && drawenImage.type) {

      let modifiedImage = changeDrawenImageCoords(drawenImage, { scrollX, scrollY, scalingFactor })

      let [filteredShapes, isExistingShape] = checkAndGetFilteredShapes(shapes, modifiedImage, { draggingElement, selectedTextEle, selectedElement });

      let updatedPerformedActions = getUpdatedPerformedActions(performedActions, isExistingShape ? [{ ...draggingElement.current }, { ...modifiedImage, isExistingShape: true }] : [modifiedImage]);

      dispatch({
        type: UPDATE_CANVAS_AREA,
        payload: {
          shapes: [...filteredShapes, modifiedImage], performedActions: updatedPerformedActions, selectedElement: null
        }
      });
      updateShape(modifiedImage, isExistingShape ? 'update' : 'add');
      drawImage();
    } else {
      drawImage();
    }
  }, [dispatch, drawImage, scrollX, scrollY, scalingFactor, shapes, selectedElement, performedActions, updateShape])

  function onMoveElement(ev, currentCanvasState) {
    let { shapes, scrollX, scrollY, scalingFactor, selectedTheme } = currentCanvasState;
    if (!draggingElement.current) {
      ev._x = changeToOneScalingFactor(ev.x - scrollX, scalingFactor);
      ev._y = changeToOneScalingFactor(ev.y - scrollY, scalingFactor);
      // First case of move tool -> User just selected the element.events should be mousedown
      let elementSelected = getElementsAtPosition(changeToOneScalingFactor(mouseXPosition.current - scrollX, scalingFactor), changeToOneScalingFactor(mouseYPosition.current - scrollY, scalingFactor), shapes);
      if (elementSelected) {
        let updatedShapes = shapes.filter(shape => shape.id !== elementSelected.id);
        draggingElement.current = elementSelected;
        dispatch({
          type: UPDATE_CANVAS_AREA,
          payload: {
            shapes: updatedShapes, selectedTool: 'move', selectedElement: elementSelected
          }
        });
        let tempContext = tempCanvas.current.getContext('2d');
        let modifiedElement = changeCoordsForMoveTool(elementSelected, scalingFactor);
        tool.current = new MoveTool(tempCanvas.current, tempContext, imgUpdate, modifiedElement, selectedTheme, scalingFactor);
        // element is present. we need to call movetool

        tool.current[eventTypeMapping['mousedown']](ev);
      }
    } else if (mouseXPosition.current !== null && mouseYPosition.current !== null) {
      if (ev.type === 'mousemove' || ev.type === 'mouseup') {
        // movetool instace should already by present
        if (tool.current) {
          tool.current[eventTypeMapping[ev.type]](ev);
        }
      }
    }
  };

  function onResizeElement(ev, cursorPosition) {
    if (cursorPosition !== null || isResizing.current) {
      ev._x = changeFromOneScalingFactor(ev.x - scrollX, scalingFactor);
      ev._y = changeFromOneScalingFactor(ev.y - scrollY, scalingFactor);
      if (ev.type === 'mousedown') {
        isResizing.current = true;
        let modifiedSelectedElement = changeCoordsForResizeTool(selectedElement, scalingFactor, { scrollX, scrollY });
        let tempContext = tempCanvas.current.getContext('2d');
        tool.current = new ResizeTool(tempCanvas.current, tempContext, imgUpdate, modifiedSelectedElement.id, modifiedSelectedElement, cursorPosition, { selectedTheme, lineWidth });
        let updatedShapes = shapes.filter(shape => shape.id !== selectedElement.id);
        dispatch({
          type: UPDATE_CANVAS_AREA,
          payload: {
            shapes: updatedShapes
          }
        });
        tool.current.drawExisitingElementOnTemp();


      } else if (ev.type === 'mouseup') {
        isResizing.current = false;
        updateCursorType()
      }
      if (tool.current !== null) {
        let func = tool.current[eventTypeMapping[ev.type]];
        if (func) {
          func(ev);
        }
      }
    }
  };

  function onEvent(ev) {
    ev._x = ev.x;
    ev._y = ev.y;

    let { scrollX, scrollY, selectedElement, scalingFactor, selectedTool } = state;
    mouseMove({ x: changeToOneScalingFactor(ev.x - scrollX, scalingFactor), y: changeToOneScalingFactor(ev.y - scrollY, scalingFactor) })

    let isUserDragging = isResizing.current ? false : detectDragging(ev, selectedTool, { mouseXPosition, mouseYPosition });
    if (isUserDragging) {
      onMoveElement(ev, { ...state, selectedTheme });
    } else {
      // Temp Hack: Not allowing free drawn shape and text to be resized
      if (isResizing.current && (selectedElement.type !== 'text' || selectedElement.type === 'chalk')) {
        onResizeElement(ev);
      } else if (tool.current) {
        let func = tool.current[eventTypeMapping[ev.type]];
        if (func) {
          func(ev);
        }
      } else if (selectedElement && (selectedElement.type !== 'text' || selectedElement.type === 'chalk')) {
        let { position: cursorPositonOnElement, cursorType } = getCursorPositionAndType(ev, { edgesForResize, selectedElement, selectedTool });
        updateCursorType(cursorType);
        onResizeElement(ev, cursorPositonOnElement);
      }
    }
  };

  useEffect(() => {
    if (tempCanvas.current && tempCanvas.current.width > 0 && tempCanvas.current.height > 0 && !disableScroll) {
      let tempContext = tempCanvas.current.getContext('2d');
      let mainContext = mainCanvas.current.getContext('2d');
      restoreContext(tempContext, tempCanvas.current.width, tempCanvas.current.height, selectedTheme, lineWidth);

      tempContext.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
      tempContext.fillStyle = selectedTheme === 'dark' ? "#424242" : '#000000';
      tempContext.lineWidth = lineWidth;

      redraw({ tempContext, shapes, scrollX, scrollY, baseLineHeight, baseFontSize, selectedTheme, scalingFactor })

      mainContext.clearRect(0, 0, mainCanvas.current.width, mainCanvas.current.height);
      mainContext.drawImage(tempCanvas.current, 0, 0);
      restoreContext(tempContext, tempCanvas.current.width, tempCanvas.current.height, selectedTheme, lineWidth);
    }

  }, [shapes, baseLineHeight, baseFontSize, scalingFactor, lineWidth, canvasHeight, canvasWidth, selectedTheme, scrollX, scrollY, disableScroll]);


  function resetDraggingValues() {
    draggingElement.current = null;
    mouseXPosition.current = null;
    mouseYPosition.current = null;
    selectedTextEle.current = null;
  }



  useEffect(() => {
    let tempContext = tempCanvas.current.getContext('2d');
    restoreContext(tempContext, tempCanvas.width, tempCanvas.height, selectedTheme, lineWidth)
  }, [selectedTheme, lineWidth, selectedTool])


  useEffect(() => {
    if (selectedTool === 'select' && !isResizing.current) {
      tool.current = null;
    } else if (selectedTool !== 'move' && selectedTool !== 'text' && !isResizing.current) {
      let tempContext = tempCanvas.current.getContext('2d');
      let toolSelected = tools.current[selectedTool];
      tool.current = new toolSelected(tempCanvas.current, tempContext, imgUpdate, uuidv4());
    }
  }, [selectedTool, imgUpdate]);




  useWheelMove({ tempCanvas, disableScroll, dispatch, tool, selectedTool });

  let changeToTextTool = useTextTool({ scrollX, scrollY, shapes, scalingFactor, tool, tempCanvas, selectedTheme, imgUpdate, dispatch })
  useResize({ dispatch });
  useMouseOrTouchEvents({ tempCanvas, onEvent, dispatch, selectedTool, changeToTextTool, tool, disableScroll });
  useImageHandler({ tempCanvas });


  return (
    <React.Fragment>
      <canvas id="drawingCanvas" ref={mainCanvas} width={canvasWidth} height={canvasHeight}>
        <p className="noscript">
          We're sorry, this web application is currently not supported with your browser. Please use an alternate browser or download a supported <br />browser.Supported browsers:
          <a href="http://www.google.com/chrome">Google Chrome</a>, <a href="http://www.opera.com">Opera</a>,
          <a href="http://www.mozilla.com">Firefox</a>, <a href="http://www.apple.com/safari">Safari</a>, <br />and
          <a href="http://www.konqueror.org">Konqueror</a>. Also make sure your JavaScript is enabled.
        </p>
      </canvas>
      <canvas id="tempCanvas" ref={tempCanvas} width={canvasWidth} height={canvasHeight}></canvas>
    </React.Fragment>
  )
}

export default DrawCanvas;