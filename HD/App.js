import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './Screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import Signupheader from './Componenets/Header'
import Signup from './Screens/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [values, setValues] = useState(false);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let credentials = await AsyncStorage.getItem('credentials');
    credentials = await JSON.parse(credentials);
    if (credentials) {
      setValues(true);
    }
  };

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {values ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
    // <View style={styles.topconatiner}>
    //   <Signup />
    //   {/* <Login /> */}
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  topconatiner: {
    flex: 1,
  },
});
