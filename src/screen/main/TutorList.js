import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CartHeader from '../../components/CartHeader';
import BackHandler from '../../components/BackHandler';

const TutorList = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <BackHandler name={'Request To Tutor'} navigation={navigation} />
        <View style={{width: '90%', marginHorizontal: 20}}>
          <ScrollView
            horizontal={true}
            //   key={ind}
            contentContainerStyle={{
              // flexDirection: 'row',
              // backgroundColor: 'pink',
              // maxWidth: '90%',
              marginTop: 20,
              // justifyContent: 'center',
            }}>
            {[
              {Category: ':Physics'},
              {Category: ':Math'},
              {Category: ':Chemistry'},
              {Category: ':Chemistry'},
              {Category: ':Chemistry'},
            ].map((item, ind) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#E9E7E7',
                    marginHorizontal: 5,
                    //   width: '90%',
                    padding: 5,
                  }}>
                  <Text style={{color: '#606060'}}>
                    {Object.keys(item)}
                    {item?.Category}
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/Group13623.png')}
                      style={{marginHorizontal: 5, height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {[{}, {}, {}, {}].map((item, index) => {
          return (
            <View
              key={index}
              style={{
                // marginVertical: 10,
                width: '90%',
                // height: 150,
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: '#D4DFF7',
                alignSelf: 'center',
                padding: 10,
                // backgroundColor: 'pink',
                marginTop: 20,
                padding: 5,
              }}>
              <CartHeader />
              <View>
                <View
                  style={{
                    marginHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: 'Manrope',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    About Tutor
                  </Text>
                  <Text>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginVertical: 20,
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 15,
                      flexDirection: 'row',
                      borderColor: '#D4DFF7',
                      // backgroundColor: 'pink',
                      width: '40%',
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/Group13591.png')}
                      style={{height: 40, width: 40}}
                    />
                    <View style={{marginHorizontal: 7}}>
                      <Text
                        style={{
                          color: '#000',
                          fontFamily: 'Manrope',
                          fontSize: 14,
                          fontWeight: '700',
                        }}>
                        Experience
                      </Text>
                      <Text
                        style={{
                          color: '#96A0B5',
                          fontFamily: 'Manrope',
                          fontSize: 12,
                          fontWeight: '400',
                        }}>
                        24 year
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 15,
                      flexDirection: 'row',
                      borderColor: '#D4DFF7',
                      // backgroundColor: 'pink',
                      width: '40%',
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/Group13591.png')}
                      style={{height: 40, width: 40}}
                    />
                    <View style={{marginHorizontal: 7}}>
                      <Text
                        style={{
                          color: '#000',
                          fontFamily: 'Manrope',
                          fontSize: 14,
                          fontWeight: '700',
                        }}>
                        Students
                      </Text>
                      <Text
                        style={{
                          color: '#96A0B5',
                          fontFamily: 'Manrope',
                          fontSize: 12,
                          fontWeight: '400',
                        }}>
                        34 Active
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    // flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // marginVertical: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PaymentOptions')}
                    style={{
                      borderRadius: 10,
                      backgroundColor: '#2961D7',
                      width: '88%',
                      height: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontFamily: 'Manrope',
                        fontSize: 16,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Accept
                    </Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#2961D7',
                      width: '40%',
                      height: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#2961D7',
                        fontFamily: 'Manrope',
                        fontSize: 16,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Reject
                    </Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TutorList;

const styles = StyleSheet.create({});
