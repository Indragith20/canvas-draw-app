import React from 'react';
import styles from './main.css';
import ConfigTool from './ConfigTool/ConfigTool';
import SelectTool from './SelectTool/SelectTool';
import Arrow from './Shapes/Arrow';
import Chalk from './Shapes/Chalk';
import Circle from './Shapes/Circle';
import Diamond from './Shapes/Diamond';
import DrawText from './Shapes/DrawText';
import Line from './Shapes/Line';
import MoveTool from './Shapes/MoveTool';
import Rect from './Shapes/Rectangle';
import TextTool from './TextTool/TextTool';
import { drawDiamond, drawText } from './utils/drawShapes';
import { getElementsAtPosition } from './utils/getElementsAtPosition';
import ZoomContainer from './ZoomContainer/ZoomContainer';
import Idb from './utils/idb';
import { SocketContext } from '~/contexts/socketContext';

export function MainComponentStyles() {
  return [{ rel: 'stylesheet', href: styles }];
}


let tools = {
  move: '',
  chalk: Chalk,
  line: Line,
  rect: Rect,
  arrow: Arrow,
  text: DrawText,
  circle: Circle,
  diamond: Diamond,
  select: 'select'
};

let baseConfig = {
  scalingFactor: 1,
  baseFontSize: 24,
  baseLineHeight: (150 * 24) / 100
}



