import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CategoriesTopics = ({route, navigation}) => {
  const {data} = route.params;
  console.log('dd', data);
  const renderTopics = ({item, index}) => {
    console.log('aya', item);
    return (
      <TouchableOpacity
        style={{alignItems: 'center', marginHorizontal: 10}}
        //   onPress={() => navigation.navigate('CategoriesTopics')}
      >
        <Image
          key={index}
          source={data.images}
          style={{width: 70, height: 60}}
          resizeMode="contain"
        />

        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: 40,
          width: 40,
          marginVertical: 10,
          marginHorizontal: 20,
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: '#F0F5F9',
          shadowColor: '#F9BFFD',
        }}>
        <Image
          source={require('../../assets/forgotBackButton.png')}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      </TouchableOpacity>
      <View style={{marginLeft: 20}}>
        <Text style={{fontWeight: '600', fontSize: 24, color: '#000000'}}>
          Physics
        </Text>
      </View>
      <View style={styles.inputbox}>
        <Image
          source={require('../../assets/searchIcon.png')}
          style={{height: 20, width: 20, marginRight: 5}}
        />
        <TextInput placeholder="Search your Categoryries" />
      </View>
      <FlatList
        data={data.subTopics || []}
        numColumns={4}
        renderItem={renderTopics}
        keyExtractor={item => item}
        contentContainerStyle={
          {
            //   backgroundColor: 'red',
            // width: "90%",
            // alignSelf: "center",
            // marginTop: 20,
          }
        }
        columnWrapperStyle={{
          margin: 20,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default CategoriesTopics;

const styles = StyleSheet.create({
  inputbox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 25,
    marginRight: 50,
    shadowColor: 'black',
    elevation: 5,
  },
});
