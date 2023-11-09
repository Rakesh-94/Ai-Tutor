import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackHandler from '../../components/BackHandler';

const RejectAnswer = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHandler name={'Reject Answers'} navigation={navigation} />
      <View
        style={{
          //   flex: 1,
          width: '90%',
          alignSelf: 'center',
          marginVertical: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 20,
        }}>
        {/* reason for rejection */}
        <Text
          style={{
            color: '#000',
            fontFamily: 'Manrope',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '600',
            // lineHeight: 15,
            //   marginHorizontal: 5,
          }}>
          Reason for Rejection
        </Text>

        {/* input*/}
        <TextInput
          placeholder="Reason ......"
          placeholderTextColor={'#96A0B5'}
          multiline={true}
          numberOfLines={5}
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#D4DFF7',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'top',
            fontFamily: 'Manrope',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '500',
            padding: 15,
            color: '#000',
            ...Platform.select({
              ios: {
                paddingVertical: 20,
              },
            }),
          }}
        />

        {/* sutdentAttachment */}

        <View
          style={{
            width: '100%',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: '500',
              //   lineHeight: 12,
              letterSpacing: -0.2,
            }}>
            Student's Attachement
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#2961D7',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 32,
              }}>
              AttachchedDocument.pdf
            </Text>
          </TouchableOpacity>
        </View>

        {/* teacherAttachment */}
        <View
          style={{
            width: '100%',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: '500',
              //   lineHeight: 15,
              letterSpacing: -0.2,
            }}>
            Tutor's Attachement
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#2961D7',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 32,
              }}>
              AttachchedDocument.pdf
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: '#2961D7',
            width: '100%',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Reject Answers
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RejectAnswer;

const styles = StyleSheet.create({});
