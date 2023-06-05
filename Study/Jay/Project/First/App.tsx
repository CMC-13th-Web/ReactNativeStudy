import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './Tab/BottomTab';
import DetailsScreen from './Pages/Detail/DetailScreen';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Back"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="상세보기"
          component={DetailsScreen}
          options={{headerShown: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
