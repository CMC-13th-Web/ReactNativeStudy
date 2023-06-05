import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../Pages/Home/HomeStackScreen';
import NotificationsScreen from '../Pages/Calculation/Calculation';
import SearchScreen from '../Pages/Search/SearchScreen';
import MessagesScreen from '../Pages/Message/MessagesScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'rgb(47, 124, 246)',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="홈"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="계산기" component={NotificationsScreen} />
      <Tab.Screen name="검색" component={SearchScreen} />
      <Tab.Screen name="메세지" component={MessagesScreen} />
    </Tab.Navigator>
  );
}
