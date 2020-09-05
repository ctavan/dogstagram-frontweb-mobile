import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {Avatar, List, withStyles} from 'react-native-ui-kitten';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';

import {SET_CURRENT_PROFILE, SET_ANIMATION_START} from '../redux/actionTypes';
import Loader from '../animations/Loader';
import {login, fetchUser} from '../redux/actions';

const Feed = (props) => {
  const [data, setData] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [currentStartPoint, setCurrentStartPoint] = useState(1);

  const dispatch = useDispatch();
  const handle = useSelector(
    (state) => state.allUserInfo.currentProfile.handle,
  );

  //put useEffect here
  // useEffect(() => {
  //   fetchDogs();
  // }, [isRefreshing]);

  useEffect(() => {
    async function fetchData() {
      await database()
        .ref('dogs')
        .limitToFirst(10)
        .once('value')
        .then((snapshot) => {
          let allDogs = [];
          let returnedDogs = snapshot.val();

          Object.keys(returnedDogs).forEach(function (thisDog) {
            allDogs.push(returnedDogs[thisDog]);
          });
          // console.log(allDogs);

          setData(allDogs);
          // setIsRefreshing(false);

          // return allDogs;
        });
    }
    fetchData();
  }, [isRefreshing]);

  const handleAvatarTouch = (item) => {
    fetchUser(handle, dispatch);
    dispatch({type: SET_ANIMATION_START, payload: true});
    props.navigation.navigate('Profile', {
      handle: handle,
    });
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    //fetchDogs
  };

  const renderItem = (item) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.item.photo.uri,
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardHeader}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.cardTitle}> {item.item.name} </Text>
          <Text style={styles.cardTitle}> {item.item.breed} </Text>
          <Text style={styles.cardTitle}> {item.item.age} </Text>
          <Text style={styles.cardTitle}> {item.item.temparament} </Text>
          <Text style={styles.cardTitle}> {item.item.likes.length} </Text>
          {/*add dog display first three likers.name and an onPress
          eventListener that will load all likers handles with an
          eventListener to go to their profile. This should apply to comments
          and replies too */}

          {/*add dog comments components here */}
          {/*add dog replies here components here */}
        </View>
        <TouchableOpacity onPress={() => handleAvatarTouch(item)}>
          <Avatar
            source={{
              uri: item.item.photo.uri,
            }}
            size="small"
            style={styles.cardAvatar}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContent}>
        {/* <Text> {dog.randomText} </Text> */}
      </View>
    </View>
  );

  if (data !== null) {
    return (
      <List
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={data.id}
        refreshing={isRefreshing}
        onRefresh={() => onRefresh()}
      />
    );
  } else {
    return (
      <View>
        <Loader />
      </View>
    );
  }
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
    color: 'black',
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
