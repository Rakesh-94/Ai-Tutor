import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginWithEmail from './LoginWithEmail';
import LoginWithPhone from './LoginWithPhone';

const AuthLoginSignUP = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [authentication, setAuthentication] = useState(0);

  switch (authentication) {
    case 0:
      return (
        <LoginWithPhone
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          password={password}
          setPassword={setPassword}
          setAuthentication={setAuthentication}
          navigation={navigation}
        />
      );
    case 1:
      return <LoginWithEmail setAuthentication={setAuthentication} />;
    default:
      return <LoginWithPhone />;
  }
};

export default AuthLoginSignUP;

const styles = StyleSheet.create({});
