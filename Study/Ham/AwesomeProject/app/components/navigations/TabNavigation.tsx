import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackNavigator,
  AlertStackNavigator,
  MessageStackNavigator,
  SearchStackNavigator,
} from '../navigations/StackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="LoginStack">
      <Tab.Screen
        name="홈"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          //   tabBarIcon: ({color, size}) => (
          //     <Icon name="home-outline" color={color} size={size} />
          //   ),
        }}
      />
      <Tab.Screen
        name="알림"
        component={AlertStackNavigator}
        options={{
          headerShown: false,
          //   tabBarIcon: ({color, size}) => (
          //     <Icon name="map-outline" color={color} size={size} />
          //   ),
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchStackNavigator}
        options={() => ({
          headerShown: false,
          //   tabBarIcon: ({color, size}) => (
          //     <Icon name="person-circle" color={color} size={size} />
          //   ),
        })}
      />
      <Tab.Screen
        name="메시지"
        component={MessageStackNavigator}
        options={() => ({
          headerShown: false,
          //   tabBarIcon: ({color, size}) => (
          //     <Icon name="person-circle" color={color} size={size} />
          //   ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
