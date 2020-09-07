/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Layout,
  list,
  withStyles,
  Avatar,
  Button,
  // Text,
} from 'react-native-ui-kitten';
import database from '@react-native-firebase/database';

const Profile = () => {
  const profile = useSelector((state) => state.allUserInfo.currentProfile);
  const dispatch = useDispatch();
  const [dogs, setDogs] = useState(null);
  const ngrok = '535704740bf6.ngrok.io';

  // console.log(profile);
  const currentUser_ID = profile.id;

  useEffect(() => {
    async function fetchDogs() {
      let fetchedDogs = [];
      await database()
        .ref('dogs')
        .orderByChild('user_id')
        .equalTo(currentUser_ID)
        .on('child_added', function (snapshot) {
          let returnedDogs = snapshot.val();
          if (snapshot.val() != null) {
            Object.keys(returnedDogs).forEach(function (thisDog) {
              fetchedDogs.push(returnedDogs[thisDog]);
            });
          } else {
            // console.log(fetchedDogs);
          }
          setDogs(fetchedDogs);
        });
    }
    fetchDogs();
  }, []);

  // console.log(dogs);
  // style = {
  //   styles.container
  // }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={(styles.header, styles.bordered)}>
          <Avatar
            source={{
              uri: `https://${ngrok}/${profile.photo_url
                .split('/')
                .slice(3)
                .join('/')}`,
            }}
            size="giant"
            style={{width: 100, height: 100}}
          />
          <Text style={styles.text}>{profile.handle}</Text>
        </View>

        <View style={styles.bordered}>
          <View Views style={styles.userInfo}>
            <View style={styles.section}>
              <Text style={styles.space}>4</Text>
              <Text style={styles.space2}>Dogs</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.space}>0</Text>
              <Text style={styles.space2}>Followers</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.space}>0</Text>
              <Text style={styles.space2}>Following</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <Button
            style={styles.button}
            appearance="ghost"
            status="danger"
            onPress={() => console.log('logout pressed')}>
            LOGOUT
          </Button>

          <View style={styles.separator} />

          <Button
            style={styles.button}
            appearance="ghost"
            status="danger"
            onPress={() => console.log('message pressed')}>
            MESSAGE
          </Button>
        </View>
      </View>
      <View style={styles.dogsContainer}>
        <Text> Dogs container </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    // marginTop: 10,
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: '#e4e9f2',
    alignItems: 'center',
  },
  section: {
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  space: {
    color: '#151a30',
    fontWeight: 'bold',
  },
  space2: {
    color: '#aab9b7',
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: '#e4e9f2',
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
  },
  text: {
    color: '#151a30',
    fontWeight: 'bold',
  },
});

export default Profile;
