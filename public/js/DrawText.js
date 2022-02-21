import { drawText } from "../utils/drawShapes.js";

class DrawText {
  constructor(tempCanvas, tempContext, callback, id, selectedTheme) {
    this.started = false;
    this.id = id;
    this.initialText = '';
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.dblclick = this.ondblclick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
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

  onBlur() {
    if (this.textBox) {
      console.log('Drawing text');
      let text = this.textBox.value;
      let color = this.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';



      // TODO: Replace undefined with exact line height
      let numberOfLines = drawText(text, this.tempContext, this.startX, this.startY, Math.ceil(this.width), undefined, color);


      let textMetrics = this.tempContext.measureText(text);

      let height = Math.abs(textMetrics.fontBoundingBoxAscent) + Math.abs(textMetrics.fontBoundingBoxDescent)
      this.callback({
        id: this.id,
        type: 'text',
        x: this.startX,
        y: this.startY,
        textContent: text,
        endX: this.startX + Number(this.width),
        endY: this.startY + height,
        //width: Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight),
        width: Number(this.width),
        height: height * numberOfLines
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
    // TODO: Currently implemented for rectangle enclosed element. Check possibility for all other shapes
    this.startX = ev.x;
    this.startY = ev.y;

    this.textBoxContainer.style.top = ev.y;
    this.textBoxContainer.style.left = ev.x;
    this.textBoxContainer.style.display = 'block';
    this.textBox.focus();

    if (enclosedElement && enclosedElement.type === 'rectangle') {
      // to have equi space around the horizontal edge
      let diffX = Math.abs(Math.abs(enclosedElement.x) - Math.abs(ev._x));
      let enclosedX = Math.abs(Math.abs(enclosedElement.endX) - diffX);
      let diffY = Math.abs(Math.abs(enclosedElement.y) - Math.abs(ev._y));
      let enclosedY = Math.abs(Math.abs(enclosedElement.endY) - diffY);

      this.width = `${Math.abs(enclosedX - ev._x)}`;
      this.height = `${Math.abs(enclosedY - ev._y)}`;

      this.textBoxContainer.style.width = this.width + 'px';
      this.textBoxContainer.style.height = this.height + 'px';
    } else {
      // TODO: to have equi space around the horizontal edge

      this.width = `${Math.abs(this.tempCanvas.width - ev.x) - 10}`;
      this.height = `${Math.abs(this.tempCanvas.height - ev.y) - 10}`;
      this.textBoxContainer.style.width = this.width + 'px';
      this.textBoxContainer.style.height = this.height + 'px';
    }
  }
}

export default DrawText;