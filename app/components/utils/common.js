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

export function getUpdatedPerformedActions(originalPerformedActions, shapeToBeAdded, UNDO_LIMIT = 100) {
  let performedActions = [...originalPerformedActions]
  if (performedActions.length >= UNDO_LIMIT) {
    performedActions.shift();
  }
  performedActions.push(shapeToBeAdded);
  return performedActions;
}