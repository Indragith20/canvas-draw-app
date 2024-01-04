import React, { useEffect, useReducer, useRef } from 'react';
import styles from './main.css';
import ShortcutKeys from './ShortcutKeys/ShortcutKeys';
import UserActivity from './UserActivity/UserActivity';
import SelectTool from './SelectTool/SelectTool';
import HintComponent, { HintComponentLinks } from './Hint/HintComponent';
import ConfigTool from './ConfigTool/ConfigTool';
import TextTool from './TextTool/TextTool';
import ZoomContainer from './ZoomContainer/ZoomContainer';
import PrintPreview, { PrintPreviewLinks } from './PrintPreview/PrintPreview';
import BackIcon, { BackIconStyles } from './BackIcon/BackIcon';
import PreferencePopup, { PreferencePopupLinks } from './PreferencePopup/PreferencePopup';
import DeletePopup, { DeletePopupLinks } from './DeleteCanvasPopup/DeletePopup';
import ShareLink, { ShareLinks } from './ShareLink/ShareLink';
import { CollaboratorsLinks } from './Collaborators/Collaborators';
import { CURSOR_BIDIRECTIONAL_MAPPING, isTouchDevice } from './utils/common';
import DrawCanvas from './DrawCanvas/DrawCanvas';
import DrawAreaContext, { UPDATE_CANVAS_AREA, UPDATE_SELECTED_TOOL } from './DrawCanvas/DrawAreaContext';
import drawAreaReducer from './DrawCanvas/DrawAreaReducer';

export function MainComponentStyles() {
  return [...PrintPreviewLinks(), ...ShareLinks(), ...DeletePopupLinks(), ...PreferencePopupLinks(), ...BackIconStyles(), ...CollaboratorsLinks(), ...HintComponentLinks(), { rel: 'stylesheet', href: styles }];
}


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

