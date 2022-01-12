import Chalk from './Chalk.js';
import Arrow from './Arrow.js';
import Line from './Line.js';
import Rect from './Rectangle.js';
import DrawText from './DrawText.js';
import SelectTool from './SelectTool.js';


/**
 * Plan is to have map for coordinates
 * 
 * {
 *  0: [{ ...shapes }] // From 0 to 50 shapes will be here
 *  50: [{ ...shapes }] // From 50 to 100 shapes will be here
 * }
 * 
 * Hoping this will reduce the amout of pixels to redraw
 */

class InitCanvas {
  constructor(canvas, tools) {
    this.addEventListeners = this.addEventListeners.bind(this);
    this.updateTool = this.updateTool.bind(this);
    this.imgUpdate = this.imgUpdate.bind(this);
    this.onEvent = this.onEvent.bind(this);
    this.changeToTextTool = this.changeToTextTool.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.getElementsAtPosition = this.getElementsAtPosition.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);

    this.mainCanvas = canvas;
    this.mainContext = this.mainCanvas.getContext('2d');
    let parentNode = canvas.parentNode;
    let tempCanvas = document.createElement('canvas');
    if (!tempCanvas) {
      alert('Error! Cannot create a new canvas element!');
      return;
    }
    tempCanvas.id = 'tempCanvas';
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    parentNode.appendChild(tempCanvas);
    this.tempCanvas = tempCanvas;

    this.tempContext = this.tempCanvas.getContext('2d');

    this.tempContext.strokeStyle = "#FFFFFF";// Default line color. 
    this.tempContext.lineWidth = 1.0;// Default stroke weight. 

