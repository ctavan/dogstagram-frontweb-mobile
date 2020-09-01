import {SET_ANIMATION_START, SET_ANIMATION_STOP} from '../actionTypes';
const initialState = {
  isLoading: false,
};

const animationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANIMATION_START:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_ANIMATION_STOP:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default animationsReducer;
