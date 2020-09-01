/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {StatusBar} from 'react-native';

//Reducers
import userReducer from './src/redux/reducers/userReducer.js';
import dogReducer from './src/redux/reducers/dogReducer';
import animationsReducer from './src/redux/reducers/animationsReducer';

//create CombineReducer
const rootReducer = combineReducers({
  allUserInfo: userReducer,
  allDogInfo: dogReducer,
  allAnimationInfo: animationsReducer,
});

//crete store
const storeObj = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={storeObj}>
        <AppNavigator />
      </Provider>
    </>
  );
}
