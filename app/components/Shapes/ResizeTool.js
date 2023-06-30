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
    let bufferLimit = 5;
    if (element.type === 'rectangle') {
      // topLeft, botttomRight, topMiddle
      return [[element.x - bufferLimit, element.y - bufferLimit], [element.endX + bufferLimit, element.endY + bufferLimit], [element.x - bufferLimit, element.endY + bufferLimit], [element.endX + bufferLimit, element.y - bufferLimit],
      [(element.x + (element.width / 2)), element.y - bufferLimit], [(element.endX - (element.width / 2)), element.endY + bufferLimit],
      [element.x - bufferLimit, element.y + (element.height / 2)], [element.endX + bufferLimit, element.endY - (element.height / 2)]]
    } else {
      return [];
    }
  }

  matchEdges(e) {
    let edges = this.getEdges(this.element);
    console.log(edges);
    let isMatchFound = edges && edges.length > 0 ? edges.find(([x, y]) => {
      return x === e._x && y === e._y
    }) : false;
    console.log(isMatchFound);
    return isMatchFound;
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