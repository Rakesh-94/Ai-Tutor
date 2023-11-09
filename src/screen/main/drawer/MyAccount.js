import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import BackHandler from '../../../components/BackHandler';

const MyAccount = ({navigation}) => {
  const {height, width} = useWindowDimensions();

  return (
    <View>
      <BackHandler name={'My Account'} navigation={navigation} />
      <View style={{width: '90%', alignSelf: 'center'}}>
        {/* profile */}
        <View style={{alignItems: 'center'}}>
          {/* Profile pick */}
          <View
            style={{
              marginVertical: 30,
              height: 100,
              width: 100,
              // borderWidth: 1,
              borderRadius: 50,
              overflow: 'hidden',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Ellipse748.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          {/*  MichaelOwen text */}
          <View>
            <Text
              style={{
                color: '#21242D',
                fontFamily: 'Manrope',
                fontSize: 24,
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 32,
              }}>
              Michael Owen
            </Text>
          </View>
        </View>

        {/* card */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                height: 84,
                width: 160,
                borderRadius: 15,
                borderColor: 'rgba(41, 97, 215, 0.2)',
                backgroundColor: '#FFF',
              }}>
              <Image
                source={require('../../../assets/Ellipse748.png')}
                style={{width: 40, height: 40}}
              />
              <View style={{marginLeft: 5}}>
                <Text
                  style={{
                    color: '#353945',
                    fontFamily: 'Manrope',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 20,
                  }}>
                  Total Question
                </Text>
                <Text
                  style={{
                    color: '#23262F',
                    fontFamily: 'Manrope',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 24,
                  }}>
                  14
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                height: 84,
                width: 160,
                borderRadius: 15,
                borderColor: 'rgba(41, 97, 215, 0.2)',
                backgroundColor: '#FFF',
              }}>
              <Image
                source={require('../../../assets/Ellipse748.png')}
                style={{width: 40, height: 40}}
              />
              <View style={{marginLeft: 5}}>
                <Text
                  style={{
                    color: '#353945',
                    fontFamily: 'Manrope',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 20,
                  }}>
                  Total Question
                </Text>
                <Text
                  style={{
                    color: '#23262F',
                    fontFamily: 'Manrope',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 24,
                  }}>
                  14
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                height: 84,
                width: 160,
                borderRadius: 15,
                borderColor: 'rgba(41, 97, 215, 0.2)',
                backgroundColor: '#FFF',
              }}>
              <Image
                source={require('../../../assets/Ellipse748.png')}
                style={{width: 40, height: 40}}
              />
              <View style={{marginLeft: 5}}>
                <Text
                  style={{
                    color: '#353945',
                    fontFamily: 'Manrope',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 20,
                  }}>
                  Total Question
                </Text>
                <Text
                  style={{
                    color: '#23262F',
                    fontFamily: 'Manrope',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 24,
                  }}>
                  14
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                height: 84,
                width: 160,
                borderRadius: 15,
                borderColor: 'rgba(41, 97, 215, 0.2)',
                backgroundColor: '#FFF',
              }}>
              <Image
                source={require('../../../assets/Ellipse748.png')}
                style={{width: 40, height: 40}}
              />
              <View style={{marginLeft: 5}}>
                <Text
                  style={{
                    color: '#353945',
                    fontFamily: 'Manrope',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 20,
                  }}>
                  Total Question
                </Text>
                <Text
                  style={{
                    color: '#23262F',
                    fontFamily: 'Manrope',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 24,
                  }}>
                  14
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignSelf: 'center',
            height: height * 0.15,
            width: '100%',
            // borderWidth: 1,
            marginTop: 30,
          }}>
          <View
            style={{
              height: height * 0.15,
              width: width * 0.4,
              // borderWidth: 1,
              borderRadius: 25,
            }}>
            <ImageBackground
              resizeMode="cover"
              source={require('../../../assets/MaskGroupBottom.png')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: '100%',
                width: '100%',
                borderRadius: 15,
              }}>
              <View style={{width: 80, marginVertical: 10}}>
                <Text>My Request /Questions</Text>
              </View>
              <Image
                source={require('../../../assets/GroupBottom.png')}
                style={{marginVertical: 10, height: 40, width: 40}}
              />
            </ImageBackground>
          </View>
          <View style={{height: height * 0.15, width: width * 0.4}}>
            <ImageBackground
              resizeMode="cover"
              source={require('../../../assets/MaskGroupBottom1.png')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: '100%',
                width: '100%',
              }}>
              <View style={{width: 80, marginVertical: 10}}>
                <Text>My Queries/ Answers</Text>
              </View>
              <Image
                source={require('../../../assets/GroupBottom1.png')}
                style={{marginVertical: 10, height: 40, width: 40}}
              />
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({});
