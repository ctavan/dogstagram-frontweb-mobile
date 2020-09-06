import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import database from '@react-native-firebase/database';

import Loader from '../animations/Loader';

const _ProfileDogs = (props) => {
  const {currenUserID} = props;
  const [currentUserDogs, setCurrentUserDogs] = useState([]);

  useEffect(() => {
    async function fetchCurrentUserDogs() {
      await database()
        .ref('dogs')
        .orderByChild('user_id')
        .equalTo(currenUserID)
        .on('child_added', function (snapshot) {
          console.log(snapshot.val());
          setCurrentUserDogs(snapshot.key);
        });
    }
    fetchCurrentUserDogs();
  }, [currenUserID]);

  if (currentUserDogs.length === 0) {
    return (
      <View>
        <Loader />
      </View>
    );
  } else {
    return currentUserDogs;
  }
};

export default _ProfileDogs;
