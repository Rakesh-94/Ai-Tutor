// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Notification = () => {
//   return (
//     <View>
//       <Text>Notification</Text>
//     </View>
//   );
// };

// export default Notification;

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
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackHandler from '../../components/BackHandler';

const data = [
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
  {
    name: 'Erika send a new message',
    message: 'Hi please help me...',
    time: ' 2mins ago',
  },
];

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackHandler name={'Notifications'} add={'add'} navigation={navigation} />

      <View style={{marginTop: 20}}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card}>
                <View style={styles.profile}>
                  <View style={styles.imgcover}>
                    <Image
                      source={require('../../assets/cardimg.jpg')}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <View style={styles.micheltext}>
                    <Text
                      style={{
                        color: '#23262F',
                        fontFamily: 'Manrope',
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 24,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: '#757C8E',
                        fontFamily: 'Manrope',
                        fontSize: 12,
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 20,
                      }}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    width: '90%',
    alignSelf: 'center',
  },
  img: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    height: 65,
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
    height: 40,
    width: 40,
    // borderWidth: 2,
    borderRadius: 100,
    overflow: 'hidden',
  },
  micheltext: {
    marginLeft: 10,
  },
});
