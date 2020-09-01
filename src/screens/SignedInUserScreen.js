import React, {Fragment} from 'react';
import {mapping, light} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import TabNavigator from '../navigation/TabNavigator';

const SignedInUserScreen = () => {
  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={light}>
        <TabNavigator />
      </ApplicationProvider>
    </Fragment>
  );
};

export default SignedInUserScreen;
