class Rect {
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
      if (this.width !== null && this.height !== null) {
        this.callback({
          id: this.id,
          type: 'rectangle',
          x: Math.min(this.startX, e._x),
          y: Math.min(this.startY, e._y),
          width: this.width,
          height: this.height,
          endX: Math.max(this.startX, e._x),
          endY: Math.max(this.startY, e._y)
        });
      }

    }
  }

  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
  }

  mouseMove(e) {
    if (this.started) {
      let x = Math.min(e._x, this.startX);
      let y = Math.min(e._y, this.startY);
      let width = Math.abs(e._x - this.startX);
      let height = Math.abs(e._y - this.startY);

      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);

      if (!width || !height) {
        return;
      }
      this.width = width;
      this.height = height;
      this.tempContext.strokeRect(x, y, width, height);
    }
  }
}

export default Rect;