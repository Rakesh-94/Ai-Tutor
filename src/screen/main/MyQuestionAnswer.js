import BackHandler from '../../components/BackHandler';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CartHeader from '../../components/CartHeader';
import {AirbnbRating} from 'react-native-ratings';

const MyQuestionAnswer = ({navigation}) => {
  const [satisfy, setSatisfy] = useState(false);

  const data = [{}, {}];

  const RenderItem = ({item}) => {
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
                  lineHeight: 32,
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
          </View>

          <TouchableOpacity style={{position: 'absolute', top: 30, right: 10}}>
            <Image
              source={require('../../assets/Group4059a1.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>

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
                  lineHeight: 32,
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
                {/* <Image
                  source={require('../../assets/edit.png')}
                  style={{width: 20, height: 20}}
                /> */}
              </TouchableOpacity>
              <TouchableOpacity>
                {/* <Image
                //   source={require('../assets/Delete.png')}
                  style={{width: 20, height: 20}}
                /> */}
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
                  lineHeight: 32,
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
                  lineHeight: 32,
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
              }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.{' '}
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
              }}>
              Requested on 12 Jan 2022
            </Text>
          </View>

          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
          </View> */}
        </View>
        {/* innercard */}
        <View
          style={{
            // marginVertical: 10,
            width: '100%',
            // height: 150,
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: '#D4DFF7',
            alignSelf: 'center',
            padding: 20,
            // backgroundColor: 'pink',
            marginTop: 10,
          }}>
          {/* <CartHeader /> */}

          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                // padding: 20,
                width: '100%',
                //   borderWidth: 2,
                //   borderColor: 'red',
              }}>
              <TouchableOpacity style={styles.profileImage}>
                <Image
                  source={require('../../assets/michaelowen.png')}
                  style={{height: '100%', width: '100%', borderRadius: 40}}
                />
              </TouchableOpacity>

              <View style={{marginLeft: 10}}>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
                  Hi, Michael Owen
                </Text>
                <Text
                  style={{
                    color: '#FF8921',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    //   lineHeight: 32 /* 266.667% */,
                  }}>
                  Social Science Teacher
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    //   backgroundColor: 'red',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      resizeMode="contain"
                      style={{height: 20, width: 20}}
                      source={require('../../assets/graduate.png')}
                    />
                    <Text
                      style={{
                        color: '#96A0B5',
                        fontFamily: 'Manrope',
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: '400',
                        //   lineHeight: 32 /* 266.667% */,
                      }}>
                      Maters in arts
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row', marginLeft: 5}}>
                    <Image
                      resizeMode="contain"
                      style={{height: 15, width: 15}}
                      source={require('../../assets/retingstar.png')}
                    />
                    <Text>4.3</Text>
                  </View>
                  {!satisfy && (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ChatFilter')}>
                      <Image
                        source={require('../../assets/message-text.png')}
                        style={{
                          height: 30,
                          width: 30,
                          position: 'relative',
                          //   top: 60,
                          left: 75,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View style={{width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                alignSelf: 'center',
                marginTop: 30,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Manrope',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 15,
                }}>
                Tutor Submitted Answers
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#2961D7',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 15,
                  }}>
                  Answer.pdf
                </Text>
              </TouchableOpacity>
            </View>

            {!satisfy ? (
              <View
                style={{
                  //   flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginVertical: 10,
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => setSatisfy(true)}
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#2961D7',
                    width: '100%',
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Manrope',
                      fontSize: 14,
                      fontWeight: '700',
                    }}>
                    Satisfy with answers
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RejectAnswer')}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#2961D7',
                    width: '100%',
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#2961D7',
                      fontFamily: 'Manrope',
                      fontSize: 14,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}>
                    Reject Answer
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/Group40504.png')}
                    style={{height: 20, width: 20}}
                  />
                  <Text
                    style={{
                      color: '#FF8921',
                      fontFamily: 'Manrope',
                      fontSize: 16,
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: 15,
                      marginHorizontal: 5,
                    }}>
                    Satisfy width answers
                  </Text>
                </View>
                <View style={{alignSelf: 'flex-start', marginTop: 15}}>
                  <AirbnbRating
                    defaultRating={0}
                    size={25}
                    showRating={false}
                  />
                </View>
                <View
                  style={{
                    //   flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                    //   marginVertical: 10,
                    width: '100%',
                    alignSelf: 'center',
                  }}>
                  <TextInput
                    placeholder="Write Review"
                    multiline={true}
                    numberOfLines={3.5}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#D4DFF7',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlignVertical: 'top',
                    }}
                  />

                  <TouchableOpacity
                    style={{
                      borderRadius: 10,
                      backgroundColor: '#2961D7',
                      width: '100%',
                      height: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Manrope',
                        fontSize: 14,
                        fontWeight: '700',
                      }}>
                      Satisfy with answers
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <BackHandler
        name={'My Queries/Answers'}
        // add={'Add'}
        // showAdd={true}
        navigation={navigation}
      />
      <ScrollView>
        <FlatList data={data} renderItem={RenderItem} />
      </ScrollView>
    </View>
  );
};

export default MyQuestionAnswer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flexDirection: 'row',
    // backgroundColor: "#585858" + 20,
    // justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  profileImage: {
    width: 60,
    height: 60,
  },
});
