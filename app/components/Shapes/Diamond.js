import { drawDiamond } from "../utils/drawShapes.js";

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
      let width = (Math.abs(this.startX - e._x)) * 2;
      // width and height will be same for the diamond 
      this.callback({
        id: this.id,
        type: 'diamond',
        x: this.startX,
        y: e._y,
        startX: this.startX - (width / 2),
        startY: e._y - (width / 2),
        // xCenter: this.startX,
        // yCenter: e._y,
        width: width,
        height: width,
        endX: e._x,
        endY: e._y
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
      let size = this.startX - e._x;

      let xCenter = this.startX;
      let yCenter = e._y;


      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      // this.tempContext.beginPath();
      // this.tempContext.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));

      // for (var i = 1; i <= numberOfSides; i += 1) {
      //   this.tempContext.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
      // }

      // this.tempContext.stroke();

      drawDiamond(xCenter, yCenter, size, this.tempContext)

    }
  }
}

export default Diamond;