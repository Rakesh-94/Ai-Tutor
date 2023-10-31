import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroStack from './IntroStack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {stack} = useSelector(state => state.reducer);

  //   console.log(stack, '-0-0-0-0-');

  //   return;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {stack == 'Onbording' && (
        <Stack.Screen name="IntroStack" component={IntroStack} />
      )}
      {stack == 'Auth' && (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
      {stack == 'Main' && (
        <Stack.Screen name="MainStack" component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
