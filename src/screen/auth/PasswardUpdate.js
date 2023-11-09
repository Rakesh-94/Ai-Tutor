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

const PasswardUpdate = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordCanfirm, setPasswordCanfirm] = useState('');

  const handleMobileNumberChange = input => {
    const numericInput = input.replace(/[^0-9]/g, '');
    setMobileNumber(numericInput);
  };

  const handleResetPassword = () => {
    alert('Password succesfully changed');
    // navigation.navigate('');
  };
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
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
      <ScrollView style={{marginVertical: 40}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{marginLeft: 14}}>
            <Text style={{fontWeight: '600', fontSize: 24, color: '#000000'}}>
              Reset Passward
            </Text>
            <Text
              style={{fontStyle: 'normal', fontSize: 14, fontWeight: '500'}}>
              Please Enter your new password
            </Text>
          </View>

          <View style={{marginTop: 30}}>
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
              Create Passward
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#2961D7' + '20',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/Lock.png')}
                  style={{height: 20, width: 19, marginLeft: 10}}
                />
                <TextInput
                  placeholder="Enter your create passward"
                  style={{marginLeft: 10, shadowColor: 'black', color: '#000'}}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/PasswardShow.png')}
                  style={{height: 20, width: 20, marginRight: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 40}}>
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
              Confirm Password
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#2961D7' + '20',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/Lock.png')}
                  style={{height: 20, width: 19, marginLeft: 10}}
                />
                <TextInput
                  placeholder="Enter your confirm passward"
                  style={{marginLeft: 10, shadowColor: 'black', color: '#000'}}
                  secureTextEntry={!showPasswordConfirm}
                  value={passwordCanfirm}
                  onChangeText={text => setPasswordCanfirm(text)}
                />
              </View>
              <TouchableOpacity
                onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/PasswardShow.png')}
                  style={{height: 20, width: 20, marginRight: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 50, width: '100%'}}>
        <TouchableOpacity
          onPress={() => handleResetPassword()}
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
            Change Passward
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswardUpdate;

const styles = StyleSheet.create({});
