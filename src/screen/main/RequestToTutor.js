import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackHandler from '../../components/BackHandler';
import CartHeader from '../../components/CartHeader';

const RequestToTutor = ({navigation}) => {
  return (
    <ScrollView>
      <BackHandler name={'Request To Tutor'} navigation={navigation} />
      <View
        style={{
          marginVertical: 20,
          borderRadius: 10,
          width: '90%',
          alignSelf: 'center',
          //   justifyContent: 'center',
          backgroundColor: '#FFF',
        }}>
        <CartHeader
          extraStyle={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#D4DFF7',
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            height: 120,
          }}
        />

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
              style={{
                marginLeft: 10,
                shadowColor: 'black',
                textAlignVertical: 'top',
              }}
              multiline={true}
              numberOfLines={8}

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
        {/* +PostARequest */}
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#2961D7',
              alignItems: 'center',
              padding: 14,
              marginHorizontal: 15,
              borderRadius: 15,
              marginTop: 10,
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
            // onPress={() => handleMain('Main')}
            onPress={() => navigation.navigate('TutorList')}
            style={{
              backgroundColor: '#2961D7',
              padding: 15,
              borderRadius: 12,
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Manrope',
                fontSize: 16,
                lineHeight: 21,
                fontWeight: '700',
              }}>
              Send Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RequestToTutor;

const styles = StyleSheet.create({});
