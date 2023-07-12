import { RESIZE_MAPPING } from '~/constants/resizeMapping';
import { drawArrow } from '../utils/drawArrow';
import { drawDiamond, drawText } from '../utils/drawShapes';
import DrawShapeOnCanvas from './DrawShapeOnCanvas';

class ResizeTool extends DrawShapeOnCanvas {
  constructor(tempCanvas, tempContext, callback, id, element, cursorPosition) {
    super();
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.width = null;
    this.height = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.getModifiedRect = this.getModifiedRect.bind(this);
    this.getResizeCircleCoords = this.getResizeCircleCoords.bind(this);
    this.element = element;
    console.log('cursor intial posio', cursorPosition)
    this.cursorPositionOnElement = cursorPosition;
  }

  mouseDown(ev) {
    if (this.element && ev._cursorPositonOnElement !== null) {
      this.started = true;
      this.startX = ev._x;
      this.startY = ev._y;
      //this.drawExisitingElementOnTemp();
    }
  }

  mouseUp(ev) {
    console.log('mouse up called');
    if (this.started) {
      let diffX = this.startX - ev._x;
      let diffY = this.startY - ev._y;
      if (this.element.type === 'rectangle') {
        let modifiedRect = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
        this.callback({ ...modifiedRect, id: this.element.id, isResizedElement: true });
      } else if (this.element.type === 'circle') {
        let modifiedCircle = this.getResizeCircleCoords(this.element, this.cursorPositionOnElement, { diffX, diffY });
        this.callback({ ...modifiedCircle, id: this.element.id, isResizedElement: true });
      } else if (this.element.type === 'arrow' || this.element.type === 'line') {
        let modifiedElement = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
        this.callback({ ...modifiedElement, startX: modifiedElement.x, startY: modifiedElement.y, id: this.element.id, isResizedElement: true })
      } else if (this.element.type === 'diamond') {
        let modifiedRect = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
        let startX = this.startX - (modifiedRect.width / 2);
        let startY = ev._y - (modifiedRect.width / 2);
        this.callback({ ...modifiedRect, id: this.element.id, isResizedElement: true, startX, startY, height: modifiedRect.width });
      }
    }
    this.started = false;
  }

  getModifiedRect(element, cursorPosition, { diffX, diffY }) {
    switch (cursorPosition) {
      case RESIZE_MAPPING.BOTTOM_MIDDLE:
        return { ...element, height: element.height - diffY, endY: element.endY - diffY };
      case RESIZE_MAPPING.TOP_MIDDLE:
        return { ...element, height: element.height + diffY, y: element.y - diffY };
      case RESIZE_MAPPING.LEFT_MIDDLE:
        return { ...element, width: element.width + diffX, x: element.x - diffX };
      case RESIZE_MAPPING.RIGHT_MIDDLE:
        return { ...element, width: element.width - diffX, endX: element.endX - diffX };
      case RESIZE_MAPPING.BOTTOM_LEFT:
        return { ...element, height: element.height - diffY, endY: element.endY - diffY, x: element.x - diffX, width: element.width + diffX };
      case RESIZE_MAPPING.BOTTOM_RIGHT:
        return { ...element, height: element.height - diffY, endY: element.endY - diffY, endX: element.endX - diffX, width: element.width - diffX };
      case RESIZE_MAPPING.TOP_LEFT:
        return { ...element, height: element.height + diffY, y: element.y - diffY, x: element.x - diffX, width: element.width + diffX };
      case RESIZE_MAPPING.TOP_RIGHT:
        return { ...element, height: element.height + diffY, y: element.y - diffY, endX: element.endX - diffX, width: element.width - diffX };
      default:
        return element;
    }
  }

  getResizeCircleCoords(element, cursorPosition, { diffX, diffY }) {
    //let element = this.getModifiedRect(circleElement, cursorPosition, { diffX, diffY })
    switch (cursorPosition) {
      case RESIZE_MAPPING.BOTTOM_MIDDLE:
      case RESIZE_MAPPING.BOTTOM_LEFT:
      case RESIZE_MAPPING.BOTTOM_RIGHT: {
        let radius = element.radius - diffY;
        return { ...element, height: radius * radius, width: radius * radius, radius };
      }
      case RESIZE_MAPPING.TOP_MIDDLE:
      case RESIZE_MAPPING.TOP_LEFT:
      case RESIZE_MAPPING.TOP_RIGHT: {
        let radius = element.radius + diffY;
        return { ...element, height: radius * radius, width: radius * radius, radius };
      }
      case RESIZE_MAPPING.LEFT_MIDDLE: {
        let radius = element.radius + diffX;
        return { ...element, height: radius * radius, width: radius * radius, radius };
      }
      case RESIZE_MAPPING.RIGHT_MIDDLE: {
        let radius = element.radius - diffX;
        return { ...element, height: radius * radius, width: radius * radius, radius };
      }
      default:
        return element;
    }
  }

  mouseMove(ev) {
    if (!this.started) {
      return;
    }
    console.log('Mouse move', this.cursorPositionOnElement);
    let diffX = this.startX - ev._x;
    let diffY = this.startY - ev._y;
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    if (this.element.type === 'rectangle') {
      let modifiedElement = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
      this.tempContext.beginPath();
      this.tempContext.strokeRect(modifiedElement.x, modifiedElement.y, modifiedElement.width, modifiedElement.height);
    } else if (this.element.type === 'circle') {
      let modifiedElement = this.getResizeCircleCoords(this.element, this.cursorPositionOnElement, { diffX, diffY });
      this.tempContext.beginPath();
      this.tempContext.arc(modifiedElement.x, modifiedElement.y, modifiedElement.radius, 0, 2 * Math.PI);
      this.tempContext.stroke();
    } else if (this.element.type === 'arrow') {
      let modifiedElement = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
      let { x, y, endX, endY } = modifiedElement;
      drawArrow(x, y, endX, endY, this.tempContext);
    } else if (this.element.type === 'line') {
      let modifiedElement = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
      let { x, y, endX, endY } = modifiedElement;
      this.tempContext.beginPath();
      this.tempContext.moveTo(x, y);
      this.tempContext.lineTo(endX, endY);
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === 'diamond') {
      let modifiedElement = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
      let xCenter = modifiedElement.x;
      let yCenter = modifiedElement.y;
      let size = modifiedElement.x - modifiedElement.endX;
      drawDiamond(xCenter, yCenter, size, this.tempContext);
    }
  }
}


export default ResizeTool;