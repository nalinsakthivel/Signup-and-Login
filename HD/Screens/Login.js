import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Loginheader from '../Componenets/Loginheader';
import Mybutton from '../Componenets/Mybutton';
import {colours} from '../Constants';

const Login = () => {
  return (
    <View style={styles.details}>
      <Loginheader style={styles.head} />
      <View style={styles.bottomcintainer}>
        <Text style={styles.textarea}>Enter Phone Number</Text>
        <TextInput
          style={styles.inputcontainer}
          autoFocus
          keyboardType="number-pad"
          placeholder="Phone Number"
          placeholderTextColor={colours.lightgray}></TextInput>
        <View style={styles.buttoncontaier}>
          <Mybutton name="Login" />
        </View>
        <View style={styles.or}>
          <Text>----OR----</Text>
        </View>
        <View style={styles.buttoncontaier}>
          <Mybutton style={styles.touchcontainer} name="Skip Login" />
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
    padding: 20,
    justifyContent: 'flex-start',
    flex: 4,
    backgroundColor: colours.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  textarea: {
    padding: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: colours.balck,
  },
  inputcontainer: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttoncontaier: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  or: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    color: colours.lightgray,
  },
  text: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  acc: {
    color: colours.darkgray,
    textDecorationLine: 'underline',
  },
  touchcontainer: {
    width: '100%',
    height: 30,
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
    padding: 1,
  },
  signupnav: {
    color: colours.balck,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
