// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const SignUp = () => {
//   return (
//     <View>
//       <Text>SignUp</Text>
//     </View>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({});

import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const LoginWithEmail = ({setAuthentication, goToHome}) => {
  const {height, width} = useWindowDimensions();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View
            style={{
              flex: 1,
              width: width * 1,
              height: height * 1,
              borderWidth: 1,
            }}>
            {/* Header */}
            <ImageBackground
              source={require('../../assets/MaskGroup.png')}
              style={{height: height * 0.2, width: width * 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 20,
                  lineHeight: 38,
                }}>
                <View style={{width: width * 0.6}}>
                  <Text
                    style={{
                      color: '#000000',
                      fontFamily: 'Manrope',
                      fontSize: 22,
                      fontWeight: '700',
                    }}>
                    Welcome Back!
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Manrope',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 22,
                    }}>
                    Log in with your data that you entered during registration
                  </Text>
                </View>
                <TouchableOpacity
                  style={{width: 40, height: 40}}
                  onPress={() => alert('Header close')}>
                  <Image
                    source={require('../../assets/CloseButton.png')}
                    style={{width: 40, height: 40}}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            {/* TabButton */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginVertical: 10,
              }}>
              <TouchableOpacity
                onPress={() => setAuthentication(0)}
                style={{
                  borderBottomWidth: 2,
                  borderColor: '#2961D7' + '20',
                  width: '50%',
                  alignItems: 'center',
                  paddingBottom: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    lineHeight: 19,
                    fontWeight: '600',
                  }}>
                  Mobile Number
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setAuthentication(1)}
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: '#FF8921',
                  paddingBottom: 15,
                }}>
                <Text
                  style={{
                    color: '#FF8921',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    lineHeight: 19,
                    fontWeight: '600',
                  }}>
                  Email address
                </Text>
              </TouchableOpacity>
            </View>
            {/* Input */}
            <View style={{marginVertical: 30}}>
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
                Email address
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#2961D7' + '20',
                  alignItems: 'center',
                  marginHorizontal: 15,
                  borderWidth: 1,
                  borderRadius: 15,
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/call.png')}
                  style={{height: 20, width: 19, marginLeft: 10}}
                />
                <TextInput
                  placeholder="Enter your mobile number"
                  style={{marginLeft: 10, shadowColor: 'black', color: '#000'}}
                />
              </View>
            </View>
            <View>
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
                Password
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#2961D7' + '20',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 15,
                  borderWidth: 1,
                  borderRadius: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/Lock.png')}
                    style={{height: 20, width: 19, marginLeft: 10}}
                  />
                  <TextInput
                    placeholder="Enter your passward"
                    style={{
                      marginLeft: 10,
                      shadowColor: 'black',
                      color: '#000',
                    }}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/PasswardShow.png')}
                    style={{height: 20, width: 20, marginRight: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* fotgettext */}
            <TouchableOpacity
              style={{marginVertical: 15, width: '40%', alignSelf: 'flex-end'}}
              onPress={() => alert('Forgot passward?')}>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#2961D7',
                  fontWeight: '600',
                  fontSize: 14,
                  lineHeight: 19,
                  fontFamily: 'Monrope',
                  marginRight: 20,
                }}>
                Forgot passward?
              </Text>
            </TouchableOpacity>
            {/* Terms and conditions */}
            <View style={{alignItems: 'center', marginVertical: 20}}>
              <Text
                style={{
                  width: '80%',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  lineHeight: 19,
                  fontWeight: '600',
                }}>
                By proceeding, you agree to{' '}
                <Text
                  style={{color: '#2961D7'}}
                  onPress={() => alert('Terms & Conditions')}>
                  Terms & Conditins
                </Text>{' '}
                and{' '}
                <Text
                  style={{color: '#2961D7'}}
                  onPress={() => alert('Privacy Policy')}>
                  Privacy Policy
                </Text>
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                onPress={goToHome}
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
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 25}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  lineHeight: 21,
                  fontWeight: '700',
                }}>
                Don't have an account?{' '}
                <Text
                  style={{color: '#2961D7'}}
                  onPress={() => alert('Create Here')}>
                  Create Here
                </Text>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginWithEmail;

const styles = StyleSheet.create({});
