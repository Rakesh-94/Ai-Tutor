import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BackHandler from '../../../components/BackHandler';

const MyProfile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHandler
        name={'My Profile'}
        add={'Edit'}
        showAdd={true}
        navigation={navigation}
      />
      <ScrollView
        style={{
          width: '90%',
          alignSelf: 'center',
          //   borderWidth: 1,
        }}>
        {/* Profile pick */}
        <View
          style={{
            alignSelf: 'center',
            marginVertical: 30,
            height: 90,
            width: 90,
          }}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/profileImg.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>

        {/* Full name */}
        <View>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Full Name
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Profile.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              placeholder="Michael Owen"
              style={{
                marginLeft: 5,
                ...Platform.select({
                  ios: {
                    paddingVertical: 15,
                  },
                }),
              }}
            />
          </View>
        </View>

        {/* mobileNumber */}
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Mobile Number
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Profile.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              placeholder="123456789"
              style={{
                marginLeft: 5,
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
            <Image
              resizeMode="contain"
              source={require('../../../assets/Profile.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              placeholder="abc@gmail.com"
              style={{
                marginLeft: 5,
                ...Platform.select({
                  ios: {
                    paddingVertical: 15,
                  },
                }),
              }}
            />
          </View>
        </View>

        {/* Date of Birth */}
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Date of Birth
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Profile.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              placeholder="01/01/2023"
              style={{
                marginLeft: 5,
                ...Platform.select({
                  ios: {
                    paddingVertical: 15,
                  },
                }),
              }}
            />
          </View>
        </View>

        {/* Gender */}
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Gender
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Profile.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              placeholder="Male"
              style={{
                marginLeft: 5,
                ...Platform.select({
                  ios: {
                    paddingVertical: 15,
                  },
                }),
              }}
            />
          </View>
        </View>

        {/* Username */}
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Username
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Profile.png')}
              style={{
                marginLeft: 5,
                height: 20,
                width: 20,
              }}
            />
            <TextInput
              placeholder="Username"
              style={{
                marginLeft: 5,
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

export default MyProfile;

const styles = StyleSheet.create({});
