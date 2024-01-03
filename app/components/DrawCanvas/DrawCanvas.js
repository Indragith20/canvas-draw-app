import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { changeToOneScalingFactor, printCanvas } from '../utils/redrawCanvas';
import DrawAreaContext, { UPDATE_CANVAS_AREA, UPDATE_SELECTED_TOOL } from './DrawAreaContext';
import Chalk from '../Shapes/Chalk';
import Line from '../Shapes/Line';
import Rect from '../Shapes/Rectangle';
import Arrow from '../Shapes/Arrow';
import DrawText from '../Shapes/DrawText';
import Circle from '../Shapes/Circle';
import Diamond from '../Shapes/Diamond';
import { getUpdatedPerformedActions } from '../utils/common';
import { changeCoordsForMoveTool, changeDrawenImageCoords, checkAndGetFilteredShapes, detectDragging, drawOuterRect, getEdgesForSelectedElement, restoreContext } from './utils';
import { getChalkRectValues, getElementsAtPosition } from '../utils/getElementsAtPosition';
import MoveTool from '../Shapes/MoveTool';
import useClickHandler from './hooks/useClickHandler';
import useWheelMove from './hooks/useWheelMove';
import useResize from './hooks/useResize';
import useTextTool from './hooks/useTextTool';

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



function DrawCanvas({ selectedTheme, updateShape, keepLastSelected, mouseMove }) {

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
    canvasHeight, canvasWidth, disableScroll
  } = state;


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
    console.log("drawenImage", drawenImage)
    if (drawenImage && drawenImage.type) {
      let { scrollX, scrollY, scalingFactor, shapes, selectedElement, performedActions } = state;

      let modifiedImage = changeDrawenImageCoords(drawenImage, { scrollX, scrollY, scalingFactor })

      let [filteredShapes, isExistingShape] = checkAndGetFilteredShapes(shapes, modifiedImage, { draggingElement, selectedTextEle, selectedElement });

      let updatedPerformedActions = getUpdatedPerformedActions(performedActions, isExistingShape ? [{ ...draggingElement.current }, { ...modifiedImage, isExistingShape: true }] : [modifiedImage]);

      console.log("modifed", modifiedImage);
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
  }, [dispatch, drawImage, state, updateShape])

  const onMoveElement = useCallback((ev, currentCanvasState) => {
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
  }, [dispatch, imgUpdate]);

  const onEvent = useCallback((ev) => {
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
        //this.onResizeElement(ev);
      } else if (tool.current) {
        let func = tool.current[eventTypeMapping[ev.type]];
        if (func) {
          func(ev);
        }
      } else if (selectedElement && (selectedElement.type !== 'text' || selectedElement.type === 'chalk')) {
        // let cursorPositonOnElement = this.getCursorPositionAndUpdateCursor(ev);
        // this.onResizeElement(ev, cursorPositonOnElement);
      }
    }
  }, [mouseMove, onMoveElement, state, selectedTheme])

  useEffect(() => {
    if (tempCanvas.current && tempCanvas.current.width > 0 && tempCanvas.current.height > 0) {
      let tempContext = tempCanvas.current.getContext('2d');
      let mainContext = mainCanvas.current.getContext('2d');
      tempContext.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';// Default line color. 
      tempContext.lineWidth = lineWidth;// Default stroke weight. 

      // Fill transparent canvas with dark grey (So we can use the color to erase). 
      tempContext.fillStyle = selectedTheme === 'dark' ? "#424242" : '#FFFFFF';
      tempContext.fillRect(0, 0, tempCanvas.current.width, tempCanvas.current.height);//Top, Left, Width, Height of canvas

      printCanvas({ shapes, tempContext, bufferX: scrollX, bufferY: scrollY, baseLineHeight, baseFontSize, selectedTheme, scalingFactor, canvasHeight, canvasWidth, lineWidth });

      mainContext.clearRect(0, 0, mainCanvas.current.width, mainCanvas.current.height);
      mainContext.drawImage(tempCanvas.current, 0, 0);
      restoreContext(tempContext, tempCanvas.current.width, tempCanvas.current.height, selectedTheme, lineWidth);
    }

  }, [shapes, baseLineHeight, baseFontSize, scalingFactor, lineWidth, canvasHeight, canvasWidth, selectedTheme, scrollX, scrollY]);


  function resetDraggingValues() {
    draggingElement.current = null;
    mouseXPosition.current = null;
    mouseYPosition.current = null;
    selectedTextEle.current = null;
  }


  useEffect(() => {

    let canvasRef = tempCanvas.current;

    canvasRef.addEventListener('mousedown', onEvent, false);
    canvasRef.addEventListener('mousemove', onEvent, false);
    canvasRef.addEventListener('mouseup', onEvent, false);


    return () => {
      canvasRef.removeEventListener('mousedown', onEvent, false);
      canvasRef.removeEventListener('mousemove', onEvent, false);
      canvasRef.removeEventListener('mouseup', onEvent, false);
    }
  }, [onEvent]);


  useEffect(() => {
    let tempContext = tempCanvas.current.getContext('2d');
    restoreContext(tempContext, tempCanvas.width, tempCanvas.height, selectedTheme, lineWidth)
  }, [selectedTheme, lineWidth, selectedTool])


  useEffect(() => {
    if (selectedTool === 'select') {
      tool.current = null;
    } else if (selectedTool !== 'move' && selectedTool !== 'text') {
      let tempContext = tempCanvas.current.getContext('2d');
      let toolSelected = tools.current[selectedTool];
      tool.current = new toolSelected(tempCanvas.current, tempContext, imgUpdate, uuidv4());
    }
  }, [selectedTool, imgUpdate]);

  // NOTE: selectedtool in click handler and wheel move. If possible refactor the early return

  let edgesForResize = useClickHandler({ tempCanvas, tool, scalingFactor, scrollX, scrollY, selectedTool, shapes, selectedElement, selectedTheme, lineWidth, dispatch });
  useWheelMove({ tempCanvas, disableScroll, dispatch, tool, selectedTool });
  useTextTool({ scrollX, scrollY, shapes, scalingFactor, tool, tempCanvas, selectedTheme, imgUpdate, dispatch })
  useResize({ dispatch });

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