/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootStack from 'screens/RootStack';
import requestPermissions from 'utils/Utils';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hide(), 2000);
    requestPermissions();
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
