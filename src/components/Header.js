import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = props => {
  // const {navigation} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          width: '80%',
          //   borderWidth: 2,
          //   borderColor: 'red',
        }}>
        <TouchableOpacity style={styles.profileImage} onPress={props?.onTouch}>
          <Image
            source={require('../assets/profileImg.png')}
            style={{height: '100%', width: '100%', borderRadius: 40}}
          />
        </TouchableOpacity>
        {/* <View style={{ marginLeft: 30, }}>
                    <Text>My Name</Text>
                    <Text>My age</Text>
                </View> */}
        <View style={{marginLeft: 10}}>
          <Text
            numberOfLines={1}
            style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
            My Profile
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="contain"
              style={{height: 16, width: 13}}
              source={require('../assets/location.png')}
            />
            <Text>Abc, Jaipur</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', width: '30%', alignItems: 'center'}}>
        <TouchableOpacity
          style={{height: 30, width: 24}}
          onPress={props?.onPressChat}>
          <Image
            source={require('../assets/message-text.png')}
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{height: 24, width: 24}}
          onPress={props?.onPressNotification}>
          <Image
            source={require('../assets/bell.png')}
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.logOut} onPress={props?.Logout}>
        <Text style={{color: 'white'}}>LogOut</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: "#585858" + 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  logOut: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 8,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
