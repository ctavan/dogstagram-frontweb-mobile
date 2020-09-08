import {
  SET_USER,
  SET_HANDLE_CHECK,
  HANDLE_CHECKED,
  SET_PROFILE_PICTURE,
  SET_LOGGED_IN_CHECK,
  SET_CURRENT_PROFILE,
  RESET_CURRENT_PROFILE,
  LOGOUT,
} from '../actionTypes';

const initialState = {
  user: '',
  handleAvailable: '',
  handleChecked: '',
  profilePicForUpload: '',
  checkIfLoggedIn: false,
  currentProfile: null,
  user_id: '',
  currentUserID: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_HANDLE_CHECK:
      return {
        ...state,
        handleAvailable: action.payload,
      };

    case HANDLE_CHECKED:
      return {
        ...state,
        handleChecked: action.payload,
      };
    case SET_PROFILE_PICTURE:
      return {
        ...state,
        profilePicForUpload: action.payload,
      };
    case SET_LOGGED_IN_CHECK:
      return {
        ...state,
        checkIfLoggedIn: action.payload,
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.payload,
      };
    case RESET_CURRENT_PROFILE:
      console.log('in reducer');
      return {
        ...state,
        currentProfile: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: '',
        handleAvailable: '',
        handleChecked: '',
        profilePicForUpload: '',
        checkIfLoggedIn: false,
        currentProfile: '',
        user_id: '',
        currentUserID: 0,
      };

    default:
      return state;
  }
};

export default userReducer;
