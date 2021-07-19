import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Signupheader from '../Componenets/Signupheader';
import Mybutton from '../Componenets/Mybutton';
import {colours} from '../Constants';

const Signup = () => {
  return (
    <View style={styles.details}>
      <Signupheader style={styles.head} />
      <View style={styles.bottomcintainer}>
        <Text style={styles.textarea}>Name</Text>
        <TextInput
          style={styles.inputcontainer}
          autoFocus
          autoCapitalize="sentences"
          autoCorrect
          placeholder="First Name"
          placeholderTextColor={colours.lightgray}></TextInput>
        <Text style={styles.textarea}>Email(Optional)</Text>
        <TextInput
          style={styles.inputcontainer}
          autoCapitalize="sentences"
          autoCorrect
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colours.lightgray}></TextInput>
        <Text style={styles.textarea}>Phone Number</Text>
        <TextInput
          style={styles.inputcontainer}
          autoCapitalize="sentences"
          autoCorrect
          keyboardType="number-pad"
          placeholder="Phone Number"
          placeholderTextColor={colours.lightgray}></TextInput>
        <View style={styles.buttoncontaier}>
          <Mybutton name="Submit" />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  head: {
    flex: 1,
    padding: 20,
  },
  bottomcintainer: {
    padding: 20,
    justifyContent: 'flex-start',
    flex: 4,
    backgroundColor: colours.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  details: {
    backgroundColor: colours.yellow,
    flex: 1,
    borderRadius: 9,
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
    justifyContent: 'center',
    padding: 60,
  },
});
