import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BackHandler from '../../../components/BackHandler';

const ContactUs = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHandler name={'Contact Us'} navigation={navigation} />
      <ScrollView
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 40,
          //   borderWidth: 1,
        }}>
        {/* Company Address */}
        <View>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Company Address
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Michael Owen"
              multiline={true}
              // numberOfLines={5}
              style={{
                marginLeft: 15,
                textAlignVertical: 'top',
                height: 80,
                ...Platform.select({
                  ios: {paddingVertical: 20},
                }),
              }}
            />
          </View>
        </View>

        {/* Company Number */}
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Company Number
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="123456789"
              style={{
                marginLeft: 15,
                ...Platform.select({
                  ios: {
                    paddingVertical: 15,
                  },
                }),
              }}
            />
          </View>
        </View>

        {/* Email address */}
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Email Address
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="abc@gmail.com"
              style={{
                marginLeft: 15,
                ...Platform.select({
                  ios: {paddingVertical: 15},
                }),
              }}
            />
          </View>
        </View>

        {/* Website Link */}
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Website Link
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="www.showmetutor.com"
              style={{
                marginLeft: 15,
                ...Platform.select({
                  ios: {
                    paddingVertical: 15,
                  },
                }),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
