import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MainTabParamList} from './types';
import FeedScreen from './Feed/FeedScreen';
import AddScreen from './Add/AddScreen';
import MovieScreen from './Movie/MovieScreen';

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
        name="Movie"
        component={MovieScreen}
        options={{
          title: 'Movie',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="local-movies" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
