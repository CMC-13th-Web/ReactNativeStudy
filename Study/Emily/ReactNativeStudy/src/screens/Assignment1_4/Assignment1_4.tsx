import { View } from 'react-native';
import React, { useState } from 'react';
import { login, logout } from '@react-native-seoul/kakao-login';
import { styles } from './Assignment1_4.style';
import KakaoButton from '../../components/UI/KakaoButton/KakaoButton';

export default function Assignment1_4() {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const signInWithKakao = async (): Promise<void> => {
    try {
      await login();
      setIsSignIn(true);
    } catch (err) {
      console.error('signIn err', err);
    }
  };

  const signOutWithKakao = async (): Promise<void> => {
    try {
      await logout();
      setIsSignIn(false);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <View style={styles.container}>
      {isSignIn ?
        <KakaoButton onPress={signOutWithKakao} text={'카카오 로그아웃'} /> :
        <KakaoButton onPress={signInWithKakao} text={'카카오 로그인'} />}
    </View>
  );
}