import axios from 'axios';
import {
  SET_USER,
  SET_HANDLE_CHECK,
  HANDLE_CHECKED,
  SET_LOGGED_IN_CHECK,
  SET_CURRENT_PROFILE,
} from './actionTypes';

const ngrok = 'bdb2385dfc69.ngrok.io';
export const login = async (user, dispatch) => {
  await fetch(`https://${ngrok}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      handle: user.handle,
      password: user.password,
    }),
  })
    .then((response) => response.json())
    .then((userObj) => {
      console.log(userObj);
      console.log(userObj.errors);
      if (!userObj.errors) {
        dispatch({type: SET_USER, payload: userObj});
        dispatch({type: SET_LOGGED_IN_CHECK, payload: true});
        dispatch({type: SET_CURRENT_PROFILE, payload: userObj.user});
      } else {
        alert('Wrong username and/ore password, or user not found. Pls try again or signup if you are a new user');
      }
    })
    .catch((error) => {
        console.log('Error', error);
        alert("Sorry, it's not you, it's us. We're experiencing technical difficulty right now");
    });
};

export const checkHandle = (handle, dispatch) => {
  axios.get(`http://${ngrok}/users/checkhandle/${handle}`).then((r) => {
    console.log(r.data);
    dispatch({type: HANDLE_CHECKED, payload: true});
    dispatch({type: SET_HANDLE_CHECK, payload: r.data});
  });
};

export const signup = (user, dispatch) => {
  fetch(`http://${ngrok}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: user.name,
      handle: user.handle,
      city: user.city,
      state: user.state,
      country: user.country,
      password: user.password,
      photo: user.photo.uri.split(':')[1],
      file_name: user.file_name,
    }),
  })
    .then((userObj) => {
      console.log(userObj);
      dispatch({type: SET_USER, payload: userObj});
      dispatch({type: SET_LOGGED_IN_CHECK, payload: true});
    })
    .catch((error) => {
      alert('Unable to create account');
      console.log('Error', error);
    });
};