    // Fill transparent canvas with dark grey (So we can use the color to erase). 
    this.tempContext.fillStyle = "#424242";
    this.tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);//Top, Left, Width, Height of canvas

    this.tools = tools;
    this.selectedTool = 'chalk'
    this.id = 0;
    let selectedOne = this.tools[this.selectedTool];

    this.tool = new selectedOne(this.tempCanvas, this.tempContext, this.imgUpdate, this.id);

    this.shapes = [];

    this.selectedElement = null;



    /**
     * rect -> startX startY, width, height
     * arrow -> startX startY, width
     * 
     */

    this.addEventListeners();
  }

  addEventListeners() {
    this.tempCanvas.addEventListener('mousedown', this.onEvent, false);
    this.tempCanvas.addEventListener('mousemove', this.onEvent, false);
    this.tempCanvas.addEventListener('mouseup', this.onEvent, false);
    this.tempCanvas.addEventListener('dblclick', this.changeToTextTool, false);
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('click', this.onDocumentClick, false);
  }

  getElementsAtPosition(x, y) {
    // Get closely matched element with x and y coordinates
    let returnElement = null;
    if (this.shapes.length > 0) {
      this.shapes.forEach(shape => {
        if (shape.type === 'rectangle') {
          if (shape.x <= x && x <= shape.endX) {
            console.log('Iside1 ');
            if (shape.y <= y && y <= shape.endY) {
              console.log('Iside2')
              returnElement = shape;
            }
          }
        } else if (shape.type === 'line') {
          let startingXBuffer = shape.x - 10;
          let endingXBuffer = shape.endX + 10;
          let startingYBuffer = shape.y - 10;
          let endingYBuffer = shape.endY + 10;

          if (startingXBuffer <= x && x <= endingXBuffer) {
            console.log('Iside1 ');
            if (startingYBuffer <= y && y <= endingYBuffer) {
              console.log('Iside2')
              returnElement = shape;
            }
          }
        }

      })
    }
    return returnElement;
  }

  changeToTextTool(ev) {
    // Temporarily updating tool manually
    this.updateTool({ target: { value: 'text' } });
    // After updating
    // TODO: Get the starting and ending point from coordinates(Inside Rect, or any other shapes starting point)
    if (ev.layerX || ev.layerX == 0) { // Firefox 
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera 
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }
    // this.tool wil be equal to text
    let func = this.tool[ev.type];
    let enclosedElement = this.getElementsAtPosition(ev._x, ev._y);
    console.log(enclosedElement);
    let width, height, x, y;
    if (enclosedElement) {
      width = enclosedElement.width;
      height = enclosedElement.height;
      x = enclosedElement.x;
      y = enclosedElement.y;
      this.selectedElement = enclosedElement;
    }
    if (func) {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      func(ev, { width, height, x, y });
    }
  }

  onKeyDown(ev) {

    // TODO: filter events alpahbets or special keys here
    if (this.selectedTool === 'text') {
      this.mainContext.clearRect(this.selectedElement.x, this.selectedElement.y, this.selectedElement.width, this.selectedElement.height)
      let func = this.tool[ev.type];
      console.log(this.tool);
      if (func) {
        func(ev);
      }
    } else if (this.selectedElement) {
      // Backspace or delete key
      if (ev.which === 46 || ev.which === 8) {
        console.log('Delete Key Pressed');
        if (this.selectedElement.type === 'rectangle') {
          console.log('Inside Rectangle');
          this.tempContext.restore();
          this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
          // Might cause bug. Instead of clearing rect, remove elements from shapes and then redraw the entire image by iterating shapes
          this.mainContext.clearRect(this.selectedElement.x - 5, this.selectedElement.y - 5, this.selectedElement.width + 10, this.selectedElement.height + 10)
        } else if (this.selectedElement.type === 'arrow' || this.selectedElement.type === 'line') {
          this.tempContext.restore();
          this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
          // Might cause bug. Instead of clearing rect, remove elements from shapes and then redraw the entire image by iterating shapes
          this.mainContext.clearRect(this.selectedElement.startX - 5, this.selectedElement.startY - 5, this.selectedElement.width + 10, this.selectedElement.height + 10)
        }

      }
    }
  }


  onDocumentClick(ev) {
    // TODO: Get the starting and ending point from coordinates(Inside Rect, or any other shapes starting point)
    if (ev.layerX || ev.layerX == 0) { // Firefox 
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera 
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }
    console.log(this.selectedTool);

    if (this.selectedTool === 'move' || this.selectedTool === 'text') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let selectedElement = this.tool.getElementsAtPosition(ev._x, ev._y);
      console.log(selectedElement);
      this.selectedElement = selectedElement;
      if (this.selectedElement) {
        if (this.selectedElement.type === 'rectangle') {
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(this.selectedElement.x - 5, this.selectedElement.y - 5, this.selectedElement.width + 10, this.selectedElement.height + 10);
        } else if (this.selectedElement.type === 'line' || this.selectedElement.type === 'arrow') {
          console.log(this.selectedElement);
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(this.selectedElement.startX - 5, this.selectedElement.startY - 5, this.selectedElement.width + 10, this.selectedElement.height + 10)
        }
      }
    }


  }



  onEvent(ev) {
    if (ev.layerX || ev.layerX == 0) { // Firefox 
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera 
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }
    // Get the tool's event handler. 
    let func = this.tool[ev.type];
    if (func) {
      func(ev);
    }
  }

  imgUpdate(drawenImage) {
    if (drawenImage && drawenImage.type) {
      /** TODO: Change this logic to object key value structure */
      // if (this.shapes.length === 0) {
      //   this.shapes.push(drawenImage);
      // } else {
      //   let isMatched = false;
      //   this.shapes = this.shapes.map(shape => {
      //     if (shape.id === drawenImage.id) {
      //       isMatched = true;
      //       return drawenImage;
      //     } else {
      //       return shape;
      //     }
      //   });
      //   if (!isMatched) {
      //     this.shapes.push(drawenImage);
      //   }
      // }
      let filteredShapes = this.shapes.filter(shape => shape.id !== drawenImage.id);
      this.shapes = [...filteredShapes, drawenImage];

    }
    console.log(this.shapes);

    requestAnimationFrame(() => {
      this.mainContext.drawImage(this.tempCanvas, 0, 0);
      this.tempContext.restore();
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      // Changing to select tool once we have drawn a shape except to typing text
      if (this.selectedTool !== 'text') {
        this.selectedTool = 'move';
        this.tool = new SelectTool(this.shapes);
      }

    })

  }

  updateTool(e) {
    console.log('changing', e.target.value);
    if (this.tools[e.target.value]) {
      this.selectedTool = e.target.value;
      let selectedOne = this.tools[this.selectedTool];
      this.id = this.id + 1;
      console.log('Updating toll');
      this.tool = new selectedOne(this.tempCanvas, this.tempContext, this.imgUpdate, this.id);
    }
  }
}




window.addEventListener('load', function () {

  function init() {

    let tools = {
      move: '',
      chalk: Chalk,
      line: Line,
      rect: Rect,
      arrow: Arrow,
      text: DrawText
    };

    let drawingTool = new InitCanvas(document.getElementById('drawingCanvas'), tools);

    // Create a select field with our tools. 
    var tool_select = document.getElementById('selector');
    if (!tool_select) {
      alert('Error! Failed to get the select element!');
      return;
    }
    tool_select.addEventListener('change', drawingTool.updateTool, false);
  }


  init();
}, false)


