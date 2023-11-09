import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackHandler from '../../../components/BackHandler';

const InviteFriends = ({navigation}) => {
  return (
    <View>
      <BackHandler name={'Invite Friends'} navigation={navigation} />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#FFF',
          borderRadius: 15,
          padding: 15,
          marginTop: 20,
        }}>
        <View>
          <Text>Invite Friends Earn More</Text>
        </View>

        <View>
          <Text>Lorem ispum jusff hyrsss lorem ghgjhads kjkkuuuu </Text>
        </View>
        {/* Invitation Link */}
        <View>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Invitation Link
          </Text>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'rgba(41, 97, 215, 0.20)',
            }}>
            <TextInput
              placeholder="www.aitutor/invitelink/asda55"
              style={{
                marginLeft: 15,
                textAlignVertical: 'top',
                ...Platform.select({
                  ios: {
                    paddingVertical: 15,
                  },
                }),
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            borderRadius: 15,
            backgroundColor: '#2961D7',
            shadowColor: 'rgba(0, 60, 115, 0.35)',
          }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Manrope',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: '700',
              padding: 14,
            }}>
            Share Friends
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InviteFriends;

const styles = StyleSheet.create({});
