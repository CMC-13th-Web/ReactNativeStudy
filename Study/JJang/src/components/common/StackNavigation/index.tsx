import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../../screens/home';
import {DetailScreen} from '../../../screens/detail';

export type RootStackParamList = {
  Home: undefined;
  Detail: {id: number};
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
