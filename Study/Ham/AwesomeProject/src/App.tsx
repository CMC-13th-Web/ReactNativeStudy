import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/navigations/TabNavigation';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
