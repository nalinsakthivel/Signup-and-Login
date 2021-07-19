import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './Screens/Login';
// import Signupheader from './Componenets/Header'
import Signup from './Screens/Signup';

const App = () => {
  return (
    <View style={styles.topconatiner}>
      <Signup />
      {/* <Login /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  topconatiner: {
    flex: 1,
  },
});
