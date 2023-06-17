/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Home from './screens/home/Home';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Movie from './screens/movie/Movie';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Home /> */}
      <Movie />
    </QueryClientProvider>
  );
};

export default App;
