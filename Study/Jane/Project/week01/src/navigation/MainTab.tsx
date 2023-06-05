import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React from 'react';
import {RootStackNavigationProp} from './RootStack';
import SearchScreen from 'screens/SearchScreen';
import NotificationScreen from 'screens/NotificationScreen';
import MessageScreen from 'screens/MessageScreen';
import HomeScreen from 'screens/HomeScreen';

type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{title: '홈'}} />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{title: '검색'}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: '알림'}}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{title: '메시지'}}
      />
    </Tab.Navigator>
  );
}
