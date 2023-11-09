import {
  Image,
  Modal,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SET_TOKEN} from '../../../Redux/constants';
import api from '../../../utility/api';

const DrawerScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const {access_token} = useSelector(state => state.auth);
  console.log(access_token, '{{{{{{{access_token}}}}}}}');

  const dispatch = useDispatch();

  const navigation = useNavigation();
  // console.log("drawerProps---->", props)

  // const handleLogout = async () => {
  //   try {
  //     const url = 'https://tutor-tnyp.onrender.com/api/user/logout';
  //     let response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: access_token,
  //       },
  //       body: JSON.stringify({
  //         // authrizatiion: access_token,
  //       }),
  //     });
  //     response = await response.json();
  //     console.log(response, '{{{{{{{access}}}}}}}');
  //     if (response.statusCode == 200) {
  //       setModalVisible(!modalVisible);
  //       dispatch({type: SET_TOKEN, payload: null});
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleLogout = async () => {
    // alert('hello');
    try {
      let response = await api({
        method: 'post',
        url: '/logout',
        // headers: {
        //   'Content-Type': 'application/json',
        //   Authorization: access_token,
        // },
        // data: {},
      });
      console.log(response.data, '{{{{{{{access}}}}}}}');
      if (response.data.statusCode == 200) {
        setModalVisible(!modalVisible);
        dispatch({type: SET_TOKEN, payload: null});
      }
    } catch (error) {
      console.log('Errorss', error);
    }
  };

  return (
    // <SafeAreaView style={{flex: 1}}>
    <>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          flex: 1,
          backgroundColor: '#2961D7',
          ...Platform.select({
            ios: {
              paddingTop: 40,
            },
          }),
          // marginTop: 20,
        }}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/profileImg.png')}
              style={{height: 40, width: 40, borderRadius: 50}}
            />

            <View>
              <Text style={{color: 'white', fontSize: 20, marginLeft: 20}}>
                Hi, Michael Owen
              </Text>
              <Text style={{color: 'white', fontSize: 12, marginLeft: 20}}>
                Login via +91 123456788
              </Text>
            </View>
          </View>

          <View style={{marginVertical: 20, width: '90%', alignSelf: 'center'}}>
            {/* Myprofile */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/IC_Home.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('MyProfile')}>
                My Profile
              </Text>
            </View>

            {/* My Account */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40539.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('MyAccount')}>
                My Account
              </Text>
            </View>

            {/* Invite Friends */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40541.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('InviteFriends')}>
                Invite Friends
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              width: '60%',
              borderColor: 'white',
            }}></View>

          <View style={{marginVertical: 20, width: '90%', alignSelf: 'center'}}>
            {/* About us */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40546.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('AboutUs')}>
                About us
              </Text>
            </View>

            {/* Terms & Condition */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40548.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('TermsAndCondition')}>
                Terms & Condition
              </Text>
            </View>

            {/* privacy policy */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40549.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('PrivacyPolicy')}>
                Privacy Policy
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              width: '60%',
              borderColor: 'white',
            }}></View>

          <View style={{marginVertical: 20, width: '90%', alignSelf: 'center'}}>
            {/* Setting */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40553.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('Setting')}>
                Setting
              </Text>
            </View>

            {/* Contact us*/}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40555.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />

              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('ContactUs')}>
                Contact us
              </Text>
            </View>

            {/* Help and Support */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Group40590.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{fontSize: 16, color: 'white', marginVertical: 10}}
                onPress={() => navigation.navigate('HelpAndSupport')}>
                Help and Support
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginVertical: 20,
            width: '90%',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20,
          }}>
          {/* logout */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/IC_Logout.png')}
              style={{
                height: 30,
                width: 30,
              }}
            />
            <Text
              style={{fontSize: 16, color: 'white', marginVertical: 10}}
              onPress={() => setModalVisible(true)}>
              Logout
            </Text>
          </View>
          {/* logoutModal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <View
                style={{
                  margin: 20,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 35,
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}>
                <Text style={{marginBottom: 15, textAlign: 'center'}}>
                  Are you sure, you want to log out?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#2961D7',
                      borderRadius: 10,
                      padding: 10,
                      elevation: 2,
                      marginHorizontal: 10,
                    }}
                    onPress={handleLogout}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginHorizontal: 15,
                      }}>
                      Logout
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FFF',
                      borderRadius: 10,
                      borderColor: '#2961D7',
                      borderWidth: 1,
                      padding: 10,
                      elevation: 2,
                      marginHorizontal: 10,
                    }}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={{
                        marginHorizontal: 15,
                        color: '#2961D7',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </>
    // </SafeAreaView>
  );
};

export default DrawerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
  },
});

// SafeAreaView
