import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import HomeStack from './src/components/HomeStack';

export default function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer >
    </RecoilRoot>
  );
}