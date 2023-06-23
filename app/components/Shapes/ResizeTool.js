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
      // topLeft, botttomRight, topMiddle
      return [[element.x, element.y], [element.endX, element.endY], [element.x, element.endY], [element.endX, element.y][element.endX / 2, element.y], [element.x, element.endY / 2]]
    }
  }

  matchEdges(e) {
    let edges = this.getEdges(this.element);
    console.log(edges);
  }

  mouseDown(e) {
    if (this.element) {
      this.started = true;
      this.matchEdges(e);
    }
  }

  mouseUp(e) {
    this.started = false;
  }

  mouseMove(e) {
    if (!this.started) {
      return;
    }

  }
}


export default ResizeTool;