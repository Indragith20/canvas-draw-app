import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
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
import DrawCanvas from './DrawCanvas/DrawCanvas';
import DrawAreaContext from './DrawCanvas/DrawAreaContext';
import { ADD_NEW_SHAPE, DELETE_EXISTING_SHAPE, DELETE_SHAPE, UPDATE_CANVAS_AREA, UPDATE_MODAL_TYPE } from './DrawCanvas/DrawAreaConstants';
import drawAreaReducer, { baseConfig } from './DrawCanvas/DrawAreaReducer';

export function MainComponentStyles() {
  return [...PrintPreviewLinks(), ...ShareLinks(), ...DeletePopupLinks(), ...PreferencePopupLinks(), ...BackIconStyles(), ...CollaboratorsLinks(), ...HintComponentLinks(), { rel: 'stylesheet', href: styles }];
}

function DrawArea({ shapes: existingShapes = [], backLink, mouseMove, selectedTheme, updateDb, updateShape, keepLastSelected, onChangePreference }) {
  const [state, dispatch] = useReducer(drawAreaReducer, {
    scrollX: 0,
    scrollY: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    lineWidth: 3,
    selectedTool: 'select',
    shapes: existingShapes,
    selectedElement: null,
    performedActions: [],
    undoActions: [],
    modalType: null,
    ...baseConfig
  });


  let { baseFontSize, baseLineHeight, selectedTool, canvasWidth, canvasHeight, scalingFactor, scrollX, scrollY, shapes, lineWidth, selectedElement, modalType } = state;
  let cursorType = `${selectedTool === 'select' || selectedElement !== null ? `move` : 'crosshair'}`;

  const mainContainerRef = useRef(null);
  const updateShapeRef = useRef(updateShape);

  const preferences = useMemo(() => {
    return {
      'darkMode': {
        type: 'checkbox',
        checked: selectedTheme === 'dark',
        displayName: 'Dark Mode'
      },
      'keepLastSelected': {
        type: 'checkbox',
        checked: keepLastSelected,
        displayName: 'Keep Last Selected Tool'
      }
    }
  }, [keepLastSelected, selectedTheme])

  const onModalClose = useCallback(() => {
    dispatch({
      type: UPDATE_MODAL_TYPE,
      payload: {
        modalType: null
      }
    })
  }, [])

  const onEmptyCanvas = useCallback(() => {
    dispatch({
      type: UPDATE_CANVAS_AREA,
      payload: {
        shapes: [], modalType: null, disableScroll: false, performedActions: [], undoActions: []
      }
    })
  }, []);

  const addShape = useCallback((shapeToBeAdded) => {
    dispatch({ type: ADD_NEW_SHAPE, payload: { shape: shapeToBeAdded } })
  }, []);

  const removeShape = useCallback((shapeToBeRemoved) => {
    dispatch({ type: DELETE_EXISTING_SHAPE, payload: { shape: shapeToBeRemoved } })
  }, []);


  const updateCursorType = useCallback((cursor) => {
    if (cursor) {
      mainContainerRef.current.style.cursor = cursor;
    } else {
      mainContainerRef.current.style.cursor = (selectedTool === 'select' || selectedElement !== null) ? `move` : 'crosshair'
    }
  }, [selectedTool, selectedElement]);

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

  useEffect(() => {
    updateDb(scalingFactor, 'scalingFactor');
  }, [scalingFactor, updateDb]);


  useEffect(() => {
    if (state.actionToBeSent) {
      let { element, actionName } = state.actionToBeSent;
      if (element && actionName) {
        console.log('sending socket events');
        updateShapeRef.current(element, actionName);
      }
    }
  }, [state.actionToBeSent])


  /** Need to find the permenant fix */
  useEffect(() => {
    updateShapeRef.current = updateShape;
  }, [updateShape])

  return (
    <DrawAreaContext.Provider value={{ state, dispatch }}>
      <div
        ref={mainContainerRef}
        style={{ '--font-size': `${baseFontSize}px`, '--line-height': `${baseLineHeight}px`, cursor: cursorType }}
      >
        <ShortcutKeys disableShortcut={selectedTool === 'text'} dispatch={dispatch} />
        <div id="wrapper" >
          <div id="blackboardPlaceholder">
            <DrawCanvas selectedTheme={selectedTheme} updateShape={updateShape} keepLastSelected={keepLastSelected} mouseMove={mouseMove} updateCursorType={updateCursorType} />
            <UserActivity
              width={canvasWidth}
              height={canvasHeight}
              scrollX={scrollX}
              scrollY={scrollY}
              scalingFactor={scalingFactor}
              addShape={addShape}
              removeShape={removeShape}
              deleteAllShapes={onEmptyCanvas}
              baseLineHeight={baseLineHeight}
              baseFontSize={baseFontSize}
            />
          </div>

        </div>
        <SelectTool selectedTool={selectedTool} dispatch={dispatch} />
        <HintComponent />
        <ConfigTool dispatch={dispatch} />
        <TextTool />
        <ZoomContainer zoomRange={scalingFactor} dispatch={dispatch} />
        <PrintPreview
          onCancel={onModalClose}
          showPreview={modalType === 'downloadImage'}
          baseFontSize={baseFontSize}
          baseLineHeight={baseLineHeight}
          scalingFactor={scalingFactor}
          lineWidth={lineWidth}
          shapes={shapes} />
        <ShareLink showShareLink={modalType === 'shareLink'} onCancel={onModalClose} />
        <DeletePopup showDeletePopup={modalType === 'deleteCanvas'} onCancel={onModalClose} deleteCanvas={onEmptyCanvas} />
        <PreferencePopup showPreferencePopup={modalType === 'preferences'} onCancel={onModalClose} preferences={preferences} onChangePreference={onChangePreference} />

        <BackIcon backLink={backLink} />
        {
          selectedElement ? (
            <div className='delete-toast'>
              <div className='delete-toast-msg' onClick={() => dispatch({ type: DELETE_SHAPE })}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                Delete
              </div>

            </div>
          ) : null
        }
      </div>
    </DrawAreaContext.Provider>
  )
}


export default DrawArea;