import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackHandler from '../../components/BackHandler';
import InputDropdown from '../../components/InputDropdown';

const PostARequest = ({navigation}) => {
  //   const [mobileNumber, setMobileNumber] = useState('');
  const [catId, setCatId] = useState('');
  const hellop = () => {
    alert('yes');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <BackHandler
        name={'Post a Request'}
        add={hellop}
        showAdd={false}
        navigation={navigation}
      />
      <ScrollView style={{marginTop: 20}}>
        {/* categories */}
        <View>
          <Text
            style={{
              marginHorizontal: 15,
              fontFamily: 'Manrope',
              fontSize: 14,
              lineHeight: 19,
              color: '#000000',
              marginRight: 18,
              fontWeight: '600',
            }}>
            Select Category
          </Text>
          <InputDropdown />
        </View>
        {/* subcotegorygrade */}
        <View>
          <Text
            style={{
              marginHorizontal: 15,
              fontFamily: 'Manrope',
              fontSize: 14,
              lineHeight: 19,
              color: '#000000',
              marginRight: 18,
              fontWeight: '600',
            }}>
            Select Sub-Category/Grade
          </Text>
          <InputDropdown
            value={catId}
            onChange={item => {
              setCatId(item.value);
            }}
          />
        </View>
        {/* subcotegorytopic */}
        <View>
          <Text
            style={{
              marginHorizontal: 15,
              fontFamily: 'Manrope',
              fontSize: 14,
              lineHeight: 19,
              color: '#000000',
              marginRight: 18,
              fontWeight: '600',
            }}>
            Sub-sub Category/Topic
          </Text>
          <InputDropdown />
        </View>
        {/* query */}
        <View style={{marginVertical: 5}}>
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
            Query
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
            <TextInput
              placeholder="Write here your query"
              style={{marginLeft: 10, shadowColor: 'black'}}
              //   keyboardType="numeric"
              //   value={mobileNumber}
              //   onChangeText={handleMobileNumberChange}
            />
          </View>
        </View>
        {/* Price */}
        <View style={{marginVertical: 5}}>
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
            Price
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
            <TextInput
              placeholder="Add Price"
              style={{marginLeft: 10, shadowColor: 'black'}}
              //   keyboardType="numeric"
              //   value={mobileNumber}
              //   onChangeText={handleMobileNumberChange}
            />
          </View>
        </View>
        {/* duration */}
        <View style={{marginVertical: 5}}>
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
            Duration
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
            <TextInput
              placeholder="Add Duration"
              style={{marginLeft: 10, shadowColor: 'black'}}
              //   keyboardType="numeric"
              //   value={mobileNumber}
              //   onChangeText={handleMobileNumberChange}
            />
          </View>
        </View>
        {/* +PostARequest */}
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyRequests')}
            style={{
              borderWidth: 1,
              borderColor: '#2961D7',
              alignItems: 'center',
              padding: 14,
              marginHorizontal: 15,
              borderRadius: 15,
            }}>
            <Text style={{color: '#2961D7'}}>+Post a Request</Text>
          </TouchableOpacity>
          <Text style={{marginHorizontal: 15}}>
            Attachement file type-mp3,mp4,txt,pdf,png,jpg.
          </Text>
        </View>
        {/* Signinbutton */}
        <View style={{marginVertical: 10}}>
          <TouchableOpacity
            onPress={() => handleMain('Main')}
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
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostARequest;

const styles = StyleSheet.create({});
