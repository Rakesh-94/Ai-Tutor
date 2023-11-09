import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const Home = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const carouselRef = useRef();

  const [activeIdx, setActiveIdx] = useState(0);

  const images = [
    require('../../assets/banner.png'),
    require('../../assets/banner.png'),
    require('../../assets/banner.png'),

    // Add other image sources as needed
  ];
  const renderItem = ({item, idx}) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item}
          style={{height: '100%', width: '100%'}}
          resizeMode="contain"
        />
      </View>
    );
  };

  // const onLogout = async () => {
  //   try {
  //     // Alert.alert("ojjj")
  //     await AsyncStorage.setItem('status', 'Auth');
  //     let st = await AsyncStorage.getItem('status');
  //     setIsStack(st);
  //     // Alert.alert("ojjj")
  //   } catch (error) {}
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <Header
            Logout={() => onLogout()}
            onTouch={() => navigation.toggleDrawer()}
            onPressNotification={() => navigation.navigate('Notification')}
            onPressChat={() => navigation.navigate('ChatFilter')}
          />

          {/* searchBar */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 15,
              backgroundColor: '#FFF',
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <Image
              source={require('../../assets/searchIcon.png')}
              style={{height: 20, width: 19, marginLeft: 10}}
            />
            <TextInput
              placeholder="Search your tutor..."
              style={{
                marginLeft: 10,
                shadowColor: 'black',
                color: '#000',
                height: 45,
              }}
            />
          </View>

          {/* Carousel */}
          <View style={{marginTop: 10, height: 125, width: 280}}>
            {/* <ScrollView horizontal>
            <View
              style={{
                backgroundColor: '#FF8921',
                height: 140,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                borderRadius: 10,
              }}>
              <Text>This is image1</Text>
            </View>
            <View
              style={{
                backgroundColor: '#FF8921',
                height: 140,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                borderRadius: 10,
              }}>
              <Text>This is image2</Text>
            </View>
            <View
              style={{
                backgroundColor: '#FF8921',
                height: 140,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                borderRadius: 10,
              }}>
              <Text>This is image3</Text>
            </View>
          </ScrollView> */}
            <View style={{}}>
              <Carousel
                ref={carouselRef}
                // data={[require("../../assets/MaskGroup1.png"),]}
                data={images}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width}
                onSnapToItem={idx => setActiveIdx(idx)}
              />
            </View>
          </View>

          {/* allCategoryView */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              margin: 20,
            }}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
              Explore our Categories
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllCategories')}>
              <Text style={{color: '#2961D7', fontSize: 14, fontWeight: '500'}}>
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {/* sample categories  */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/Group.png')}
                style={{height: 60, width: 60}}
              />
              <Text style={{color: '#000'}}>Physics</Text>
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/Group1.png')}
                style={{height: 60, width: 60}}
              />
              <Text style={{color: '#000'}}>Physics</Text>
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/Group2.png')}
                style={{height: 60, width: 60}}
              />
              <Text style={{color: '#000'}}>Physics</Text>
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/Group3.png')}
                style={{height: 60, width: 60}}
              />
              <Text style={{color: '#000'}}>Physics</Text>
            </View>
          </View>

          {/* post a request */}

          <View style={{margin: 10, backgroundColor: '#F0F5F9'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/degree.png')}
                style={{height: 40, width: 40, margin: 15}}
              />
              <View>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '700',
                    marginTop: 5,
                  }}>
                  Reach your goals with tutors
                </Text>
                <Text style={{width: '60%'}}>
                  we have the most qualified tutors for your query, questions
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PostARequest')}
              style={{
                borderWidth: 1,
                borderColor: '#2961D7',
                alignItems: 'center',
                padding: 12,
                marginHorizontal: 30,
                marginVertical: 20,
                borderRadius: 15,
              }}>
              <Text style={{color: '#2961D7'}}>+Post a Request</Text>
            </TouchableOpacity>
          </View>

          {/* my request Q/A */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: height * 0.15,
              width: width * 1,
            }}>
            <View style={{height: height * 0.15, width: width * 0.4}}>
              <ImageBackground
                resizeMode="cover"
                source={require('../../assets/MaskGroupBottom.png')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: '100%',
                  width: '100%',
                }}>
                <View style={{width: 80, marginVertical: 10}}>
                  <Text>My Request /Questions</Text>
                </View>
                <Image
                  source={require('../../assets/GroupBottom.png')}
                  style={{marginVertical: 10, height: 40, width: 40}}
                />
              </ImageBackground>
            </View>
            <View style={{height: height * 0.15, width: width * 0.4}}>
              <ImageBackground
                resizeMode="cover"
                source={require('../../assets/MaskGroupBottom1.png')}
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
                  source={require('../../assets/GroupBottom1.png')}
                  style={{marginVertical: 10, height: 40, width: 40}}
                />
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#585858' + 10,
  },
  but: {
    backgroundColor: 'skyblue',
    padding: 12,
    borderRadius: 15,
    width: '60%',
    alignSelf: 'center',
    // maxWidthWidth: "60%",
    alignItems: 'center',
    marginVertical: 7,
  },
});
