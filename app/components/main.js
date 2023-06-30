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
import { drawCircle, drawDiamond, drawLine, drawText } from './utils/drawShapes';
import { getChalkRectValues, getElementsAtPosition } from './utils/getElementsAtPosition';
import ZoomContainer from './ZoomContainer/ZoomContainer';
import UserActivity from './UserActivity/UserActivity';
import PrintPreview, { PrintPreviewLinks } from './PrintPreview/PrintPreview';
import ShareLink, { ShareLinks } from './ShareLink/ShareLink';
import DeletePopup, { DeletePopupLinks } from './DeleteCanvasPopup/DeletePopup';
import BackIcon, { BackIconStyles } from './BackIcon/BackIcon';
import { CURSOR_BIDIRECTIONAL_MAPPING, getEdges, getUpdatedPerformedActions, isTouchDevice } from './utils/common';
import { CollaboratorsLinks } from './Collaborators/Collaborators';
import HintComponent, { HintComponentLinks } from './Hint/HintComponent';
import PreferencePopup, { PreferencePopupLinks } from './PreferencePopup/PreferencePopup';
import { drawArrow } from './utils/drawArrow';
import ShortcutKeys from './ShortcutKeys/ShortcutKeys';
import ResizeTool from './Shapes/ResizeTool';

export function MainComponentStyles() {
  return [...PrintPreviewLinks(), ...ShareLinks(), ...DeletePopupLinks(), ...PreferencePopupLinks(), ...BackIconStyles(), ...CollaboratorsLinks(), ...HintComponentLinks(), { rel: 'stylesheet', href: styles }];
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
  select: ResizeTool
};

let eventTypeMapping = {
  'mouseup': 'mouseup',
  'mousedown': 'mousedown',
  'mousemove': 'mousemove',
  'dblclick': 'dblclick',
  'touchstart': 'mousedown',
  'touchmove': 'mousemove',
  'touchend': 'mouseup'
}


let baseConfig = {
  scalingFactor: 1,
  baseFontSize: 24,
  baseLineHeight: (150 * 24) / 100
}

/** we are maintaining seperate state for undo and performed actions. we can maintain a pointer but shapes can be added
 * by another collaborator. Hence maintaining seperate state is necessary. 
 * const UNDO_LIMIT = 50; // If possible, Provide as an config
 */

class MainComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: 0,
      scrollY: 0,
      canvasWidth: 0,
      canvasHeight: 0,
      lineWidth: 3,
      selectedTool: 'select',
      showModal: null,
      shapes: props.shapes,
      selectedElement: null,
      performedActions: [],
      undoActions: [],
      ...baseConfig
    };
    this.addEventListeners = this.addEventListeners.bind(this);
    this.updateTool = this.updateTool.bind(this);
    this.onClickTool = this.onClickTool.bind(this);
    this.onEvent = this.onEvent.bind(this);
    this.changeToOneScalingFactor = this.changeToOneScalingFactor.bind(this);
    this.changeFromOneScalingFactor = this.changeFromOneScalingFactor.bind(this);
    this.changeToTextTool = this.changeToTextTool.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.resetDraggingValues = this.resetDraggingValues.bind(this);
    this.onWheelMove = this.onWheelMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchMoveThreshold = this.onTouchMoveThreshold.bind(this);
    this.imgUpdate = this.imgUpdate.bind(this);
    this.drawImage = this.drawImage.bind(this);
    this.onResize = this.onResize.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.resetZoom = this.resetZoom.bind(this);
    this.addShape = this.addShape.bind(this);
    this.removeShape = this.removeShape.bind(this);
    this.strokeOuterRect = this.strokeOuterRect.bind(this);
    this.downloadAsImage = this.downloadAsImage.bind(this);
    this.onDeleteCanvas = this.onDeleteCanvas.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onShareLink = this.onShareLink.bind(this);
    this.onEmptyCanvas = this.onEmptyCanvas.bind(this);
    this.deleteShape = this.deleteShape.bind(this);
    this.clearSelectedElement = this.clearSelectedElement.bind(this);
    this.togglePreferences = this.togglePreferences.bind(this);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
    this.restoreContext = this.restoreContext.bind(this);
    this.afterUpdateScalingFactor = this.afterUpdateScalingFactor.bind(this);
    this.detectDragging = this.detectDragging.bind(this);
    this.initializeMoveTool = this.initializeMoveTool.bind(this);
    this.onMoveElement = this.onMoveElement.bind(this);
    this.updateCursorType = this.updateCursorType.bind(this);


    //this.idb = new Idb();

    this.mainCanvas = React.createRef();
    this.tempCanvas = React.createRef();
    this.mainContainerRef = React.createRef();


    // sequeunce id 
    //this.id = 0;

    // To check whether the user is dragging.
    this.mouseXPosition = null;
    this.mouseYPosition = null;
    this.draggingElement = null;

    // touch events
    this.touchStartTimer = null;
    this.DELTA_TIME_THRESHOLD_MS = 700;
    this.TOUCH_MOVE_THRESHOLD = 10;


    this.keyMapping = {
      'ctrl+z': this.undo,
      'ctrl+shift+z': this.redo,
      'ctrl+shift+p': this.togglePreferences,
      'backspace': this.deleteShape,
      'delete': this.deleteShape
    };


    this.edgesForResize = [];
  }


  downloadAsImage(e) {
    e.stopPropagation();
    this.setState({ showModal: 'downloadImage', disableScroll: true })
  }


  componentDidMount() {

    this.setState({ canvasWidth: window.innerWidth, canvasHeight: window.innerHeight }, () => {
      this.redraw();
    });
    let { selectedTool, lineWidth } = this.state;
    let { selectedTheme } = this.props;
    this.mainContext = this.mainCanvas.current.getContext('2d');
    this.tempContext = this.tempCanvas.current.getContext('2d');
    this.tempContext.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';// Default line color. 
    this.tempContext.lineWidth = lineWidth;// Default stroke weight. 

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
    if (isTouchDevice()) {
      this.tempCanvas.current.addEventListener('touchstart', this.onTouchStart, false);
      this.tempCanvas.current.addEventListener('touchmove', this.onTouchMove, false);
      this.tempCanvas.current.addEventListener('touchend', this.onTouchEnd, false);
    } else {
      this.tempCanvas.current.addEventListener('mousedown', this.onEvent, false);
      this.tempCanvas.current.addEventListener('mousemove', this.onEvent, false);
      this.tempCanvas.current.addEventListener('mouseup', this.onEvent, false);
    }

    this.tempCanvas.current.addEventListener('dblclick', this.changeToTextTool, false);
    this.tempCanvas.current.addEventListener('click', this.onDocumentClick, false);
    this.tempCanvas.current.addEventListener('wheel', this.onWheelMove, false);

    window.addEventListener('resize', this.onResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', this.onResize);
    }
  }

  removeEventListeners() {
    this.tempCanvas.current.removeEventListener('mousedown', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('mousemove', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('mouseup', this.onEvent, false);
    this.tempCanvas.current.removeEventListener('touchstart', this.onTouchStart, false);
    this.tempCanvas.current.removeEventListener('touchmove', this.onTouchMove, false);
    this.tempCanvas.current.removeEventListener('touchend', this.onTouchEnd, false);
    this.tempCanvas.current.removeEventListener('dblclick', this.changeToTextTool, false);
    this.tempCanvas.current.removeEventListener('click', this.onDocumentClick, false);
    this.tempCanvas.current.removeEventListener('wheel', this.onWheelMove, false);
    window.removeEventListener('resize', this.onResize);
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('resize', this.onResize);
    }
  }

  afterUpdateScalingFactor() {
    let { scalingFactor } = this.state;
    let { updateDb } = this.props;
    updateDb(scalingFactor, 'scalingFactor');
    this.redraw();
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
    }, this.afterUpdateScalingFactor);
  }

  resetZoom(e) {
    e.stopPropagation();
    this.setState({ ...baseConfig }, this.afterUpdateScalingFactor);
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
    }, this.afterUpdateScalingFactor);
  }


  updateTool(value, id = null) {
    if (this.tools[value]) {
      this.setState({ selectedTool: value, selectedElement: null }, () => {
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
          id = uuidv4();
        }
        this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, id, selectedTheme);

        // clear the tempCanvas
        this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
      })
    }
  }

  onResize(e) {
    this.setState({ canvasWidth: window.visualViewport.width, canvasHeight: window.visualViewport.height }, this.redraw)
  }

  onTouchStart(ev) {
    if (ev.targetTouches.length === 1) {
      // if (this.touchStartTimer === null) {
      //   this.touchStartTimer = setTimeout(() => {
      //     this.touchStartTimer = null;
      //   }, this.DELTA_TIME_THRESHOLD_MS);
      //   this.touchStartX = ev.targetTouches[0].clientX;
      //   this.touchStartY = ev.targetTouches[0].clientY;
      //   ev.x = ev.targetTouches[0].clientX;
      //   ev.y = ev.targetTouches[0].clientY;
      //   this.onEvent(ev);
      // } else {
      //   if ((Math.abs(ev.targetTouches[0].clientX - this.touchStartX) < 10) && (Math.abs(ev.targetTouches[0].clientY - this.touchStartY) < 10)) {
      //     ev.x = ev.targetTouches[0].clientX;
      //     ev.y = ev.targetTouches[0].clientY;
      //     this.changeToTextTool(ev);
      //   }

      // }
      this.touchStartX = ev.targetTouches[0].clientX;
      this.touchStartY = ev.targetTouches[0].clientY;
      ev.x = ev.targetTouches[0].clientX;
      ev.y = ev.targetTouches[0].clientY;
      this.onEvent(ev);
    } else {
      this.onEvent(ev);
    }
  }

  onTouchMoveThreshold(x, y) {
    let threshold = { x, y };
    if (x > this.TOUCH_MOVE_THRESHOLD) {
      threshold.x = -Math.abs(this.TOUCH_MOVE_THRESHOLD);
    } else if (x < -this.TOUCH_MOVE_THRESHOLD) {
      threshold.x = Math.abs(this.TOUCH_MOVE_THRESHOLD);
    }
    if (y > this.TOUCH_MOVE_THRESHOLD) {
      threshold.y = -Math.abs(this.TOUCH_MOVE_THRESHOLD);
    } else if (y < -this.TOUCH_MOVE_THRESHOLD) {
      threshold.y = this.TOUCH_MOVE_THRESHOLD;
    }
    return threshold;
  }

  onTouchMove(ev) {
    ev.preventDefault();
    let { selectedTool } = this.state;
    if (ev.targetTouches.length === 1) {
      let deltaX = ev.targetTouches[0].clientX - this.touchStartX;
      let deltaY = ev.targetTouches[0].clientY - this.touchStartY;
      let thresholdedDelta = this.onTouchMoveThreshold(deltaX, deltaY);
      ev.deltaX = thresholdedDelta.x;
      ev.deltaY = thresholdedDelta.y;
      if (selectedTool === 'select') {
        this.onWheelMove(ev);
      } else {
        ev.x = ev.targetTouches[0].clientX;
        ev.y = ev.targetTouches[0].clientY;
        this.onEvent(ev);
      }

    } else {
      this.onEvent(ev);
    }
  }

  onTouchEnd(ev) {
    if (ev.changedTouches.length === 1) {
      if (this.touchStartTimer === null) {
        this.touchStartTimer = setTimeout(() => {
          this.touchStartTimer = null;
        }, this.DELTA_TIME_THRESHOLD_MS);
        // this.touchStartX = ev.changedTouches[0].clientX;
        // this.touchStartY = ev.changedTouches[0].clientY;
        ev.x = ev.changedTouches[0].clientX;
        ev.y = ev.changedTouches[0].clientY;
        this.onEvent(ev);
      } else {
        if ((Math.abs(ev.changedTouches[0].clientX - this.touchStartX) < 10) && (Math.abs(ev.changedTouches[0].clientY - this.touchStartY) < 10)) {
          ev.preventDefault();
          ev.x = ev.changedTouches[0].clientX;
          ev.y = ev.changedTouches[0].clientY;
          this.changeToTextTool(ev);
        }
      }

    }
  }


  detectDragging(ev) {
    let { selectedTool } = this.state;
    let isUserDragging = false;
    if (selectedTool === 'select') {
      if (ev.type === 'mousedown' || ev.type === 'touchstart') {
        this.mouseXPosition = ev._x;
        this.mouseYPosition = ev._y;
      } else if (ev.type === 'mousemove' || ev.type === 'touchmove') {
        if (this.mouseYPosition && this.mouseXPosition) {
          let diffX = Math.abs(this.mouseXPosition - ev._x);
          let diffY = Math.abs(this.mouseYPosition - ev._y);
          if (diffX > 20 || diffY > 20) {
            isUserDragging = true;
          }
        }
      } else {
        isUserDragging = false;
        this.mouseXPosition = null;
        this.mouseYPosition = null;
      }
    } else {
      isUserDragging = false;
      this.mouseXPosition = null;
      this.mouseYPosition = null;
    }

    return isUserDragging;
  }


  initializeMoveTool(elementSelected, ev) {
    let { shapes, scalingFactor, selectedElement } = this.state;
    let { selectedTheme } = this.props;
    let { updateDb } = this.props;
    updateDb(shapes, 'app-state-persist');
    this.redraw();
    this.draggingElement = elementSelected;
    this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
    //modifyig the selectedElement
    let modifiedSelectedElement = {
      ...selectedElement,
      x: this.changeFromOneScalingFactor(selectedElement.x),
      y: this.changeFromOneScalingFactor(selectedElement.y),
      endX: this.changeFromOneScalingFactor(selectedElement.endX),
      endY: this.changeFromOneScalingFactor(selectedElement.endY),
      startX: this.changeFromOneScalingFactor(selectedElement.startX),
      startY: this.changeFromOneScalingFactor(selectedElement.startY),
      radius: this.changeFromOneScalingFactor(selectedElement.radius),
      width: selectedElement.width ? this.changeFromOneScalingFactor(selectedElement.width) : null,
      height: selectedElement.height ? this.changeFromOneScalingFactor(selectedElement.height) : null,
      scalingFactor: scalingFactor
    }
    this.tool = new MoveTool(this.tempCanvas.current, this.tempContext, this.imgUpdate, modifiedSelectedElement, selectedTheme, scalingFactor);
    // element is present. we need to call movetool
    this.tool[eventTypeMapping['mousedown']](ev);
  }

  onMoveElement(ev) {
    let { shapes, scrollX, scrollY } = this.state;
    if (!this.draggingElement) {
      ev._x = this.changeToOneScalingFactor(ev.x - scrollX);
      ev._y = this.changeToOneScalingFactor(ev.y - scrollY);
      // First case of move tool -> User just selected the element.events should be mousedown
      let elementSelected = getElementsAtPosition(this.changeToOneScalingFactor(this.mouseXPosition - scrollX), this.changeToOneScalingFactor(this.mouseYPosition - scrollY), shapes);
      if (elementSelected) {
        let updatedShapes = shapes.filter(shape => shape.id !== elementSelected.id);
        //redrawig without element selected
        this.setState({ shapes: updatedShapes, selectedTool: 'move', selectedElement: elementSelected }, () => {
          this.initializeMoveTool(elementSelected, ev);
        })
      }
    } else if (this.mouseXPosition !== null && this.mouseYPosition !== null) {
      if (ev.type === 'mousemove' || ev.type === 'mouseup') {
        // movetool instace should already by present
        if (this.tool) {
          this.tool[eventTypeMapping[ev.type]](ev);
          if (ev.type === 'mouseup') {
            this.isUserDragging = false;
            this.mouseXPosition = null;
            this.mouseYPosition = null;
          }

        }
      }
    }
  }

  onEvent(ev) {
    ev._x = ev.x;
    ev._y = ev.y;

    let { mouseMove } = this.props;
    let { scrollX, scrollY } = this.state;
    mouseMove({ x: this.changeToOneScalingFactor(ev.x - scrollX), y: this.changeToOneScalingFactor(ev.y - scrollY) })
    // let isUserDragging = false;

    let isUserDragging = this.detectDragging(ev);
    if (isUserDragging) {
      this.onMoveElement(ev);
    } else if (this.tool) {
      this.updateCursorType(ev);
      let func = this.tool[eventTypeMapping[ev.type]];
      if (func) {
        func(ev);
      }
    }
  }

  onClickTool(e) {
    this.resetDraggingValues();
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
      let { keepLastSelected } = this.props;

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
        if (selectedTool !== 'text') { //???
          if (keepLastSelected) {
            let selectedOne = this.tools[selectedTool];
            this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, uuidv4());
          } else {
            this.setState({ selectedTool: 'select' });
            this.tool = null;
          }
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

      // While Editing we are removing the shape so we need to check this here
      if (this.selectedTextEle) {
        isExistingShape = this.selectedTextEle === modifiedImage.id ? true : false;
      }

      //let filteredShapes = shapes.filter(shape => shape.id !== drawenImage.id);
      let performedActions = getUpdatedPerformedActions(this.state.performedActions, isExistingShape ? [{ ...this.draggingElement }, { ...modifiedImage, isExistingShape: true }] : [modifiedImage]);
      this.setState({ shapes: [...filteredShapes, modifiedImage], performedActions, selectedElement: null }, () => {
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

    let { shapes, scrollX, scrollY, baseLineHeight, baseFontSize, disableScroll, lineWidth } = this.state;
    if (disableScroll) {
      return;
    }
    let { selectedTheme } = this.props;
    this.restoreContext(this.tempContext, this.tempCanvas.current.width, this.tempCanvas.current.height);
    this.tempContext.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
    this.tempContext.fillStyle = selectedTheme === 'dark' ? "#424242" : '#000000';
    this.tempContext.lineWidth = lineWidth;

    shapes.forEach(originalShape => {
      let shape = {
        ...originalShape,
        x: this.changeFromOneScalingFactor(originalShape.x) + scrollX,
        y: this.changeFromOneScalingFactor(originalShape.y) + scrollY,
        endX: this.changeFromOneScalingFactor(originalShape.endX) + scrollX,
        endY: this.changeFromOneScalingFactor(originalShape.endY) + scrollY,
      }
      if (shape.type === 'rectangle') {
        this.tempContext.strokeRect(shape.x, shape.y, this.changeFromOneScalingFactor(shape.width), this.changeFromOneScalingFactor(shape.height), [10]);
      } else if (shape.type === 'arrow') {
        drawArrow(shape.x, shape.y, shape.endX, shape.endY, this.tempContext);
      } else if (shape.type === 'line') {
        drawLine(shape.x, shape.y, shape.endX, shape.endY, this.tempContext);
      } else if (shape.type === 'text') {
        let color = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
        drawText(shape.textContent, this.tempContext, shape.x, shape.y, this.changeFromOneScalingFactor(shape.width), baseLineHeight, color, baseFontSize);
      } else if (shape.type === 'circle') {
        drawCircle(shape.x, shape.y, this.changeFromOneScalingFactor(shape.radius), this.tempContext);
      } else if (shape.type === 'diamond') {
        let size = this.changeFromOneScalingFactor(originalShape.x - originalShape.endX);
        drawDiamond(shape.x, shape.y, size, this.tempContext);
      } else if (shape.type === 'chalk') {
        this.tempContext.beginPath();
        this.tempContext.moveTo(shape.x, shape.y);
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
    this.restoreContext(this.tempContext, this.tempCanvas.current.width, this.tempCanvas.current.height);
  }


  restoreContext(ctx, width, height) {
    let { selectedTheme } = this.props;
    let { lineWidth } = this.state;
    ctx.restore();
    ctx.strokeStyle = selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
    ctx.fillStyle = selectedTheme === 'dark' ? "#424242" : '#000000';
    ctx.lineWidth = lineWidth;
    ctx.setLineDash([]);
    ctx.clearRect(0, 0, width, height);
  }

  clearSelectedElement() {
    if (this.state.selectedElement) {
      this.restoreContext(this.tempContext, this.tempCanvas.width, this.tempCanvas.height);
      this.edgesForResize = [];
      this.tool = null;
      this.setState({ selectedElement: null });
    }
  }

  changeToTextTool(ev) {
    let { scrollX, scrollY, shapes } = this.state;
    ev._x = ev.x;
    ev._y = ev.y;

    let enclosedElement = getElementsAtPosition(this.changeToOneScalingFactor(ev.x - scrollX), this.changeToOneScalingFactor(ev.y - scrollY), shapes);

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
        let shapes = this.state.shapes.filter(shape => shape.id !== enclosedElement.id);
        this.selectedTextEle = textId;
        this.setState({ shapes }, () => {
          this.redraw();
        });
      } else {
        //this.id = this.id + 1;
        textId = uuidv4();
      }
      this.tool = new DrawText(this.tempCanvas.current, this.tempContext, this.imgUpdate, textId, selectedTheme);
      let eventMapping = ev.type === 'touchstart' ? 'dblclick' : 'dblclick';
      let func = this.tool[eventMapping];
      if (func) {
        this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
        // func will be dbclick in drawtext
        func(ev, enclosedElement, { scrollX: scrollX, scrollY: scrollY, scalingFactor: scalingFactor });
      }
    })
  }

  undo() {
    let { shapes, performedActions, undoActions } = this.state;
    if (performedActions && performedActions.length > 0) {
      let actionsPerformed = [...performedActions];
      let { isExistingShape = false, isDeletedShape = false, ...lastAddedElement } = actionsPerformed.pop();
      let originalValueInCaseOfDragging = null;
      if (isExistingShape) {
        originalValueInCaseOfDragging = actionsPerformed.pop();
      }
      let modifiedShapes = [];
      shapes.forEach(shape => {
        if (shape.id !== lastAddedElement.id) {
          modifiedShapes.push(shape);
        } else {
          if (isExistingShape) {
            modifiedShapes.push(originalValueInCaseOfDragging);
          }
        }
      })
      if (isDeletedShape) {
        modifiedShapes.push(lastAddedElement);
      }
      let updatedUndoActions = undoActions.concat({ ...lastAddedElement, isExistingShape });
      this.setState({ shapes: modifiedShapes, performedActions: actionsPerformed, undoActions: updatedUndoActions }, () => {
        let { updateDb, updateShape } = this.props;
        updateDb(this.state.shapes, 'app-state-persist');
        updateShape(isExistingShape ? originalValueInCaseOfDragging : lastAddedElement, isExistingShape ? 'update' : isDeletedShape ? 'add' : 'delete');
        this.redraw();
      })
    }
  }

  redo() {
    let { undoActions, shapes, performedActions: originalPerformedActions } = this.state;
    if (undoActions && undoActions.length > 0) {
      let undoTobeModified = [...undoActions];
      let { isExistingShape, ...shapeToBeAdded } = undoTobeModified.pop();
      let originalShapes = [...shapes];
      let updatedShapes = [];
      if (isExistingShape) {
        originalShapes.forEach(shape => {
          if (shape.id === shapeToBeAdded.id) {
            updatedShapes.push(shapeToBeAdded)
          } else {
            updatedShapes.push(shape);
          }
        });
      } else {
        updatedShapes = [...originalShapes, shapeToBeAdded];
      }

      let performedActions = getUpdatedPerformedActions(originalPerformedActions, [shapeToBeAdded]);
      this.setState({ shapes: updatedShapes, performedActions, undoActions: [...undoTobeModified] }, () => {
        let { updateDb, updateShape } = this.props;
        updateDb(this.state.shapes, 'app-state-persist');
        updateShape(shapeToBeAdded, isExistingShape ? 'update' : 'add');
        this.redraw();
      })
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
      if (selectedElement) {
        this.tool = new ResizeTool(this.tempCanvas, this.tempContext, this.imgUpdate, selectedElement.id, selectedElement);
        this.setState({ selectedElement: selectedElement }, () => {
          let { selectedElement } = this.state;
          if (selectedElement.type === 'rectangle') {
            let { x, y, width, height } = selectedElement;
            this.strokeOuterRect(x, y, width, height);
          } else if (selectedElement.type === 'line' || selectedElement.type === 'arrow') {
            let { startX, startY, width, height } = selectedElement;
            this.strokeOuterRect(startX, startY, width, height);
          } else if (selectedElement.type === 'circle') {
            // let x = this.changeFromOneScalingFactor(selectedElement.x) + scrollX;
            // let y = this.changeFromOneScalingFactor(selectedElement.y) + scrollY;
            // this.tempContext.setLineDash([6]);
            // this.tempContext.beginPath();
            // this.tempContext.arc(x, y, this.changeFromOneScalingFactor(selectedElement.radius) + 10, 0, 2 * Math.PI);
            // this.tempContext.stroke();
            this.strokeOuterRect(selectedElement.x - selectedElement.radius, selectedElement.y - selectedElement.radius, selectedElement.radius * 2, selectedElement.radius * 2);
          } else if (selectedElement.type === 'diamond') {
            let { startX, startY, width, height } = selectedElement;
            this.strokeOuterRect(startX, startY, width, height);
          } else if (selectedElement.type === 'text') {
            let { x, y, width, height } = selectedElement;
            this.strokeOuterRect(x, y, width, height);
          } else if (selectedElement.type === 'chalk') {
            let [minX, minY, maxX, maxY] = getChalkRectValues(selectedElement.drawPoints);
            this.strokeOuterRect(minX, minY, maxX - minX, maxY - minY);
          }
        })
      } else {
        this.clearSelectedElement();
      }
    }
  }


  strokeOuterRect(elementX, elementY, width, height) {
    let { scrollX, scrollY } = this.state;
    let x = this.changeFromOneScalingFactor(elementX) + scrollX;
    let y = this.changeFromOneScalingFactor(elementY) + scrollY;
    let scaledWidth = this.changeFromOneScalingFactor(width);
    let scaledHeight = this.changeFromOneScalingFactor(height);
    let edges = getEdges({
      type: 'rectangle',
      x: x,
      y: y,
      endX: x + scaledWidth,
      endY: y + scaledHeight,
      width: scaledWidth,
      height: scaledHeight
    });
    this.edgesForResize = edges;
    //this.tempContext.setLineDash([5]);
    this.tempContext.lineWidth = 2;
    this.tempContext.strokeStyle = "#9b9ef3";
    this.tempContext.strokeRect(x - 5, y - 5, scaledWidth + 10, scaledHeight + 10);
    edges.forEach(([x, y]) => {
      this.tempContext.setLineDash([]);
      this.tempContext.strokeStyle = "#9b9ef3";
      this.tempContext.beginPath();
      this.tempContext.arc(x, y, 5, 0, 2 * Math.PI);
      this.tempContext.stroke();
    })
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
        scrollY: prevstate.scrollY - e.deltaY,
        selectedElement: null
      }
    }, () => {
      this.edgesForResize = [];
      this.redraw();
    })
  }

  resetDraggingValues() {
    this.draggingElement = null;
    this.mouseXPosition = null;
    this.mouseYPosition = null;
    this.selectedTextEle = null;
    this.clearSelectedElement();
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

  togglePreferences() {
    this.setState({ showModal: 'preferences', disableScroll: false })
  }

  onEmptyCanvas() {
    this.setState({ shapes: [], showModal: null, disableScroll: false, performedActions: [], undoActions: [] }, () => {
      let { updateDb } = this.props;
      updateDb([], 'app-state-persist');
      this.redraw();
    })
  }


  deleteShape() {
    if (this.state.selectedElement) {
      let { selectedElement, performedActions: originalPerformedActions } = this.state;
      let shapes = this.state.shapes.filter(shape => shape.id !== selectedElement.id);
      let performedActions = getUpdatedPerformedActions(originalPerformedActions, [{ ...selectedElement, isDeletedShape: true }]);
      this.setState({ shapes, selectedElement: null, performedActions }, () => {
        let { updateDb, updateShape } = this.props;
        updateDb(this.state.shapes, 'app-state-persist');
        updateShape(selectedElement, 'delete');
        this.redraw();
      })
    }
  }

  updateCursorType(ev) {
    let { selectedElement, selectedTool } = this.state;
    if (this.edgesForResize.length > 0) {
      let isMatchFound = this.edgesForResize.findIndex(([x, y]) => {
        let diffX = Math.abs(x - ev._x);
        let diffY = Math.abs(y - ev._y);
        return diffX < 5 && diffY < 5;
      });
      console.log(this.mainContainerRef, isMatchFound)
      if (isMatchFound >= 0) {
        this.mainContainerRef.current.style.cursor = CURSOR_BIDIRECTIONAL_MAPPING[isMatchFound]
      } else {
        let cursorType = selectedTool === 'select' || selectedElement !== null ? `move` : 'crosshair';
        this.mainContainerRef.current.style.cursor = cursorType;
      }
    }
  }



  render() {
    console.log('Edges forr resize', this.edgesForResize);
    let { baseFontSize, baseLineHeight, selectedTool, canvasWidth, canvasHeight, scalingFactor, scrollX, scrollY, showModal, shapes, lineWidth, selectedElement } = this.state;
    let { backLink } = this.props;
    let cursorType = `${selectedTool === 'select' || selectedElement !== null ? `move` : 'crosshair'}`
    return (
      <div
        ref={this.mainContainerRef}
        style={{ '--font-size': `${baseFontSize}px`, '--line-height': `${baseLineHeight}px`, cursor: cursorType }}
      >
        <ShortcutKeys disableShortcut={selectedTool === 'text'} keyMapping={this.keyMapping} />
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
              baseLineHeight={baseLineHeight}
              baseFontSize={baseFontSize}
            />
          </div>

        </div>
        <SelectTool selectedTool={selectedTool} updateTool={this.onClickTool} />
        <HintComponent />
        <ConfigTool downloadImage={this.downloadAsImage} deleteCanvas={this.onDeleteCanvas} shareLink={this.onShareLink} togglePreferences={this.togglePreferences} />
        <TextTool />
        <ZoomContainer zoomRange={scalingFactor} zoomOut={this.zoomOut} zoomIn={this.zoomIn} resetZoom={this.resetZoom} />
        <PrintPreview
          onCancel={this.onModalClose}
          showPreview={showModal === 'downloadImage'}
          baseFontSize={baseFontSize}
          baseLineHeight={baseLineHeight}
          scalingFactor={scalingFactor}
          lineWidth={lineWidth}
          shapes={shapes} />
        <ShareLink showShareLink={showModal === 'shareLink'} onCancel={this.onModalClose} />
        <DeletePopup showDeletePopup={showModal === 'deleteCanvas'} onCancel={this.onModalClose} deleteCanvas={this.onEmptyCanvas} />
        <PreferencePopup showPreferencePopup={showModal === 'preferences'} onCancel={this.onModalClose} preferences={{
          'darkMode': {
            type: 'checkbox',
            checked: this.props.selectedTheme === 'dark',
            displayName: 'Dark Mode'
          },
          'keepLastSelected': {
            type: 'checkbox',
            checked: this.props.keepLastSelected,
            displayName: 'Keep Last Selected Tool'
          }
        }}
          onChangePreference={this.props.onChangePreference}
        />
        <BackIcon backLink={backLink} />
        {
          selectedElement ? (
            <div className='delete-toast'>
              <div className='delete-toast-msg' onClick={this.deleteShape}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                Delete
              </div>

            </div>
          ) : null
        }
      </div>
    )
  }
}

MainComponent.defaultProps = {
  shapes: []
}

export default MainComponent;
