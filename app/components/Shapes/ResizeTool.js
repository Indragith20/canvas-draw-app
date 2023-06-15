class ResizeTool {
  constructor(tempCanvas, tempContext, callback, id, element) {
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
    this.element = element;
  }

  getEdges(element) {
    if (element.type === 'rectangle') {
      return [[element.x, element.y], [element.endX, element.endY], [element.endX / 2, element.y], [element.x, element.endY / 2]]
    }
  }

  mouseDown(e) {
    this.started = true;
  }

  mouseUp(e) { }

  mouseMove(e) {
    if (!this.started) {

    }
  }
}


export default ResizeTool;