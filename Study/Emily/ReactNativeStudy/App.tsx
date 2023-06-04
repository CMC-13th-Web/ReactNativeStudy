import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/components/BottomTab';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer >);
}