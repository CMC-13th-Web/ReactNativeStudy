/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import RootStack from 'screens/RootStack';
import requestPermissions from 'utils/Utils';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hide(), 2000);
    requestPermissions();
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
