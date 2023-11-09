import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import InputDropdown from '../../../components/InputDropdown';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import api from '../../../utility/api';

const SignUp = ({navigation}) => {
  const [signUpComView, setSignUpComView] = useState(0);

  //   const [date, setDate] = useState(new Date());
  //   const [open, setOpen] = useState(false);

  // const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [signUpDetails, setSignUpDetails] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    dob: new Date(),
    gender: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });
  // console.warn('valllllllll', date, signUpDetails.gender);

  // console.warn(date, value, signUpDetails.userName);
  // console.warn(signUpDetails.password, signUpDetails.confirmPassword);

  const data = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ];

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);

  // let otpdata = otp.join('');
  // console.log(otpdata);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input
    if (index < 5 && value !== '') {
      switch (index) {
        case 0:
          inputRef2.current.focus();
          break;
        case 1:
          inputRef3.current.focus();
          break;
        case 2:
          inputRef4.current.focus();
          break;
        case 3:
          inputRef5.current.focus();
          break;
        case 4:
          inputRef6.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const handleResendOtp = () => {
    // Your resend OTP logic goes here
    setTimer(60);
    startTimer();
    navigation.navigate('PasswardUpdate');
  };

  const startTimer = () => {
    setIsTimerRunning(true);

    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setIsTimerRunning(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  // useEffect(() => {
  //   if (!isTimerRunning && timer > 0) {
  //     startTimer();
  //   }
  // }, [isTimerRunning, timer]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setSignUpDetails({...signUpDetails, dob: currentDate});
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // const sendotp = async value => {
  //   // console.warn(
  //   //   signUpDetails.fullName,
  //   //   signUpDetails.phoneNumber,
  //   //   signUpDetails.emailAddress,
  //   // );

  //   try {
  //     const url = 'https://tutor-tnyp.onrender.com/api/user/send-otp';
  //     let result = await fetch(url, {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         full_name: signUpDetails.fullName,
  //         phone_number: signUpDetails.phoneNumber,
  //         email: signUpDetails.emailAddress,
  //       }),
  //     });
  //     result = await result.json();
  //     console.warn('hhhhhhhhhhhhhh', result);
  //     if (result.statusCode == 200) {
  //       setSignUpComView(1);
  //     }
  //   } catch (error) {
  //     alert('fill correct credentials');
  //     console.error('Error:', error.message);
  //   }
  // };

  const sendotp = async value => {
    try {
      let result = await api({
        method: 'POST',
        url: '/send-otp',
        data: {
          full_name: signUpDetails.fullName,
          phone_number: signUpDetails.phoneNumber,
          email: signUpDetails.emailAddress,
        },
      });
      console.log('hhhhhhhhhhhhhh', result.data);
      if (result.data.statusCode == 200) {
        setSignUpComView(1);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // const otpVerify = async value => {
  //   alert('hel');
  //   try {
  //     const url = 'https://tutor-tnyp.onrender.com/api/user/verify-otp';
  //     let result = await fetch(url, {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         otp: otp.join(''),
  //       }),
  //     });
  //     result = await result.json();
  //     console.warn('otpverify', result);
  //     if (result.statusCode == 200) {
  //       setSignUpComView(2);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // };

  const otpVerify = async value => {
    try {
      let result = await api({
        method: 'POST',
        url: '/verify-otp',
        data: {
          otp: otp.join(''),
        },
      });
      console.warn('otpverify', result.data);
      if (result.data.statusCode == 200) {
        setSignUpComView(2);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const checkData = () => {
    if (signUpDetails.password != signUpDetails.confirmPassword) {
      return true;
    } else {
      userRajister();
    }
  };

  // const userRajister = async value => {

  //   try {
  //     const url = 'https://tutor-tnyp.onrender.com/api/user/register';
  //     let result = await fetch(url, {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         email: signUpDetails.emailAddress,
  //         phone_number: signUpDetails.phoneNumber,
  //         full_name: signUpDetails.fullName,
  //         dob: signUpDetails.dob,
  //         user_name: signUpDetails.userName,
  //         gender: signUpDetails.gender,
  //         password: signUpDetails.password,
  //       }),
  //     });
  //     result = await result.json();
  //     console.warn('hhhhhhhhhhhhhh', result);
  //     if (result.statusCode == 201) {
  //       alert('successful');
  //     }
  //   } catch (error) {
  //     alert('fill correct credentials');
  //     console.error('Error:', error.message);
  //   }
  // };

  const userRajister = async value => {
    alert('pressed');

    try {
      let result = await api({
        method: 'POST',
        url: '/register',
        data: {
          email: signUpDetails.emailAddress,
          phone_number: signUpDetails.phoneNumber,
          full_name: signUpDetails.fullName,
          dob: signUpDetails.dob,
          user_name: signUpDetails.userName,
          gender: signUpDetails.gender,
          password: signUpDetails.password,
        },
      });
      console.warn('hhhhhhhhhhhhhh', result.data);
      if (result.data.statusCode == 201) {
        alert('successful');
      }
    } catch (error) {
      alert('fill correct credentials');
      console.error('Error:', error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
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
          source={require('../../../assets/forgotBackButton.png')}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      </TouchableOpacity>

      {signUpComView == 0 && (
        <View style={{flex: 1, marginTop: 45}}>
          {/* SignUphead */}
          <View style={{marginLeft: 14}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Manrope',
                fontSize: 22,
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 38,
              }}>
              Sign Up
            </Text>
            <Text
              style={{
                color: '#96A0B5',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 22,
              }}>
              Please Enter your Full Name, phone number and Email Address
            </Text>
          </View>

          <ScrollView>
            {/* Fullname */}

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
                Full Name
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
                  source={require('../../../assets/Profile.png')}
                  style={{height: 20, width: 19, marginLeft: 10}}
                />
                <TextInput
                  placeholder="Enter your full name"
                  style={{
                    marginLeft: 10,
                    shadowColor: 'black',
                    height: 48,
                    color: '#000',
                  }}
                  value={signUpDetails.fullName}
                  onChangeText={text =>
                    setSignUpDetails({...signUpDetails, fullName: text})
                  }
                />
              </View>
            </View>

            {/* Mobile Number */}

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
                Mobile Number
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
                    source={require('../../../assets/call.png')}
                    style={{height: 20, width: 19, marginLeft: 10}}
                  />
                  <TextInput
                    placeholder="Enter your mobile number"
                    style={{
                      marginLeft: 10,
                      shadowColor: 'black',
                      height: 48,
                      color: '#000',
                    }}
                    value={signUpDetails.phoneNumber}
                    onChangeText={text =>
                      setSignUpDetails({...signUpDetails, phoneNumber: text})
                    }
                  />
                </View>
              </View>
            </View>

            {/* Email Addres */}

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
                Email Address
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
                    source={require('../../../assets/Message.png')}
                    style={{height: 20, width: 19, marginLeft: 10}}
                  />
                  <TextInput
                    placeholder="Enter your email address"
                    style={{
                      marginLeft: 10,
                      shadowColor: 'black',
                      height: 48,
                      color: '#000',
                    }}
                    value={signUpDetails.emailAddress}
                    onChangeText={text =>
                      setSignUpDetails({...signUpDetails, emailAddress: text})
                    }
                  />
                </View>
              </View>
            </View>

            {/* Terms and conditions */}
            <View style={{alignItems: 'center', marginVertical: 20}}>
              <Text
                style={{
                  color: '#96A0B5',
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

            <Text style={{color: '#FF8921', marginHorizontal: 18}}>
              * This fields is mandatory
            </Text>

            {/* continue */}

            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                onPress={sendotp}
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

            <View style={{marginVertical: 25}}>
              <Text
                style={{
                  color: '#96A0B5',
                  textAlign: 'center',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  lineHeight: 21,
                  fontWeight: '700',
                }}>
                Already have an account?{' '}
                <TouchableOpacity
                  onPress={() => navigation.navigate('AuthLoginSignUP')}>
                  <Text style={{color: '#2961D7'}}>Login Here</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </ScrollView>
        </View>
      )}

      {signUpComView == 1 && (
        <View style={{flex: 1, marginTop: 45}}>
          {/* please enter otp */}
          <View style={{marginLeft: 14}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Manrope',
                fontSize: 22,
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 38,
              }}>
              Please Enter OTP
            </Text>
            <Text
              style={{
                color: '#96A0B5',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 22,
              }}>
              We have sent code to your number (+91)89764640808 and email
              address abcd@gmail.com
            </Text>
          </View>

          {/* otp input Boxes */}

          <View style={{marginTop: 10}}>
            {/* Individual OTP Input Boxes */}

            <View style={styles.inputcontainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.inputBox}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={value => handleOtpChange(index, value)}
                  ref={ref => {
                    switch (index) {
                      case 0:
                        inputRef1.current = ref;
                        break;
                      case 1:
                        inputRef2.current = ref;
                        break;
                      case 2:
                        inputRef3.current = ref;
                        break;
                      case 3:
                        inputRef4.current = ref;
                        break;
                      case 4:
                        inputRef5.current = ref;
                        break;
                      case 5:
                        inputRef6.current = ref;
                        break;
                      default:
                        break;
                    }
                  }}
                />
              ))}
            </View>

            {/* Resend OTP Section */}
            {/* <View style={styles.resendContainer}>
              {timer > 0 ? (
                <Text style={styles.timerText} onPress={handleResendOtp}>
                  Resend OTP ? {timer}
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResendOtp}>
                  <Text style={styles.resendText}>Resend OTP?</Text>
                </TouchableOpacity>
              )}
            </View> */}
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: 10,
              alignSelf: 'center',
              width: '98%',
            }}>
            {/* Terms and conditions */}

            <View style={{alignItems: 'center', marginVertical: 20}}>
              <Text
                style={{
                  color: '#96A0B5',
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

            {/* continue */}

            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                onPress={otpVerify}
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

            {/* alredady have an account */}

            <View style={{marginVertical: 25}}>
              <Text
                style={{
                  color: '#96A0B5',
                  textAlign: 'center',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  lineHeight: 21,
                  fontWeight: '700',
                }}>
                Already have an account?{' '}
                <TouchableOpacity
                  onPress={() => navigation.navigate('AuthLoginSignUP')}>
                  <Text style={{color: '#2961D7'}}>Login Here</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      )}

      {signUpComView == 2 && (
        <View style={{flex: 1, marginTop: 45}}>
          <View style={{marginLeft: 14}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Manrope',
                fontSize: 22,
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 38,
              }}>
              Sign Up
            </Text>
            <Text
              style={{
                color: '#96A0B5',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 22,
              }}>
              Please Enter your Date of birth, Gender and Username
            </Text>
          </View>

          <ScrollView>
            {/* date fo birth */}

            <View style={{marginVertical: 30}}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  fontStyle: 'normal',
                  marginHorizontal: 15,
                  fontWeight: '600',
                  marginBottom: 10,
                }}>
                Date of Birth
              </Text>

              <TouchableOpacity
                onPress={showDatepicker}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 15,
                  borderWidth: 1,
                  borderRadius: 15,
                  height: 45,
                  borderColor: '#2961D7' + '20',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../../../assets/Calendar.png')}
                  style={{height: 20, width: 19, marginLeft: 10}}
                />

                <Text style={{marginHorizontal: 10}}>
                  {moment(signUpDetails?.dob).format('DD / MM  /YYYY')}
                </Text>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={signUpDetails.dob}
                    display="calender"
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  fontStyle: 'normal',
                  marginHorizontal: 15,
                  fontWeight: '600',
                  marginBottom: 10,
                }}>
                Gender
              </Text>
              <View style={{width: '95%', alignSelf: 'center'}}>
                <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={signUpDetails?.gender}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setSignUpDetails({...signUpDetails, gender: item.value});
                    setIsFocus(false);
                  }}
                />
              </View>
            </View>

            <View style={{marginVertical: 30}}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  fontStyle: 'normal',
                  marginHorizontal: 15,
                  fontWeight: '600',
                  marginBottom: 10,
                }}>
                Username
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
                    source={require('../../../assets/Vector.png')}
                    style={{height: 20, width: 19, marginLeft: 10}}
                  />
                  <TextInput
                    placeholder="Enter Username"
                    style={{
                      marginLeft: 10,
                      shadowColor: 'black',
                      height: 45,
                      color: '#000',
                    }}
                    value={signUpDetails.userName}
                    onChangeText={text =>
                      setSignUpDetails({...signUpDetails, userName: text})
                    }
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                position: 'relative',
                bottom: 10,
                alignSelf: 'center',
                width: '98%',
              }}>
              {/* Terms and conditions */}
              <View style={{alignItems: 'center', marginVertical: 20}}>
                <Text
                  style={{
                    color: '#96A0B5',
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

              {/* continue */}

              <View style={{marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => setSignUpComView(3)}
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

              {/* alredady have an account */}

              <View style={{marginVertical: 25}}>
                <Text
                  style={{
                    color: '#96A0B5',
                    textAlign: 'center',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    lineHeight: 21,
                    fontWeight: '700',
                  }}>
                  Already have an account?{' '}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AuthLoginSignUP')}>
                    <Text style={{color: '#2961D7'}}>Login Here</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}

      {signUpComView == 3 && (
        <View style={{flex: 1, marginTop: 45}}>
          <ScrollView>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{marginLeft: 14}}>
                <Text
                  style={{
                    color: '#000000',
                    fontFamily: 'Manrope',
                    fontSize: 22,
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 38,
                  }}>
                  Sign Up
                </Text>
                <Text
                  style={{
                    color: '#96A0B5',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 22,
                  }}>
                  Please Enter your Date of birth, Gender and Username
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
                      source={require('../../../assets/Lock.png')}
                      style={{height: 20, width: 19, marginLeft: 10}}
                    />
                    <TextInput
                      placeholder="Enter your create passward"
                      style={{
                        marginLeft: 10,
                        shadowColor: 'black',
                        height: 45,
                        color: '#000',
                      }}
                      //   secureTextEntry={!showPassword}
                      //   value={password}
                      //   onChangeText={text => setPassword(text)}
                      value={signUpDetails.password}
                      onChangeText={text =>
                        setSignUpDetails({...signUpDetails, password: text})
                      }
                    />
                  </View>
                  <TouchableOpacity
                  // onPress={() => setShowPassword(!showPassword)}
                  >
                    <Image
                      resizeMode="contain"
                      source={require('../../../assets/PasswardShow.png')}
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
                      source={require('../../../assets/Lock.png')}
                      style={{height: 20, width: 19, marginLeft: 10}}
                    />
                    <TextInput
                      placeholder="Enter your confirm passward"
                      style={{
                        marginLeft: 10,
                        shadowColor: 'black',
                        height: 45,
                        color: '#000',
                      }}
                      value={signUpDetails.confirmPassword}
                      onChangeText={text =>
                        setSignUpDetails({
                          ...signUpDetails,
                          confirmPassword: text,
                        })
                      }
                    />
                  </View>
                  <TouchableOpacity
                  // onPress={() =>
                  //   setShowPasswordConfirm(!showPasswordConfirm)
                  // }
                  >
                    <Image
                      resizeMode="contain"
                      source={require('../../../assets/PasswardShow.png')}
                      style={{height: 20, width: 20, marginRight: 20}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                position: 'relative',
                bottom: 10,
                alignSelf: 'center',
                width: '98%',
                marginTop: 60,
              }}>
              {/* Terms and conditions */}
              <View
                style={{
                  alignItems: 'center',
                  marginVertical: 20,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#96A0B5',
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

              {/* continue */}

              <View style={{marginVertical: 10}}>
                <TouchableOpacity
                  onPress={checkData}
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

              {/* alredady have an account */}

              <View style={{marginVertical: 25}}>
                <Text
                  style={{
                    color: '#96A0B5',
                    textAlign: 'center',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    lineHeight: 21,
                    fontWeight: '700',
                  }}>
                  Already have an account?{' '}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AuthLoginSignUP')}>
                    <Text style={{color: '#2961D7'}}>Login Here</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 20,
  },
  inputBox: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
  resendContainer: {
    // marginTop: 10,
    alignItems: 'center',
  },
  timerText: {
    textAlign: 'center',
  },
  resendText: {
    color: 'blue',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  datePicker: {
    width: 200,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
  },
  dropdown: {
    height: 50,
    borderColor: '#2961D7' + '20',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropcontainer: {
    backgroundColor: 'white',
    padding: 16,
  },
});
