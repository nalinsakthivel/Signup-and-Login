import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colours} from '../Constants';
import Button from '../Components/Button';
const screenWidth = Dimensions.get('window').width;
const ForgetPassword = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.signupText}>Forget password..?</Text>
      <View style={styles.iconTextinput}>
        <Icon
          name="envelope-square"
          size={40}
          color={colours.violet}
          style={{paddingLeft: 20}}
        />
        <TextInput
          style={styles.inputContainer}
          autoFocus
          autoCapitalize="sentences"
          autoCorrect
          placeholder="Email"
          placeholderTextColor={colours.gray}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button name="Send Reset Link" />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.alreadyText}>Back to </Text>
        <Text style={styles.sText}>Signin</Text>
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colours.black,
    marginBottom: 30,
  },
  iconTextinput: {
    width: screenWidth * 0.87,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
    borderRadius: 30,
    backgroundColor: colours.white,
  },
  inputContainer: {
    height: 40,

    paddingLeft: 10,

    // borderColor: colours.gray,
    width: screenWidth * 0.87,
  },
  buttonContainer: {
    marginTop: 20,
  },
  textcontainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  alreadyText: {
    color: colours.lightgray,
  },
  sText: {
    fontWeight: 'bold',
    color: colours.violet,
    textDecorationLine: 'underline',
  },
});
