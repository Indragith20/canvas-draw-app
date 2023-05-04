class Chalk {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.points = [];
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.started = false;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.tempContext.setLineDash([0]);
  }

  mouseMove(e) {
    if (this.started) {

      this.points.push([e._x, e._y]);
      this.tempContext.lineTo(e._x, e._y);
      this.tempContext.stroke();
    }
  }

  mouseDown(e) {
    this.tempContext.beginPath();
    this.startX = e._x;
    this.startY = e._y;
    this.tempContext.moveTo(e._x, e._y);
    this.started = true;
  }

  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      if (this.startX === e._x && this.startY === e._y) {
        this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
        return;
      }
      this.callback({
        id: this.id,
        type: 'chalk',
        x: this.startX,
        y: this.startY,
        drawPoints: this.points,
        endX: e._x,
        endY: e._y
      });
    }
  }
}

export default Chalk;