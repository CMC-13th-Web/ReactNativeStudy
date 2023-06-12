import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import MainTab, {MainTabNavigationScreenParams} from './MainTab';
import DetailScreen from 'screens/DetailScreen';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MainTab}
        name="MainTab"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={DetailScreen}
        name="Detail"
        options={{
          title: '상세보기',
        }}
      />
    </Stack.Navigator>
  );
}
