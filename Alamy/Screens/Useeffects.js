import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colours} from '../Constants';
const screenWidth = Dimensions.get('window').width;
// const navigation = useNavigation('');

const Useeffects = () => {
  const [datas, setDatas] = useState([]);
  const [back, setBack] = useState(datas.completed);
  const getData = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos');

    result = await result.json();
    console.log(`result`, result);

    setDatas(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {datas.map(data => {
          return (
            <TouchableOpacity
              key={data.id}
              style={{
                ...styles.dataContainer,
                backgroundColor:
                  data.completed == true
                    ? colours.lightGreen
                    : colours.lightRed,
              }}>
              <View style={styles.imageView}>
                <Image
                  style={styles.imageContainer}
                  source={{uri: 'https://picsum.photos/200'}}
                />
              </View>
              <View style={styles.textView}>
                <Text>ID: {data.id}</Text>
                <Text numberOfLines={1}>Title: {data.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Useeffects;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  dataContainer: {
    width: screenWidth * 0.87,
    minHeight: 80,
    marginTop: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    borderRadius: 5,
  },
  imageContainer: {
    width: 70,
    height: 70,
  },
  imageView: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  textView: {
    width: screenWidth * 0.6,
    marginLeft: 10,
    alignItems: 'flex-start',
    //     justifyContent: 'space-between',
  },
});
