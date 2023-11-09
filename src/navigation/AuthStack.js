import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthLoginSignUP from '../screen/auth/Auth';
import ForgotPassward from '../screen/auth/ForgotPassward';
import PasswardUpdate from '../screen/auth/PasswardUpdate';
import OTPInput from '../screen/auth/OTP';
import SignUp from '../screen/auth/signUp/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthLoginSignUP" component={AuthLoginSignUP} />
      <Stack.Screen name="PasswardUpdate" component={PasswardUpdate} />
      <Stack.Screen name="ForgotPassward" component={ForgotPassward} />
      <Stack.Screen name="OTPInput" component={OTPInput} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthStack;

const styles = StyleSheet.create({});
