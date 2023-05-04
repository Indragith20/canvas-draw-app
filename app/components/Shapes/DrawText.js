class DrawText {
  constructor(tempCanvas, tempContext, callback, id, selectedTheme) {
    this.started = false;

    this.id = id;
    console.log(this.id);
    this.initialText = '';
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.dblclick = this.ondblclick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.textBoxContainer = document.getElementById('textBoxContainerId');
    this.textBox = document.getElementById('textAreaId');
    this.startX = null;
    this.startY = null;
    this.selectedTheme = selectedTheme;

    this.addEventListener();
  }

  addEventListener() {
    this.textBox.addEventListener('blur', this.onBlur);
    this.textBox.addEventListener('click', this.onClick);
  }

  removeEventListener() {
    this.textBox.removeEventListener('blur', this.onBlur);
    this.textBox.removeEventListener('click', this.onClick);
  }

  onClick(e) {
    e.stopPropagation();
  }

  onBlur() {
    if (this.textBox) {
      // TODO: Need to find optimized way
      let text = this.textBox.innerHTML.replace(/<br><\/div>/g, "").replace(/<div>/g, "\n").replace(/<\/div>/g, "").replace(/<br>/g, "\n").replace(/\&nbsp;/g, ' ');
      //let color = this.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';

      if (text && text !== '') {
        console.log(text);

        // TODO: Replace undefined with exact line height
        let textareaStyle = window.getComputedStyle(this.textBox);

        let width = Math.ceil(Number(textareaStyle.width.slice(0, -2)));
        let height = Math.ceil(Number(textareaStyle.height.slice(0, -2)));
        //let numberOfLines = drawText(text, this.tempContext, tetxtareaClientStyle.x, tetxtareaClientStyle.y, Math.ceil(width), undefined, color, this.baseFontSize);


        //let textMetrics = this.tempContext.measureText(text);

        // Adding buffer 10 to the height and width values
        //let height = Math.abs(textMetrics.fontBoundingBoxAscent) + Math.abs(textMetrics.fontBoundingBoxDescent) + 10;
        //let width = Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight) + 10;
        this.callback({
          id: this.id,
          type: 'text',
          x: this.tetxtareaClientStyle.left,
          y: this.tetxtareaClientStyle.top + 10,
          textContent: text,
          innerHtml: this.textBox.innerHTML,
          endX: this.startX + width,
          endY: this.startY + height,
          //width: Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight),
          width: width,
          height: height
        });
      }


      // resetting the textarea values
      // this.textBox.removeEventListener('blur', this.onBlur);
      this.removeEventListener();
      this.textBoxContainer.style.top = '0px';
      this.textBoxContainer.style.left = '0px';
      this.textBoxContainer.style.display = 'none';
      // this.textBoxContainer.style.minWidth = '1px';
      // this.textBoxContainer.style.minHeight = '42px';
      this.textBox.innerHTML = '';
      this.textBoxContainer = null;
      this.textBox = null;
    }
  }

  ondblclick(ev, enclosedElement, { scrollX, scrollY, scalingFactor }) {
    // TODO: Currently implemented for rectangle enclosed element. Check possibility for all other shapes
    this.startX = ev.x;
    this.startY = ev.y;
    this.textBoxContainer.style.top = `${ev.y - 5}px`;
    this.textBoxContainer.style.left = `${ev.x}px`;
    this.textBoxContainer.style.display = 'block';
    this.textBox.focus();

    if (enclosedElement) {
      if (enclosedElement.type === 'rectangle') {
        // to have equi space around the horizontal edge
        // let diffX = Math.abs(Math.abs(enclosedElement.x * scalingFactor) - Math.abs(ev._x));
        // let enclosedX = Math.abs(Math.abs(enclosedElement.endX * scalingFactor) - diffX);
        // let diffY = Math.abs(Math.abs(enclosedElement.y * scalingFactor) - Math.abs(ev._y));
        // let enclosedY = Math.abs(Math.abs(enclosedElement.endY * scalingFactor) - diffY);

        // this.width = `${Math.abs(enclosedX - ev._x)}`;
        // this.height = `${Math.abs(enclosedY - ev._y)}`;

        // this.textBoxContainer.style.width = this.width + 'px';
        // this.textBoxContainer.style.height = this.height + 'px';
      } else if (enclosedElement.type === 'text') {
        this.textBoxContainer.style.top = `${enclosedElement.y * scalingFactor + scrollY}px`;
        this.textBoxContainer.style.left = `${enclosedElement.x * scalingFactor + scrollX}px`;
        this.textBox.innerHTML = enclosedElement.innerHtml;
        this.width = enclosedElement.width;
        this.height = enclosedElement.height;
        window.getSelection().selectAllChildren(this.textBox)
        window.getSelection().collapseToEnd();
        // this.startX = enclosedElement.x;
        // this.startY = enclosedElement.y;
        // this.textBoxContainer.style.width = this.width + 'px';
        // this.textBoxContainer.style.height = this.height + 'px';
      } else {
        // TODO: to have equi space around the horizontal edge

        // this.width = `${Math.abs(this.tempCanvas.width - ev.x) - 10}`;
        // this.height = `${Math.abs(this.tempCanvas.height - ev.y) - 10}`;
        // this.textBoxContainer.style.width = this.width + 'px';
        // this.textBoxContainer.style.height = this.height + 'px';
      }
      // TODO: Implement for all shapes
    } else {
      // TODO: to have equi space around the horizontal edge

      // this.width = `${Math.abs(this.tempCanvas.width - ev.x) - 10}`;
      // this.height = `${Math.abs(this.tempCanvas.height - ev.y) - 10}`;
      // this.textBoxContainer.style.width = this.width + 'px';
      // this.textBoxContainer.style.height = this.height + 'px';
    }
    this.tetxtareaClientStyle = this.textBox.getBoundingClientRect();
  }
}

export default DrawText;