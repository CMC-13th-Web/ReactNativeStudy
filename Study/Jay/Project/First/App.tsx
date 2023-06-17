import React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './tab/BottomTab';
import DetailsScreen from './Pages/detail/DetailScreen';
import SplashScreen from 'react-native-splash-screen';

const RootStack = createStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Back"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="과제 1-2"
          component={DetailsScreen}
          options={{headerShown: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
