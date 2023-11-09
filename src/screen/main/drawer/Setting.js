import {Image, Platform, StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import BackHandler from '../../../components/BackHandler';

const Setting = ({navigation}) => {
  return (
    <View>
      <BackHandler name={'Setting'} navigation={navigation} />

      <View style={{width: '90%', alignSelf: 'center'}}>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            marginVertical: 30,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Notification.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '600',
                marginLeft: 15,
              }}>
              Notification
            </Text>
          </View>
          <Switch
          //   trackColor={{false: '#767577', true: '#81b0ff'}}
          //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          //   ios_backgroundColor="#3e3e3e"
          //   onValueChange={toggleSwitch}
          //   value={isEnabled}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/changePhoneNum.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '600',
                marginLeft: 15,
              }}>
              changePhoneNumber
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: 'flex-end',
            ...Platform.select({
              ios: {alignItems: 'flex-end'},
            }),
          }}>
          <Switch />
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
