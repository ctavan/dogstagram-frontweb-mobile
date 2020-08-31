import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  Text,
} from 'react-native';

import Header from '../components/Header';

const LoginSignupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title={'DogStagram'} />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="@handle"
            //   onChangeText={(handleText) => setHandle(handleText)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="password"
            secureTextEntry={true}
            //   onChangeText={(passwordText) => setPassword(passwordText)}
          />
        </View>
       

        <View style={styles.buttonContainer}>
          <Button title="Log in" />
          <Button title="Signup" />
        </View>
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
