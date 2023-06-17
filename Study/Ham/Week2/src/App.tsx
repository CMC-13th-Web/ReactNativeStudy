import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from './pages/home';

const App = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000); //스플래시 활성화 시간 2초
    } catch (e: any) {
      console.log(e.message);
    }
  }, []);

  return <Home />;
};

export default App;
