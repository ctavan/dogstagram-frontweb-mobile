import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {Avatar, List} from 'react-native-ui-kitten';

import {useDispatch, useSelector} from 'react-redux';
import {SET_CURRENT_PROFILE} from '../redux/actionTypes';

const DATA = [
  {
    id: '1',
    handle: 'tobenna',
    postTitle: 'Planet of Nature',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: '2',
    handle: 'ikechukwu',
    postTitle: 'Lampost',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: '2',
    handle: 'ikechukwu',
    postTitle: 'Lampost',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
];

const Feed = (props) => {
  const dispatch = useDispatch();
  const handle = useSelector(
    (state) => state.allUserInfo.currentProfile.handle,
  );

  const handleAvatarTouch = (item) => {
    dispatch({
      type: SET_CURRENT_PROFILE,
      payload: item,
    });
    props.navigation.navigate('Profile', {
      handle: handle,
    });
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.imageURI,
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}> {item.postTitle} </Text>
        <TouchableOpacity onPress={() => handleAvatarTouch(item)}>
          <Avatar
            source={{
              uri: item.avatarURI,
            }}
            size="small"
            style={styles.cardAvatar}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContent}>
        <Text> {item.randomText} </Text>
      </View>
    </View>
  );

  return (
    <List
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={DATA.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff2f2',
    marginBottom: 25,
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#151A30',
    fontWeight: 'bold',
    fontSize: 20,
    // fontWeight: '500',
  },
  cardAvatar: {
    marginRight: 16,
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: '#8F9BB3',
  },
});

export default Feed;
