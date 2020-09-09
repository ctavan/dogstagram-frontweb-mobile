import React from 'react';
import {View, Text} from 'react-native';

const ProfileDogs = (props) => {
  const {items} = props;
  console.log(items);
  return (
    <View>
      <Text>Individual dogs</Text>
    </View>
  );
};

export default ProfileDogs;
