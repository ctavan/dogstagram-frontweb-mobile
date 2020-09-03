// import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

export const FeedNavigator = createAppContainer(
  createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        headerTitle: 'Home',
        headerTitleAlign: 'center',
      },
    },
  }),
);

export const ProfileNavigator = createAppContainer(
  createStackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'UsernameHere',
        headerTitleAlign: 'center',
      },
    },
  }),
);
