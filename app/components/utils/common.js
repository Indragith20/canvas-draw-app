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