import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/main/Home';
import About from '../screen/main/About';
import AllCategories from '../screen/main/AllCategories';
import CategoriesTopics from '../screen/main/CategoriesTopics';
import PostARequest from '../screen/main/PostARequest';
import MyRequests from '../screen/main/myrequests/MyRequests';
import RequestToTutor from '../screen/main/RequestToTutor';
import TutorList from '../screen/main/TutorList';
import PaymentOptions from '../screen/main/PaymentOptions';
import MyQuestionAnswer from '../screen/main/MyQuestionAnswer';
import RejectAnswer from '../screen/main/RejectAnswer';
import Chat from '../screen/main/chat/Chat';
import ChatFilter from '../screen/main/chat/ChatFilter';
import Notification from '../screen/main/Notification';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      // initialRouteName="Chat"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="CategoriesTopics" component={CategoriesTopics} />
      <Stack.Screen name="PostARequest" component={PostARequest} />
      <Stack.Screen name="MyRequests" component={MyRequests} />
      <Stack.Screen name="RequestToTutor" component={RequestToTutor} />
      <Stack.Screen name="TutorList" component={TutorList} />
      <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
      <Stack.Screen name="MyQuestionAnswer" component={MyQuestionAnswer} />
      <Stack.Screen name="RejectAnswer" component={RejectAnswer} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatFilter" component={ChatFilter} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