class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasWidth: 0,
      canvasHeight: 0,
      selectedTheme: 'light',
      selectedTool: 'chalk',
      shapes: [],
      ...baseConfig
    };
    this.addEventListeners = this.addEventListeners.bind(this);
    this.updateTool = this.updateTool.bind(this);
    this.onClickTool = this.onClickTool.bind(this);
    this.onEvent = this.onEvent.bind(this);
    this.changeToOneScalingFactor = this.changeToOneScalingFactor.bind(this);
    this.changeFromOneScalingFactor = this.changeFromOneScalingFactor.bind(this);
    this.changeToTextTool = this.changeToTextTool.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.resetDraggingValues = this.resetDraggingValues.bind(this);
    this.onWheelMove = this.onWheelMove.bind(this);
    this.imgUpdate = this.imgUpdate.bind(this);
    this.drawImage = this.drawImage.bind(this);
    this.updateTheme = this.updateTheme.bind(this);
    this.onResize = this.onResize.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);

    this.idb = new Idb();

    this.mainCanvas = React.createRef();
    this.tempCanvas = React.createRef();

    this.selectedElement = null;

    // sequeunce id 
    this.id = 0;

    // To check whether the user is dragging.
    this.mouseXPosition = null;
    this.mouseYPosition = null;
    this.isUserDragging = false;
    this.draggingElement = null;



    // To emulate scroll behaviour
    this.scrollX = 0;
    this.scrollY = 0;

  }


  componentDidMount() {

    this.idb.getDataFromIdb('app-state-persist').then((data) => {
      if (data && data.length >= 0) {
        this.setState({ shapes: data }, () => {
          this.id = data.length + 1;
          this.redraw();
        })
      }
    }).catch(err => {
      console.log(err);
    })
    this.setState({ canvasWidth: window.innerWidth, canvasHeight: window.innerHeight })
    this.mainContext = this.mainCanvas.current.getContext('2d');
    this.tempContext = this.tempCanvas.current.getContext('2d');
    this.tempContext.strokeStyle = this.state.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';// Default line color. 
    this.tempContext.lineWidth = 1.0;// Default stroke weight. 

    // Fill transparent canvas with dark grey (So we can use the color to erase). 
    this.tempContext.fillStyle = this.state.selectedTheme === 'dark' ? "#424242" : '#FFFFFF';
    this.tempContext.fillRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);//Top, Left, Width, Height of canvas

    this.tools = tools;

    let selectedOne = this.tools[this.state.selectedTool];

    this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, this.id);
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  addEventListeners() {
    this.tempCanvas.current.addEventListener('mousedown', this.onEvent, false);
    this.tempCanvas.current.addEventListener('mousemove', this.onEvent, false);
    this.tempCanvas.current.addEventListener('mouseup', this.onEvent, false);
    this.tempCanvas.current.addEventListener('dblclick', this.changeToTextTool, false);
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('click', this.onDocumentClick, false);
    document.addEventListener('wheel', this.onWheelMove, false);

    window.addEventListener('resize', this.onResize);
  }

  removeEventListeners() {
    this.tempCanvas.current.removeEventListener('mousedown', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('mousemove', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('mouseup', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('dblclick', this.changeToTextTool, false);
    document.removeEventListener('keydown', this.onKeyDown, false);
    document.removeEventListener('click', this.onDocumentClick, false);
    document.removeEventListener('wheel', this.onWheelMove, false);
    window.removeEventListener('resize', this.onResize);
  }


  zoomIn(e) {
    e.stopPropagation();
    if (this.state.scalingFactor <= 0.1) {
      return;
    }
    this.setState((prevstate) => {
      let baseFontSize = prevstate.baseFontSize - 3;
      let baseLineHeight = (150 * baseFontSize) / 100;
      return {
        ...prevstate,
        scalingFactor: prevstate.scalingFactor - 0.1,
        baseFontSize,
        baseLineHeight
      }
    }, () => {
      this.idb.updateDb(this.state.scalingFactor, 'scalingFactor');
      this.redraw();
    });
  }

  zoomOut(e) {
    e.stopPropagation();
    if (this.state.scalingFactor >= 2) {
      return;
    }
    this.setState((prevstate) => {
      let baseFontSize = prevstate.baseFontSize + 3;
      let baseLineHeight = (150 * baseFontSize) / 100
      return {
        ...prevstate,
        scalingFactor: prevstate.scalingFactor + 0.1,
        baseFontSize,
        baseLineHeight
      }
    }, () => {
      this.redraw();
    });
  }


  updateTool(value, id = null) {
    if (this.tools[value]) {
      this.setState({ selectedTool: value }, () => {
        let selectedOne = this.tools[this.state.selectedTool];
        if (!selectedOne || selectedOne === 'select') {
          return;
        }
        // For storing the shapes. we are generating ids.
        if (!id) {
          this.id = this.id + 1;
          this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, this.id, this.state.selectedTheme);
        } else {
          this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, id, this.state.selectedTheme);
        }
      })
    }
  }

  onResize(e) {
    this.setState({ canvasWidth: window.innerWidth, canvasHeight: window.innerHeight }, () => {
      this.redraw();
    })
  }

  onEvent(ev) {
    ev._x = ev.x;
    ev._y = ev.y;
    this.props.mouseMove({ x: this.changeToOneScalingFactor(ev.x - this.scrollX), y: this.changeToOneScalingFactor(ev.y - this.scrollY) })
    // let isUserDragging = false;

    if (this.state.selectedTool === 'select') {
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

    if (this.isUserDragging) {
      // Handlinng the case for move
      //this.selectedTool = 'move';
      // since we are moving across the canvas. we need to take into the account of scrollx and scrolly values

      ///CHANGE ???
      // ev._x = this.changeToOneScalingFactor(ev.x - this.scrollX);
      // ev._y = this.changeToOneScalingFactor(ev.y - this.scrollY);
      ///CHANGE ??? Moved inside condition
      if (!this.draggingElement) {
        ev._x = this.changeToOneScalingFactor(ev.x - this.scrollX);
        ev._y = this.changeToOneScalingFactor(ev.y - this.scrollY);
        // First case of move tool -> User just selected the element.events should be mousedown
        let elementSelected = getElementsAtPosition(this.changeToOneScalingFactor(this.mouseXPosition - this.scrollX), this.changeToOneScalingFactor(this.mouseYPosition - this.scrollY), this.state.shapes);
        if (elementSelected) {
          this.selectedElement = elementSelected;
          let shapes = this.state.shapes.filter(shape => shape.id !== elementSelected.id);
          //redrawig without element selected
          this.setState({ shapes: shapes, selectedTool: 'move' }, () => {
            this.idb.updateDb(this.state.shapes, 'app-state-persist');
            this.redraw();
            this.draggingElement = elementSelected;
            this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
            //modifyig the selectedElement
            let selectedElement = {
              ...this.selectedElement,
              x: this.changeFromOneScalingFactor(this.selectedElement.x),
              y: this.changeFromOneScalingFactor(this.selectedElement.y),
              endX: this.changeFromOneScalingFactor(this.selectedElement.endX),
              endY: this.changeFromOneScalingFactor(this.selectedElement.endY),
              startX: this.changeFromOneScalingFactor(this.selectedElement.startX),
              startY: this.changeFromOneScalingFactor(this.selectedElement.startY),
              radius: this.changeFromOneScalingFactor(this.selectedElement.radius),
              width: this.selectedElement.width ? this.changeFromOneScalingFactor(this.selectedElement.width) : null,
              height: this.selectedElement.height ? this.changeFromOneScalingFactor(this.selectedElement.height) : null,
              scalingFactor: this.state.scalingFactor
            }
            this.tool = new MoveTool(this.tempCanvas.current, this.tempContext, this.imgUpdate, selectedElement, this.state.selectedTheme);
            // element is present. we need to call movetool
            this.tool['mousedown'](ev);
          })
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
    } else if (this.tool) {
      let func = this.tool[ev.type];
      if (func) {
        func(ev);
      }
    }
  }

  onClickTool(e) {
    console.log(e.currentTarget.id);
    this.updateTool(e.currentTarget.id);
  }

  changeToOneScalingFactor(coords) {
    return coords / this.state.scalingFactor;
  }

  changeFromOneScalingFactor(coords) {
    return coords * this.state.scalingFactor;
  }


  drawImage() {
    console.log(this.state.shapes, this.state.selectedTool);
    this.resetDraggingValues();


    requestAnimationFrame(() => {

      // if the action is delete or move. wee nneed to call resetDraggingValues

      if (this.state.selectedTool === 'move' || this.state.selectedTool === 'text') {
        this.redraw();
        this.setState({ selectedTool: 'select' });
        this.tool = null;
      } else {
        this.mainContext.drawImage(this.tempCanvas.current, 0, 0);
        ///this.tempContext.restore();
        this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
        //this.renderParticularShape(modifiedImage);

        // Changing to select tool once we have drawn a shape except to typing text
        if (this.state.selectedTool !== 'text') {

          this.setState({ selectedTool: 'select' });
          this.tool = null;
        }
      }
      // this.redraw();

    })
  }


  imgUpdate(drawenImage) {
    if (drawenImage && drawenImage.type) {
      /** TODO: Change this logic to object key value structure */

      let modifiedImage = {
        ...drawenImage,
        x: this.changeToOneScalingFactor(drawenImage.x - this.scrollX),
        y: this.changeToOneScalingFactor(drawenImage.y - this.scrollY),
        endX: this.changeToOneScalingFactor(drawenImage.endX - this.scrollX),
        endY: this.changeToOneScalingFactor(drawenImage.endY - this.scrollY),
        startX: this.changeToOneScalingFactor(drawenImage.startX - this.scrollX),
        startY: this.changeToOneScalingFactor(drawenImage.startY - this.scrollY),
        radius: this.changeToOneScalingFactor(drawenImage.radius),
        width: drawenImage.width ? this.changeToOneScalingFactor(drawenImage.width) : null,
        height: drawenImage.height ? this.changeToOneScalingFactor(drawenImage.height) : null,
        scalingFactor: this.state.scalingFactor
      }
      let filteredShapes = this.state.shapes.filter(shape => shape.id !== drawenImage.id);
      this.setState({ shapes: [...filteredShapes, modifiedImage] }, () => {
        this.idb.updateDb(this.state.shapes, 'app-state-persist');
        this.props.updateShape(modifiedImage);
        this.drawImage();
      })
    } else {
      this.drawImage();
    }


  }

  redraw() {
    console.log('redraw')
    this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
    this.tempContext.restore();
    this.tempContext.setLineDash([]);
    this.tempContext.strokeStyle = this.state.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';;
    this.tempContext.fillStyle = this.state.selectedTheme === 'dark' ? "#424242" : '#000000';;

    this.state.shapes.forEach(shape => {
      if (shape.type === 'rectangle') {
        this.tempContext.strokeRect(this.changeFromOneScalingFactor(shape.x) + this.scrollX, this.changeFromOneScalingFactor(shape.y) + this.scrollY, this.changeFromOneScalingFactor(shape.width), this.changeFromOneScalingFactor(shape.height));
      } else if (shape.type === 'arrow') {
        let headlen = 10;
        let x = this.changeFromOneScalingFactor(shape.x) + this.scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + this.scrollY;
        let endX = this.changeFromOneScalingFactor(shape.endX) + this.scrollX;
        let endY = this.changeFromOneScalingFactor(shape.endY) + this.scrollY;
        let dx = endX - x;
        let dy = endY - y;
        let angle = Math.atan2(dy, dx);
        this.tempContext.beginPath();
        this.tempContext.moveTo(x, y)
        this.tempContext.lineTo(endX, endY);
        this.tempContext.lineTo(endX - headlen * Math.cos(angle - Math.PI / 6), endY - headlen * Math.sin(angle - Math.PI / 6));
        this.tempContext.moveTo(endX, endY);
        this.tempContext.lineTo(endX - headlen * Math.cos(angle + Math.PI / 6), endY - headlen * Math.sin(angle + Math.PI / 6));
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === 'line') {
        this.tempContext.beginPath();
        this.tempContext.moveTo(this.changeFromOneScalingFactor(shape.x) + this.scrollX, this.changeFromOneScalingFactor(shape.y) + this.scrollY);
        this.tempContext.lineTo(this.changeFromOneScalingFactor(shape.endX) + this.scrollX, this.changeFromOneScalingFactor(shape.endY) + this.scrollY);
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === 'text') {
        let color = this.state.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
        drawText(shape.textContent, this.tempContext, this.changeFromOneScalingFactor(shape.x) + this.scrollX, this.changeFromOneScalingFactor(shape.y) + this.scrollY, this.changeFromOneScalingFactor(shape.width), this.state.baseLineHeight, color, this.state.baseFontSize);
      } else if (shape.type === 'circle') {
        let x = this.changeFromOneScalingFactor(shape.x) + this.scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + this.scrollY;
        this.tempContext.beginPath();
        this.tempContext.arc(x, y, this.changeFromOneScalingFactor(shape.radius), 0, 2 * Math.PI);
        this.tempContext.stroke();
      } else if (shape.type === 'diamond') {
        let xCenter = this.changeFromOneScalingFactor(shape.x) + this.scrollX;
        let yCenter = this.changeFromOneScalingFactor(shape.y) + this.scrollY;
        let size = this.changeFromOneScalingFactor(shape.x - shape.endX);
        drawDiamond(xCenter, yCenter, size, this.tempContext);
      }
    });


    // clear the present canvas
    this.mainContext.clearRect(0, 0, this.mainCanvas.current.width, this.mainCanvas.current.height);
    this.mainContext.drawImage(this.tempCanvas.current, 0, 0);
    this.tempContext.restore();
    this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
  }

  changeToTextTool(ev) {
    ev._x = this.changeToOneScalingFactor(ev.x - this.scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - this.scrollY);

    let enclosedElement = getElementsAtPosition(ev._x, ev._y, this.state.shapes);

    // Temporarily updating tool manually
    //this.updateTool('text', enclosedElement && enclosedElement.type === 'text' ? enclosedElement.id : null);
    this.resetDraggingValues();

    this.setState({ selectedTool: 'text' }, () => {
      this.resetDraggingValues();

      let textId = null;
      if (enclosedElement && enclosedElement.type === 'text') {
        textId = enclosedElement.id;
        let shapes = this.state.shapes.filter(shape => shape.id !== this.selectedElement.id);
        this.setState({ shapes }, () => {
          this.redraw();
        });
      } else {
        this.id = this.id + 1;
        textId = this.id;
      }
      this.tool = new DrawText(this.tempCanvas.current, this.tempContext, this.imgUpdate, textId, this.state.selectedTheme);
      // if (enclosedElement && enclosedElement.type === 'text') {
      //   let shapes = this.state.shapes.filter(shape => shape.id !== this.selectedElement.id);
      //   this.setState({ shapes }, () => {
      //     this.redraw();
      //   });
      // }

      let func = this.tool[ev.type];
      if (func) {
        this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
        // func will be dbclick in drawtext
        func(ev, enclosedElement, { scrollX: this.scrollX, scrollY: this.scrollY, scalingFactor: this.state.scalingFactor });
      }
    })



  }

  onKeyDown(ev) {
    if (this.state.selectedTool === 'text') {
      // Early Return as we dont need to listen while textarea is shown
      return;
    }
    if ((ev.keyCode >= 48 && ev.keyCode <= 57) || (ev.keyCode >= 65 && ev.keyCode <= 90)) {
      // 48 - 57 number 0 - 9 and 65 - 90 Alphabetys

    } else {
      // special keys 
      if (this.selectedElement) {
        // Backspace or delete key
        if (ev.which === 46 || ev.which === 8) {
          let shapes = this.state.shapes.filter(shape => shape.id !== this.selectedElement.id);
          this.setState({ shapes }, () => {
            this.redraw();
          })

        }
      }
    }
  }

  onDocumentClick(ev) {
    ev._x = this.changeToOneScalingFactor(ev.x - this.scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - this.scrollY);

    if (this.state.selectedTool === 'text') {
      //Revertting tyhius is required.


      this.tool['onBlur']();
      // this.selectedTool = 'select';
      // this.tool = null;
      return;
    }

    if (this.state.selectedTool === 'select') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
      let selectedElement = getElementsAtPosition(ev._x, ev._y, this.state.shapes);
      this.selectedElement = selectedElement;
      console.log(selectedElement);
      if (this.selectedElement) {
        if (this.selectedElement.type === 'rectangle') {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === 'line' || this.selectedElement.type === 'arrow') {
          let x = this.changeFromOneScalingFactor(this.selectedElement.startX) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.startY) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === 'circle') {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.beginPath();
          this.tempContext.arc(x, y, this.changeFromOneScalingFactor(this.selectedElement.radius) + 10, 0, 2 * Math.PI);
          this.tempContext.stroke();
        } else if (this.selectedElement.type === 'diamond') {
          let x = this.changeFromOneScalingFactor(this.selectedElement.startX) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.startY) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === 'text') {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width), this.changeFromOneScalingFactor(this.selectedElement.height));
        }
      }
    }
  }

  onWheelMove(e) {
    if (this.state.selectedTool === 'text') {
      // Drawing text on canvas before scroll move
      this.tool['onBlur']();
    }
    this.scrollX = this.scrollX - e.deltaX;
    this.scrollY = this.scrollY - e.deltaY;
    this.redraw();
  }

  resetDraggingValues() {
    this.isUserDragging = false;
    this.draggingElement = null;
    this.mouseXPosition = null;
    this.mouseYPosition = null;
  }


  updateTheme(e) {
    e.stopPropagation();
    this.setState(
      (prevstate) => {
        return {
          ...prevstate,
          selectedTheme: prevstate.selectedTheme === 'dark' ? 'light' : 'dark'
        }
      }, () => {
        this.tempContext.strokeStyle = this.state.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';// Default line color. 
        this.tempContext.lineWidth = 1.0;// Default stroke weight. 

        // Fill transparent canvas with dark grey (So we can use the color to erase). 
        this.tempContext.fillStyle = this.state.selectedTheme === 'dark' ? "#424242" : '#FFFFFF';
        this.tempContext.fillRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);//Top, Left, Width, Height of canvas
        this.redraw();
      })
  }

  render() {
    return (
      <div
        style={{ '--font-size': `${this.state.baseFontSize}px`, '--line-height': `${this.state.baseLineHeight}px`, cursor: `${this.state.selectedTool === 'select' ? `url('../assets/cursor.svg')` : 'crosshair'}` }}
        className={`${this.state.selectedTheme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div id="wrapper" >
          <div id="blackboardPlaceholder">
            <canvas id="drawingCanvas" ref={this.mainCanvas} width={this.state.canvasWidth} height={this.state.canvasHeight}>
              <p className="noscript">We're sorry, this web application is currently not supported with your browser. Please use
                an alternate browser or download a supported <br />browser.Supported browsers: <a
                  href="http://www.google.com/chrome">Google Chrome</a>, <a href="http://www.opera.com">Opera</a>, <a
                    href="http://www.mozilla.com">Firefox</a>, <a href="http://www.apple.com/safari">Safari</a>, <br />and <a
                      href="http://www.konqueror.org">Konqueror</a>. Also make sure your JavaScript is enabled.</p>
            </canvas>
            <canvas id="tempCanvas" ref={this.tempCanvas} width={this.state.canvasWidth} height={this.state.canvasHeight}></canvas>
          </div>

        </div>
        <SelectTool selectedTool={this.state.selectedTool} updateTool={this.onClickTool} />
        <ConfigTool toggleTheme={this.updateTheme} />
        <TextTool />
        <ZoomContainer zoomRange={this.state.scalingFactor} zoomOut={this.zoomOut} zoomIn={this.zoomIn} />
      </div>
    )
  }
}

export default MainComponent;