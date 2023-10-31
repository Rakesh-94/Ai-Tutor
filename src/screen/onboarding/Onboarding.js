import React, {useRef, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';
import {Auth} from '../../Redux/Action';

const OnBoarding = ({navitaion}) => {
  const {height, width} = useWindowDimensions();
  const [currentScreen, setCurrentScreen] = useState(0);
  const route = useRoute();
  const carouselRef = useRef();
  const [activeIdx, setActiveIdx] = useState(0);

  const images = [
    {
      img: require('../../assets/Images.png'),
      heading: 'Easy to Schedule',
      desc: 'Customize your children class Schedule at any time',
    },
    {
      img: require('../../assets/Images1.png'),
      heading: 'Easy to Schedule',
      desc: 'Customize your children class Schedule at any time',
    },
    {
      img: require('../../assets/Images1.png'),
      heading: 'All in one place',
      desc: 'Keep Track of your children lessons, tutor feedbacks and achivements',
    },
  ];

  const dispacht = useDispatch();

  const handleAuth = value => {
    dispacht(Auth(value));
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={item?.img}
          style={{height: '80%', width: '90%', alignSelf: 'center'}}
          resizeMode="contain"
        />
        <Text
          style={{
            textAlign: 'center',
            color: 'blacks',
            fontWeight: '700',
            fontSize: 26,
            fontFamily: 'Manrope',
            color: '#000000',
          }}>
          {item?.heading}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 22,
            fontFamily: 'Manrope',
            width: width * 0.6,
            marginTop: 20,
            color: 'black',
          }}>
          {item?.desc}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FBFCFD'}}>
      <Carousel
        ref={carouselRef}
        // data={[require("../../assets/MaskGroup1.png"),]}
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={idx => setActiveIdx(idx)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeIdx}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 7,
            backgroundColor: '#2961D7',
          }}
          inactiveDotStyle={{
            backgroundColor: 'gray',
            width: 15,
            height: 15,
            borderRadius: 7,
          }}
          inactiveDotOpacity={0.9}
          inactiveDotScale={0.6}
        />
        <TouchableOpacity
          onPress={() => setCurrentScreen(1)}
          style={{
            backgroundColor: 'blue',
            padding: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}>
          <Text
            style={{color: 'white'}}
            onPress={async () => {
              try {
                if (activeIdx > 1) {
                  handleAuth('Auth');
                } else {
                  carouselRef.current.snapToNext();
                }
              } catch (err) {
                console.log(err);
              }
            }}>
            {activeIdx > 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    // flex:1
  },
});
