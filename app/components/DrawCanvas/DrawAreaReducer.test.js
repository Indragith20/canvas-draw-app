import drawAreaReducer, { baseConfig, SET_STROKE_COLOR, SET_STROKE_STYLE } from './DrawAreaReducer';

describe('DrawAreaReducer', () => {
  let initialState;

  beforeEach(() => {
    // Initialize with a structure similar to what the app might use,
    // including the properties from baseConfig.
    initialState = {
      ...baseConfig, // Includes strokeColor, strokeStyle, scalingFactor, etc.
      shapes: [],
      selectedTool: 'select',
      scrollX: 0,
      scrollY: 0,
      selectedElement: null,
      lineWidth: 5, // Example value
      canvasHeight: 600,
      canvasWidth: 800,
      disableScroll: false,
      performedActions: [],
      undoActions: [],
      roomId: 'test-room',
      // other state properties that might exist
    };
  });

  test('should return the initial state with default strokeColor and strokeStyle from baseConfig', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = drawAreaReducer(initialState, action);
    expect(state.strokeColor).toBe('#000000'); // Default from baseConfig
    expect(state.strokeStyle).toBe('solid');   // Default from baseConfig
    expect(state.scalingFactor).toBe(baseConfig.scalingFactor); // Check another baseConfig value
  });

  test('should handle SET_STROKE_COLOR action', () => {
    const newStrokeColor = '#ff0000';
    const action = {
      type: SET_STROKE_COLOR,
      payload: { strokeColor: newStrokeColor },
    };
    const state = drawAreaReducer(initialState, action);

    expect(state.strokeColor).toBe(newStrokeColor);
    // Ensure other parts of the state are not affected
    expect(state.strokeStyle).toBe(initialState.strokeStyle);
    expect(state.shapes).toEqual(initialState.shapes);
    expect(state.scalingFactor).toBe(initialState.scalingFactor);
  });

  test('should handle SET_STROKE_STYLE action', () => {
    const newStrokeStyle = 'dashed';
    const action = {
      type: SET_STROKE_STYLE,
      payload: { strokeStyle: newStrokeStyle },
    };
    const state = drawAreaReducer(initialState, action);

    expect(state.strokeStyle).toBe(newStrokeStyle);
    // Ensure other parts of the state are not affected
    expect(state.strokeColor).toBe(initialState.strokeColor);
    expect(state.shapes).toEqual(initialState.shapes);
    expect(state.scalingFactor).toBe(initialState.scalingFactor);
  });

  test('should return current state for an unknown action type', () => {
    const action = { type: 'SOME_OTHER_UNKNOWN_ACTION', payload: {} };
    const state = drawAreaReducer(initialState, action);
    expect(state).toEqual(initialState); // State should remain unchanged
  });
});
