import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from './types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from './Profile/ProfileScreen';
import FeedScreen from './Feed/FeedScreen';
import {View} from 'react-native';
import AddScreen from './Add/AddScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'white'},
        tabBarActiveTintColor: '#3834ff',
        headerTitleAlign: 'left',
        headerTintColor: '#3834ff',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: 'Add',
          tabBarIcon: ({size}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                borderRadius: 100,
                backgroundColor: '#3834ff',
                marginBottom: 24,
              }}>
              <MaterialIcons name="add" color="white" size={size} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'My Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
