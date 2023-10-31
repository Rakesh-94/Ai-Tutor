import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CartHeader from './CartHeader';

const ProposalsCart = ({item}) => {
  const [openProposals, setOpenProposals] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
        // marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <View style={{padding: 15}}>
        {/* Category */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>
            <Text
              style={{
                color: '#96A0B5',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32 /* 266.667% */,
              }}>
              Category:
            </Text>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32,
              }}>
              {item.category}
            </Text>
          </Text>
          <Text
            style={{
              backgroundColor: '#FFBD30',
              paddingHorizontal: 11,
              paddingVertical: 5,
              borderRadius: 8,
              color: '#FFF',
              fontFamily: 'Manrope',
              fontSize: 11,
              fontStyle: 'normal',
              fontWeight: '600',

              //   lineHeight: 'normal' /* 266.667% */,
              //   letterSpacing: '0.2',
            }}>
            Pending
          </Text>
        </View>
        {/* sub_category grade */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text>
            <Text
              style={{
                color: '#96A0B5',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32 /* 266.667% */,
              }}>
              sub_category grade-
            </Text>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32,
              }}>
              Velocity
            </Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/edit.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/Delete.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Sub_sub category */}
        <View style={{marginTop: 5}}>
          <Text>
            <Text
              style={{
                color: '#96A0B5',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32 /* 266.667% */,
              }}>
              Sub_sub category -{' '}
            </Text>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32,
              }}>
              Law of motion
            </Text>
          </Text>
        </View>
        {/* Query/price */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 32,
            }}>
            Query
          </Text>
          <Text>
            <Text
              style={{
                color: '#96A0B5',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32 /* 266.667% */,
              }}>
              Price:
            </Text>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 32,
              }}>
              $45
            </Text>
          </Text>
        </View>

        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 13,
              fontStyle: 'normal',
              fontWeight: '500',
              //   lineHeight: 'normal',
            }}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text
            style={{
              color: '#2961D7',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '700',
              //   lineHeight: 32 /* 266.667% */,
            }}>
            Attachched Document
          </Text>
          <Text>
            <Text
              style={{
                color: '#96A0B5',
                textAlign: 'right',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                //   lineHeight: 32 /* 266.667% */,
              }}>
              Bids:
            </Text>
            <Text
              style={{
                color: '#000',
                textAlign: 'right',
                fontFamily: 'Manrope',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                //   lineHeight: 32 /* 266.667% */,
              }}>
              455 Bids
            </Text>
          </Text>
        </View>

        <View style={{alignItems: 'flex-end', marginTop: 5}}>
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '500',
              //   lineHeight: 32 /* 266.667% */,
            }}>
            Requested on 12 Jan 2022
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Manrope',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '500',
              //   lineHeight: 32 /* 266.667% */,
            }}>
            Tutors Proposals
          </Text>
          <TouchableOpacity onPress={() => setOpenProposals(!openProposals)}>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 22,
              }}>
              Open
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {openProposals &&
        [{}, {}, {}, {}].map((item, index) => {
          return (
            <View
              key={index}
              style={{
                // marginVertical: 10,
                width: '100%',
                // height: 150,
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: '#D4DFF7',
                alignSelf: 'center',
                padding: 10,
                // backgroundColor: 'pink',
                marginTop: 10,
              }}>
              <CartHeader />
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text>About Tutor</Text>
                  <Text>Price Quoted:$45</Text>
                </View>
                <Text>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries
                </Text>
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
                      source={require('../assets/Group13591.png')}
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
                      source={require('../assets/Group13591.png')}
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
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    // marginVertical: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 10,
                      backgroundColor: '#2961D7',
                      width: '40%',
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
                  <TouchableOpacity
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
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default ProposalsCart;

const styles = StyleSheet.create({});
