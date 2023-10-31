import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BackHandler = props => {
  //   const navigation = useNavigation();
  let {name, add, showAdd, navigation, onTouch} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: 40,
          width: 40,
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 10,
          borderColor: 'black',
          shadowColor: '#F9BFFD',
          borderWidth: 1,
          position: 'absolute',
          left: 5,
        }}>
        <Image
          source={require('../assets/forgotBackButton.png')}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Manrope',
          fontSize: 18,
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 32,
        }}>
        {name}
      </Text>

      {showAdd && (
        <TouchableOpacity
          onPress={onTouch}
          style={{
            height: 30,
            width: 55,
            marginVertical: 10,
            marginHorizontal: 20,
            borderRadius: 10,
            // borderColor: 'red',
            shadowColor: '#F9BFFD',
            borderWidth: 1,
            position: 'absolute',
            right: 5,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Image
            // source={require('../../assets/forgotBackButton.png')}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          /> */}
          <Text style={{color: 'white'}}>{add}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BackHandler;
