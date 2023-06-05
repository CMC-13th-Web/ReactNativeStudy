import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AlertScreen} from '../../../screens/alert';
import {MessageScreen} from '../../../screens/message';
import {SearchScreen} from '../../../screens/search';
import {StackNavigation} from '../StackNavigation/index';

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
        }}
      />
      <Tab.Screen
        name="알림"
        component={AlertScreen}
        options={{
          title: '알림',
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          title: '검색',
        }}
      />
      <Tab.Screen
        name="메시지"
        component={MessageScreen}
        options={{
          title: '메시지',
        }}
      />
    </Tab.Navigator>
  );
};
