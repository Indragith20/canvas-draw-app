class DrawText {
  constructor(tempCanvas, tempContext, callback, id) {
    console.log('Reitianl');
    this.started = false;
    this.id = id;
    console.log(this.id);
    this.initialText = '';
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.keydown = this.onKeyDown.bind(this);
    this.dblclick = this.ondblclick.bind(this);
    this.startX = null;
    this.startY = null;
  }

  onKeyDown(e) {
    this.tempContext.font = '48px serif';
    this.initialText += e.key;
    this.tempContext.fillStyle = 'white';

    this.tempContext.fillText(this.initialText, this.startX, this.startY);
    let textMetrics = this.tempContext.measureText(this.initialText);
    console.log(this.id);

    //https://stackoverflow.com/questions/15823328/html5-edit-text-on-the-canvas
    this.callback({
      id: this.id,
      type: 'text',
      x: this.startX,
      y: this.startY,
      textContent: this.initialText,
      width: Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight),
      height: Math.abs(textMetrics.fontBoundingBoxAscent) + Math.abs(textMetrics.fontBoundingBoxDescent)
    });
  }

  ondblclick(ev, enclosedElement, id) {
    // TODO: Max Width logic
    this.startX = ev._x;
    this.startY = ev._y;
    //this.id = id;
    if (enclosedElement && enclosedElement.x) {
      this.startX = enclosedElement.x + (enclosedElement.width / 2);
      this.startY = enclosedElement.y + (enclosedElement.height / 2);

      this.tempContext.textAlign = "center";
      this.tempContext.textBaseline = "middle";
      console.log(this.startX);
      console.log(this.startY);
    }
  }
}

export default DrawText;