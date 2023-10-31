import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import BackHandler from '../../../components/BackHandler';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <BackHandler
        name={'Michael Owen'}
        add={'add'}
        showAdd={true}
        navigation={navigation}
        // navigateTo={""}
        onTouch={() => navigation.navigate('ChatFilter')}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          width: '90%',
          borderRadius: 20,
          borderWidth: 1,
          marginTop: 10,
        }}>
        <GiftedChat
          placeholder="Message"
          alwaysShowSend={true}
          style={{backgroundColor: 'red'}} // maxInputLength={40}
          messages={messages}
          bottomOffset={5}
          // isKeyboardInternallyHandled={false}
          // scrollToBottomStyle={{
          //   backgroundColor: 'red',
          //   Color: 'red',
          //   width: '80%',

          // }}
          // scrollToBottom={false}
          alignTop={false}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          textInputStyle={{
            backgroundColor: '#FFF',
            borderRadius: 20,
            borderWidth: 1,
            backgroundColor: 'blue',
          }}
          // scrollToBottom={true}
        />
      </View>
    </View>
  );
};

export default Chat;

// const styles = StyleSheet.create({});

// import React, {useState, useCallback, useEffect} from 'react';
// import {
//   Button,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';

// // export function Chat() {
// const Chat = () => {
//   const [messages, setMessages] = useState([
//     {
//       msg: 'Helli',
//       id: 1,
//     },
//     {
//       msg: '23HHH',
//       id: 2,
//     },
//     ,
//     {
//       msg: 'Truue',
//       id: 1,
//     },
//     {
//       msg: 'VVV',
//       id: 2,
//     },
//   ]);

//   const [input, setInput] = useState('');

//   const onSend = () => {
//     let temp = [
//       ...messages,
//       {
//         msg: input,
//         id: 2,
//       },
//     ];

//     setMessages(temp);
//     setInput('');
//   };

//   const onSend2 = () => {
//     let temp = [
//       ...messages,
//       {
//         msg: input,
//         id: 1,
//       },
//     ];

//     setMessages(temp);
//     setInput('');
//   };
//   return (
//     <View>
//       <Text>HEADER</Text>
//       <ScrollView>
//         {messages.map((ele, ind) => {
//           return (
//             <View
//               style={{
//                 backgroundColor: ind % 2 === 0 ? 'pink' : 'yellow',
//                 marginTop: 10,
//                 marginHorizontal: 20,
//                 paddingVertical: 10,
//                 width: 200,
//                 alignSelf: ind % 2 === 0 ? 'flex-start' : 'flex-end',
//               }}>
//               <Text style={{textAlign: 'center', color: 'red'}}>
//                 {ele?.msg}
//               </Text>
//             </View>
//           );
//         })}

//         <TextInput
//           value={input}
//           onChangeText={val => setInput(val)}
//           style={{borderWidth: 1, marginHorizontal: 30, marginTop: 30}}
//           placeholder="siii message"
//         />
//         <TouchableOpacity
//           onPress={() => onSend()}
//           style={{
//             borderWidth: 1,
//             width: 100,
//             padding: 5,
//             alignItems: 'center',
//             marginTop: 30,
//             alignSelf: 'center',
//           }}>
//           <Text>Send</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => onSend()}
//           style={{
//             borderWidth: 1,
//             width: 100,
//             padding: 5,
//             alignItems: 'center',
//             marginTop: 30,
//             alignSelf: 'center',
//           }}>
//           <Text>Me</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* <Button text={'Send'} /> */}
//     </View>
//   );
// };

// export default Chat;
