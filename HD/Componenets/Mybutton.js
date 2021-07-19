import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colours} from '../Constants';
const screenWidth = Dimensions.get('window').width;
const Mybutton = ({style, name, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.touchcontainer, ...style}}
      onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
  touchcontainer: {
    width: screenWidth * 0.87,
    height: 45,
    elevation: 3,
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
