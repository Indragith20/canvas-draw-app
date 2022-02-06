import { getDistance } from "../utils/getElementsAtPosition.js";

class Diamond {
  constructor(tempCanvas, tempContext, callback, id) {
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
    this.tempContext.setLineDash([0]);
  }

  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      let radius = getDistance(this.startX, this.startY, e._x, e._y);
      this.callback({
        id: this.id,
        type: 'diamond',
        x: this.startX,
        y: this.startY,
        width: radius * radius,
        height: radius * radius,
        endX: e._x,
        endY: e._y,
        radius
      });
    }
  }

  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
  }

  mouseMove(e) {
    if (this.started) {
      let diffX = e._x - this.startX;
      let diffY = e._y - this.startY;
      console.log(diffX, diffY)
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      this.tempContext.beginPath();
      this.tempContext.moveTo(this.startX, this.startY);
      this.tempContext.lineTo(e._x, e._y);

      this.tempContext.lineTo(diffX, diffY)
      //this.tempContext.lineTo(-e._x, -e._y);
      this.tempContext.stroke();
      this.tempContext.closePath();
    }
  }
}

export default Diamond;