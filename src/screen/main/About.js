import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
