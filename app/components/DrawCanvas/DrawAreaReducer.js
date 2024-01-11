import { getUpdatedPerformedActions } from '../utils/common';
import { ADD_NEW_SHAPE, DECREASE_SCALING_FACTOR, DELETE_EXISTING_SHAPE, DELETE_SHAPE, INCREASE_SCALING_FACTOR, REDO_ACTION, RESET_SCALING_FACTOR, UNDO_ACTION, UPDATE_CANVAS_AREA, UPDATE_MODAL_TYPE, UPDATE_SCROLL_REGION, UPDATE_SELECTED_TOOL } from './DrawAreaConstants';

export const baseConfig = {
  scalingFactor: 1,
  baseFontSize: 24,
  baseLineHeight: (150 * 24) / 100
}

function performUndoAction(state) {
  let { shapes, performedActions, undoActions } = state;
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
    let actionToBeSent = {
      element: isExistingShape ? originalValueInCaseOfDragging : lastAddedElement,
      actionName: isExistingShape ? 'update' : isDeletedShape ? 'add' : 'delete'
    };
    return { ...state, shapes: modifiedShapes, performedActions: actionsPerformed, undoActions: updatedUndoActions, actionToBeSent }
  } else {
    return state;
  }
}

function addNewShape(state, newShape) {
  let isExistingShape = false;
  let shapes = state.shapes.map(shape => {
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

  return { ...state, shapes };
}

function deleteExistinghape(state, shapeTobeDeleted) {
  let updatedShapes = state.shapes.filter(shape => shape.id !== shapeTobeDeleted.id);
  return { ...state, shapes: updatedShapes }
}

function performRedoAction(state) {
  let { undoActions, shapes, performedActions: originalPerformedActions } = state;
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

    let actionToBeSent = {
      element: shapeToBeAdded,
      actionName: isExistingShape ? 'update' : 'add'
    };
    let performedActions = getUpdatedPerformedActions(originalPerformedActions, [shapeToBeAdded]);
    return { ...state, shapes: updatedShapes, performedActions, undoActions: [...undoTobeModified], actionToBeSent }
  } else {
    return state;
  }
}

function drawAreaReducer(state, action) {
  switch (action.type) {
    case UPDATE_CANVAS_AREA: {
      return { ...state, ...action.payload };
    }
    case UPDATE_SELECTED_TOOL: {
      return { ...state, selectedTool: action.payload.selectedTool }
    }
    case UPDATE_SCROLL_REGION: {
      let { deltaX, deltaY } = action.payload;
      return {
        ...state,
        scrollX: state.scrollX - deltaX,
        scrollY: state.scrollY - deltaY,
        selectedElement: null
      }
    }
    case UPDATE_MODAL_TYPE: {
      let { modalType = null } = action.payload;
      return { ...state, modalType, disableScroll: modalType !== null ? true : false };
    }
    case DECREASE_SCALING_FACTOR: {
      if (state.scalingFactor <= 0.1) {
        return state;
      }
      let baseFontSize = state.baseFontSize - 3;
      let baseLineHeight = (150 * baseFontSize) / 100;
      return {
        ...state,
        scalingFactor: Number(state.scalingFactor - 0.1).toFixed(1),
        baseFontSize,
        baseLineHeight
      }
    }
    case INCREASE_SCALING_FACTOR: {
      if (state.scalingFactor >= 2) {
        return state;
      }
      let baseFontSize = state.baseFontSize + 3;
      let baseLineHeight = (150 * baseFontSize) / 100
      return {
        ...state,
        scalingFactor: Number(state.scalingFactor + 0.1).toFixed(1),
        baseFontSize,
        baseLineHeight
      }
    }
    case RESET_SCALING_FACTOR: {
      return { ...state, ...baseConfig };
    }

    case DELETE_SHAPE: {
      if (state.selectedElement) {
        let { selectedElement, performedActions: originalPerformedActions, shapes } = state;
        let filteredShapes = shapes.filter(shape => shape.id !== selectedElement.id);
        let performedActions = getUpdatedPerformedActions(originalPerformedActions, [{ ...selectedElement, isDeletedShape: true }]);
        let actionToBeSent = {
          element: selectedElement,
          actionName: 'delete'
        };
        return { ...state, shapes: filteredShapes, selectedElement: null, performedActions, actionToBeSent };
      } else {
        return state;
      }
    }

    case UNDO_ACTION: {
      return performUndoAction(state);
    }

    case REDO_ACTION: {
      return performRedoAction(state);
    }

    case ADD_NEW_SHAPE: {
      let { shape } = action.payload;
      return addNewShape(state, shape);
    }

    case DELETE_EXISTING_SHAPE: {
      let { shape } = action.payload;
      return deleteExistinghape(state, shape);
    }

    default: {
      return state;
    }
  }
}

export default drawAreaReducer;