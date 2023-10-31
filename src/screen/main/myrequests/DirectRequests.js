// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import BackHandler from '../../../components/BackHandler';

// const DirectRequests = ({setMyRequests, navigation}) => {
//   return (
//     <View style={{}}>
//       <BackHandler
//         name={'My Request'}
//         add={'Add'}
//         showAdd={true}
//         navigation={navigation}
//       />
//       {/* TabButton */}
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           width: '100%',
//           marginVertical: 10,
//         }}>
//         <TouchableOpacity
//           onPress={() => setMyRequests(0)}
//           style={{
//             borderBottomWidth: 2,
//             width: '50%',
//             alignItems: 'center',
//             borderColor: '#FF8921',
//             paddingBottom: 15,
//           }}>
//           <Text
//             style={{
//               color: '#FF8921',
//               fontFamily: 'Manrope',
//               fontSize: 14,
//               lineHeight: 19,
//               fontWeight: '600',
//             }}>
//             Posted Request
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setMyRequests(1)}
//           style={{
//             width: '50%',
//             alignItems: 'center',
//             paddingBottom: 15,
//             borderBottomWidth: 2,
//             borderColor: '#2961D7' + '20',
//           }}>
//           <Text>Direct Request</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default DirectRequests;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackHandler from '../../../components/BackHandler';

const DirectRequests = ({setMyRequests, navigation}) => {
  return (
    <View style={{}}>
      <BackHandler
        name={'My Request'}
        add={'Add'}
        showAdd={true}
        navigation={navigation}
      />
      {/* TabButton */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => setMyRequests(0)}
          style={{
            borderBottomWidth: 2,
            borderColor: '#2961D7' + '20',
            width: '50%',
            alignItems: 'center',
            paddingBottom: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Manrope',
              fontSize: 14,
              lineHeight: 19,
              fontWeight: '600',
            }}>
            Posted Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMyRequests(1)}
          style={{
            width: '50%',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: '#FF8921',
            paddingBottom: 15,
          }}>
          <Text
            style={{
              color: '#FF8921',
              fontFamily: 'Manrope',
              fontSize: 14,
              lineHeight: 19,
              fontWeight: '600',
            }}>
            Direct Request
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DirectRequests;

const styles = StyleSheet.create({});
