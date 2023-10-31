import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PostedRequests from './PostedRequests';
import DirectRequests from './DirectRequests';

const MyRequests = ({navigation}) => {
  const [myRequests, setMyRequests] = useState(0);

  switch (myRequests) {
    case 0:
      return (
        <PostedRequests navigation={navigation} setMyRequests={setMyRequests} />
      );
    case 1:
      return <DirectRequests setMyRequests={setMyRequests} />;
    default:
      return <PostedRequests />;
  }
};

export default MyRequests;

const styles = StyleSheet.create({});
