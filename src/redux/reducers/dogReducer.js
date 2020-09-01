import {SET_DOG} from '../actionTypes';

const initialState = {
  dog: 'nkita',
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOG:
      return {
        ...state,
        dog: action.payload,
      };

    default:
      return state;
  }
};

export default dogReducer;
