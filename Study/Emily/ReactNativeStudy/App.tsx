import React, { useEffect } from 'react';
import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import MainStack, { MainStackNavigationProp } from './src/navigations/MainStack';
import { BottomTabNavigationProp } from './src/navigations/BottomTab';

export type MainNavigationProp = CompositeNavigationProp<MainStackNavigationProp, BottomTabNavigationProp>

export default function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer >
    </RecoilRoot>
  );
}