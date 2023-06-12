import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="홈" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;
