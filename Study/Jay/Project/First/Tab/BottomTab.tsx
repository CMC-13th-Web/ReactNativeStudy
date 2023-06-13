import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../Pages/home/HomeStackScreen';
import Counter from '../Pages/counter/Counter';
import SearchScreen from '../Pages/gallery/Gallery';
import MessagesScreen from '../Pages/message/MessagesScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        options={{
          title: '홈',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="계산기"
        component={Counter}
        options={{
          title: '계산기',
          tabBarIcon: ({color, size}) => (
            <Icon name="calculate" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="갤러리"
        component={SearchScreen}
        options={{
          title: '갤러리',
          tabBarIcon: ({color, size}) => (
            <Icon name="insert-photo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="메세지"
        component={MessagesScreen}
        options={{
          title: '메세지',
          tabBarIcon: ({color, size}) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
