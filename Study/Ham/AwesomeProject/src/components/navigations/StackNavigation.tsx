import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeScreen from '../../screens/home';
import AlertScreen from '../../screens/alert';
import MessageScreen from '../../screens/message';
import SearchScreen from '../../screens/search';
import DetailScreen from '../../screens/detail';

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

const tabHiddenRoutes = ['Detail'];

const HomeStackNavigator = ({navigation, route}: any) => {
  useEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route) ?? '')) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: '홈',
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTitle: '상세보기',
        }}
      />
    </Stack.Navigator>
  );
};

const AlertStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <AlertStack.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{
          headerTitle: '알림',
        }}
      />
    </Stack.Navigator>
  );
};

const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <MessageStack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          headerTitle: '메시지',
        }}
      />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: '검색',
        }}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  AlertStackNavigator,
  MessageStackNavigator,
  SearchStackNavigator,
};
