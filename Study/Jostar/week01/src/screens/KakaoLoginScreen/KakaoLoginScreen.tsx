import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import {
  KakaoOAuthToken,
  login,
  logout,
} from "@react-native-seoul/kakao-login";
import { kakaoLoginScreenStyles } from "./KakaoLoginScreen.style";
import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";

const KakaoLoginScreen = () => {
  const [loginCheck, setLoginCheck] = useState<boolean>(true);
  const signInWithKakao = () => {
    login().then((res) => {
      console.log(res);
      setLoginCheck(false);
    });
  };

  const signOutWithKakao = () => {
    logout().then((res) => {
      console.log(res);
      setLoginCheck(true);
    });
  };

  return (
    <View style={kakaoLoginScreenStyles.container}>
      {loginCheck ? (
        <ColorButton
          label={"로그인"}
          color={"yellow"}
          handleClick={signInWithKakao}
        />
      ) : (
        <ColorButton
          label={"로그아웃"}
          color={"gray"}
          handleClick={signOutWithKakao}
        />
      )}
    </View>
  );
};

export default KakaoLoginScreen;