function DrawArea({ shapes: existingShapes = [], backLink, mouseMove, selectedTheme, updateDb, updateShape, keepLastSelected }) {
  const [state, dispatch] = useReducer(drawAreaReducer, {
    scrollX: 0,
    scrollY: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    lineWidth: 3,
    selectedTool: 'select',
    showModal: null,
    shapes: existingShapes,
    selectedElement: null,
    performedActions: [],
    undoActions: [],
    ...baseConfig
  });


  const mainContainerRef = useRef(null);

  const mouseXPosition = useRef(null);
  const mouseYPosition = useRef(null);
  const draggingElement = useRef(null);
  const isResizing = useRef(false);

  // touch events
  const touchStartTimer = useRef(null);
  const DELTA_TIME_THRESHOLD_MS = 700;
  const TOUCH_MOVE_THRESHOLD = 10;

  const edgesForResize = useRef([]);

  const tool = useRef(null);

  function changeToOneScalingFactor(coords) {
    return coords / state.scalingFactor;
  }

  function changeFromOneScalingFactor(coords) {
    return coords * state.scalingFactor;
  }

  function detectDragging(ev) {
    let { selectedTool } = state;
    let isUserDragging = false;
    if (selectedTool === 'select') {
      if (ev.type === 'mousedown' || ev.type === 'touchstart') {
        mouseXPosition.current = ev._x;
        mouseYPosition.current = ev._y;
      } else if (ev.type === 'mousemove' || ev.type === 'touchmove') {
        if (mouseYPosition.current && mouseXPosition.current) {
          let diffX = Math.abs(mouseXPosition.current - ev._x);
          let diffY = Math.abs(mouseYPosition.current - ev._y);
          if (diffX > 20 || diffY > 20) {
            isUserDragging = true;
          }
        }
      } else {
        isUserDragging = false;
        mouseXPosition.current = null;
        mouseYPosition.current = null;
      }
    } else {
      isUserDragging = false;
      mouseXPosition.current = null;
      mouseYPosition.current = null;
    }

    return isUserDragging;
  }

  function getCursorPositionAndUpdateCursor(ev) {
    let { selectedElement, selectedTool } = state;
    let position = null;
    if (edgesForResize.current.length > 0) {
      let isMatchFound = edgesForResize.current.findIndex(([x, y]) => {
        if (x === null || y === null) {
          return false;
        }
        let diffX = Math.abs(x - ev._x);
        let diffY = Math.abs(y - ev._y);
        return diffX < 5 && diffY < 5;
      });
      if (isMatchFound >= 0) {
        let [cursor, cursorPositionOnElement] = CURSOR_BIDIRECTIONAL_MAPPING[isMatchFound];
        position = cursorPositionOnElement;
        mainContainerRef.current.style.cursor = cursor;
      } else {
        let cursorType = selectedTool === 'select' || selectedElement !== null ? `move` : 'crosshair';
        mainContainerRef.current.style.cursor = cursorType;
      }
    }
    return position;
  }

  function onEvent(ev) {
    console.log('Event Called')
    ev._x = ev.x;
    ev._y = ev.y;

    let { scrollX, scrollY, selectedElement } = state;
    mouseMove({ x: changeToOneScalingFactor(ev.x - scrollX), y: changeToOneScalingFactor(ev.y - scrollY) })

    let isUserDragging = isResizing.current ? false : detectDragging(ev);
    if (isUserDragging) {
      // this.onMoveElement(ev);
    } else {
      // Temp Hack: Not allowing free drawn shape and text to be resized
      if (isResizing.current && (selectedElement.type !== 'text' || selectedElement.type === 'chalk')) {
        // this.onResizeElement(ev);
      } else if (tool) {
        let func = tool[eventTypeMapping[ev.type]];
        if (func) {
          func(ev);
        }
      } else if (selectedElement && (selectedElement.type !== 'text' || selectedElement.type === 'chalk')) {
        let cursorPositonOnElement = getCursorPositionAndUpdateCursor(ev);
        this.onResizeElement(ev, cursorPositonOnElement);
      }
    }
  }



  function getPreferences() {
    return {
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
    }
  }


  useEffect(() => {
    dispatch({
      type: UPDATE_CANVAS_AREA,
      payload: {
        canvasWidth: window.innerWidth,
        canvasHeight: window.innerHeight
      }
    })
  }, []);

  useEffect(() => {
    updateDb(state.shapes, 'app-state-persist');
  }, [state.shapes, updateDb]);

  function onClickTool(e) {
    dispatch({
      type: UPDATE_SELECTED_TOOL,
      payload: {
        selectedTool: e.currentTarget.id
      }
    })
  }

  function updateCursorType(cursor) {
    mainContainerRef.current.style.cursor = cursor;
  }

  let { baseFontSize, baseLineHeight, selectedTool, canvasWidth, canvasHeight, scalingFactor, scrollX, scrollY, showModal, shapes, lineWidth, selectedElement } = state;
  let cursorType = `${selectedTool === 'select' || selectedElement !== null ? `move` : 'crosshair'}`

  return (
    <DrawAreaContext.Provider value={{ state, dispatch }}>
      <div
        ref={mainContainerRef}
        style={{ '--font-size': `${baseFontSize}px`, '--line-height': `${baseLineHeight}px`, cursor: cursorType }}
      >
        {/* <ShortcutKeys disableShortcut={selectedTool === 'text'} keyMapping={keyMapping} /> */}
        <div id="wrapper" >
          <div id="blackboardPlaceholder">
            <DrawCanvas selectedTheme={selectedTheme} updateShape={updateShape} keepLastSelected={keepLastSelected} mouseMove={mouseMove} updateCursorType={updateCursorType} />
            <UserActivity
              width={canvasWidth}
              height={canvasHeight}
              scrollX={scrollX}
              scrollY={scrollY}
              scalingFactor={scalingFactor}
              // addShape={this.addShape}
              // removeShape={this.removeShape}
              // deleteAllShapes={this.onEmptyCanvas}
              baseLineHeight={baseLineHeight}
              baseFontSize={baseFontSize}
            />
          </div>

        </div>
        <SelectTool selectedTool={selectedTool} updateTool={onClickTool} />
        <HintComponent />
        {/* <ConfigTool downloadImage={this.downloadAsImage} deleteCanvas={this.onDeleteCanvas} shareLink={this.onShareLink} togglePreferences={this.togglePreferences} /> */}
        <TextTool />
        {/* <ZoomContainer zoomRange={scalingFactor} zoomOut={this.zoomOut} zoomIn={this.zoomIn} resetZoom={this.resetZoom} />
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
      <PreferencePopup showPreferencePopup={showModal === 'preferences'} onCancel={this.onModalClose} preferences={getPreferences()} onChangePreference={this.props.onChangePreference} /> */}
        <BackIcon backLink={backLink} />
        {/* {
          selectedElement ? (
            <div className='delete-toast'>
              <div className='delete-toast-msg' onClick={this.deleteShape}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                Delete
              </div>

            </div>
          ) : null
        } */}
      </div>
    </DrawAreaContext.Provider>
  )
}


export default DrawArea;