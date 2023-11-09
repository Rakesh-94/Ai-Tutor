import {
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Auth} from '../../Redux/Action';
import {SET_TOKEN} from '../../Redux/constants';
import api from '../../utility/api';

const LoginWithPhone = ({
  navigation,
  mobileNumber,
  setMobileNumber,
  password,
  setPassword,
  setAuthentication,
}) => {
  const {stack, access_token} = useSelector(state => state.auth);
  // console.log('access_token:::::::', access_token);

  const [loginDetails, setLoginDetails] = useState({
    phone: '',
    pass: '',
  });

  const {height, width} = useWindowDimensions();

  const [showPassword, setShowPassword] = useState(false);

  const handleMobileNumberChange = input => {
    const numericInput = input.replace(/[^0-9]/g, '');
    // setMobileNumber(numericInput);
    setLoginDetails({...loginDetails, phone: numericInput});
  };

  const dispatch = useDispatch();

  // const handleMain = async value => {
  //   // alert('fill correct credentials');

  //   try {
  //     const url = 'https://tutor-tnyp.onrender.com/api/user/login';
  //     let result = await fetch(url, {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         phone_number: loginDetails.phone,
  //         password: loginDetails.pass,
  //       }),
  //     });
  //     result = await result.json();
  //     console.log('hh', result);
  //     if (result) {
  //       dispatch({type: SET_TOKEN, payload: result.accessToken});
  //     }
  //   } catch (error) {
  //     alert('fill correct credentials');

  //     console.error('Error:', error.message);
  //   }
  // };

  const handleMain = async value => {
    try {
      const res = await api({
        method: 'post',
        url: '/login',
        data: {
          phone_number: loginDetails.phone,
          password: loginDetails.pass,
        },
      });
      console.log('hh', res);
      if (res.data) {
        dispatch({type: SET_TOKEN, payload: res.data.accessToken});
      }
    } catch (error) {
      alert('fill correct credentials');

      console.error('Error:', error.message);
    }
  };

  // const callApi = async () => {
  //   try {
  //     let data = {};
  //     let response = await loginApi();
  //     if (response && response.status == 200) {
  //     }
  //   } catch (error) {}
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
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
                // borderWidth: 1,
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
                        color: '#96A0B5',
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
                    width: '50%',
                    alignItems: 'center',
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
                    Mobile Number
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setAuthentication(1)}
                  style={{
                    width: '50%',
                    alignItems: 'center',
                    paddingBottom: 15,
                    borderBottomWidth: 2,
                    borderColor: '#2961D7' + '20',
                  }}>
                  <Text>Email address</Text>
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
                    style={{
                      marginLeft: 10,
                      shadowColor: 'black',
                      color: '#000',
                      height: 45,
                    }}
                    keyboardType="numeric"
                    value={loginDetails.phone}
                    onChangeText={txt => handleMobileNumberChange(txt)}
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
                      placeholder="Enter your passward"
                      style={{
                        marginLeft: 10,
                        shadowColor: 'black',
                        color: '#000',
                        height: 45,
                      }}
                      secureTextEntry={!showPassword}
                      value={loginDetails.pass}
                      onChangeText={text =>
                        setLoginDetails({...loginDetails, pass: text})
                      }
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
                style={{
                  marginVertical: 15,
                  width: '40%',
                  alignSelf: 'flex-end',
                }}
                onPress={() => navigation.navigate('ForgotPassward')}>
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
                    Terms & Conditions
                  </Text>{' '}
                  and{' '}
                  <Text
                    style={{color: '#2961D7'}}
                    onPress={() => alert('Privacy Policy')}>
                    Privacy Policy
                  </Text>
                </Text>
              </View>
              {/* Sign in */}
              <View style={{marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => handleMain('Main')}
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{color: '#2961D7'}}>Create Here</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginWithPhone;

const styles = StyleSheet.create({});
