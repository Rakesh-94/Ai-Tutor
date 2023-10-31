import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackHandler from '../../components/BackHandler';

const data = [
  {
    image: require('../../assets/paymentMethodImage/GroupMethod.png'),
    name: 'name',
    cardNo: 1234567890123456,
    expires: 'Expires 09/25',
  },
  {
    image: require('../../assets/paymentMethodImage/visaMethod.png'),
    name: 'name',
    cardNo: 1234567890123456,
    expires: 'Expires 09/25',
  },
  {
    image: require('../../assets/paymentMethodImage/PayUMethod.png'),
    name: 'name',
    cardNo: 1234567890123456,
    expires: 'Expires 09/25',
  },
  {
    image: require('../../assets/paymentMethodImage/PaypalMethod.png'),
    name: 'name',
    cardNo: 1234567890123456,
    expires: 'Expires 09/25',
  },
  {
    image: require('../../assets/paymentMethodImage/adyenMethod.png'),
    name: 'name',
    cardNo: 1234567890123456,
    expires: 'Expires 09/25',
  },
];

const PaymentOptions = ({navigation}) => {
  const renderItemPaymentMethod = ({item}) => {
    let cardNumber = item?.cardNo.toString();
    let lastFour = cardNumber.slice(-4);
    let maskNumber = '*'.repeat(cardNumber.length - 4) + lastFour;
    maskNumber = maskNumber.replace(/(.{4})/g, '$1  ');
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: '90%',
          flexDirection: 'row',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          alignSelf: 'center',
          //   height: 80,
          marginTop: 20,
          borderRadius: 15,
          borderColor: '#D4DFF7',
          padding: 12,
        }}>
        <Image
          source={item.image}
          style={{width: 50, height: 50}}
          resizeMode="contain"
        />
        <View style={{marginHorizontal: 10, padding: 5}}>
          <Text
            style={{
              color: '#0F0B03',
              fontFamily: 'Manrope',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: '700',
            }}>
            {maskNumber}
          </Text>
          {/* let a = 1234567890; let aString = a.toString(); // Convert the numberto a string 
          let lastFourDigits = aString.slice(-4); // Get the last 4
          characters let maskedNumber = '*'.repeat(aString.length - 4) +
          lastFourDigits; // Replace the rest with asterisks
          console.log(maskedNumber); // Output: "********90" */}
          <Text
            style={{
              color: '#96A0B5',
              fontFamily: 'Manrope',
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: '500',
            }}>
            {item.expires}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <BackHandler
        name={'Payment Options'}
        add={'Add'}
        showAdd={true}
        navigation={navigation}
      />
      <ScrollView>
        <View>
          <Text
            style={{
              color: '#0F0B03',
              fontFamily: 'Manrope',
              fontSize: 16,
              fontStyle: 'italic',
              fontWeight: '700',
              lineHeight: 20,
              // backgroundColor: 'red',
              marginTop: 20,
              marginHorizontal: 20,
            }}>
            Select Payment Method
          </Text>
          <FlatList data={data} renderItem={renderItemPaymentMethod} />

          <View>
            <Text
              style={{
                color: '#0F0B03',
                fontFamily: 'Manrope',
                fontSize: 16,
                fontStyle: 'italic',
                fontWeight: '700',
                lineHeight: 20,
                // backgroundColor: 'red',
                marginTop: 20,
                marginHorizontal: 20,
              }}>
              Payment Info
            </Text>
            <View
              style={{
                marginTop: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#D4DFF7',
                padding: 15,
                width: '90%',
                // height: 130,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#96A0B5',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}>
                  Base Price
                </Text>
                <Text
                  style={{
                    color: '#96A0B5',
                    textAlign: 'center',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '700',
                  }}>
                  4 hrs*$20
                </Text>
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'right',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '700',
                  }}>
                  $80
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: '#96A0B5',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}>
                  Tax & Free
                </Text>
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'right',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '700',
                  }}>
                  $20
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#D4DFF7',
                  marginTop: 10,
                }}></View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: '#96A0B5',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}>
                  Final Total
                </Text>
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'right',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '700',
                  }}>
                  $100
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Pay Now */}
      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          // onPress={() => handleMain('Main')}
          onPress={() => navigation.navigate('MyQuestionAnswer')}
          style={{
            backgroundColor: '#2961D7',
            padding: 15,
            borderRadius: 12,
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Manrope',
              fontSize: 16,
              fontStyle: 'normal',
              //   lineHeight: 21,
              fontWeight: '700',
            }}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentOptions;

const styles = StyleSheet.create({});
