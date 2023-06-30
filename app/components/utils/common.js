export function isTouchDevice() {
  if (typeof window === 'undefined') {
    return false;
  }
  return ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0);
}

export function handle_pinch_zoom(ev) {
  if (ev.targetTouches.length === 2 && ev.changedTouches.length === 2) {
    // TO be Impleemennted
    return true;
  }
}


export function compareShapes(shape1, shape2) {
  if (shape1.type !== shape2.type) {
    return false;
  }
  let shape1Keys = Object.keys(shape1);
  let shape2Keys = Object.keys(shape2);

  if (shape1Keys.length !== shape2Keys.length) {
    return false;
  }

  let isSameShape = true;
  shape1Keys.forEach(key => {
    if (isNaN(shape1[key]) && isNaN(shape2[key])) {
      return;
    }
    if (shape1[key] !== shape2[key]) {
      isSameShape = false;
    }
  });

  return isSameShape;
}

export function getUpdatedPerformedActions(originalPerformedActions, shapeToBeAdded, UNDO_LIMIT = 100) {
  let performedActions = [...originalPerformedActions];
  if (performedActions.length >= UNDO_LIMIT) {
    performedActions.shift();
  }
  performedActions = performedActions.concat([...shapeToBeAdded]);
  return performedActions;
}

export function getEdges(element) {
  let bufferLimit = 5;
  if (element.type === 'rectangle') {
    // topLeft, topMiddle, topRight, bottomRight, bottomMiddle, bottomLeft, leftMiddle, rightMiddle
    return [
      [element.x - bufferLimit, element.y - bufferLimit],
      [(element.x + (element.width / 2)), element.y - bufferLimit],
      [element.endX + bufferLimit, element.y - bufferLimit],
      [element.endX + bufferLimit, element.endY + bufferLimit],
      [(element.endX - (element.width / 2)), element.endY + bufferLimit],
      [element.x - bufferLimit, element.endY + bufferLimit],
      [element.x - bufferLimit, element.y + (element.height / 2)],
      [element.endX + bufferLimit, element.endY - (element.height / 2)]
    ]
  } else {
    return [];
  }
}

export const CURSOR_BIDIRECTIONAL_MAPPING = {
  0: 'nwse-resize',
  1: 'ns-resize',
  2: 'nesw-resize',
  3: 'nwse-resize',
  4: 'ns-resize',
  5: 'nesw-resize',
  6: 'ew-resize',
  7: 'ew-resize'
}
