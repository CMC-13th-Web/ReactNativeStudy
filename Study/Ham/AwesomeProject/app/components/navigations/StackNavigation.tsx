import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/home';
import AlertScreen from '../../screens/alert';
import MessageScreen from '../../screens/message';
import SearchScreen from '../../screens/search';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AlertStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'white',
  },
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <HomeStack.Screen name="홈" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AlertStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <AlertStack.Screen name="알림" component={AlertScreen} />
    </Stack.Navigator>
  );
};

const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <MessageStack.Screen name="메시지" component={MessageScreen} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <SearchStack.Screen name="검색" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  AlertStackNavigator,
  MessageStackNavigator,
  SearchStackNavigator,
};
