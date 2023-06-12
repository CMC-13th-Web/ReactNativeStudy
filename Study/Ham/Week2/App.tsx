import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

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

  return (
    <View>
      <Text>텍스트</Text>
    </View>
  );
};

export default App;
