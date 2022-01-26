class Arrow {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.width = null;
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
      this.callback({
        id: this.id,
        type: 'arrow',
        x: this.startX,
        y: this.startY,
        startX: Math.min(this.startX, e._x), // for drawing rectangle around arrow. Deletion purpose
        startY: Math.min(this.startY, e._y),// for drawing rectangle around arrow. Deletion purpose
        width: Math.abs(this.startX - e._x),
        height: Math.abs(this.startY - e._y),
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
    /** */
    let cospix = 0.866025404;
    let headlen = 10;
    let dx = e._x - this.startX;
    let dy = e._y - this.startY;
    let length = Math.sqrt(dy * dy + dx * dx); //length of arrow
    let angle = Math.atan2(dy, dx);
    this.tempContext.beginPath();
    this.tempContext.moveTo(this.startX, this.startY);
    this.tempContext.lineTo(e._x, e._y);
    this.tempContext.lineTo(e._x - headlen * Math.cos(angle - Math.PI / 6), e._y - headlen * Math.sin(angle - Math.PI / 6));
    this.tempContext.moveTo(e._x, e._y);
    this.tempContext.lineTo(e._x - headlen * Math.cos(angle + Math.PI / 6), e._y - headlen * Math.sin(angle + Math.PI / 6));
    this.tempContext.stroke();
    this.tempContext.closePath();
  }
}

export default Arrow;