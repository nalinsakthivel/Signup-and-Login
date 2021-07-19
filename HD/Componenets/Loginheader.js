import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colours} from '../Constants';

const Header = ({style}) => {
  return (
    <View style={style}>
      <Text style={styles.headtext}>--HD--</Text>
      <Text style={styles.wtext}>Welcome</Text>
      <Text style={styles.stext}>Login</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headercontainer: {
    width: '100%',
    padding: 20,
    paddingLeft: 30,
    backgroundColor: colours.yellow,
    flex: 1,
  },
  headtext: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  wtext: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: colours.saddish,
  },
  stext: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.balck,
  },
});
