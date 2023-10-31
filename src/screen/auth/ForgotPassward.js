import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ForgotPassward = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileNumberChange = input => {
    const numericInput = input.replace(/[^0-9]/g, '');
    setMobileNumber(numericInput);
  };

  const handleForgotPassword = () => {
    navigation.navigate('OTPInput');
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: 40,
          width: 40,
          marginVertical: 10,
          marginHorizontal: 20,
          borderWidth: 0.5,
          borderRadius: 10,
          //   borderColor: '#F0F5F9',
          shadowColor: '#F9BFFD',
        }}>
        <Image
          source={require('../../assets/forgotBackButton.png')}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      </TouchableOpacity>
      <ScrollView style={{}}>
        <View style={{marginVertical: 30}}>
          <View style={{marginLeft: 14}}>
            <Text style={{fontWeight: '600', fontSize: 24, color: '#000000'}}>
              Forgot Password?
            </Text>
            <Text
              style={{
                fontStyle: 'normal',
                fontSize: 14,
                fontWeight: '500',
                width: '69%',
                // borderWidth: 2,
              }}>
              Please Enter your Phone Number for OTP verification
            </Text>
          </View>
          <View style={{marginVertical: 50}}>
            <Text
              style={{
                marginHorizontal: 15,
                fontFamily: 'Manrope',
                fontSize: 14,
                lineHeight: 19,
                color: '#000000',
                marginBottom: 10,
                fontWeight: '600',
              }}>
              Mobile Number
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#2961D7' + '20',
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/call.png')}
                style={{height: 20, width: 19, marginLeft: 10}}
              />
              <TextInput
                placeholder="Enter your mobile number"
                style={{marginLeft: 10, shadowColor: 'black'}}
                keyboardType="numeric"
                value={mobileNumber}
                onChangeText={handleMobileNumberChange}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{position: 'absolute', bottom: 30, width: '100%'}}>
        <TouchableOpacity
          onPress={() => handleForgotPassword()}
          style={{
            backgroundColor: '#2961D7',
            padding: 15,
            borderRadius: 12,
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Manrope',
              fontSize: 16,
              lineHeight: 21,
              fontWeight: '600',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassward;

const styles = StyleSheet.create({});
