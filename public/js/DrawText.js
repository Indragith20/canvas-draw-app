import { drawText } from "../utils/drawShapes.js";

class DrawText {
  constructor(tempCanvas, tempContext, callback, id, selectedTheme) {
    this.started = false;
    this.id = id;
    this.initialText = '';
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.keydown = this.onKeyDown.bind(this);
    this.dblclick = this.ondblclick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    //this.wrapText = this.wrapText.bind(this);
    this.textBoxContainer = document.getElementById('textBoxContainerId');
    this.textBox = document.getElementById('textAreaId');
    this.startX = null;
    this.startY = null;
    this.selectedTheme = selectedTheme;

    this.addEventListener();
  }

  addEventListener() {
    this.textBox.addEventListener('blur', this.onBlur);
  }

  onKeyDown(e) {
    this.tempContext.font = '48px serif';
    this.initialText += e.key;
    this.tempContext.fillStyle = 'white';

    this.tempContext.fillText(this.initialText, this.startX, this.startY);
    let textMetrics = this.tempContext.measureText(this.initialText);

    //https://stackoverflow.com/questions/15823328/html5-edit-text-on-the-canvas
    this.callback({
      id: this.id,
      type: 'text',
      x: this.startX,
      y: this.startY,
      textContent: this.initialText,
      //width: Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight),
      width: this.width,
      height: Math.abs(textMetrics.fontBoundingBoxAscent) + Math.abs(textMetrics.fontBoundingBoxDescent)
    });
  }

  wrapText(text, x, y, maxWidth, lineHeight) {
    let words = text.split('');
    let line = '';


    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + '';
      let metrics = this.tempContext.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        this.tempContext.fillText(line, x, y);
        line = words[n] + '';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    this.tempContext.fillText(line, x, y);
  }

  onBlur() {
    if (this.textBox) {
      console.log('Drawing text');
      let text = this.textBox.value;
      let color = this.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
      drawText(text, this.tempContext, this.startX, this.startY, Math.ceil(this.width), 24, color);


      let textMetrics = this.tempContext.measureText(text);
      this.callback({
        id: this.id,
        type: 'text',
        x: this.startX,
        y: this.startY,
        textContent: text,
        //width: Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight),
        width: this.width,
        height: Math.abs(textMetrics.fontBoundingBoxAscent) + Math.abs(textMetrics.fontBoundingBoxDescent)
      });

      // resetting the textarea values
      this.textBox.removeEventListener('blur', this.onBlur);
      this.textBoxContainer.style.top = '0px';
      this.textBoxContainer.style.left = '0px';
      this.textBoxContainer.style.display = 'none';
      this.textBox.value = '';
      this.textBoxContainer = null;
      this.textBox = null;
    }
  }

  ondblclick(ev, enclosedElement) {
    // TODO: Max Width logic
    this.startX = ev.x;
    this.startY = ev.y;

    this.textBoxContainer.style.top = ev.y;
    this.textBoxContainer.style.left = ev.x;
    this.textBoxContainer.style.display = 'block';
    this.textBox.focus();

    if (enclosedElement && enclosedElement.type === 'rectangle') {
      this.width = `${Math.abs(enclosedElement.endX - ev._x) - 10}`;
      this.height = `${Math.abs(enclosedElement.endY - ev._y) - 10}`;
      this.textBoxContainer.style.width = this.width + 'px';
      this.textBoxContainer.style.height = this.height + 'px';
    } else {
      this.width = `${Math.abs(this.tempCanvas.width - ev.x) - 10}`;
      this.height = `${Math.abs(this.tempCanvas.height - ev.y) - 10}`;
      this.textBoxContainer.style.width = this.width + 'px';
      this.textBoxContainer.style.height = this.height + 'px';
    }
  }
}

export default DrawText;