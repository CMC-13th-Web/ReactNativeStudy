/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Home from './screens/home/Home';
import SplashScreen from 'react-native-splash-screen';

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

  return <Home />;
};

export default App;
