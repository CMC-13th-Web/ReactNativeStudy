import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackNavigator,
  AlertStackNavigator,
  MessageStackNavigator,
  SearchStackNavigator,
} from '../navigations/StackNavigation';

import Icon from '../../assets/icons/icon-config';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FE8C46',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Alert"
        component={AlertStackNavigator}
        options={{
          title: '알림',

          tabBarIcon: ({color, size}) => (
            <Icon name="bell-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={() => ({
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Message"
        component={MessageStackNavigator}
        options={() => ({
          title: '메시지',
          tabBarIcon: ({color, size}) => (
            <Icon name="comment" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
