// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';

// const AllCategories = ({navigation}) => {
//   return (
//     <View style={{flex: 1}}>
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={{
//           height: 40,
//           width: 40,
//           marginVertical: 10,
//           marginHorizontal: 20,
//           borderWidth: 0.5,
//           borderRadius: 10,
//           //   borderColor: '#F0F5F9',
//           shadowColor: '#F9BFFD',
//         }}>
//         <Image
//           source={require('../../assets/forgotBackButton.png')}
//           resizeMode="contain"
//           style={{height: '100%', width: '100%'}}
//         />
//       </TouchableOpacity>
//       <View style={{marginLeft: 20}}>
//         <Text style={{fontWeight: '600', fontSize: 24, color: '#000000'}}>
//           All Categories
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default AllCategories;

// const styles = StyleSheet.create({});

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const AllCategories = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const users = [
    {
      id: 1,
      name: 'Physics',
      images: require('../../assets/Group.png'),
      subTopics: [
        'mechanics',
        'mechanics',
        'electrostatics',
        'fluid mechanics',
        'electromagnetics',
      ],
    },
    {
      id: 2,
      name: 'Science',
      images: require('../../assets/Group1.png'),
      subTopics: [
        'mechanics',
        'electrostatics',
        'fluid mechanics',
        'electromagnetics',
      ],
    },
    {id: 3, name: 'Chemistry', images: require('../../assets/Group3.png')},
    {id: 4, name: 'Biology', images: require('../../assets/Group2.png')},
    {id: 5, name: 'Math', images: require('../../assets/Group.png')},
    {id: 6, name: 'Science', images: require('../../assets/Group.png')},
    {id: 7, name: 'Literature', images: require('../../assets/Group.png')},
    {id: 8, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 9, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 10, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 11, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 12, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 13, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 14, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 15, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 16, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 17, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 18, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 19, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 20, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 21, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 22, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 23, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 24, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 25, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 26, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 27, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 28, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 29, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 30, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 31, name: 'Physics', images: require('../../assets/Group.png')},
    {id: 32, name: 'Physics', images: require('../../assets/Group.png')},
  ];

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{alignItems: 'center', marginHorizontal: 10}}
        onPress={() => navigation.navigate('CategoriesTopics', {data: item})}>
        <Image
          key={index}
          source={item.images}
          style={{width: 70, height: 60}}
          resizeMode="contain"
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
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
          All Categories
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
        data={users}
        numColumns={4}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
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
export default AllCategories;

const styles = StyleSheet.create({
  itemss: {
    fontSize: 25,
    // margin: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  allCategories: {
    fontSize: 24,
    marginLeft: 8,
    color: 'black',
  },
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
