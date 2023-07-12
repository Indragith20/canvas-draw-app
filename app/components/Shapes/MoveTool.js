import { drawArrow } from "../utils/drawArrow.js";
import { drawDiamond, drawText } from "../utils/drawShapes.js";
import { changeFromOneScalingFactor } from "../utils/redrawCanvas.js";
import DrawShapeOnCanvas from "./DrawShapeOnCanvas.js";

class MoveTool extends DrawShapeOnCanvas {
  constructor(tempCanvas, tempContext, callback, element, theme, scalingFactor) {
    super();
    this.id = element.id;
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
    this.element = element;
    this.selectedTheme = theme;
    this.scalingFactor = scalingFactor;
  }
  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
    // Temp Check. Need to adopt to all this.elements. doing this for rectangle check initial.
    let modX = changeFromOneScalingFactor(this.startX, this.scalingFactor);
    let modY = changeFromOneScalingFactor(this.startY, this.scalingFactor);
    this.diffX = this.element.x - modX;
    this.diffY = this.element.y - modY;
    e._x = e._x + this.diffX;
    e._y = e._y + this.diffY;
    console.log('dioff', this.diffX, this.diffY);
    this.drawExisitingElementOnTemp();
  }

  mouseUp(e) {
    e.stopPropagation();
    if (this.started) {
      this.mouseMove(e);
      // For rectangle
      if (this.element.type === 'rectangle') {
        this.callback({
          ...this.element,
          id: this.element.id,
          type: 'rectangle',
          x: e._x,
          y: e._y,
          width: this.element.width,
          height: this.element.height,
          endX: e._x + this.element.width,
          endY: e._y + this.element.height
        });
      } else if (this.element.type === 'arrow') {
        let endX = this.element.endX > this.element.x ? e._x + this.element.width : e._x - this.element.width;
        let endY = this.element.endY > this.element.y ? e._y + this.element.height : e._y - this.element.height;
        this.callback({
          ...this.element,
          id: this.id,
          type: 'arrow',
          x: e._x,
          y: e._y,
          startX: Math.min(endX, e._x), // for drawing rectangle around arrow. Deletion purpose
          startY: Math.min(endY, e._y),// for drawing rectangle around arrow. Deletion purpose
          width: this.element.width,
          height: this.element.height,
          endX,
          endY
        });
      } else if (this.element.type === 'line') {
        let endX = this.element.endX > this.element.x ? e._x + this.element.width : e._x - this.element.width;
        let endY = this.element.endY > this.element.y ? e._y + this.element.height : e._y - this.element.height;
        this.callback({
          ...this.element,
          id: this.id,
          type: 'line',
          x: e._x,
          y: e._y,
          startX: Math.min(e._x, endX), // for drawing rectangle around arrow. Deletion purpose
          startY: Math.min(e._y, endY),// for drawing rectangle around arrow. Deletion purpose
          width: this.element.width, // Check if it is wrong calculation.
          height: this.element.height, //Check if it is wrong calculation
          endX,
          endY
        });
      } else if (this.element.type === 'circle') {
        this.callback({
          ...this.element,
          id: this.id,
          type: 'circle',
          x: e._x,
          y: e._y,
          radius: this.element.radius,
          width: this.element.width,
          height: this.element.height
        });
      } else if (this.element.type === 'diamond') {
        this.callback({
          ...this.element,
          id: this.id,
          type: 'diamond',
          x: e._x,
          y: e._y,
          startX: e._x - (this.element.width / 2),
          startY: e._y - (this.element.width / 2),
          // xCenter: this.startX,
          // yCenter: e._y,
          width: this.element.width,
          height: this.element.height,
          endX: e._x + (this.element.width / 2),
          endY: e._y + this.element.height
        });
      } else if (this.element.type === 'text') {
        this.callback({
          ...this.element,
          id: this.id,
          type: 'text',
          x: e._x,
          y: e._y,
          textContent: this.element.textContent,
          endX: e._x + Number(this.element.width),
          endY: e._y + this.element.height,
          //width: Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight),
          width: Number(this.element.width),
          height: this.element.height
        });
      }

      this.started = false;
    }
  }

  mouseMove(e) {
    if (!this.started) {
      return;
    }
    e._x = e._x + this.diffX;
    e._y = e._y + this.diffY;
    e.stopPropagation();
    if (this.element.type === 'rectangle') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      this.tempContext.strokeRect(e._x, e._y, this.element.width, this.element.height);
    } else if (this.element.type === 'arrow') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let endX;
      let endY;
      if (this.element.endX > this.element.x) {
        endX = e._x + this.element.width;
      } else {
        endX = e._x - this.element.width;
      }

      if (this.element.endY > this.element.y) {
        endY = e._y + this.element.height;
      } else {
        endY = e._y - this.element.height;
      }
      drawArrow(e._x, e._y, endX, endY, this.tempContext);
    } else if (this.element.type === 'line') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let endX;
      let endY;
      if (this.element.endX > this.element.x) {
        endX = e._x + this.element.width;
      } else {
        endX = e._x - this.element.width;
      }

      if (this.element.endY > this.element.y) {
        endY = e._y + this.element.height;
      } else {
        endY = e._y - this.element.height;
      }
      this.tempContext.beginPath();
      this.tempContext.moveTo(e._x, e._y);
      this.tempContext.lineTo(endX, endY);
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === 'circle') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      this.tempContext.beginPath();
      this.tempContext.arc(e._x, e._y, this.element.radius, 0, 2 * Math.PI);
      this.tempContext.stroke();
    } else if (this.element.type === 'diamond') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      drawDiamond(e._x, e._y, this.element.width / 2, this.tempContext)
    } else if (this.element.type === 'text') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let color = this.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
      drawText(this.element.textContent, this.tempContext, e._x, e._y, this.element.width, undefined, color)
    }
  }
}

export default MoveTool;