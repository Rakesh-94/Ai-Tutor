// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const ChatFilter = () => {
//   return (
//     <View>
//       <Text>ChatFilter</Text>
//     </View>
//   );
// };

// export default ChatFilter;

// const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackHandler from '../../../components/BackHandler';
// import BackHandler from '../../../components/BackHandler';

const data = [
  {name: 'Rakesh', message: 'Hi please help me...', time: ' 2mins ago'},
  {name: 'Michel', message: 'Hi please help me...', time: ' 2mins ago'},
  {name: 'Michel2', message: 'Hi please help me...', time: ' 2mins ago'},
  {name: 'MichelOwen4', message: 'Hi please help me...', time: ' 2mins ago'},
  {name: 'Michel Owen5', message: 'Hi please help me...', time: ' 2mins ago'},
  {name: 'Michel Owen6', message: 'Hi please help me...', time: ' 2mins ago'},
  {name: 'Michel Owen7', message: 'Hi please help me...', time: ' 2mins ago'},
];

const ChatFilter = ({navigation}) => {
  const [items, setItems] = useState(data);
  const [searchText, setSearchText] = useState('');
  // const [searchValue, setSearchValue] = useState([])

  const searchItems = () => {
    console.log('here');
    const names = data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setItems(names);
  };

  useEffect(() => {}, [searchText]);
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Image source={require('../accets/Icon.png')} style={styles.img} />
        <Text
          style={{
            position: 'absolute',
            left: 180,
            bottom: 30,
            fontSize: 20,
            color: 'black',
          }}>
          Chats
        </Text>
      </View> */}

      <BackHandler
        name={'Chats'}
        navigation={navigation}
        // onTouch={() => navigation.navigate('ChatFilter')}
      />

      <View style={{marginTop: 10, width: '90%', alignSelf: 'center'}}>
        <TextInput
          placeholder="Search in Physics"
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#FFF',
            margin: 5,
            borderRadius: 12,
            shadowColor: 'black',
            elevation: 5,
          }}
          onChangeText={text => {
            setSearchText(text);
          }}
          value={searchText}
          onEndEditing={searchItems}
        />
        <FlatList
          data={items}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <View style={styles.profile}>
                  <View style={styles.imgcover}>
                    <Image
                      source={require('../../../assets/cardimg.jpg')}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <View style={styles.micheltext}>
                    <Text
                      style={{fontSize: 18, fontWeight: '400', color: 'black'}}>
                      {item.name}
                    </Text>
                    <Text>{item.message}</Text>
                    <Text>{item.time}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                  <Image
                    source={require('../../../assets/dropdownarrow.png')}
                    style={styles.img}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ChatFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  img: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    // justifyContent: "space-evenly",
    alignItems: 'center',
    margin: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    height: 100,
    borderRadius: 10,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    borderColor: '#FFF',
    shadowColor: 'black',
    elevation: 5,
  },
  profile: {
    flexDirection: 'row',
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  imgcover: {
    height: 60,
    width: 60,
    // borderWidth: 2,
    borderRadius: 100,
    overflow: 'hidden',
  },
  micheltext: {
    marginLeft: 10,
  },
});
