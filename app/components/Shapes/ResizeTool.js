import { RESIZE_MAPPING } from '~/constants/resizeMapping';
import { drawArrow } from '../utils/drawArrow';
import { drawDiamond, drawText } from '../utils/drawShapes';

class ResizeTool {
  constructor(tempCanvas, tempContext, callback, id, element, cursorPosition) {
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
    this.drawExisitingElementOnTemp = this.drawExisitingElementOnTemp.bind(this);
    this.getModifiedRect = this.getModifiedRect.bind(this);
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
        // this.callback({
        //   ...this.element,
        //   id: this.element.id,
        //   type: 'rectangle',
        //   x: e._x,
        //   y: e._y,
        //   width: this.element.width,
        //   height: this.element.height,
        //   endX: e._x + this.element.width,
        //   endY: e._y + this.element.height
        // });
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

  mouseMove(ev) {
    if (!this.started) {
      return;
    }
    console.log('Mouse move', this.cursorPositionOnElement);
    let diffX = this.startX - ev._x;
    let diffY = this.startY - ev._y;
    if (this.element.type === 'rectangle') {
      console.log('clearing rect', this.tempCanvas, this.tempCanvas.height);
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let modifiedElement = this.getModifiedRect(this.element, this.cursorPositionOnElement, { diffX, diffY });
      this.tempContext.beginPath();
      this.tempContext.strokeRect(modifiedElement.x, modifiedElement.y, modifiedElement.width, modifiedElement.height);
    }
  }

  drawExisitingElementOnTemp() {
    //  type === 'rectangle'
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    console.log('drawing existiong elemet', this.element);
    if (this.element.type === 'rectangle') {
      console.log('stroking rect');
      this.tempContext.beginPath();
      this.tempContext.strokeRect(this.element.x, this.element.y, this.element.width, this.element.height);
    } else if (this.element.type === 'arrow') {
      let { x, y, endX, endY } = this.element;
      drawArrow(x, y, endX, endY, this.tempContext);
    } else if (this.element.type === 'line') {
      this.tempContext.beginPath();
      this.tempContext.moveTo(this.element.x, this.element.y);
      this.tempContext.lineTo(this.element.endX, this.element.endY);
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === 'circle') {
      this.tempContext.beginPath();
      this.tempContext.arc(this.element.x, this.element.y, this.element.radius, 0, 2 * Math.PI);
      this.tempContext.stroke();
    } else if (this.element.type === 'diamond') {
      let xCenter = this.element.x;
      let yCenter = this.element.y;
      let size = this.element.x - this.element.endX;
      drawDiamond(xCenter, yCenter, size, this.tempContext);
    } else if (this.element.type === 'text') {
      let color = this.selectedTheme === 'dark' ? '#FFFFFF' : '#000000';
      drawText(this.element.textContent, this.tempContext, this.element.x, this.element.y, this.element.width, undefined, color);
    }
  }
}


export default ResizeTool;