import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CartHeader = props => {
  return (
    <View style={[styles.container, props.extraStyle]}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          width: '80%',
          //   borderWidth: 2,
          //   borderColor: 'red',
        }}>
        <TouchableOpacity style={styles.profileImage} onPress={props?.onTouch}>
          <Image
            source={require('../assets/michaelowen.png')}
            style={{height: '100%', width: '100%', borderRadius: 40}}
          />
        </TouchableOpacity>
        {/* <View style={{ marginLeft: 30, }}>
                    <Text>My Name</Text>
                    <Text>My age</Text>
                </View> */}
        <View style={{marginLeft: 10}}>
          <Text
            numberOfLines={1}
            style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
            Hi, Michael Owen
          </Text>
          <Text
            style={{
              color: '#FF8921',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '500',
              //   lineHeight: 32 /* 266.667% */,
            }}>
            Social Science Teacher
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   backgroundColor: 'red',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={require('../assets/graduate.png')}
              />
              <Text
                style={{
                  color: '#96A0B5',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '400',
                  //   lineHeight: 32 /* 266.667% */,
                }}>
                Maters in arts
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 5}}>
              <Image
                resizeMode="contain"
                style={{height: 15, width: 15}}
                source={require('../assets/retingstar.png')}
              />
              <Text>4.3</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: "#585858" + 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  profileImage: {
    width: 60,
    height: 60,
  },
});
