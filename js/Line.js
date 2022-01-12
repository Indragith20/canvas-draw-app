class Line {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.tempContext.setLineDash([0]); // clearig line dashed
  }

  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      this.callback({
        id: this.id,
        type: 'line',
        x: this.startX,
        y: this.startY,
        startX: Math.min(this.startX, e._x), // for drawing rectangle around arrow. Deletion purpose
        startY: Math.min(this.startY, e._y),// for drawing rectangle around arrow. Deletion purpose
        width: Math.abs(this.startX - e._x), // Check if it is wrong calculation.
        height: Math.abs(this.startY - e._y), //Check if it is wrong calculation
        endX: e._x,
        endY: e._y
      });
    }
  }

  mouseDown(e) {
    this.startX = e._x;
    this.startY = e._y;
    this.started = true;
  }

  mouseMove(e) {
    if (!this.started) {
      return;
    }
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    this.tempContext.beginPath();
    this.tempContext.moveTo(this.startX, this.startY);
    this.tempContext.lineTo(e._x, e._y);
    this.tempContext.stroke();
    this.tempContext.closePath();
  }
}

export default Line;