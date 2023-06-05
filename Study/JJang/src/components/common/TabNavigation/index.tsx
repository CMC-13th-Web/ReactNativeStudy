/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AlertScreen} from '../../../screens/alert';
import {MessageScreen} from '../../../screens/message';
import {SearchScreen} from '../../../screens/search';
import {StackNavigation} from '../StackNavigation/index';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={() => ({headerShown: false})}>
      <Tab.Screen
        name="홈"
        component={StackNavigation}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="알림"
        component={AlertScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="메시지"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color, size}) => (
            <Icon name="wechat" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
