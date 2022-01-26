import Chalk from './Chalk.js';
import Arrow from './Arrow.js';
import Line from './Line.js';
import Rect from './Rectangle.js';
import DrawText from './DrawText.js';
import SelectTool from './SelectTool.js';
import MoveTool from './MoveTool.js';


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


//utility to check something is drawn on canvas
function isDrawnOn(context, canvas) {
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
  var result = null;
  var counter = 0;
  var last = data.length - 1;
  for (var i = 0; i < data.length; i++) {
    if (i === last && counter !== 0 && counter === last) {
      result = false;
      break;
    } else if (data[i] !== 0 && data[i] > 0) {
      result = true;
      break;
    } else {
      counter++;
      continue;
    }
  }
  return result;
}


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
    this.resetInitialValues = this.resetInitialValues.bind(this);

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


    // To check whether the user is dragging.
    this.mouseXPosition = null;
    this.mouseYPosition = null;
    this.isUserDragging = false;
    this.draggingElement = null;




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
            if (shape.y <= y && y <= shape.endY) {
              returnElement = shape;
            }
          }
        } else if (shape.type === 'line') {
          let startingXBuffer = shape.x - 10;
          let endingXBuffer = shape.endX + 10;
          let startingYBuffer = shape.y - 10;
          let endingYBuffer = shape.endY + 10;

          if (startingXBuffer <= x && x <= endingXBuffer) {
            if (startingYBuffer <= y && y <= endingYBuffer) {
              returnElement = shape;
            }
          }
        }

      })
    }
    return returnElement;
  }

  changeToTextTool(ev) {
    // function for typing text
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

    if ((ev.keyCode >= 48 && ev.keyCode <= 57) || (ev.keyCode >= 65 && ev.keyCode <= 90)) {
      // 48 - 57 number 0 - 9 and 65 - 90 Alphabetys
      if (this.selectedTool === 'text') {
        //Bug: If we are not clearing rect, it will cause colliding effect(text will print ovber another text)
        // If we cleared then it will remove all the previous text or any other shapes
        this.mainContext.clearRect(this.selectedElement.x, this.selectedElement.y, this.selectedElement.width, this.selectedElement.height)
        let func = this.tool[ev.type];
        if (func) {
          func(ev);
        }
      } else if (this.selectedElement) {
        // Backspace or delete key
        if (ev.which === 46 || ev.which === 8) {
          this.shapes = this.shapes.filter(shape => shape.id !== this.selectedElement.id);
          this.redraw();
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
    console.log('Document Click EVent');

    if (this.selectedTool === 'select' || this.selectedTool === 'text') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let selectedElement = this.tool.getElementsAtPosition(ev._x, ev._y);
      this.selectedElement = selectedElement;
      if (this.selectedElement) {
        if (this.selectedElement.type === 'rectangle') {
          this.tempContext.strokeRect(this.selectedElement.x, this.selectedElement.y, this.selectedElement.width, this.selectedElement.height);
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(this.selectedElement.x - 5, this.selectedElement.y - 5, this.selectedElement.width + 10, this.selectedElement.height + 10);
        } else if (this.selectedElement.type === 'line' || this.selectedElement.type === 'arrow') {
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(this.selectedElement.startX - 5, this.selectedElement.startY - 5, this.selectedElement.width + 10, this.selectedElement.height + 10)
        }
      }
    }
  }

  redraw() {
    console.log('redrwa')
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    this.tempContext.restore();
    this.tempContext.setLineDash([]);
    this.tempContext.strokeStyle = 'white';
    this.tempContext.fillStyle = '#424242';
    // TODO: Move to utility for each shape.
    this.shapes.forEach(shape => {
      if (shape.type === 'rectangle') {
        // possible cause either fill or stroke
        this.tempContext.strokeRect(shape.x, shape.y, shape.width, shape.height);
      } else if (shape.type === 'arrow') {
        let headlen = 10;
        let dx = shape.endX - shape.x;
        let dy = shape.endY - shape.y;
        let angle = Math.atan2(dy, dx);
        this.tempContext.beginPath();
        this.tempContext.moveTo(shape.x, shape.y)
        this.tempContext.lineTo(shape.endX, shape.endY);
        this.tempContext.lineTo(shape.endX - headlen * Math.cos(angle - Math.PI / 6), shape.endY - headlen * Math.sin(angle - Math.PI / 6));
        this.tempContext.moveTo(shape.endX, shape.endY);
        this.tempContext.lineTo(shape.endX - headlen * Math.cos(angle + Math.PI / 6), shape.endY - headlen * Math.sin(angle + Math.PI / 6));
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === 'line') {
        this.tempContext.beginPath();
        this.tempContext.moveTo(shape.x, shape.y);
        this.tempContext.lineTo(shape.endX, shape.endY);
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === 'text') {
        this.tempContext.font = '48px serif';
        this.tempContext.fillStyle = 'white';

        this.tempContext.fillText(shape.textContent, shape.x, shape.y);
      }
    });


    // clear the present canvas
    console.log(isDrawnOn(this.tempContext, this.tempCanvas));
    this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
    this.mainContext.drawImage(this.tempCanvas, 0, 0);
    this.tempContext.restore();
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
  }



  onEvent(ev) {
    if (ev.layerX || ev.layerX == 0) { // Firefox 
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera 
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }

    // let isUserDragging = false;

    if (this.selectedTool === 'select') {
      if (ev.type === 'mousedown') {
        this.mouseXPosition = ev._x;
        this.mouseYPosition = ev._y;
      } else if (ev.type === 'mousemove') {
        if (this.mouseYPosition && this.mouseXPosition) {
          let diffX = Math.abs(this.mouseXPosition - ev._x);
          let diffY = Math.abs(this.mouseYPosition - ev._y);
          if (diffX > 20 || diffY > 20) {
            this.isUserDragging = true;

          }
        }
      } else {
        this.isUserDragging = false;
        this.mouseXPosition = null;
        this.mouseYPosition = null;
      }


    } else {
      this.isUserDragging = false;
      this.mouseXPosition = null;
      this.mouseYPosition = null;
    }
    // Get the tool's event handler. 
    console.log('user dragging', this.isUserDragging);
    if (this.isUserDragging) {
      // Handlinng the case for move
      this.selectedTool = 'move';
      if (!this.draggingElement) {
        // First case of move tool -> User just selected the element.events should be mousedown
        let elementSelected = this.tool.getElementsAtPosition(this.mouseXPosition, this.mouseYPosition);
        if (elementSelected) {
          this.selectedElement = elementSelected;

          this.draggingElement = elementSelected;
          // TODO: Remove element from main canvas . Need to check whether we need to remove since we will be redrawing the entire canvas ??
          console.log('Initializing Move Instace');
          this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
          this.tool = new MoveTool(this.tempCanvas, this.tempContext, this.imgUpdate, this.selectedElement);
          // element is present. we need to call movetool
          this.tool['mousedown'](ev);

        }

        // ?? 
      } else if (this.mouseXPosition !== null && this.mouseYPosition !== null) {
        // events are mousemove or mouseup. Need to check whether this condition is required
        if (ev.type === 'mousemove' || ev.type === 'mouseup') {
          // movetool instace should already by present
          if (this.tool) {
            this.tool[ev.type](ev);
            if (ev.type === 'mouseup') {
              this.isUserDragging = false;
              this.mouseXPosition = null;
              this.mouseYPosition = null;
            }

          }
        }
      }
    } else {
      let func = this.tool[ev.type];
      if (func) {
        func(ev);
      }
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
    this.resetInitialValues();


    requestAnimationFrame(() => {

      // if the action is delete or move. wee nneed to call redraw
      if (this.selectedTool === 'move') {
        this.redraw();

      } else {
        this.mainContext.drawImage(this.tempCanvas, 0, 0);
        //this.tempContext.restore();
        this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);

        // Changing to select tool once we have drawn a shape except to typing text
        if (this.selectedTool !== 'text') {
          this.selectedTool = 'select';
          this.tool = new SelectTool(this.shapes);
        }
      }


    })

  }

  resetInitialValues() {
    this.isUserDragging = false;
    this.draggingElement = null;
  }

  updateTool(e) {
    if (this.tools[e.target.value]) {
      this.selectedTool = e.target.value;
      let selectedOne = this.tools[this.selectedTool];
      this.id = this.id + 1;
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


