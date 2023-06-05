import { View } from 'react-native';
import React, { useState } from 'react';
import { login, logout } from '@react-native-seoul/kakao-login';
import { styles } from './Assignment1_4_StyleSheet';
import KaKaoButton from '../../components/UI/KaKaoButton/KaKaoButton';

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
        <KaKaoButton onPress={signOutWithKakao} text={'카카오 로그아웃'} /> :
        <KaKaoButton onPress={signInWithKakao} text={'카카오 로그인'} />}
    </View>
  );
}