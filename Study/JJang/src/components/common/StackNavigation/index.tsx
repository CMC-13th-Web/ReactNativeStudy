import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../../screens/home';
import {DetailScreen} from '../../../screens/detail.tsx';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="홈" component={HomeScreen} />
      <Stack.Screen name="상세" component={DetailScreen} />
    </Stack.Navigator>
  );
};
