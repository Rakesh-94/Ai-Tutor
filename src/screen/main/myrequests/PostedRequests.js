import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackHandler from '../../../components/BackHandler';
import ProposalsCart from '../../../components/ProposalsCart';

const PostedRequests = ({setMyRequests, navigation}) => {
  const subData = [
    {
      id: 1,
      category: 'Physics',
      sub_category: 'velocity',
      sub_sub_category: 'law of motion',
      price: 45,
    },
    {
      id: 1,
      categoryme: 'Physics',
      sub_category: 'velocity',
      sub_sub_category: 'law of motion',
      price: 45,
    },
    {
      id: 1,
      categoryme: 'Physics',
      sub_category: 'velocity',
      sub_sub_category: 'law of motion',
      price: 45,
    },
    {
      id: 1,
      categoryme: 'Physics',
      sub_category: 'velocity',
      sub_sub_category: 'law of motion',
      price: 45,
    },
  ];

  const subRenderItem = ({item}) => {
    return <ProposalsCart item={item} />;
  };
  return (
    <View style={{flex: 1}}>
      <BackHandler
        name={'My Requests'}
        onTouch={() => navigation.navigate('RequestToTutor')}
        add={'Add'}
        showAdd={true}
        navigation={navigation}
      />
      {/* TabButton */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => setMyRequests(0)}
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
            Posted Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMyRequests(1)}
          style={{
            width: '50%',
            alignItems: 'center',
            paddingBottom: 15,
            borderBottomWidth: 2,
            borderColor: '#2961D7' + '20',
          }}>
          <Text>Direct Request</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={subData} renderItem={subRenderItem} />
    </View>
  );
};

export default PostedRequests;

const styles = StyleSheet.create({});
