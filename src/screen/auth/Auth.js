import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';

const AuthLoginSignUP = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [authentication, setAuthentication] = useState(0);

  switch (authentication) {
    case 0:
      return (
        <Login
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          password={password}
          setPassword={setPassword}
          setAuthentication={setAuthentication}
          navigation={navigation}
        />
      );
    case 1:
      return <SignUp setAuthentication={setAuthentication} />;
    default:
      return <Login />;
  }
};

export default AuthLoginSignUP;

const styles = StyleSheet.create({});
