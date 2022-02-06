class Chalk {
  constructor(tempCanvas, tempContext, callback) {
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.started = false;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
  }

  mouseMove(e) {
    if (this.started) {
      this.tempContext.lineTo(e._x, e._y);
      this.tempContext.stroke();
    }
  }

  mouseDown(e) {
    this.tempContext.beginPath();
    this.tempContext.moveTo(e._x, e._y);
    this.started = true;
  }

  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      this.callback();
    }
  }
}

export default Chalk;