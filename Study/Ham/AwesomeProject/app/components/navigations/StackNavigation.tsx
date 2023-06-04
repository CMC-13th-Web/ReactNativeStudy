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
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AlertStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <AlertStack.Screen name="Alert" component={AlertScreen} />
    </Stack.Navigator>
  );
};

const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <MessageStack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  AlertStackNavigator,
  MessageStackNavigator,
  SearchStackNavigator,
};
