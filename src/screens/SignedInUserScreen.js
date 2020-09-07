import React, {Fragment} from 'react';
import {mapping, light} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {useSelector} from 'react-redux'

import TabNavigator from '../navigation/TabNavigator';

const SignedInUserScreen = () => {
  const profile = useSelector((state) => state.allUserInfo.currentProfile);
  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={light}>
        <TabNavigator profile={profile} />
      </ApplicationProvider>
    </Fragment>
  );
};

export default SignedInUserScreen;
