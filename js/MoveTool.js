class MoveTool {
  constructor(tempCanvas, tempContext, callback, element) {
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
    //this.drawExisitingElementOnTemp();
  }

  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
    // Temp Check. Need to adopt to all shapes. doing this for rectangle check initial.
    this.diffX = Math.abs(this.element.x - this.startX);
    this.diffY = Math.abs(this.element.y - e.y);
    this.drawExisitingElementOnTemp();
  }

  mouseUp(e) {
    e.stopPropagation();
    if (this.started) {
      this.mouseMove(e);
      // For rectangle
      this.callback({
        id: this.element.id,
        type: 'rectangle',
        x: e._x,
        y: e._y,
        width: this.element.width,
        height: this.element.height,
        endX: e._x,
        endY: e._y
      });
      this.started = false;
    }
  }

  mouseMove(e) {
    if (!this.started) {
      return;
    }
    e.stopPropagation();
    if (this.element.type === 'rectangle') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      this.tempContext.strokeRect(e._x, e._y, this.element.width, this.element.height);
    }
  }




  drawExisitingElementOnTemp() {
    //  type === 'rectangle'
    if (this.element.type === 'rectangle') {
      this.tempContext.strokeRect(this.element.x, this.element.y, this.element.width, this.element.height);
    }
  }
}

export default MoveTool;