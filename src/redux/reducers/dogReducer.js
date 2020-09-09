import {SET_DOGS} from '../actionTypes';

const initialState = {
  allDogs: [],
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };

    default:
      return state;
  }
};

export default dogReducer;
