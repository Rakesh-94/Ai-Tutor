import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const OTPInput = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input
    if (index < 3 && value !== '') {
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

  useEffect(() => {
    if (!isTimerRunning && timer > 0) {
      startTimer();
    }
  }, [isTimerRunning, timer]);

  return (
    <View style={{flex: 1, marginLeft: 20}}>
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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          //   borderWidth: 3,
        }}>
        <View style={{marginBottom: 70}}>
          <View style={{marginBottom: 20}}>
            <Text style={{fontWeight: '600', fontSize: 24, color: '#000000'}}>
              Please Enter OTP
            </Text>
            <Text
              style={{
                fontStyle: 'normal',
                fontSize: 14,
                fontWeight: '500',
                marginTop: 10,
                width: '80%',
              }}>
              We have sent code to your number (+91)1234567890 and email address
              abc@gmail.com
            </Text>
          </View>

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
                      default:
                        break;
                    }
                  }}
                />
              ))}
            </View>

            {/* Resend OTP Section */}
            <View style={styles.resendContainer}>
              {timer > 0 ? (
                <Text style={styles.timerText} onPress={handleResendOtp}>
                  Resend OTP ? {timer}
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResendOtp}>
                  <Text style={styles.resendText}>Resend OTP?</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  inputBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
  resendContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  timerText: {
    textAlign: 'center',
  },
  resendText: {
    color: 'blue',
    textAlign: 'center',
  },
});
