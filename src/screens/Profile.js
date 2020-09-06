/* eslint-disable jsx-quotes */
import React from 'react';
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

import _ProfileDogs from '../components/_ProfileDogs';

const Profile = () => {
  const profile = useSelector((state) => state.allUserInfo.currentProfile);
  const dispatch = useDispatch();
  console.log(profile);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={(styles.header, styles.bordered)}>
          <Avatar
            source={{
              uri:
                'whatever path to profile photo gotten from the backend and stored in the userReduser currentProfile',
              //and imported into this compments as profile using useSelector
            }}
            size="giant"
            style={{width: 100, height: 100}}
          />
          <Text category="h6" style={styles.text}>
            Test user
          </Text>
        </View>

        <View style={(styles.userInfo, styles.bordered)}>
          <View style={styles.section}>
            <Text category="s1" style={styles.space}>
              {Object.keys(_ProfileDogs).length}
            </Text>
            <Text appearance="hint" category="s2">
              Dogs
            </Text>
          </View>

          <View style={styles.section}>
            <Text category="s1" style={styles.space}>
              0
            </Text>
            <Text appearance="hint" category="s2">
              Followers
            </Text>
          </View>

          <View style={styles.section}>
            <Text category="s1" style={styles.space}>
              0
            </Text>
            <Text appearance="hint" category="s2">
              Following
            </Text>
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
            appearance="hint"
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
  container: {
    flex: 1,
  },
  profileHeader: {
    backgroundColor: '#fff2f2',
    height: '30%',
  },
  dogsContainer: {
    backgroundColor: '#fff2f2',
    height: '70%',
  },
  root: {
    backgroundColor: '#ffffff',
    marginTop: 60
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: '#e4e9f2'
  },
  section: {
    flex: 1,
    alignItems: 'center'
  },
  space: {
    marginBottom: 3,
    color: '#151a30'
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
    alignSelf: 'center'
  },
  text: {
    color: '#151a30'
  }
});

// const styleUI = withStyles( theme => ({
//   root: {
//     backgroundColor: theme['color-basic-100']
//   }



// }))

export default Profile;
