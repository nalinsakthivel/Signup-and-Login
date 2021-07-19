import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colours} from '../Constants';

const Mybutton = props => {
  return (
    <TouchableOpacity style={{...styles.touchcontainer, ...props.style}}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
  touchcontainer: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
    // borderColor:colours.black,
    borderRadius: 5,
    backgroundColor: colours.yellow,
  },

  text: {
    fontWeight: 'bold',
    color: colours.balck,
  },
});
