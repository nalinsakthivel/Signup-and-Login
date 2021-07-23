import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colours, emailRegex} from '../Constants';
import Button from '../Components/Button';
import CheckBox from '@react-native-community/checkbox';
const screenWidth = Dimensions.get('window').width;
const Signin = () => {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [errors, setErrors] = useState({email: [], pswd: []});
  const onPressed = () => {
    const validation = {};
    setErrors({email: [], pswd: []});
    if (email.length < 1) {
      validation['email'] = ['Enter valid Email'];
    }
    if (pswd.length < 1) {
      validation['pswd'] = ['Enter valid Password'];
    }

    if (!email.match(emailRegex)) {
      validation['email'] = [...validation['email'], 'Enter correct email'];
    }

    if (Object.keys(validation).length > 0) {
      setErrors(err => {
        return {...err, ...validation};
      });
    }
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.signupText}>Sign In</Text>
      <View style={styles.iconTextinput}>
        <Icon
          name="envelope-square"
          size={30}
          color={colours.violet}
          style={{paddingLeft: 13}}
        />
        <TextInput
          style={styles.emailinputContainer}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          autoCorrect
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={colours.gray}
        />
      </View>
      <View style={styles.errorContainer}>
        {errors['email'].map(error => {
          return (
            <Text numberOfLines={1} style={styles.error} key={error}>
              {error}
            </Text>
          );
        })}
      </View>
      <View style={styles.iconTextinput}>
        <Icon
          name="lock"
          size={30}
          color={colours.violet}
          style={{paddingLeft: 15}}
        />
        <TextInput
          style={styles.pswdinputContainer}
          onChangeText={setPswd}
          value={pswd}
          autoCapitalize="none"
          autoCorrect
          placeholder="Password"
          placeholderTextColor={colours.black}
        />
        <Icon name="eye" size={30} color={colours.violet} />
      </View>
      <View style={styles.errorContainer}>
        {errors['pswd'].map(error => {
          return (
            <Text numberOfLines={1} style={styles.error} key={error}>
              {error}
            </Text>
          );
        })}
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkBox}
          tintColors={{true: colours.violet, false: colours.black}}
        />
        <Text style={styles.ctextContainer}>Remember Me</Text>
        <Text style={styles.ftextContainer}>Forget Password</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button name="Log In" onPress={onPressed} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.alreadyText}>Doesn't have an account </Text>
        <Text style={styles.sText}>Create</Text>
      </View>
    </View>
  );
};

export default Signin;

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
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
    borderRadius: 30,
    backgroundColor: colours.white,
  },
  emailinputContainer: {
    height: 40,

    paddingLeft: 13,

    // borderColor: colours.gray,
    width: screenWidth * 0.87,
  },
  pswdinputContainer: {
    width: '50%',
    height: 40,

    paddingLeft: 15,

    // borderColor: colours.gray,
    width: screenWidth * 0.87,
  },
  errorContainer: {
    width: screenWidth * 0.87,
    height: 20,
    margin: 0,
    transform: [{translateX: -10}],
    paddingLeft: 10,
    marginBottom: 10,
  },
  error: {color: colours.red, fontSize: 10},
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    transform: [{translateY: -10}],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  CheckBox: {
    borderColor: colours.lightgray,
  },
  ctextContainer: {
    color: colours.lightgray,
  },
  ftextContainer: {
    marginLeft: 100,

    color: colours.lightgray,
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
