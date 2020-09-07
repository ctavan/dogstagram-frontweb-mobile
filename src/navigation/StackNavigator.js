// import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
//create a resetCurrentProfile action
//it will reset current profile when profile of dogOwner is done loadin
//it will reset it to loggedIn User's profile

export const FeedNavigator = createAppContainer(
  createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        headerTitle: 'Home',
        headerTitleAlign: 'center',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        onTransitionEnd: () => {
          console.log('resetCurrentProfile');
        },
        headerTitle: 'Dog Owner',
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
        onTransitionEnd: () => {
          console.log('reset home');
        },
        headerTitle: 'My Profile',
        headerTitleAlign: 'center',
      },
    },
  }),
);
