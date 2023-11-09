import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroStack from './IntroStack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {isUserOnboard, access_token} = useSelector(state => state.auth);

  //   console.log(stack, '-0-0-0-0-');

  //   return;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isUserOnboard ? (
        <Stack.Screen name="IntroStack" component={IntroStack} />
      ) : access_token ? (
        <Stack.Screen name="MainStack" component={MainStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
