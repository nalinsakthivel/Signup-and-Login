import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import Loginheader from '../Componenets/Loginheader';
import Mybutton from '../Componenets/Mybutton';
import {colours} from '../Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const screenWidth = Dimensions.get('window').width;
const Login = () => {
  const [phnumb, setphNum] = useState('');
  const [errors, setErrors] = useState([]);

  const onLogin = async () => {
    const validation = [];
    setErrors([]);
    let credentials = await AsyncStorage.getItem('credentials');
    credentials = await JSON.parse(credentials);
    const {phone} = credentials;
    console.log(`phnum`, phone);
    console.log(`phone`, phnumb);
    if (phnumb.length < 1) {
      validation.push('Kindly enter valid Phone Number ');
    }
    if (phnumb != phone) {
      validation.push('Phone number does not match');
    }
    if (validation.length > 0) {
      setErrors(validation);
    } else {
      ToastAndroid.show(
        'Login sucessful',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
  const onSkip = () => {
    return ToastAndroid.show(
      'Skip Login Sucessful',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };
  return (
    <View style={styles.details}>
      <Loginheader style={styles.head} />
      <View style={styles.bottomcintainer}>
        <Text style={styles.textarea}>Enter Phone Number</Text>
        <TextInput
          style={styles.inputcontainer}
          onChangeText={setphNum}
          value={phnumb}
          autoFocus
          keyboardType="number-pad"
          placeholder="Phone Number"
          placeholderTextColor={colours.lightgray}></TextInput>
        <View style={styles.errorContainer}>
          {errors.map(error => {
            return (
              <Text numberOfLines={1} style={styles.error} key={error}>
                {error}
              </Text>
            );
          })}
        </View>
        <View style={styles.buttoncontaier}>
          <Mybutton style={styles.loginbutton} name="Login" onPress={onLogin} />
        </View>
        <View style={styles.orContainer}>
          <Text style={styles.or}>OR</Text>
        </View>
        <View style={styles.buttoncontaier}>
          <Mybutton
            style={styles.touchcontainer}
            name="Skip Login"
            onPress={onSkip}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.acc}>Don't have an account</Text>
        </View>
        <View style={styles.text1}>
          <Text style={styles.signupnav}>SignUp</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  head: {
    flex: 1,
    padding: 20,
  },
  details: {
    backgroundColor: colours.yellow,
    flex: 1,
    borderRadius: 9,
  },
  bottomcintainer: {
    padding: 10,
    justifyContent: 'flex-start',
    flex: 4,
    borderColor: colours.lightgray,
    backgroundColor: colours.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  loginbutton: {
    transform: [{translateY: -30}],
  },
  textarea: {
    padding: 10,
    paddingLeft: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: colours.balck,
  },
  inputcontainer: {
    height: 40,
    width: screenWidth * 0.87,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttoncontaier: {
    width: screenWidth * 0.87,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    paddingLeft: 35,
  },
  orContainer: {
    width: screenWidth * 0.87,
    height: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colours.darkgray,
    marginBottom: 10,
    marginLeft: 17,
  },
  or: {
    width: '10%',
    textAlign: 'center',
    color: colours.darkgray,
    position: 'absolute',
    transform: [{translateY: -10}],
    backgroundColor: colours.white,
  },
  text: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 10,
  },
  acc: {
    color: colours.darkgray,
    textDecorationLine: 'underline',
  },
  touchcontainer: {
    width: screenWidth * 0.87,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
    // borderColor:colours.black,
    borderRadius: 5,
    backgroundColor: colours.lightgray,
  },
  text1: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signupnav: {
    color: colours.balck,
    fontSize: 13,
    fontWeight: 'bold',
    transform: [{translateY: -15}],
  },
  errorContainer: {
    width: '100%',
    padding: 10,
    margin: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    transform: [{translateY: -10}],
  },
  error: {
    color: colours.red,
    fontSize: 10,
  },
});
