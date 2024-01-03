import { changeFromOneScalingFactor, changeToOneScalingFactor } from '../utils/redrawCanvas';


function changeDrawenImageCoords(drawenImage, { scrollX, scrollY, scalingFactor }) {
  let modifiedImage = {
    ...drawenImage,
    x: changeToOneScalingFactor(drawenImage.x - scrollX, scalingFactor),
    y: changeToOneScalingFactor(drawenImage.y - scrollY, scalingFactor),
    endX: changeToOneScalingFactor(drawenImage.endX - scrollX, scalingFactor),
    endY: changeToOneScalingFactor(drawenImage.endY - scrollY, scalingFactor),
    startX: changeToOneScalingFactor(drawenImage.startX - scrollX, scalingFactor),
    startY: changeToOneScalingFactor(drawenImage.startY - scrollY, scalingFactor),
    radius: changeToOneScalingFactor(drawenImage.radius, scalingFactor),
    width: drawenImage.width ? changeToOneScalingFactor(drawenImage.width, scalingFactor) : null,
    height: drawenImage.height ? changeToOneScalingFactor(drawenImage.height, scalingFactor) : null,
    scalingFactor: scalingFactor
  }

  if (drawenImage.type === 'chalk') {
    modifiedImage = {
      ...modifiedImage,
      drawPoints: drawenImage.drawPoints.map(point => {
        return { x: changeToOneScalingFactor(point[0] - scrollX, scalingFactor), y: changeToOneScalingFactor(point[1] - scrollY, scalingFactor) }
      })
    }
  }

  return modifiedImage;
}


function checkAndGetFilteredShapes(shapes, currentShape, { draggingElement, selectedTextEle, selectedElement }) {
  let isExistingShape = false;
  let filteredShapes = shapes.filter(shape => {
    if (shape.id === currentShape.id) {
      isExistingShape = true;
      return null;
    } else {
      return shape;
    }
  });

  // While dragging we are resetting the shape. so needed to check this here
  if (draggingElement.current) {
    isExistingShape = draggingElement.current.id === currentShape.id ? true : false;
  }

  // While Editing we are removing the shape so we need to check this here
  if (selectedTextEle.current) {
    isExistingShape = selectedTextEle.current === currentShape.id ? true : false;
  }

  // while resizing we might be updating the existing shape
  if (selectedElement && currentShape.isResizedElement) {
    isExistingShape = selectedElement.id === currentShape.id ? true : false;
    delete currentShape.isResizedElement;
  }


  return [filteredShapes, isExistingShape];
}


function detectDragging(ev, selectedTool, { mouseXPosition, mouseYPosition }) {
  let isUserDragging = false;
  if (selectedTool === 'select' || selectedTool === 'move') {
    if (ev.type === 'mousedown' || ev.type === 'touchstart') {
      mouseXPosition.current = ev._x;
      mouseYPosition.current = ev._y;
    } else if (ev.type === 'mousemove' || ev.type === 'touchmove') {
      if (mouseYPosition.current && mouseXPosition.current) {
        let diffX = Math.abs(mouseXPosition.current - ev._x);
        let diffY = Math.abs(mouseYPosition.current - ev._y);
        if (diffX > 20 || diffY > 20) {
          isUserDragging = true;
        }
      }
    } else {
      isUserDragging = false;
      mouseXPosition.current = null;
      mouseYPosition.current = null;
    }
  } else {
    isUserDragging = false;
    mouseXPosition.current = null;
    mouseYPosition.current = null;
  };
  return isUserDragging;
}


function changeCoordsForMoveTool(selectedElement, scalingFactor) {
  let modifiedSelectedElement = {
    ...selectedElement,
    x: changeFromOneScalingFactor(selectedElement.x, scalingFactor),
    y: changeFromOneScalingFactor(selectedElement.y, scalingFactor),
    endX: changeFromOneScalingFactor(selectedElement.endX, scalingFactor),
    endY: changeFromOneScalingFactor(selectedElement.endY, scalingFactor),
    startX: changeFromOneScalingFactor(selectedElement.startX, scalingFactor),
    startY: changeFromOneScalingFactor(selectedElement.startY, scalingFactor),
    radius: changeFromOneScalingFactor(selectedElement.radius, scalingFactor),
    width: selectedElement.width ? changeFromOneScalingFactor(selectedElement.width, scalingFactor) : null,
    height: selectedElement.height ? changeFromOneScalingFactor(selectedElement.height, scalingFactor) : null,
    scalingFactor: scalingFactor
  }
  if (modifiedSelectedElement.type === 'chalk') {
    modifiedSelectedElement = {
      ...modifiedSelectedElement,
      drawPoints: modifiedSelectedElement.drawPoints.map(point => {
        return { x: changeFromOneScalingFactor(point.x, scalingFactor), y: changeFromOneScalingFactor(point.y, scalingFactor) }
      })
    }
  }

  return modifiedSelectedElement;
}

function restoreContext(ctx, width, height, selectedTheme, lineWidth) {
  ctx.restore();
  ctx.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
  ctx.fillStyle = selectedTheme === 'dark' ? "#424242" : '#000000';
  ctx.lineWidth = lineWidth;
  ctx.setLineDash([]);
  ctx.clearRect(0, 0, width, height);
}


export { changeDrawenImageCoords, checkAndGetFilteredShapes, detectDragging, changeCoordsForMoveTool, restoreContext };