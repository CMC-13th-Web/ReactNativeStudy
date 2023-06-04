import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/components/BottomTab';
import { RecoilRoot } from 'recoil';

export default function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer >
    </RecoilRoot>
  );
}