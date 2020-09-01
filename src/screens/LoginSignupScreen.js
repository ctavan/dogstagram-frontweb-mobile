import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {login} from '../redux/actions';
import Header from '../components/Header';

const LoginSignupScreen = ({navigation}) => {
  const [handle, setHandle] = useState('@handle');
  const [password, setPassword] = useState('password');
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const checkIfLoggedIn = useSelector(
    (state) => state.allUserInfo.checkIfLoggedIn,
  );

  const handleSubmit = async () => {
    setLoading(true);
    let user = {
      handle: handle,
      password: password,
    };

    await login(user, dispatch);
  };

  if (checkIfLoggedIn) {
    console.log(checkIfLoggedIn);
    navigation.navigate('SignedInUser');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'DogStagram'} />
      {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : null}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="@handle"
          onChangeText={(handleText) => setHandle(handleText)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(passwordText) => setPassword(passwordText)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Log in" onPress={() => handleSubmit()} />
        <Button
          title="Signup"
          //include line below when "SignupScreen" is built with new logic
          // onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    bottom: 20,
  },
  textInput: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default LoginSignupScreen;
