import React, {useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import Loader from '../animations/Loader';

const ProfileDogs = (props) => {
  const {items} = props;
  const itemSize = (Dimensions.get('window').width - 12) / 3;
  const [total, setTotal] = useState(props.items.length);

  const extractItemKey = (index) => `${index}`;

  console.log(items);

  const renderItem = ({item, index}) => (
      <React.Fragment>
      <TouchableOpacity onPress={() => alert('add functionality to open')}>
        <Image
      
          style={{
            width: itemSize,
            height: itemSize,
            margin: 1.5,
          }}
          source={item.photo}
        />
      </TouchableOpacity>
    </React.Fragment>
  );

  return (
    <View style={styles.images}>
      <FlatList
        data={items}
        numColumns={3}
        keyExtractor={extractItemKey}
        renderItem={renderItem}
      />
    </View>
  );
};

  const styles = StyleSheet.create({
      images: {
          flexDirection: 'row',
          paddingHorizontal: 0.5,
      },
      header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
      },
  });

export default ProfileDogs;
