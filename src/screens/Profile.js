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
import {Layout, list} from 'react-native-ui-kitten';

const Profile = () => {
  const profile = useSelector((state) => state.allUserInfo.currentProfile);
  const dispatch = useDispatch();
  console.log(profile);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text>proifle header </Text>
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
});

export default Profile;
