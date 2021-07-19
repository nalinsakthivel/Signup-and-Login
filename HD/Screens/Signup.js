import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Signupheader from '../Componenets/Signupheader';
import Mybutton from '../Componenets/Mybutton';
import {colours, emailRegex} from '../Constants';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
const screenWidth = Dimensions.get('window').width;
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnum, setPhnum] = useState('');
  const [errors, setErrors] = useState({name: [], email: [], phone: []});
  const navigation = useNavigation('');
  const onRegister = async () => {
    const validation = {};
    setErrors({name: [], email: [], phone: []});
    if (name.length < 1) {
      validation['name'] = ['Enter valida name'];
    }
    if (email.length < 1) {
      validation['email'] = ['Enter valid Email'];
    }
    if (phnum.length < 1) {
      validation['phone'] = ['Enter valida phone Number'];
    }

    if (!email.match(emailRegex)) {
      validation['email'] = [...validation['email'], 'Enter correct email'];
    }

    if (Object.keys(validation).length > 0) {
      setErrors(err => {
        return {...err, ...validation};
      });
    } else {
      await AsyncStorage.setItem(
        'credentials',
        JSON.stringify({
          phone: phnum,
        }),
      );
      ToastAndroid.show(
        'Sigup sucessful',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      navigation.push('Login');
    }
  };

  return (
    <View style={styles.details}>
      <Signupheader style={styles.head} />
      <View style={styles.bottomcintainer}>
        <View style={styles.detailscontainer}>
          <View>
            <Text style={styles.textarea}>Name</Text>
            <TextInput
              style={{
                ...styles.inputcontainer,
                borderColor:
                  errors['name'].length > 0 ? colours.red : colours.lightgray,
              }}
              onChangeText={setName}
              value={name}
              autoFocus
              autoCapitalize="sentences"
              autoCorrect
              placeholder="Name"
              placeholderTextColor={colours.lightgray}></TextInput>
            <View style={styles.errorContainer}>
              {errors['name'].map(error => {
                return (
                  <Text numberOfLines={1} style={styles.error} key={error}>
                    {error}
                  </Text>
                );
              })}
            </View>
          </View>
          <View>
            <Text style={styles.textarea}>Email(Optional)</Text>
            <TextInput
              style={{
                ...styles.inputcontainer,
                borderColor:
                  errors['email'].length > 0 ? colours.red : colours.lightgray,
              }}
              onChangeText={setEmail}
              value={email}
              autoCapitalize="sentences"
              autoCorrect
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={colours.lightgray}></TextInput>
            <View style={styles.errorContainer}>
              {errors['email'].map(error => {
                return (
                  <Text numberOfLines={1} style={styles.error} key={error}>
                    {error}
                  </Text>
                );
              })}
            </View>
          </View>
          <View>
            <Text style={styles.textarea}>Phone Number</Text>
            <TextInput
              style={{
                ...styles.inputcontainer,
                borderColor:
                  errors['phone'].length > 0 ? colours.red : colours.lightgray,
              }}
              onChangeText={setPhnum}
              value={phnum}
              autoCapitalize="sentences"
              autoCorrect
              keyboardType="number-pad"
              placeholder="Phone Number"
              placeholderTextColor={colours.lightgray}></TextInput>
            <View style={styles.errorContainer}>
              {errors['phone'].map(error => {
                return (
                  <Text numberOfLines={1} style={styles.error} key={error}>
                    {error}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>

        <View style={styles.buttoncontaier}>
          <Mybutton name="Submit" onPress={onRegister} />
        </View>
        <View></View>
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
    padding: 13,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 4,
    backgroundColor: colours.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  details: {
    backgroundColor: colours.yellow,
    flex: 1,
  },
  detailscontainer: {
    width: '100%',
    paddingBottom: 0,
    padding: 10,
  },
  textarea: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: colours.balck,
  },
  inputcontainer: {
    height: 40,
    width: screenWidth * 0.87,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    borderColor: colours.darkgray,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttoncontaier: {
    width: '100%',
    height: 40,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    width: '100%',
    margin: 0,
    paddingLeft: 10,
  },
  error: {color: colours.red, fontSize: 10},
});
