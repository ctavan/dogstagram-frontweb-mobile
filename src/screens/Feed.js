import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {Avatar, List} from 'react-native-ui-kitten';
import {useDispatch} from 'react-redux';
import database from '@react-native-firebase/database';

import {SET_ANIMATION_START} from '../redux/actionTypes';
import Loader from '../animations/Loader';
import {fetchUser} from '../redux/actions';

const Feed = (props) => {
  const [data, setData] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const dispatch = useDispatch();

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
          setData(allDogs);
          setIsRefreshing(false);
        });
    }
    fetchData();
  }, [isRefreshing]);

  const handleAvatarTouch = (dogUserID) => {
    fetchUser(dogUserID, dispatch);
    dispatch({type: SET_ANIMATION_START, payload: true});
    props.navigation.navigate('Profile', {
      handle: dogUserID,
    });
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    //N/B: SetIsRefreshing triggers a re-render, so that's enough
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
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dogDetailTitle}> Name </Text>
            <Text style={styles.dogDetailText}> {item.item.name} </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dogDetailTitle}> Breed </Text>
            <Text style={styles.dogDetailText}> {item.item.breed} </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dogDetailTitle}> Age </Text>
            <Text style={styles.dogDetailText}> {item.item.age} </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dogDetailTitle}> Temparament </Text>
            <Text style={styles.dogDetailText}> {item.item.temparament} </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dogDetailTitle}> Likes </Text>
            <Text style={styles.dogDetailText}>{Object.keys(item.item.likes).length}</Text>
          </View>

          {/*add dog display first three likers.name and an onPress
          eventListener that will load all likers handles with an
          eventListener to go to their profile. This should apply to comments
          and replies too */}

          {/*add dog comments components here */}
          {/*add dog replies here components here */}
        </View>
        <TouchableOpacity onPress={() => handleAvatarTouch(item.item.user_id)}>
          <Avatar
            source={{
              uri: item.item.photo.uri,
            }}
            size="small"
            style={styles.cardAvatar}
          />
        </TouchableOpacity>
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
  dogDetailTitle: {
    height: 20,
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
    textShadowColor: '#585858',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  dogDetailText: {
    height: 20,
    color: 'brown',
    textAlign: 'center',
    fontSize: 12,
    textAlignVertical: 'center',
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
