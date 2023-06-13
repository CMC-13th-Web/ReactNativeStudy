import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useCameraPermissions} from './hooks/useCameraPermissions';
import useOpenCamera from './hooks/useOpenCamera';
import useOpenGallery from './hooks/useOpenGallery';

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

  const check = useCameraPermissions({
    title: '카메라 권한 요청',
    message: '카메라 접근을 허용해주세요.',
    buttonPositive: '확인',
  });
  check.requestPermission();

  return (
    <View>
      <Button title="카메라로 설정하기" onPress={useOpenCamera} />
      <Button title="사진 선택하기" onPress={useOpenGallery} />
    </View>
  );
};

export default App;
