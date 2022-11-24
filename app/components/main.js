import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import { getChalkRectValues, getElementsAtPosition } from './utils/getElementsAtPosition';
import ZoomContainer from './ZoomContainer/ZoomContainer';
import UserActivity from './UserActivity/UserActivity';
import PrintPreview, { PrintPreviewLinks } from './PrintPreview/PrintPreview';
import ShareLink, { ShareLinks } from './ShareLink/ShareLink';
import DeletePopup, { DeletePopupLinks } from './DeleteCanvasPopup/DeletePopup';
import BackIcon, { BackIconStyles } from './BackIcon/BackIcon';

export function MainComponentStyles() {
  return [...PrintPreviewLinks(), ...ShareLinks(), ...DeletePopupLinks(), ...BackIconStyles(), { rel: 'stylesheet', href: styles }];
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



class MainComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: 0,
      scrollY: 0,
      canvasWidth: 0,
      canvasHeight: 0,
      selectedTheme: 'light',
      selectedTool: 'select',
      showModal: null,
      shapes: props.shapes,
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
    this.onResize = this.onResize.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.addShape = this.addShape.bind(this);
    this.removeShape = this.removeShape.bind(this);
    this.strokeOuterRect = this.strokeOuterRect.bind(this);
    this.downloadAsImage = this.downloadAsImage.bind(this);
    this.onDeleteCanvas = this.onDeleteCanvas.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onShareLink = this.onShareLink.bind(this);
    this.onEmptyCanvas = this.onEmptyCanvas.bind(this);

    //this.idb = new Idb();

    this.mainCanvas = React.createRef();
    this.tempCanvas = React.createRef();

    this.selectedElement = null;

    // sequeunce id 
    //this.id = 0;

    // To check whether the user is dragging.
    this.mouseXPosition = null;
    this.mouseYPosition = null;
    this.isUserDragging = false;
    this.draggingElement = null;



    // To emulate scroll behaviour
    // this.state.scrollX = 0;
    // this.state.scrollY = 0;

    // for generating image

  }


  downloadAsImage(e) {
    e.stopPropagation();
    this.setState({ showModal: 'downloadImage', disableScroll: true })
  }


  componentDidMount() {

    this.setState({ canvasWidth: window.innerWidth, canvasHeight: window.innerHeight }, () => {
      this.redraw();
    });
    let { selectedTool } = this.state;
    let { selectedTheme } = this.props;
    this.mainContext = this.mainCanvas.current.getContext('2d');
    this.tempContext = this.tempCanvas.current.getContext('2d');
    this.tempContext.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';// Default line color. 
    this.tempContext.lineWidth = 1.0;// Default stroke weight. 

    // Fill transparent canvas with dark grey (So we can use the color to erase). 
    this.tempContext.fillStyle = selectedTheme === 'dark' ? "#424242" : '#FFFFFF';
    this.tempContext.fillRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);//Top, Left, Width, Height of canvas

    this.tools = tools;

    let selectedOne = this.tools[selectedTool];

    if (selectedOne === 'select') {
      this.tool = null;
    } else {
      this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, uuidv4());
    }


    this.addEventListeners();


  }


  componentDidUpdate(prevprops) {
    if (prevprops.selectedTheme !== this.props.selectedTheme) {
      this.redraw();
    }
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
    this.tempCanvas.current.addEventListener('click', this.onDocumentClick, false);
    this.tempCanvas.current.addEventListener('wheel', this.onWheelMove, false);

    window.addEventListener('resize', this.onResize);
  }

  removeEventListeners() {
    this.tempCanvas.current.removeEventListener('mousedown', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('mousemove', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('mouseup', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('dblclick', this.changeToTextTool, false);
    document.removeEventListener('keydown', this.onKeyDown, false);
    this.tempCanvas.current.removeEventListener('click', this.onDocumentClick, false);
    this.tempCanvas.current.removeEventListener('wheel', this.onWheelMove, false);
    window.removeEventListener('resize', this.onResize);
  }


  zoomIn(e) {
    e.stopPropagation();
    let { scalingFactor } = this.state;
    if (scalingFactor <= 0.1) {
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
      this.props.updateDb(scalingFactor, 'scalingFactor');
      this.redraw();
    });
  }

  zoomOut(e) {
    e.stopPropagation();
    let { scalingFactor } = this.state;
    if (scalingFactor >= 2) {
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
      this.props.updateDb(scalingFactor, 'scalingFactor');
      this.redraw();
    });
  }


  updateTool(value, id = null) {
    if (this.tools[value]) {
      this.setState({ selectedTool: value }, () => {
        let { selectedTool } = this.state;
        let { selectedTheme } = this.props;
        let selectedOne = this.tools[selectedTool];
        if (!selectedOne || selectedOne === 'select') {
          this.tool = null;
          return;
        }
        // For storing the shapes. we are generating ids.
        if (!id) {
          //this.id = this.id + 1;
          this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, uuidv4(), selectedTheme);
        } else {
          this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, id, selectedTheme);
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
    let { mouseMove } = this.props;
    let { selectedTool, scrollX, scrollY, shapes } = this.state;
    mouseMove({ x: this.changeToOneScalingFactor(ev.x - scrollX), y: this.changeToOneScalingFactor(ev.y - scrollY) })
    // let isUserDragging = false;

    if (selectedTool === 'select') {
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
      // ev._x = this.changeToOneScalingFactor(ev.x - this.state.scrollX);
      // ev._y = this.changeToOneScalingFactor(ev.y - this.state.scrollY);
      ///CHANGE ??? Moved inside condition
      if (!this.draggingElement) {
        ev._x = this.changeToOneScalingFactor(ev.x - scrollX);
        ev._y = this.changeToOneScalingFactor(ev.y - scrollY);
        // First case of move tool -> User just selected the element.events should be mousedown
        let elementSelected = getElementsAtPosition(this.changeToOneScalingFactor(this.mouseXPosition - scrollX), this.changeToOneScalingFactor(this.mouseYPosition - scrollY), shapes);
        if (elementSelected) {
          this.selectedElement = elementSelected;
          let updatedShapes = shapes.filter(shape => shape.id !== elementSelected.id);
          //redrawig without element selected
          this.setState({ shapes: updatedShapes, selectedTool: 'move' }, () => {
            let { shapes, scalingFactor } = this.state;
            let { selectedTheme } = this.props;
            let { updateDb } = this.props;
            updateDb(shapes, 'app-state-persist');
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
              scalingFactor: scalingFactor
            }
            this.tool = new MoveTool(this.tempCanvas.current, this.tempContext, this.imgUpdate, selectedElement, selectedTheme);
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
    this.resetDraggingValues();


    requestAnimationFrame(() => {

      // if the action is delete or move. wee nneed to call resetDraggingValues
      let { selectedTool } = this.state;

      if (selectedTool === 'move' || selectedTool === 'text') {
        this.redraw();
        this.setState({ selectedTool: 'select' });
        this.tool = null;
      } else {
        this.mainContext.drawImage(this.tempCanvas.current, 0, 0);
        //this.tempContext.restore();
        this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
        //this.renderParticularShape(modifiedImage);

        // Changing to select tool once we have drawn a shape except to typing text
        if (selectedTool !== 'text') {

          this.setState({ selectedTool: 'select' });
          this.tool = null;
        }
      }
      // this.redraw();

    })
  }


  imgUpdate(drawenImage) {
    if (drawenImage && drawenImage.type) {
      let { scrollX, scrollY, scalingFactor, shapes } = this.state;
      /** TODO: Change this logic to object key value structure */

      let modifiedImage = {
        ...drawenImage,
        x: this.changeToOneScalingFactor(drawenImage.x - scrollX),
        y: this.changeToOneScalingFactor(drawenImage.y - scrollY),
        endX: this.changeToOneScalingFactor(drawenImage.endX - scrollX),
        endY: this.changeToOneScalingFactor(drawenImage.endY - scrollY),
        startX: this.changeToOneScalingFactor(drawenImage.startX - scrollX),
        startY: this.changeToOneScalingFactor(drawenImage.startY - scrollY),
        radius: this.changeToOneScalingFactor(drawenImage.radius),
        width: drawenImage.width ? this.changeToOneScalingFactor(drawenImage.width) : null,
        height: drawenImage.height ? this.changeToOneScalingFactor(drawenImage.height) : null,
        scalingFactor: scalingFactor
      }

      if (drawenImage.type === 'chalk') {
        modifiedImage.drawPoints = drawenImage.drawPoints.map(point => {
          return { x: this.changeToOneScalingFactor(point[0] - scrollX), y: this.changeToOneScalingFactor(point[1] - scrollY) }
        })
      }

      let isExistingShape = false;
      let filteredShapes = shapes.filter(shape => {
        console.log(shape.id, modifiedImage.id)
        if (shape.id === modifiedImage.id) {
          isExistingShape = true;
          return null;
        } else {
          return shape;
        }
      });

      // While dragging we are resetting the shape. so needed to check this here
      if (this.draggingElement) {
        isExistingShape = this.draggingElement.id === modifiedImage.id ? true : false;
      }

      //let filteredShapes = shapes.filter(shape => shape.id !== drawenImage.id);

      console.log("isExistingShape", isExistingShape);
      this.setState({ shapes: [...filteredShapes, modifiedImage] }, () => {
        let { updateDb, updateShape } = this.props;
        updateDb(this.state.shapes, 'app-state-persist');
        updateShape(modifiedImage, isExistingShape ? 'update' : 'add');
        this.drawImage();
      })
    } else {
      this.drawImage();
    }


  }

  redraw() {
    // TODO: If the shape is outside the scrolling area skip the draw process(Possible Improvementt)
    console.log('redraw')
    let { shapes, scrollX, scrollY, baseLineHeight, baseFontSize, disableScroll } = this.state;
    if (disableScroll) {
      return;
    }
    let { selectedTheme } = this.props;
    this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
    this.tempContext.restore();
    this.tempContext.setLineDash([]);
    this.tempContext.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
    this.tempContext.fillStyle = selectedTheme === 'dark' ? "#424242" : '#000000';
    this.tempContext.lineWidth = 1.0;

    shapes.forEach(shape => {
      if (shape.type === 'rectangle') {
        this.tempContext.strokeRect(this.changeFromOneScalingFactor(shape.x) + scrollX, this.changeFromOneScalingFactor(shape.y) + scrollY, this.changeFromOneScalingFactor(shape.width), this.changeFromOneScalingFactor(shape.height));
      } else if (shape.type === 'arrow') {
        let headlen = 10;
        let x = this.changeFromOneScalingFactor(shape.x) + scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + scrollY;
        let endX = this.changeFromOneScalingFactor(shape.endX) + scrollX;
        let endY = this.changeFromOneScalingFactor(shape.endY) + scrollY;
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
        this.tempContext.moveTo(this.changeFromOneScalingFactor(shape.x) + scrollX, this.changeFromOneScalingFactor(shape.y) + scrollY);
        this.tempContext.lineTo(this.changeFromOneScalingFactor(shape.endX) + scrollX, this.changeFromOneScalingFactor(shape.endY) + scrollY);
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === 'text') {
        let color = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
        drawText(shape.textContent, this.tempContext, this.changeFromOneScalingFactor(shape.x) + scrollX, this.changeFromOneScalingFactor(shape.y) + scrollY, this.changeFromOneScalingFactor(shape.width), baseLineHeight, color, baseFontSize);
      } else if (shape.type === 'circle') {
        let x = this.changeFromOneScalingFactor(shape.x) + scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + scrollY;
        this.tempContext.beginPath();
        this.tempContext.arc(x, y, this.changeFromOneScalingFactor(shape.radius), 0, 2 * Math.PI);
        this.tempContext.stroke();
      } else if (shape.type === 'diamond') {
        let xCenter = this.changeFromOneScalingFactor(shape.x) + scrollX;
        let yCenter = this.changeFromOneScalingFactor(shape.y) + scrollY;
        let size = this.changeFromOneScalingFactor(shape.x - shape.endX);
        drawDiamond(xCenter, yCenter, size, this.tempContext);
      } else if (shape.type === 'chalk') {
        let x = this.changeFromOneScalingFactor(shape.x) + scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + scrollY;
        this.tempContext.beginPath();
        this.tempContext.moveTo(x, y);
        shape.drawPoints.forEach(point => {
          this.tempContext.lineTo(this.changeFromOneScalingFactor(point.x) + scrollX, this.changeFromOneScalingFactor(point.y) + scrollY)
        });
        this.tempContext.stroke();
        this.tempContext.closePath();
      }
    });


    // clear the present canvas
    this.mainContext.clearRect(0, 0, this.mainCanvas.current.width, this.mainCanvas.current.height);
    this.mainContext.drawImage(this.tempCanvas.current, 0, 0);
    this.tempContext.restore();
    this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
  }

  changeToTextTool(ev) {
    let { scrollX, scrollY, shapes } = this.state;
    ev._x = this.changeToOneScalingFactor(ev.x - scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - scrollY);

    let enclosedElement = getElementsAtPosition(ev._x, ev._y, shapes);

    // Temporarily updating tool manually
    //this.updateTool('text', enclosedElement && enclosedElement.type === 'text' ? enclosedElement.id : null);
    this.resetDraggingValues();

    this.setState({ selectedTool: 'text' }, () => {
      let { scrollX, scrollY, scalingFactor } = this.state;
      let { selectedTheme } = this.props;
      this.resetDraggingValues();

      let textId = null;

      if (enclosedElement && enclosedElement.type === 'text') {
        textId = enclosedElement.id;
        let shapes = this.state.shapes.filter(shape => shape.id !== this.selectedElement.id);
        this.setState({ shapes }, () => {
          this.redraw();
        });
      } else {
        //this.id = this.id + 1;
        textId = uuidv4();
      }
      this.tool = new DrawText(this.tempCanvas.current, this.tempContext, this.imgUpdate, textId, selectedTheme);
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
        func(ev, enclosedElement, { scrollX: scrollX, scrollY: scrollY, scalingFactor: scalingFactor });
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
            let { updateDb, updateShape } = this.props;
            updateDb(this.state.shapes, 'app-state-persist');
            updateShape(this.selectedElement, 'delete');
            this.redraw();
          })

        }
      }
    }
  }

  onDocumentClick(ev) {
    let { scrollX, scrollY, selectedTool, shapes } = this.state;
    ev._x = this.changeToOneScalingFactor(ev.x - scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - scrollY);

    if (selectedTool === 'text') {
      //Revertting tyhius is required.


      this.tool['onBlur']();
      // this.selectedTool = 'select';
      // this.tool = null;
      return;
    }

    if (selectedTool === 'select') {
      this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
      let selectedElement = getElementsAtPosition(ev._x, ev._y, shapes);
      this.selectedElement = selectedElement;
      console.log(selectedElement);
      if (this.selectedElement) {
        if (this.selectedElement.type === 'rectangle') {
          let { x, y, width, height } = this.selectedElement;
          this.strokeOuterRect(x, y, width, height);
        } else if (this.selectedElement.type === 'line' || this.selectedElement.type === 'arrow') {
          let { startX, startY, width, height } = this.selectedElement;
          this.strokeOuterRect(startX, startY, width, height);
        } else if (this.selectedElement.type === 'circle') {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.beginPath();
          this.tempContext.arc(x, y, this.changeFromOneScalingFactor(this.selectedElement.radius) + 10, 0, 2 * Math.PI);
          this.tempContext.stroke();
        } else if (this.selectedElement.type === 'diamond') {
          let { startX, startY, width, height } = this.selectedElement;
          this.strokeOuterRect(startX, startY, width, height);
        } else if (this.selectedElement.type === 'text') {
          let { x, y, width, height } = this.selectedElement;
          this.strokeOuterRect(x, y, width, height);
        } else if (this.selectedElement.type === 'chalk') {
          let [minX, minY, maxX, maxY] = getChalkRectValues(this.selectedElement.drawPoints);
          this.strokeOuterRect(minX, minY, maxX - minX, maxY - minY);
        }
      }
    }
  }


  strokeOuterRect(elementX, elementY, width, height) {
    let { scrollX, scrollY } = this.state;
    let x = this.changeFromOneScalingFactor(elementX) + scrollX;
    let y = this.changeFromOneScalingFactor(elementY) + scrollY;
    this.tempContext.setLineDash([6]);
    this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(width), this.changeFromOneScalingFactor(height));
  }

  onWheelMove(e) {
    if (this.state.disableScroll) {
      return;
    }
    if (this.state.selectedTool === 'text') {
      // Drawing text on canvas before scroll move
      this.tool['onBlur']();
    }
    // this.state.scrollX = this.state.scrollX - e.deltaX;
    // this.state.scrollY = this.state.scrollY - e.deltaY;
    // this.redraw();
    this.setState(prevstate => {
      return {
        scrollX: prevstate.scrollX - e.deltaX,
        scrollY: prevstate.scrollY - e.deltaY
      }
    }, () => {
      this.redraw();
    })
  }

  resetDraggingValues() {
    this.isUserDragging = false;
    this.draggingElement = null;
    this.mouseXPosition = null;
    this.mouseYPosition = null;
  }



  addShape(newShape) {
    let isExistingShape = false;
    let shapes = this.state.shapes.map(shape => {
      if (shape.id === newShape.id) {
        isExistingShape = true;
        return newShape;
      } else {
        return shape;
      }
    })
    if (!isExistingShape) {
      shapes.push(newShape);
    }

    this.setState({ shapes }, () => {
      this.redraw();
    })
  }

  removeShape(shapeTobeDeleted) {
    let updatedShapes = this.state.shapes.filter(shape => shape.id !== shapeTobeDeleted.id);
    this.setState({ shapes: updatedShapes }, () => {
      this.redraw();
    })
  }

  onDeleteCanvas() {
    this.setState({ showModal: 'deleteCanvas', disableScroll: true })
  }

  onModalClose() {
    this.setState({ showModal: null, disableScroll: false })
  }

  onShareLink() {
    this.setState({ showModal: 'shareLink', disableScroll: true })
  }

  onEmptyCanvas() {
    this.setState({ shapes: [], showModal: null, disableScroll: false }, () => {
      let { updateDb } = this.props;
      updateDb([], 'app-state-persist');
      this.redraw();
    })
  }

  render() {
    let { baseFontSize, baseLineHeight, selectedTool, canvasWidth, canvasHeight, scalingFactor, scrollX, scrollY, showModal, shapes } = this.state;
    return (
      <div
        style={{ '--font-size': `${baseFontSize}px`, '--line-height': `${baseLineHeight}px`, cursor: `${selectedTool === 'select' ? `url('../assets/cursor.svg')` : 'crosshair'}` }}
      >
        <div id="wrapper" >
          <div id="blackboardPlaceholder">
            <canvas id="drawingCanvas" ref={this.mainCanvas} width={canvasWidth} height={canvasHeight}>
              <p className="noscript">We're sorry, this web application is currently not supported with your browser. Please use
                an alternate browser or download a supported <br />browser.Supported browsers: <a
                  href="http://www.google.com/chrome">Google Chrome</a>, <a href="http://www.opera.com">Opera</a>, <a
                    href="http://www.mozilla.com">Firefox</a>, <a href="http://www.apple.com/safari">Safari</a>, <br />and <a
                      href="http://www.konqueror.org">Konqueror</a>. Also make sure your JavaScript is enabled.</p>
            </canvas>
            <canvas id="tempCanvas" ref={this.tempCanvas} width={canvasWidth} height={canvasHeight}></canvas>
            <UserActivity
              width={canvasWidth}
              height={canvasHeight}
              scrollX={scrollX}
              scrollY={scrollY}
              scalingFactor={scalingFactor}
              addShape={this.addShape}
              removeShape={this.removeShape}
              deleteAllShapes={this.onEmptyCanvas}
            />
          </div>

        </div>
        <SelectTool selectedTool={selectedTool} updateTool={this.onClickTool} />
        <ConfigTool downloadImage={this.downloadAsImage} deleteCanvas={this.onDeleteCanvas} shareLink={this.onShareLink} />
        <TextTool />
        <ZoomContainer zoomRange={scalingFactor} zoomOut={this.zoomOut} zoomIn={this.zoomIn} />
        <PrintPreview
          onCancel={this.onModalClose}
          showPreview={showModal === 'downloadImage'}
          baseFontSize={baseFontSize}
          baseLineHeight={baseLineHeight}
          scalingFactor={scalingFactor}
          shapes={shapes} />
        <ShareLink showShareLink={showModal === 'shareLink'} onCancel={this.onModalClose} />
        <DeletePopup showDeletePopup={showModal === 'deleteCanvas'} onCancel={this.onModalClose} deleteCanvas={this.onEmptyCanvas} />
        <BackIcon />
      </div>
    )
  }
}

MainComponent.defaultProps = {
  shapes: []
}

export default MainComponent;
