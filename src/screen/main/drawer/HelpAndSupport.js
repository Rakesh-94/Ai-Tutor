import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackHandler from '../../../components/BackHandler';

const HelpAndSupport = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHandler name={'Help and Support'} navigation={navigation} />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#FFF',
          borderRadius: 15,
          padding: 15,
          marginTop: 20,
        }}>
        {/* Support ID */}
        <View>
          <Text
            style={{
              color: '#FF8921',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
            }}>
            Support ID: 123456789
          </Text>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              marginTop: 5,
            }}>
            Student Id:{' '}
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '500',
              }}>
              123456789
            </Text>
          </Text>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              marginTop: 5,
            }}>
            Proposal Id:{' '}
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '500',
              }}>
              123456789
            </Text>
          </Text>
        </View>

        {/* Category */}
        <View style={{marginTop: 12}}>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
            }}>
            Category -{' '}
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '500',
              }}>
              Physics
            </Text>
          </Text>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              marginTop: 10,
            }}>
            Sub-category grade-{' '}
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '500',
              }}>
              Velocity
            </Text>
          </Text>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              marginTop: 10,
            }}>
            Sub-sub category -{' '}
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '500',
              }}>
              Velocity
            </Text>
          </Text>
        </View>

        {/* Query/price */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 32,
            }}>
            Query
          </Text>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 32,
            }}>
            Price :{' '}
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32,
              }}>
              $45
            </Text>
          </Text>
        </View>

        {/* para */}
        <View>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet.{' '}
          </Text>
        </View>

        {/* Reason */}
        <View>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Reason
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
              placeholder="Select Reason"
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
        {/* Query */}
        <View>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Query
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
              placeholder="Write here your query..."
              multiline={true}
              numberOfLines={3}
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
            Sumbit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({});
