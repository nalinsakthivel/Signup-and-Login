import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {colours} from '../Constants';
const screenWidth = Dimensions.get('window').width;
const Effectsnav = () => {
  const [arrdatas, setArrdatas] = useState([]);
  const getData = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    result = await result.json();
    setArrdatas(result);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View
      style={{
        ...styles.dataContainer,
        backgroundColor:
          arrdatas.completed == true ? colours.lightGreen : colours.lightRed,
      }}>
      <View style={styles.textView}>
        <Text>ID: {arrdatas.id}</Text>
        <Text numberOfLines={1}>Title: {arrdatas.title}</Text>
      </View>
    </View>
  );
};

export default Effectsnav;

const styles = StyleSheet.create({
  dataContainer: {
    width: screenWidth * 0.87,
    height: 80,
    marginTop: 10,
    elevation: 5,
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
  },
  textView: {
    width: screenWidth * 0.6,
    alignItems: 'center',
  },
});
