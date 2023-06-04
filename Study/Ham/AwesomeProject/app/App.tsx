import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/navigations/TabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
