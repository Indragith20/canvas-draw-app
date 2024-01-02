import { UPDATE_CANVAS_AREA, UPDATE_SCROLL_REGION, UPDATE_SELECTED_TOOL } from './DrawAreaContext';


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
    default: {
      return state;
    }
  }
}

export default drawAreaReducer;