import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/main/Home';
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
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyProfile from '../screen/main/drawer/MyProfile';
import MyAccount from '../screen/main/drawer/MyAccount';
import AboutUs from '../screen/main/drawer/AboutUs';
import PrivacyPolicy from '../screen/main/drawer/PrivacyPolicy';
import ContactUs from '../screen/main/drawer/ContactUs';
import TermsAndCondition from '../screen/main/drawer/TermsAndCondition';
import Setting from '../screen/main/drawer/Setting';
import HelpAndSupport from '../screen/main/drawer/HelpAndSupport';
import DrawerScreen from '../screen/main/drawer/DrawerScreen';
import InviteFriends from '../screen/main/drawer/InviteFriends';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={Props => <DrawerScreen {...Props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '80%',
          height: '100%',
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="DrawerStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />

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
    </Stack.Navigator>
  );
}
